import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const SIGNUP_URL = "https://nexo.clovix.app/sign_up";
const LOGIN_URL = "https://nexo.clovix.app/login";

const preguntas = [
  {
    q: "¿Sabés qué pasa con tu cliente cuando no vuelve?",
    a: "Nexo detecta inactividad y te avisa antes de que el cliente elija a otro.",
  },
  {
    q: "¿Cuánto hace que no te visita?",
    a: "Sabés cuántos turnos tuvo, cuándo fue el último y qué servicio prefiere.",
  },
  {
    q: "¿Generaste algún vínculo real?",
    a: "Un recordatorio antes del turno, un mensaje después del servicio, una encuesta. Nexo lo hace solo.",
  },
  {
    q: "¿Cuánto tardás en coordinar un turno por WhatsApp?",
    a: "Con el portal de reservas, el cliente reserva solo. Sin idas y vueltas.",
  },
  {
    q: "¿Tus clientes te dicen cómo les fue?",
    a: "Nexo envía encuestas automáticas y registra cada respuesta.",
  },
  {
    q: "¿Sabés qué profesional tiene mejor calificación?",
    a: "Los datos de satisfacción por profesional están siempre disponibles.",
  },
];

const pilares = [
  {
    icon: "📅",
    title: "Conecta tu agenda con tus clientes",
    desc: "Turnos online, recordatorios automáticos por WhatsApp y mensajes post-servicio.",
  },
  {
    icon: "💬",
    title: "Conecta la experiencia con datos reales",
    desc: "Encuestas de satisfacción, calificación de profesionales y alertas en tiempo real.",
  },
  {
    icon: "📊",
    title: "Conecta tu negocio con la retención",
    desc: "CRM integrado, clientes en riesgo, campañas push y acciones automáticas.",
  },
];

const modulos = [
  {
    icon: "📅",
    title: "Agenda y turnos",
    desc: "Calendario por profesional, slots de 15 min, bloqueos y control total de tu agenda.",
  },
  {
    icon: "👥",
    title: "Gestión de clientes",
    desc: "Base de clientes, historial completo, clasificación y seguimiento de inactividad.",
  },
  {
    icon: "📱",
    title: "WhatsApp automático",
    desc: "Recordatorios pre-turno, mensajes post-servicio, encuestas y respuestas automáticas.",
  },
  {
    icon: "📋",
    title: "Ficha cosmiátrica",
    desc: "Historial clínico, sesiones, consentimientos, fotos comparativas e informes con IA.",
  },
  {
    icon: "📊",
    title: "Reportes y métricas",
    desc: "Dashboard en tiempo real, satisfacción, calificación de profesionales y control de turnos.",
  },
  {
    icon: "🌐",
    title: "Portal de reservas",
    desc: "Tus clientes reservan solos, 24/7, desde cualquier dispositivo.",
  },
  {
    icon: "💰",
    title: "Cobranzas y caja",
    desc: "Efectivo, transferencia y Mercado Pago. Señas, saldos y cierre de caja integrado.",
  },
  {
    icon: "📣",
    title: "Campañas push",
    desc: "Mensajes masivos por WhatsApp para clientes activos o en riesgo de abandono.",
  },
];

const iaFeatures = [
  "Comparativa de fotos entre sesiones para visualizar la evolución del tratamiento.",
  "Informe avanzado para el profesional con análisis clínico de cada paciente.",
  "Informe personalizado para el paciente comparando imágenes de distintas sesiones.",
  "Historial clínico completo con consentimientos y control de sesiones integrado.",
];

const planes = [
  {
    nombre: "Inicial",
    precio: "$80.000",
    destacado: false,
    limites: ["2 profesionales", "400 turnos/mes", "600 WhatsApp/mes", "10 informes IA"],
    incluye: [
      "Dashboard",
      "Turnos",
      "Clientes",
      "Fichas",
      "WhatsApp automático",
    ],
    noIncluye: ["CRM", "Campañas push", "Portal de reservas"],
  },
  {
    nombre: "Profesional",
    precio: "$120.000",
    destacado: true,
    limites: [
      "5 profesionales",
      "1200 turnos/mes",
      "3000 WhatsApp/mes",
      "200 push/mes",
      "50 informes IA",
    ],
    incluye: [
      "Todo lo de Inicial",
      "CRM",
      "Cobros",
      "Encuestas",
      "Campañas",
      "Calificación",
    ],
    noIncluye: ["Portal de reservas"],
  },
  {
    nombre: "Premium",
    precio: "$150.000",
    destacado: false,
    limites: [
      "10 profesionales",
      "2500 turnos/mes",
      "7000 WhatsApp/mes",
      "500 push/mes",
      "50 informes IA",
    ],
    incluye: ["Todo completo", "Portal de reservas público"],
    noIncluye: [],
  },
];

