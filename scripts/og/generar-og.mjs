// Genera las imágenes para compartir: app/opengraph-image.png y app/nexo/opengraph-image.png.
//
// Uso, parado en la raíz del repo:   node scripts/og/generar-og.mjs
//
// ── POR QUÉ ESTÁN ARMADAS ASÍ (04/11/2026) ──────────────────────────────────
//
// Miden 1200×630, pero Instagram, en los mensajes privados, recorta la vista previa casi en
// cuadrado y por el centro. Con el texto alineado a la izquierda se perdía el principio de cada
// línea. Ahora todo el contenido —logo, título, bajada y dominio— va centrado adentro de una
// zona segura de 630×630 en el medio, así se lee entero recortada en cuadrado y también en
// horizontal. El dibujo de nodos queda de fondo, afuera de esa zona.
//
// El script mide en el navegador que cada elemento entre en la zona segura y, si alguno se sale,
// no guarda la imagen. Necesita Chrome instalado y conexión (Poppins sale de Google Fonts, la
// misma tipografía que usa el sitio).
import fs from 'node:fs'
import os from 'node:os'
import path from 'node:path'
import { execFileSync } from 'node:child_process'
import { fileURLToPath } from 'node:url'

const RAIZ = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..')
const CHROME = ['C:/Program Files/Google/Chrome/Application/chrome.exe', '/usr/bin/google-chrome', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome']
  .find(p => fs.existsSync(p))
if (!CHROME) throw new Error('No encontré Chrome para dibujar las imágenes.')

const ANCHO = 1200, ALTO = 630, ZONA = 630          // la zona segura: 630×630 en el medio
const MARGEN = 36                                    // aire adentro de la zona segura
const ICONO = fs.readFileSync(path.join(RAIZ, 'public', 'clovix-icon.svg'), 'utf8').replace(/<\?xml[^>]*>\s*/, '')

// El dibujo de nodos de fondo: el mismo de antes, a la derecha y más tenue.
const nodos = `
<svg class="nodos" viewBox="0 0 520 630" width="520" height="630" aria-hidden="true">
  <g stroke="#3B4A8C" stroke-width="10" stroke-linecap="round" opacity=".55">
    <line x1="290" y1="190" x2="210" y2="70"/><line x1="290" y1="190" x2="440" y2="80"/>
    <line x1="290" y1="190" x2="210" y2="300"/><line x1="290" y1="190" x2="470" y2="280"/>
    <line x1="210" y1="300" x2="290" y2="440"/><line x1="470" y1="280" x2="290" y2="440"/>
  </g>
  <g fill="#262B57" opacity=".85">
    <circle cx="210" cy="70" r="34"/><circle cx="440" cy="80" r="30"/><circle cx="210" cy="300" r="34"/>
    <circle cx="470" cy="280" r="34"/><circle cx="290" cy="440" r="34"/>
  </g>
  <circle cx="290" cy="190" r="80" fill="none" stroke="#262B57" stroke-width="26"/>
  <circle cx="290" cy="190" r="30" fill="#262B57"/>
</svg>`

const pagina = ({ marca, lineas, bajada, pie }) => `<!doctype html>
<html lang="es"><head><meta charset="utf-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=block" rel="stylesheet">
<style>
  * { margin: 0; padding: 0; box-sizing: border-box; }
  html, body { width: ${ANCHO}px; height: ${ALTO}px; overflow: hidden; }
  body {
    font-family: 'Poppins', sans-serif; color: #fff; position: relative;
    background:
      radial-gradient(620px 420px at 0% 0%, rgba(59,111,232,.38), transparent 70%),
      radial-gradient(560px 380px at 100% 0%, rgba(123,92,240,.30), transparent 70%),
      radial-gradient(700px 320px at 50% 115%, rgba(59,111,232,.12), transparent 70%),
      #0C0C18;
  }
  .nodos { position: absolute; right: -150px; top: -40px; }
  .zona {
    position: absolute; left: ${(ANCHO - ZONA) / 2}px; top: 0; width: ${ZONA}px; height: ${ALTO}px;
    padding: 0 ${MARGEN}px; display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center;
  }
  .marca { display: flex; align-items: center; gap: 14px; margin-bottom: 34px; }
  .marca svg { width: 46px; height: 46px; }
  .marca .nombre { font-size: 38px; font-weight: 500; letter-spacing: -.01em; line-height: 1; text-align: left; }
  .marca .producto { display: block; font-size: 22px; font-weight: 500; margin-top: 4px; }
  h1 { font-size: 46px; font-weight: 600; line-height: 1.14; letter-spacing: -.02em; }
  h1 span { display: block; white-space: nowrap; }
  .grad { background: linear-gradient(120deg, #6E93FF 0%, #A28BFF 100%); -webkit-background-clip: text; background-clip: text; color: transparent; }
  .bajada { margin-top: 24px; font-size: 21px; line-height: 1.45; color: #A3A7BA; }
  .bajada span { display: block; white-space: nowrap; }
  .pie { margin-top: 30px; font-size: 18px; color: #A3A7BA; display: flex; align-items: center; gap: 12px; white-space: nowrap; }
  .pie::before { content: ''; width: 7px; height: 7px; border-radius: 50%; background: #12B886; }
</style></head>
<body>
  ${nodos}
  <div class="zona">
    <div class="marca">${ICONO}<div class="nombre">Clovix${marca ? `<span class="producto grad">${marca}</span>` : ''}</div></div>
    <h1>${lineas.map(([t, g]) => `<span${g ? ' class="grad"' : ''}>${t}</span>`).join('')}</h1>
    <p class="bajada">${bajada.map(t => `<span>${t}</span>`).join('')}</p>
    <p class="pie">${pie}</p>
  </div>
  <script>
    // Cada elemento tiene que entrar en la zona segura, con su margen adentro: si Instagram recorta
    // un poco más que 630, no se come las puntas. El resultado queda en el título de la página.
    document.fonts.ready.then(() => {
      const izq = ${(ANCHO - ZONA) / 2 + MARGEN}, der = ${(ANCHO + ZONA) / 2 - MARGEN}
      const fuera = [...document.querySelectorAll('.marca, h1 span, .bajada span, .pie')]
        .map(e => e.getBoundingClientRect()).filter(r => r.left < izq + 1 || r.right > der - 1 || r.top < 0 || r.bottom > ${ALTO})
      const poppins = document.fonts.check('600 46px Poppins')
      document.title = 'MEDIDA:' + JSON.stringify({ fuera: fuera.length, poppins })
    })
  </script>
</body></html>`

const IMAGENES = [
  { salida: 'app/opengraph-image.png', marca: null,
    lineas: [['Software que gestiona.'], ['Inteligencia que fideliza.', true], ['Vínculos que duran.']],
    bajada: ['Proveedor de soluciones', 'de inteligencia artificial'],
    pie: 'clovix.app' },
  { salida: 'app/nexo/opengraph-image.png', marca: 'Nexo',
    lineas: [['La plataforma que'], ['conecta tu negocio', true], ['con tus clientes']],
    bajada: ['Turnos, WhatsApp, encuestas, fichas', 'y métricas en un solo lugar'],
    pie: '15 días gratis · sin tarjeta · clovix.app/nexo' },
]

const tmp = fs.mkdtempSync(path.join(os.tmpdir(), 'og-'))
const chrome = (...args) => execFileSync(CHROME, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--force-device-scale-factor=1',
  `--window-size=${ANCHO},${ALTO}`, '--virtual-time-budget=10000', ...args], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'ignore'] })

for (const img of IMAGENES) {
  const html = path.join(tmp, path.basename(path.dirname(img.salida)) + '.html')
  fs.writeFileSync(html, pagina(img))
  const url = 'file:///' + html.replace(/\\/g, '/')
  const dom = chrome('--dump-dom', url)
  const medida = JSON.parse(/MEDIDA:(\{[^<]*\})/.exec(dom)?.[1] ?? '{"fuera":-1,"poppins":false}')
  if (medida.fuera !== 0) throw new Error(`${img.salida}: ${medida.fuera === -1 ? 'no se pudo medir' : `${medida.fuera} elementos se salen de la zona segura`}; no se guarda`)
  if (!medida.poppins) throw new Error(`${img.salida}: no cargó Poppins (¿sin conexión?); no se guarda`)
  chrome(`--screenshot=${path.join(RAIZ, img.salida)}`, url)
  console.log(`${img.salida}: ${ANCHO}×${ALTO}, todo adentro de la zona segura de ${ZONA}×${ZONA}`)
}
fs.rmSync(tmp, { recursive: true, force: true })
