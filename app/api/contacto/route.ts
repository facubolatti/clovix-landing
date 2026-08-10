/**
 * Las consultas del formulario de contacto de clovix.app.
 *
 * QUÉ HABÍA ANTES
 *
 * `ContactForm.tsx` validaba en el navegador, mostraba "¡Gracias! Recibimos tu
 * mensaje" y no mandaba nada a ningún lado. Peor que no tener formulario: la
 * persona se quedaba esperando una respuesta que nunca iba a llegar.
 *
 * POR QUÉ CAE EN TRES LUGARES
 *
 * La base es la que importa: es lo único que garantiza que nada se pierda
 * aunque nadie mire, y **es la única de las tres que puede hacer fallar el
 * envío**. El aviso por ntfy y el mail son para enterarse rápido; si alguno de
 * los dos falla se anota en el log y se sigue, porque el dato ya está guardado
 * y hacer fallar el formulario por eso obligaría a la persona a escribir todo
 * de nuevo para nada.
 *
 * LO QUE NO SE GUARDA
 *
 * La IP no: se guarda un hash con sal. Alcanza para frenar a alguien que manda
 * cien formularios seguidos y no deja registro de desde dónde se conectó cada
 * persona que consultó por un software.
 */

import nodemailer from 'nodemailer'

/**
 * La barra final se saca acá y no se confía en cómo esté cargada la variable.
 *
 * El 10/08, en la primera prueba, la URL venía con barra al final: la dirección
 * terminaba en `//leads` y PostgREST respondía 404 con `PGRST125 · Invalid path
 * specified in request URL`. Un error que no se ve mirando la variable, porque
 * a simple vista está bien escrita.
 */
const SUPABASE_URL = (process.env.SUPABASE_URL ?? '').replace(/\/+$/, '')
const SUPABASE_KEY = process.env.SUPABASE_SECRET_KEY ?? ''
const IP_SALT      = process.env.LEADS_IP_SALT ?? ''

const NTFY_URL     = process.env.NTFY_URL ?? 'https://ntfy.sh'
const NTFY_TOPIC   = process.env.NTFY_TOPIC ?? ''

const SMTP_HOST    = process.env.SMTP_HOST ?? 'smtp.zoho.com'
const SMTP_PORT    = Number(process.env.SMTP_PORT ?? 465)
const SMTP_USER    = process.env.SMTP_USER ?? ''
const SMTP_PASS    = process.env.SMTP_PASS ?? ''
const MAIL_TO      = process.env.LEADS_MAIL_TO ?? 'comercial@clovix.app'

/** Cuántas consultas se aceptan desde el mismo origen por hora. */
const TOPE_POR_HORA = 5

const INTERESES: Record<string, string> = {
  nexo:        'Clovix Nexo — turnos y fidelización',
  contable:    'Clovix Contable',
  analytics:   'Clovix Analytics',
  orientacion: 'Todavía no sabe, quiere orientación',
}

function limpio(v: unknown, max: number): string {
  return typeof v === 'string' ? v.trim().slice(0, max) : ''
}

/** Suficiente para descartar lo que claramente no es un mail. */
function pareceMail(v: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v)
}

async function hashIp(ip: string): Promise<string | null> {
  if (!ip || !IP_SALT) return null
  const datos = new TextEncoder().encode(`${IP_SALT}:${ip}`)
  const buf = await crypto.subtle.digest('SHA-256', datos)
  return Array.from(new Uint8Array(buf))
    .map(b => b.toString(16).padStart(2, '0'))
    .join('')
    .slice(0, 32)
}