export default function NexoPage() {
  return (
    <div className="flex flex-col flex-1">
      <Nav breadcrumb="Clovix / Nexo" ctaHref={SIGNUP_URL} />

      {/* Hero Nexo */}
      <section className="bg-clovix-gray-light px-6 py-24">
        <div className="mx-auto flex max-w-4xl flex-col items-center text-center">
          <Image
            src="/clovix_nexo.svg"
            alt="Clovix Nexo"
            width={200}
            height={60}
            className="mb-6"
            priority
          />
          <h1 className="text-4xl font-bold tracking-tight text-clovix-black sm:text-5xl md:text-6xl">
            La plataforma que conecta tu negocio con tus clientes
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-clovix-gray-text">
            Turnos, WhatsApp, encuestas, fichas y métricas en un solo lugar.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <a
              href={SIGNUP_URL}
              className="rounded-full bg-clovix-blue px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-700"
            >
              Empezar gratis
            </a>
            <a
              href={LOGIN_URL}
              className="rounded-full border border-clovix-black/15 bg-white px-8 py-3.5 text-base font-semibold text-clovix-black transition-colors hover:bg-black/5"
            >
              Ya soy usuario
            </a>
          </div>
          <p className="mt-4 text-sm text-clovix-gray-text">
            15 días gratis · Sin tarjeta de crédito
          </p>
        </div>
      </section>

      {/* Preguntas */}
      <section className="bg-clovix-black px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl">
            Lo que tu negocio necesita saber
          </h2>
          <div className="mt-14 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {preguntas.map((p) => (
              <div
                key={p.q}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >
                <h3 className="text-lg font-semibold text-white">{p.q}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/60">{p.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cómo funciona */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-clovix-black sm:text-4xl">
            Cómo funciona
          </h2>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {pilares.map((p) => (
              <div key={p.title} className="text-center">
                <div className="text-4xl">{p.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-clovix-black">
                  {p.title}
                </h3>
                <p className="mt-3 text-clovix-gray-text">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Módulos */}
      <section className="bg-clovix-gray-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-clovix-black sm:text-4xl">
            Módulos
          </h2>
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {modulos.map((m) => (
              <div
                key={m.title}
                className="rounded-2xl bg-white p-6 shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="text-3xl">{m.icon}</div>
                <h3 className="mt-4 text-lg font-semibold text-clovix-black">
                  {m.title}
                </h3>
                <p className="mt-2 text-sm text-clovix-gray-text">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IA */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl rounded-3xl bg-clovix-black p-10 sm:p-14">
          <span className="rounded-full bg-clovix-violet/20 px-4 py-1.5 text-sm font-medium text-clovix-violet">
            Exclusivo para cosmiátras
          </span>
          <h2 className="mt-6 text-3xl font-bold text-white sm:text-4xl">
            Informes clínicos generados con inteligencia artificial
          </h2>
          <ul className="mt-8 space-y-4">
            {iaFeatures.map((f) => (
              <li key={f} className="flex items-start gap-3">
                <span className="mt-2 h-2 w-2 flex-shrink-0 rounded-full bg-clovix-violet" />
                <span className="text-white/80">{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Planes */}
      <section id="planes" className="bg-clovix-gray-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-clovix-black sm:text-4xl">
            Planes
          </h2>
          <div className="mt-14 grid gap-8 lg:grid-cols-3">
            {planes.map((plan) => (
              <div
                key={plan.nombre}
                className={`flex flex-col rounded-2xl bg-white p-8 ${
                  plan.destacado
                    ? "border-2 border-clovix-violet shadow-lg"
                    : "border border-black/5 shadow-sm"
                }`}
              >
                {plan.destacado && (
                  <span className="mb-4 w-fit rounded-full bg-clovix-violet px-3 py-1 text-xs font-semibold text-white">
                    Más elegido
                  </span>
                )}
                <h3 className="text-xl font-bold text-clovix-black">
                  {plan.nombre}
                </h3>
                <p className="mt-2 text-3xl font-bold text-clovix-black">
                  {plan.precio}
                  <span className="text-base font-normal text-clovix-gray-text">
                    /mes
                  </span>
                </p>
                <ul className="mt-6 space-y-2 text-sm text-clovix-gray-text">
                  {plan.limites.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
                <div className="mt-6 border-t border-black/5 pt-6">
                  <p className="text-sm font-semibold text-clovix-black">Incluye</p>
                  <ul className="mt-3 space-y-2">
                    {plan.incluye.map((i) => (
                      <li
                        key={i}
                        className="flex items-start gap-2 text-sm text-clovix-black"
                      >
                        <span className="text-clovix-blue">✓</span>
                        {i}
                      </li>
                    ))}
                  </ul>
                </div>
                {plan.noIncluye.length > 0 && (
                  <div className="mt-4">
                    <ul className="space-y-2">
                      {plan.noIncluye.map((i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-sm text-clovix-gray-text"
                        >
                          <span>✕</span>
                          {i}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="mt-8 flex flex-col gap-3">
                  <a
                    href={SIGNUP_URL}
                    className={`rounded-full px-6 py-3 text-center text-sm font-semibold transition-colors ${
                      plan.destacado
                        ? "bg-clovix-violet text-white hover:bg-violet-700"
                        : "bg-clovix-black text-white hover:bg-black/80"
                    }`}
                  >
                    Empezar gratis
                  </a>
                  <a
                    href={LOGIN_URL}
                    className="rounded-full border border-clovix-black/15 px-6 py-3 text-center text-sm font-semibold text-clovix-black transition-colors hover:bg-black/5"
                  >
                    Ya soy usuario
                  </a>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-10 text-center text-sm text-clovix-gray-text">
            Todos los planes incluyen 15 días gratis, sin tarjeta.
          </p>
        </div>
      </section>

      {/* CTA final */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-3xl rounded-3xl bg-clovix-blue px-6 py-16 text-center sm:px-14">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Tu negocio merece más que una agenda digital
          </h2>
          <p className="mt-4 text-lg text-white/85">
            Nexo es el sistema que trabaja mientras vos atendés. Probalo 15 días sin
            costo.
          </p>
          <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={SIGNUP_URL}
              className="rounded-full bg-white px-8 py-3.5 text-base font-semibold text-clovix-blue transition-colors hover:bg-white/90"
            >
              Empezar gratis
            </a>
            <a
              href={LOGIN_URL}
              className="rounded-full border border-white/40 px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-white/10"
            >
              Ya soy usuario
            </a>
          </div>
          <p className="mt-4 text-sm text-white/70">
            Sin tarjeta de crédito · 15 días gratis · Cancelás cuando querés
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
}
