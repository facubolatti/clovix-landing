import Image from "next/image";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const soluciones = [
  {
    logo: "/clovix_nexo.svg",
    nombre: "Clovix Nexo",
    desc: "Gestión de turnos, clientes y automatización WhatsApp para negocios de servicios.",
    href: "/nexo",
  },
  {
    logo: "/clovix_contable.svg",
    nombre: "Clovix Contable",
    desc: "Facturación, cobros y gestión contable integrada.",
    href: null,
  },
  {
    logo: "/clovix_analytics.svg",
    nombre: "Clovix Analytics",
    desc: "Métricas avanzadas y business intelligence para tu negocio.",
    href: null,
  },
];

const pilares = [
  {
    icon: "🔗",
    title: "Todo conectado",
    desc: "Una sola plataforma para todas las herramientas que necesitás.",
  },
  {
    icon: "🤖",
    title: "Automatización inteligente",
    desc: "Menos tiempo en tareas operativas, más tiempo para crecer.",
  },
  {
    icon: "📊",
    title: "Decisiones con datos",
    desc: "Métricas en tiempo real para gestionar con información.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      <Nav ctaHref="/nexo#planes" />

      {/* Hero */}
      <section className="bg-clovix-gray-light px-6 py-24">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col items-center text-center md:items-start md:text-left">
            <span className="mb-6 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-clovix-blue shadow-sm">
              Plataforma SaaS para negocios de servicios
            </span>
            <h1 className="text-4xl font-bold tracking-tight text-clovix-black sm:text-5xl md:text-6xl">
              La plataforma que conecta tu negocio con tus clientes
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-clovix-gray-text">
              Soluciones inteligentes para gestionar, automatizar y hacer crecer tu
              negocio de servicios.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a
                href="#soluciones"
                className="rounded-full bg-clovix-blue px-8 py-3.5 text-base font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Ver soluciones
              </a>
              <a
                href="#contacto"
                className="rounded-full border border-clovix-black/15 bg-white px-8 py-3.5 text-base font-semibold text-clovix-black transition-colors hover:bg-black/5"
              >
                Contactanos
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="/clovix_icon_final.svg"
              alt="Clovix"
              width={420}
              height={420}
              priority
            />
          </div>
        </div>
      </section>

      {/* Soluciones */}
      <section id="soluciones" className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-clovix-black sm:text-4xl">
            Soluciones
          </h2>
          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {soluciones.map((s) => (
              <div
                key={s.nombre}
                className="flex flex-col items-start rounded-2xl border border-black/5 bg-white p-8 shadow-sm"
              >
                <Image src={s.logo} alt={s.nombre} width={180} height={54} />
                <p className="mt-4 text-clovix-gray-text">{s.desc}</p>
                <div className="mt-6">
                  {s.href ? (
                    <Link
                      href={s.href}
                      className="rounded-full bg-clovix-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
                    >
                      Conocer más
                    </Link>
                  ) : (
                    <span className="rounded-full bg-clovix-gray-light px-4 py-1.5 text-sm font-medium text-clovix-gray-text">
                      Próximamente
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por qué Clovix */}
      <section id="por-que-clovix" className="bg-clovix-gray-light px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center text-3xl font-bold text-clovix-black sm:text-4xl">
            Por qué Clovix
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

      <Footer />
    </div>
  );
}