function cabecerasSupabase() {
  return {
    apikey: SUPABASE_KEY,
    Authorization: `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
  }
}

/** ¿Este origen ya mandó demasiadas en la última hora? */
async function excedioElTope(ipHash: string | null): Promise<boolean> {
  if (!ipHash) return false
  const desde = new Date(Date.now() - 60 * 60 * 1000).toISOString()
  const url =
    `${SUPABASE_URL}/rest/v1/leads` +
    `?ip_hash=eq.${ipHash}&created_at=gte.${encodeURIComponent(desde)}` +
    `&select=id&limit=${TOPE_POR_HORA + 1}`

  try {
    const res = await fetch(url, { headers: cabecerasSupabase(), cache: 'no-store' })
    if (!res.ok) return false          // ante la duda, dejar pasar
    const filas = await res.json()
    return Array.isArray(filas) && filas.length >= TOPE_POR_HORA
  } catch {
    return false
  }
}

/** Aviso al teléfono. Best effort: si falla, el dato ya está guardado. */
async function avisarPorNtfy(lead: Record<string, string>) {
  if (!NTFY_TOPIC) return
  const cuerpo = [
    `${lead.nombre}${lead.negocio ? ` · ${lead.negocio}` : ''}`,
    `Interés: ${INTERESES[lead.interes] ?? lead.interes ?? '—'}`,
    `Mail: ${lead.email}`,
    lead.whatsapp ? `WhatsApp: ${lead.whatsapp}` : '',
    lead.mensaje ? `\n${lead.mensaje}` : '',
  ].filter(Boolean).join('\n')

  await fetch(`${NTFY_URL}/${NTFY_TOPIC}`, {
    method: 'POST',
    headers: {
      Title: 'Consulta nueva en clovix.app',
      Priority: 'high',
      Tags: 'inbox_tray',
    },
    body: cuerpo,
  })
}

/**
 * Mail a comercial@clovix.app por el SMTP de Zoho.
 *
 * Si faltan usuario o contraseña no se manda nada y no se rompe: el resto del
 * circuito —la base y el aviso al teléfono— sigue funcionando igual. Sirve
 * para poder publicar esto antes de tener las credenciales cargadas.
 */
async function avisarPorMail(lead: Record<string, string>) {
  if (!SMTP_USER || !SMTP_PASS) return

  const transporte = nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_PORT === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS },
  })

  const filas = [
    ['Nombre',   lead.nombre],
    ['Negocio',  lead.negocio],
    ['Email',    lead.email],
    ['WhatsApp', lead.whatsapp],
    ['Interés',  INTERESES[lead.interes] ?? lead.interes],
  ].filter(([, v]) => v)

  await transporte.sendMail({
    from: `"Clovix — web" <${SMTP_USER}>`,
    to: MAIL_TO,
    // Responder al mail lleva directo a la persona que consultó, sin tener que
    // copiar la dirección a mano.
    replyTo: lead.email,
    subject: `Consulta de ${lead.nombre}${lead.negocio ? ` (${lead.negocio})` : ''}`,
    text: [
      ...filas.map(([k, v]) => `${k}: ${v}`),
      '',
      lead.mensaje || '(sin mensaje)',
    ].join('\n'),
  })
}

export async function POST(request: Request) {
  let cuerpo: any
  try {
    cuerpo = await request.json()
  } catch {
    return Response.json({ error: 'Pedido inválido.' }, { status: 400 })
  }

  // Campo trampa. Está en el formulario, invisible para una persona; los
  // robots lo completan. Se responde que salió bien y no se escribe nada:
  // decirle que lo detectamos solo le enseña a evitarlo la próxima.
  if (limpio(cuerpo?.web, 200)) {
    return Response.json({ ok: true })
  }

  const nombre   = limpio(cuerpo?.nombre, 120)
  const email    = limpio(cuerpo?.email, 160)
  const negocio  = limpio(cuerpo?.negocio, 160)
  const whatsapp = limpio(cuerpo?.whatsapp, 40)
  const interes  = limpio(cuerpo?.interes, 40)
  const mensaje  = limpio(cuerpo?.mensaje, 2000)

  if (!nombre || !email) {
    return Response.json({ error: 'Falta tu nombre o tu email.' }, { status: 400 })
  }
  if (!pareceMail(email)) {
    return Response.json({ error: 'Revisá el email, no parece correcto.' }, { status: 400 })
  }

  if (!SUPABASE_URL || !SUPABASE_KEY) {
    console.error('[contacto] faltan SUPABASE_URL o SUPABASE_SECRET_KEY')
    return Response.json(
      { error: 'No pudimos recibir tu consulta. Escribinos a comercial@clovix.app.' },
      { status: 500 },
    )
  }

  const ip = (request.headers.get('x-forwarded-for') ?? '').split(',')[0]!.trim()
  const ipHash = await hashIp(ip)

  if (await excedioElTope(ipHash)) {
    return Response.json(
      { error: 'Ya recibimos varias consultas tuyas. Escribinos a comercial@clovix.app.' },
      { status: 429 },
    )
  }

  const lead = { nombre, negocio, email, whatsapp, interes, mensaje }

  // ─── Lo único que puede hacer fallar el envío ────────────────────────────
  const res = await fetch(`${SUPABASE_URL}/rest/v1/leads`, {
    method: 'POST',
    headers: { ...cabecerasSupabase(), Prefer: 'return=minimal' },
    body: JSON.stringify({ ...lead, origen: 'landing', ip_hash: ipHash }),
    cache: 'no-store',
  })

  if (!res.ok) {
    console.error('[contacto] no se pudo guardar:', res.status, await res.text())
    return Response.json(
      { error: 'No pudimos recibir tu consulta. Escribinos a comercial@clovix.app.' },
      { status: 500 },
    )
  }

  // ─── De acá para abajo, nada puede hacer fallar el envío ─────────────────
  const avisos = await Promise.allSettled([
    avisarPorNtfy(lead),
    avisarPorMail(lead),
  ])
  avisos.forEach((r, i) => {
    if (r.status === 'rejected') {
      console.error(`[contacto] aviso ${i === 0 ? 'ntfy' : 'mail'} falló:`, r.reason)
    }
  })

  return Response.json({ ok: true })
}
