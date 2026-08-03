import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Productos",
  description: "Los productos de Clovix: Nexo funcionando hoy, Contable en desarrollo y Analytics en camino, sobre la misma base de datos.",
  alternates: { canonical: "/soluciones" },
  openGraph: {
    title: "Productos",
    description: "Los productos de Clovix: Nexo funcionando hoy, Contable en desarrollo y Analytics en camino, sobre la misma base de datos.",
    url: "/soluciones",
    siteName: "Clovix",
    locale: "es_AR",
    type: "website",
  },
}

export default function Page() {
  return (
    <>
      <Nav items={[{ label: "El ecosistema", href: "#saas" }, { label: "Clovix Nexo", href: "/nexo" }, { label: "Contacto", href: "/#contacto" }]} crumb="Clovix / Productos" cta={{ href: "/#contacto", label: "Hablar con nosotros" }} />
      <section className="dark hero" style={{paddingBottom: 'clamp(56px,7vw,80px)'}}>
      <svg className="nodes a" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs><linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#3B6FE8"/><stop offset="1" stopColor="#7B5CF0"/></linearGradient></defs>
      <line x1="60.00" y1="21.00" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="40.50" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="79.50" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="99.00" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="79.50" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="40.50" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="42.80" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="51.40" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="68.60" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="60.00" y1="77.20" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="68.60" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="51.40" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><circle cx="60.00" cy="21.00" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="40.50" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="60.00" cy="99.00" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="40.50" r="7.4" fill="url(#ng)"/>
      <circle cx="60" cy="60" r="15" fill="none" stroke="url(#ng)" strokeWidth="5"/>
      <circle cx="60" cy="60" r="6" fill="url(#ng)"/></svg><svg className="nodes b" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs><linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#3B6FE8"/><stop offset="1" stopColor="#7B5CF0"/></linearGradient></defs>
      <line x1="60.00" y1="21.00" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="40.50" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="79.50" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="99.00" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="79.50" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="40.50" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="42.80" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="51.40" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="68.60" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="60.00" y1="77.20" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="68.60" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="51.40" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><circle cx="60.00" cy="21.00" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="40.50" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="60.00" cy="99.00" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="40.50" r="7.4" fill="url(#ng)"/>
      <circle cx="60" cy="60" r="15" fill="none" stroke="url(#ng)" strokeWidth="5"/>
      <circle cx="60" cy="60" r="6" fill="url(#ng)"/></svg>
      <div className="grid-lines"></div>
      <div className="wrap">
        <div className="hero-stack">
          <span className="badge-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg><em>SaaS Products</em><span className="sep">·</span>Productos Clovix</span>
          <h1>Un ecosistema que<br /><span className="grad-text">crece con tu negocio</span></h1>
          <p className="lead">Pensado para centros de estética, salones de belleza y todo negocio que atiende con turnos: la operación, la administración y los números sobre una sola base de datos, sin cambiar de sistema ni volver a capacitar al equipo.</p>
          <div className="hero-cta">
            <a href="#saas" className="btn btn-grad">Ver el ecosistema</a>
            <Link href="/nexo" className="btn btn-ghost">Conocer Nexo</Link>
          </div>
          <div className="rubros">
            <span>Centros de estética</span>
            <span>Salones de belleza</span>
            <span>Peluquerías</span>
            <span>Cosmiatría</span>
            <span>Consultorios</span>
            <span>Cualquier negocio de prestación de servicios que utilice turnos</span>
          </div>
        </div>
      </div>
      </section><section className="section" id="saas" style={{paddingTop: 'clamp(28px,3vw,34px)'}}>
      <div className="wrap">
        <div className="section-head rv" style={{marginBottom: '24px'}}>
          <span className="eyebrow">SaaS Products</span>
          <h2 style={{marginTop: '12px', fontSize: 'clamp(1.8rem,3vw,2.5rem)'}}>El ecosistema Clovix</h2>
          <p className="lead">Tres soluciones que comparten los mismos clientes, los mismos datos y la misma forma de trabajar.</p>
        </div>
        <div className="cards c3 tight">
          <div className="card prod rv">
            <span className="mark l-nexo" role="img" aria-label="Clovix Nexo"></span>
            <p>Turnos, clientes, fichas, cobros y automatización por WhatsApp. La operación completa de un negocio de servicios, con IA adentro.</p>
            <div className="prod-list"><span className="chip">Agenda</span><span className="chip">WhatsApp</span><span className="chip">Fichas</span><span className="chip">Cobros</span><span className="chip">IA</span></div>
            <div className="prod-foot">
              <Link href="/nexo" className="btn btn-ink btn-sm">Ver todo lo que hace</Link>
            </div>
          </div>
          <div className="card prod emerald rv">
            <span className="mark l-contable" role="img" aria-label="Clovix Contable"></span>
            <p>Facturación, libro de caja e impuestos que se alimentan de lo que ya pasó en la agenda. Sin volver a cargar un solo importe.</p>
            <div className="prod-list"><span className="chip">Facturación</span><span className="chip">Libro de caja</span><span className="chip">Impuestos</span><span className="chip">Conciliación</span></div>
            <div className="prod-foot"><Link href="/#contacto" className="btn btn-line btn-sm">Quiero saber más</Link></div>
          </div>
          <div className="card prod amber rv">
            <span className="mark l-analytics" role="img" aria-label="Clovix Analytics"></span>
            <p>Métricas avanzadas sobre los datos que el negocio ya genera: qué servicio sostiene la caja, qué cliente vuelve y qué mes conviene empujar.</p>
            <div className="prod-list"><span className="chip">Tableros</span><span className="chip">Cohortes</span><span className="chip">Proyecciones</span><span className="chip">Comparativas</span></div>
            <div className="prod-foot"><Link href="/#contacto" className="btn btn-line btn-sm">Quiero saber más</Link></div>
          </div>
        </div>
      </div>
      </section><section className="section">
      <div className="wrap">
        <div className="section-head rv">
          <span className="eyebrow">Cómo se suman</span>
          <h2 style={{marginTop: '16px'}}>Uno solo alcanza. Los tres se potencian.</h2>
          <p className="lead">No es una suite que se compra entera ni tres programas que hay que hacer hablar entre sí. Es una sola base sobre la que se van encendiendo piezas.</p>
        </div>
        <div className="cards c3">
          <div className="card rv"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg></div><h3>Una sola base de datos</h3>
            <p>El cliente, el turno y el cobro son el mismo dato. El día que sumás Contable no hay que migrar nada ni volver a cargar un solo importe: ya está ahí.</p></div>
          <div className="card rv"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg></div><h3>Se suman de a uno</h3>
            <p>Empezás por Nexo y el resto se activa cuando tu negocio lo pida. Sin cambiar de sistema, sin volver a capacitar al equipo y sin un proyecto de migración.</p></div>
          <div className="card rv"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div><h3>La misma IA adentro</h3>
            <p>Visión sobre imágenes, detección de patrones y generación de texto: la inteligencia es de la plataforma, no de un módulo, así que se aplica a todo lo que se sume.</p></div>
        </div>
      </div>
      </section><section className="section" style={{paddingTop: '0'}}>
      <div className="wrap">
        <div className="cta-box rv">
          <svg className="nodes a" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs><linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#3B6FE8"/><stop offset="1" stopColor="#7B5CF0"/></linearGradient></defs>
      <line x1="60.00" y1="21.00" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="40.50" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="79.50" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="99.00" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="79.50" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="40.50" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="42.80" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="51.40" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="68.60" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="60.00" y1="77.20" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="68.60" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="51.40" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><circle cx="60.00" cy="21.00" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="40.50" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="60.00" cy="99.00" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="40.50" r="7.4" fill="url(#ng)"/>
      <circle cx="60" cy="60" r="15" fill="none" stroke="url(#ng)" strokeWidth="5"/>
      <circle cx="60" cy="60" r="6" fill="url(#ng)"/></svg>
          <h2>Empecemos por Nexo</h2>
          <p className="slogan">Es el que ordena la operación desde el primer día: turnos, clientes y WhatsApp trabajando solos mientras vos atendés.</p>
          <div className="btns"><a href="https://nexo.clovix.app/sign_up" className="btn btn-white">Probar 15 días gratis</a><Link href="/#contacto" className="btn btn-ghost">Hablar con nosotros</Link></div>
        </div>
      </div>
      </section>
      <Footer />
    </>
  )
}
