import type { Metadata } from "next";
import Link from "next/link";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "El portfolio de Clovix: productos SaaS en producción y en desarrollo, y servicios profesionales de consultoría en inteligencia artificial.",
  alternates: { canonical: "/soluciones" },
  openGraph: {
    title: "Portfolio",
    description: "El portfolio de Clovix: productos SaaS en producción y en desarrollo, y servicios profesionales de consultoría en inteligencia artificial.",
    url: "/soluciones",
    siteName: "Clovix",
    locale: "es_AR",
    type: "website",
  },
}

export default function Page() {
  return (
    <>
      <Nav items={[{ label: "Productos SaaS", href: "#saas" }, { label: "Consultoría en IA", href: "#consulting" }, { label: "Clovix Nexo", href: "/nexo" }, { label: "Contacto", href: "/#contacto" }]} crumb="Clovix / Portfolio" cta={{ href: "/#contacto", label: "Hablar con nosotros" }} />
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
          <span className="badge-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg><em>Portfolio</em><span className="sep">·</span>Soluciones Clovix</span>
          <h1>Dos formas de<br /><span className="grad-text">trabajar con nosotros</span></h1>
          <p className="lead">Un producto que contratás y empezás a usar mañana, o un trabajo de análisis sobre tus propios datos. Muchos clientes terminan haciendo las dos cosas.</p>
          <div className="hero-cta">
            <a href="#saas" className="btn btn-grad">Productos SaaS</a>
            <a href="#consulting" className="btn btn-ghost">Consultoría en IA</a>
          </div>
        </div>
      </div>
      </section><section className="section" id="saas" style={{paddingTop: 'clamp(34px,3.5vw,40px)'}}>
      <div className="wrap">
        <div className="section-head rv" style={{marginBottom: '30px'}}>
          <span className="eyebrow">SaaS Products</span>
          <h2 style={{marginTop: '12px', fontSize: 'clamp(1.8rem,3vw,2.5rem)'}}>El ecosistema Clovix</h2>
          <p className="lead">Tres frentes del mismo negocio, sobre la misma base y la misma forma de trabajar.</p>
        </div>
        <div className="cards c3 tight">
          <div className="card prod rv">
            <span className="mark l-nexo" role="img" aria-label="Clovix Nexo"></span>
            <p>Turnos, clientes, fichas, cobros y automatización por WhatsApp. La operación completa de un negocio de servicios, con IA adentro.</p>
            <div className="prod-list"><span className="chip">Agenda</span><span className="chip">WhatsApp</span><span className="chip">Fichas</span><span className="chip">Cobros</span><span className="chip">IA</span></div>
            <div className="prod-foot">
              <Link href="/nexo" className="btn btn-ink btn-sm">Ver todo lo que hace</Link>
              <span className="tag live"><i className="dot-ok"></i> Disponible</span>
            </div>
          </div>
          <div className="card prod emerald rv">
            <span className="mark l-contable" role="img" aria-label="Clovix Contable"></span>
            <p>Facturación, libro de caja e impuestos que se alimentan de lo que ya pasó en la agenda. Sin volver a cargar un solo importe.</p>
            <div className="prod-list"><span className="chip">Facturación</span><span className="chip">Libro de caja</span><span className="chip">Impuestos</span><span className="chip">Conciliación</span></div>
            <div className="prod-foot"><span className="tag">En desarrollo</span><Link href="/#contacto" style={{fontSize: '.8rem', color: 'var(--blue)', fontWeight: '600'}}>Avisame cuando esté</Link></div>
          </div>
          <div className="card prod amber rv">
            <span className="mark l-analytics" role="img" aria-label="Clovix Analytics"></span>
            <p>Métricas avanzadas sobre los datos que el negocio ya genera: qué servicio sostiene la caja, qué cliente vuelve y qué mes conviene empujar.</p>
            <div className="prod-list"><span className="chip">Tableros</span><span className="chip">Cohortes</span><span className="chip">Proyecciones</span><span className="chip">Comparativas</span></div>
            <div className="prod-foot"><span className="tag">Próximamente</span><Link href="/#contacto" style={{fontSize: '.8rem', color: 'var(--blue)', fontWeight: '600'}}>Avisame cuando esté</Link></div>
          </div>
        </div>
      </div>
      </section><section className="section dark" id="consulting" style={{borderRadius: '34px', margin: '0 12px'}}>
      <svg className="nodes b" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs><linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#3B6FE8"/><stop offset="1" stopColor="#7B5CF0"/></linearGradient></defs>
      <line x1="60.00" y1="21.00" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="40.50" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="79.50" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="99.00" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="79.50" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="40.50" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="42.80" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="51.40" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="68.60" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="60.00" y1="77.20" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="68.60" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="51.40" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><circle cx="60.00" cy="21.00" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="40.50" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="60.00" cy="99.00" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="40.50" r="7.4" fill="url(#ng)"/>
      <circle cx="60" cy="60" r="15" fill="none" stroke="url(#ng)" strokeWidth="5"/>
      <circle cx="60" cy="60" r="6" fill="url(#ng)"/></svg>
      <div className="wrap">
        <div className="section-head rv">
          <span className="badge-pill"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5.5-5.5 2 2-5.5z"/></svg><em>AI Consulting</em><span className="sep">·</span>Consultoría en IA</span>
          <h2 style={{marginTop: '20px', color: '#fff'}}>Qué dicen tus datos sobre tu negocio</h2>
          <p className="lead">Servicios profesionales de análisis y diagnóstico. No un producto que contratás por mes: un trabajo sobre tu información para entender cómo evoluciona el negocio y qué está pasando con tus clientes.</p>
        </div>
        <div className="cards c4">
          <div className="card rv" style={{background: 'rgba(255,255,255,.045)', borderColor: 'rgba(255,255,255,.1)'}}>
            <div className="ico" style={{background: 'rgba(59,111,232,.18)', color: '#8FB0FF'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/></svg></div>
            <h3 style={{color: '#fff'}}>Diagnóstico</h3>
            <p style={{color: 'rgba(255,255,255,.6)'}}>Qué está pasando hoy: volumen real, estacionalidad, mix de servicios y de dónde sale la facturación.</p></div>
          <div className="card rv" style={{background: 'rgba(255,255,255,.045)', borderColor: 'rgba(255,255,255,.1)'}}>
            <div className="ico" style={{background: 'rgba(123,92,240,.18)', color: '#B9A5FF'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 20v-2a4 4 0 0 0-3-3.87"/></svg></div>
            <h3 style={{color: '#fff'}}>Evolución de la cartera</h3>
            <p style={{color: 'rgba(255,255,255,.6)'}}>Quién vuelve, quién se fue y cuándo. Retención por cohorte y valor de cada cliente en el tiempo.</p></div>
          <div className="card rv" style={{background: 'rgba(255,255,255,.045)', borderColor: 'rgba(255,255,255,.1)'}}>
            <div className="ico" style={{background: 'rgba(18,184,134,.18)', color: '#5DE0B4'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg></div>
            <h3 style={{color: '#fff'}}>Dónde aplicar IA</h3>
            <p style={{color: 'rgba(255,255,255,.6)'}}>Qué tareas de tu operación conviene automatizar, cuáles no, y qué se gana en cada caso.</p></div>
          <div className="card rv" style={{background: 'rgba(255,255,255,.045)', borderColor: 'rgba(255,255,255,.1)'}}>
            <div className="ico" style={{background: 'rgba(245,165,36,.18)', color: '#F8C46A'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="8" width="18" height="12" rx="3"/><path d="M12 8V4M8 2h8"/><circle cx="8.5" cy="14" r="1.2" fill="currentColor" stroke="none"/><circle cx="15.5" cy="14" r="1.2" fill="currentColor" stroke="none"/></svg></div>
            <h3 style={{color: '#fff'}}>Implementación</h3>
            <p style={{color: 'rgba(255,255,255,.6)'}}>Si el diagnóstico lo justifica, lo construimos: automatizaciones y modelos sobre tus sistemas o sobre Nexo.</p></div>
        </div>
        <div className="rv" style={{maxWidth: '820px', margin: '52px auto 0', textAlign: 'center', background: 'rgba(245,165,36,.1)', border: '1px solid rgba(245,165,36,.25)', borderRadius: '18px', padding: '26px 30px'}}>
          <p style={{color: '#F8C46A', fontWeight: '600', fontSize: '.92rem'}}>Todavía no es un servicio con precio de lista</p>
          <p className="lead" style={{fontSize: '.93rem', marginTop: '8px'}}>Estamos armando esta rama y trabajamos caso por caso. Si te interesa, escribinos y lo conversamos sin compromiso: primero entendemos si hace falta.</p>
          <Link href="/#contacto" className="btn btn-white" style={{marginTop: '22px'}}>Conversemos</Link>
        </div>
      </div>
      </section><section className="section">
      <div className="wrap">
        <div className="section-head rv">
          <span className="eyebrow">Por qué las dos cosas</span>
          <h2 style={{marginTop: '16px'}}>El producto ejecuta. El análisis explica.</h2>
          <p className="lead">Un sistema hace que las cosas pasen todos los días. Un diagnóstico dice si están pasando las correctas. Tenerlos del mismo lado es lo que hace que las decisiones lleguen al día siguiente y no al trimestre siguiente.</p>
        </div>
        <div className="cards c3">
          <div className="card rv"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/></svg></div><h3>Los datos ya están</h3>
            <p>Si el negocio usa Nexo, el análisis no arranca de cero ni depende de que alguien complete una planilla: la información ya está ordenada.</p></div>
          <div className="card rv"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none"/></svg></div><h3>Las conclusiones se aplican</h3>
            <p>Lo que el diagnóstico recomienda se puede implementar en el mismo sistema, sin pasar por un proveedor intermedio.</p></div>
          <div className="card rv"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></div><h3>Se mide después</h3>
            <p>Como la operación queda registrada, se puede ver si el cambio funcionó — que es la parte que casi ninguna consultoría llega a mostrar.</p></div>
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
          <h2>Empecemos por donde te sirva</h2>
          <p className="slogan">Podés probar Nexo hoy mismo, o escribirnos para mirar juntos qué dicen los datos de tu negocio.</p>
          <div className="btns"><a href="https://nexo.clovix.app/sign_up" className="btn btn-white">Probar Nexo 15 días gratis</a><Link href="/#contacto" className="btn btn-ghost">Hablar de consultoría</Link></div>
        </div>
      </div>
      </section>
      <Footer />
    </>
  )
}
