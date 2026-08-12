import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { NEXO_SIGNUP, NEXO_LOGIN } from "@/lib/urls";

export const metadata: Metadata = {
  title: "Clovix Nexo — Turnos, WhatsApp y fidelización",
  description: "Nexo es la solución SaaS de Clovix: gestión de turnos, automatización por WhatsApp, fidelización de clientes e inteligencia artificial en un solo lugar.",
  alternates: { canonical: "/nexo" },
  openGraph: {
    title: "Clovix Nexo — Turnos, WhatsApp y fidelización",
    description: "Nexo es la solución SaaS de Clovix: gestión de turnos, automatización por WhatsApp, fidelización de clientes e inteligencia artificial en un solo lugar.",
    url: "/nexo",
    siteName: "Clovix",
    locale: "es_AR",
    type: "website",
  },
}

export default function Page() {
  return (
    <>
      <Nav items={[{ label: "Módulos", href: "#modulos" }, { label: "Planes", href: "#planes" }, { label: "Preguntas", href: "#faq" }, { label: "Portfolio", href: "/soluciones" }]} crumb="Clovix / Portfolio / Nexo" cta={{ href: NEXO_SIGNUP, label: "Empezar gratis" }} extra={{ href: NEXO_LOGIN, label: "Ingresar" }} />
      <section className="dark hero">
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
      <div className="wrap wrap-wide hero-grid">
        <div>
          <span className="mark l-nexo-d" style={{width: '196px', height: '60px', marginBottom: '24px'}}></span>
          <h1>La plataforma que <span className="grad-text">conecta tu negocio</span> con tus clientes</h1>
          <p className="lead" style={{marginTop: '20px'}}>Turnos, WhatsApp, encuestas, fichas y métricas en un solo lugar. El sistema que trabaja mientras vos atendés.</p>
          <div className="hero-cta">
            <a href={NEXO_SIGNUP} className="btn btn-grad">Empezar gratis</a>
            <a href={NEXO_LOGIN} className="btn btn-ghost">Ya soy usuario</a>
          </div>
          <div className="hero-note">
            <span><i className="dot-ok"></i> 15 días gratis</span>
            <span><i className="dot-ok"></i> Sin tarjeta de crédito</span>
            <span><i className="dot-ok"></i> Cancelás cuando querés</span>
          </div>
        </div>
        <div className="stage">
          <div className="win">
            <div className="win-bar"><i></i><i></i><i></i><span className="win-url">nexo.clovix.app/turnos/agenda</span></div>
            <div className="app">
        <div className="app-rail"><span className="r-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l3.5-4 3 2.5L20 7"/></svg></span><span className="r-i on"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg></span><span className="r-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 20v-2a4 4 0 0 0-3-3.87"/></svg></span><span className="r-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5M9 13h6M9 17h4"/></svg></span><span className="r-i"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="3"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/></svg></span></div>
        <div className="app-main">
          <div className="app-top">
            <div><b>Agenda de la semana</b><span className="sub">28 jul – 1 ago · 5 profesionales</span></div>
            <div className="avs"><span className="av" style={{background: '#7B5CF0'}}>SM</span><span className="av" style={{background: '#3B6FE8'}}>JL</span><span className="av" style={{background: '#12B886'}}>RM</span><span className="av more">+2</span></div>
          </div>
          <div className="pillbar"><span className="on">Semana</span><span>Día</span><span>Mes</span><span>Todos los profesionales</span></div>
          <div className="cal"><div className="cal-h"></div><div className="cal-h"><em>lun</em><b>28</b></div><div className="cal-h"><em>mar</em><b>29</b></div><div className="cal-h"><em>mié</em><b>30</b></div><div className="cal-h today"><em>jue</em><b>31</b></div><div className="cal-h"><em>vie</em><b>01</b></div><div className="cal-t">09:00</div><div className="cal-c"><div className="ev v"><span className="tick" style={{background: '#D1FAE5', color: '#0d7a5b'}}>✓</span><b>Sofía R.</b><span>Color + corte</span></div></div><div className="cal-c"></div><div className="cal-c"><div className="ev p"><b>Rocío D.</b><span>Depilación</span></div></div><div className="cal-c"></div><div className="cal-c"><div className="ev a"><b>Lucía F.</b><span>Uñas gel</span></div></div><div className="cal-t">10:00</div><div className="cal-c"></div><div className="cal-c"><div className="ev e"><span className="tick" style={{background: '#D1FAE5', color: '#0d7a5b'}}>✓</span><b>Julia M.</b><span>Limpieza facial</span></div></div><div className="cal-c"></div><div className="cal-c"><div className="ev b"><span className="tick" style={{background: '#DCFCE7', color: '#128C7E'}}>◗</span><b>Carla V.</b><span>Diseño cejas</span></div></div><div className="cal-c"></div><div className="cal-t">11:00</div><div className="cal-c"><div className="ev b"><b>Ana P.</b><span>Manicura</span></div></div><div className="cal-c"></div><div className="cal-c"><div className="ev v"><span className="tick" style={{background: '#D1FAE5', color: '#0d7a5b'}}>✓</span><b>Malena T.</b><span>Brushing</span></div></div><div className="cal-c"><div className="ev e"><b>Inés G.</b><span>Peeling</span></div></div><div className="cal-c"></div><div className="cal-t">12:00</div><div className="cal-c"></div><div className="cal-c"><div className="ev a"><b>Belén C.</b><span>Lifting pestañas</span></div></div><div className="cal-c"></div><div className="cal-c"></div><div className="cal-c"><div className="ev v"><span className="tick" style={{background: '#D1FAE5', color: '#0d7a5b'}}>✓</span><b>Paula N.</b><span>Corte</span></div></div><div className="nowline" style={{top: 'calc(33px + 42px + 26px)'}}><em>11:20</em></div></div>
        </div>
      </div>
          </div>
          <div className="float f1">
            <div className="f-top"><span className="f-ico" style={{background: 'rgba(123,92,240,.12)', color: '#7B5CF0'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M13 5v14"/></svg></span>Cliente en riesgo</div>
            <div className="f-big" style={{fontSize: '1rem', lineHeight: '1.35'}}>3 meses sin volver</div>
            <div className="f-sub" style={{marginTop: '6px'}}>Nexo propone un cupón del 20%</div>
          </div>
          <div className="float f2">
            <div className="f-top"><span className="f-ico" style={{background: 'rgba(18,184,134,.12)', color: '#12B886'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M3 12h4M17 12h4M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg></span>Satisfacción</div>
            <div className="f-big">4,8<span style={{fontSize: '.9rem', color: 'var(--muted)'}}>/5</span></div>
            <div className="spark"><i style={{height: '60%'}}></i><i style={{height: '72%'}}></i><i style={{height: '66%'}}></i><i style={{height: '84%'}}></i><i style={{height: '78%'}}></i><i style={{height: '90%'}}></i><i style={{height: '88%'}}></i></div>
          </div>
        </div>
      </div>
      </section><section className="dark section" style={{borderRadius: '34px', margin: '0 12px'}}>
      <svg className="nodes b" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs><linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#3B6FE8"/><stop offset="1" stopColor="#7B5CF0"/></linearGradient></defs>
      <line x1="60.00" y1="21.00" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="40.50" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="79.50" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="99.00" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="79.50" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="40.50" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="42.80" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="51.40" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="68.60" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="60.00" y1="77.20" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="68.60" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="51.40" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><circle cx="60.00" cy="21.00" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="40.50" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="60.00" cy="99.00" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="40.50" r="7.4" fill="url(#ng)"/>
      <circle cx="60" cy="60" r="15" fill="none" stroke="url(#ng)" strokeWidth="5"/>
      <circle cx="60" cy="60" r="6" fill="url(#ng)"/></svg>
      <div className="wrap">
        <div className="section-head rv">
          <span className="eyebrow">Diagnóstico</span>
          <h2 style={{marginTop: '16px', color: '#fff'}}>Lo que tu negocio necesita saber</h2>
          <p className="lead">Tres sobre tus clientes y tres sobre tu operación. Casi ningún sistema de turnos las puede responder.</p>
        </div>
        <div className="rv" style={{margin: '0 0 20px'}}><span className="eyebrow">Sobre tus clientes</span></div>
        <div className="cards c3"><div className="card rv" style={{background: 'rgba(255,255,255,.045)', borderColor: 'rgba(255,255,255,.1)'}}><h3 style={{color: '#fff'}}>Tu clienta se fue. ¿Sabés por qué no volvió?</h3><p style={{color: 'rgba(255,255,255,.6)'}}>Nexo compara a cada cliente contra su propia frecuencia, no contra una regla igual para todos, y te avisa cuando empieza a espaciarse — antes de que elija a otro.</p></div><div className="card rv" style={{background: 'rgba(255,255,255,.045)', borderColor: 'rgba(255,255,255,.1)'}}><h3 style={{color: '#fff'}}>¿Cuánto hace que no te visita?</h3><p style={{color: 'rgba(255,255,255,.6)'}}>Cuántos turnos tuvo, cuándo fue el último, qué servicio prefiere y con qué profesional se atiende. Todo en su ficha, sin buscar en ningún cuaderno.</p></div><div className="card rv" style={{background: 'rgba(255,255,255,.045)', borderColor: 'rgba(255,255,255,.1)'}}><h3 style={{color: '#fff'}}>¿Generaste algún vínculo real, o solo atendiste un turno?</h3><p style={{color: 'rgba(255,255,255,.6)'}}>Un recordatorio antes del turno y un mensaje después del servicio, los dos por WhatsApp desde tu propio número. Y la encuesta le llega a la app del cliente, donde la responde y queda registrada en su ficha.</p></div></div>
        <div className="rv" style={{margin: '52px 0 20px'}}><span className="eyebrow">Puertas adentro</span></div>
        <div className="cards c3"><div className="card rv" style={{background: 'rgba(255,255,255,.045)', borderColor: 'rgba(255,255,255,.1)'}}><h3 style={{color: '#fff'}}>¿Cuánto tiempo se te va coordinando turnos por WhatsApp?</h3><p style={{color: 'rgba(255,255,255,.6)'}}>Con la app de tus clientes, reservan solos las 24 horas. Sin idas y vueltas y sin ocupar a nadie del mostrador.</p></div><div className="card rv" style={{background: 'rgba(255,255,255,.045)', borderColor: 'rgba(255,255,255,.1)'}}><h3 style={{color: '#fff'}}>¿Cuánto tardás en cerrar la caja y en saber si las transferencias entraron?</h3><p style={{color: 'rgba(255,255,255,.6)'}}>El cierre sale separado por método —efectivo, transferencia y Mercado Pago— con las señas y los saldos ya imputados, y cada transferencia queda tildada cuando la verificás contra el banco.</p></div><div className="card rv" style={{background: 'rgba(255,255,255,.045)', borderColor: 'rgba(255,255,255,.1)'}}><h3 style={{color: '#fff'}}>¿Sabés qué profesional tiene mejor calificación?</h3><p style={{color: 'rgba(255,255,255,.6)'}}>La satisfacción por profesional está siempre a la vista, con las respuestas de cada encuesta detrás del número.</p></div></div>
      </div>
      </section><section className="section">
      <div className="wrap">
        <div className="section-head rv">
          <span className="eyebrow">Cómo funciona</span>
          <h2 style={{marginTop: '16px'}}>Tres conexiones que cambian el día</h2>
        </div>
        <div className="cards c3">
          <div className="card rv"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg></div><h3>Conecta tu agenda con tus clientes</h3>
            <p>Turnos online, recordatorios automáticos por WhatsApp y mensajes post-servicio.</p></div>
          <div className="card rv"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.7A8.4 8.4 0 1 1 21 11.5z"/></svg></div><h3>Conecta la experiencia con datos reales</h3>
            <p>Encuestas de satisfacción, calificación de profesionales y alertas en tiempo real.</p></div>
          <div className="card rv"><div className="ico"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l3.5-4 3 2.5L20 7"/></svg></div><h3>Conecta tu negocio con la retención</h3>
            <p>CRM integrado, clientes en riesgo, campañas push y acciones automáticas.</p></div>
        </div>
      </div>
      </section><section className="section" style={{paddingTop: '0'}}>
      <div className="wrap">
        <div className="hero-grid" style={{alignItems: 'center'}}>
          <div className="rv">
            <span className="eyebrow">WhatsApp</span>
            <h2 style={{marginTop: '16px'}}>Lo que tu cliente no ve, pero siente</h2>
            <p className="lead" style={{marginTop: '18px'}}>Detrás de un recordatorio que llega a tiempo hay una agenda, una ficha, un historial y una automatización que nadie tuvo que apretar.</p>
            <div style={{marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '20px'}}>
              <div style={{display: 'flex', gap: '14px', alignItems: 'flex-start'}}>
                <span className="f-ico" style={{background: 'rgba(59,111,232,.1)', color: '#3B6FE8', width: '34px', height: '34px'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/></svg></span>
                <div><b style={{fontSize: '.96rem'}}>El día antes</b><p className="lead" style={{fontSize: '.9rem', marginTop: '3px'}}>Sale el recordatorio desde tu propia línea recordándole el turno y sus recomendaciones.</p></div>
              </div>
              <div style={{display: 'flex', gap: '14px', alignItems: 'flex-start'}}>
                <span className="f-ico" style={{background: 'rgba(123,92,240,.1)', color: '#7B5CF0', width: '34px', height: '34px'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8a6 6 0 1 0-12 0c0 7-3 8-3 8h18s-3-1-3-8"/><path d="M13.7 21a2 2 0 0 1-3.4 0"/></svg></span>
                <div><b style={{fontSize: '.96rem'}}>Después del servicio</b><p className="lead" style={{fontSize: '.9rem', marginTop: '3px'}}>Llega la encuesta y la respuesta queda guardada en su ficha.</p></div>
              </div>
              <div style={{display: 'flex', gap: '14px', alignItems: 'flex-start'}}>
                <span className="f-ico" style={{background: 'rgba(18,184,134,.1)', color: '#12B886', width: '34px', height: '34px'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z"/><path d="M13 5v14"/></svg></span>
                <div><b style={{fontSize: '.96rem'}}>Cuando deja de venir</b><p className="lead" style={{fontSize: '.9rem', marginTop: '3px'}}>El sistema lo detecta y propone un cupón antes de que elija a otro.</p></div>
              </div>
            </div>
          </div>
          <div className="stage win-flat rv">
            <div className="win" style={{boxShadow: 'var(--shadow-lg)'}}>
              <div className="win-bar"><i></i><i></i><i></i><span className="win-url">Recordatorio automático · 24 h antes</span></div>
              <div style={{background: '#ECE5DD', padding: '14px', display: 'flex', flexDirection: 'column', gap: '9px'}}>
      <div style={{maxWidth: '82%', padding: '8px 11px', borderRadius: '12px', borderTopRightRadius: '3px', fontSize: '.72rem', lineHeight: '1.45', background: '#D9FDD3', alignSelf: 'flex-end', boxShadow: '0 1px 1px rgba(0,0,0,.08)'}}>Hola Sofía 👋 Te recordamos tu turno de mañana a las 10:00 con Malena.<br />Respondé <b>1</b> para confirmar o <b>2</b> para reprogramar.<span style={{display: 'block', fontSize: '.58rem', color: '#8696A0', textAlign: 'right', marginTop: '3px'}}>09:02 ✓✓</span></div>
      <div style={{maxWidth: '82%', padding: '8px 11px', borderRadius: '12px', borderTopLeftRadius: '3px', fontSize: '.72rem', background: '#fff', alignSelf: 'flex-start', boxShadow: '0 1px 1px rgba(0,0,0,.08)'}}>1<span style={{display: 'block', fontSize: '.58rem', color: '#8696A0', textAlign: 'right', marginTop: '3px'}}>09:14</span></div>
      <div style={{maxWidth: '82%', padding: '8px 11px', borderRadius: '12px', borderTopRightRadius: '3px', fontSize: '.72rem', background: '#D9FDD3', alignSelf: 'flex-end', boxShadow: '0 1px 1px rgba(0,0,0,.08)'}}>¡Listo! Turno confirmado ✅ Te esperamos.<span style={{display: 'block', fontSize: '.58rem', color: '#8696A0', textAlign: 'right', marginTop: '3px'}}>09:14 ✓✓</span></div>
      <div style={{maxWidth: '82%', padding: '8px 11px', borderRadius: '12px', borderTopLeftRadius: '3px', fontSize: '.72rem', background: '#fff', alignSelf: 'flex-start', boxShadow: '0 1px 1px rgba(0,0,0,.08)'}}>Gracias! Se puede pagar con transferencia?<span style={{display: 'block', fontSize: '.58rem', color: '#8696A0', textAlign: 'right', marginTop: '3px'}}>09:15</span></div>
      <div style={{maxWidth: '82%', padding: '8px 11px', borderRadius: '12px', borderTopRightRadius: '3px', fontSize: '.72rem', background: '#D9FDD3', alignSelf: 'flex-end', boxShadow: '0 1px 1px rgba(0,0,0,.08)'}}>Sí. Te dejamos el alias al confirmar la seña 💳<span style={{display: 'block', fontSize: '.58rem', color: '#8696A0', textAlign: 'right', marginTop: '3px'}}>09:15 ✓✓</span></div>
      </div>
            </div>
          </div>
        </div>
      </div>
      </section><section className="section" id="modulos" style={{background: 'var(--mist)'}}>
      <div className="wrap">
        <div className="section-head rv">
          <span className="eyebrow">Módulos</span>
          <h2 style={{marginTop: '16px'}}>Todo lo que hace falta, en un solo lugar</h2>
          <p className="lead">Ocho módulos que comparten los mismos clientes, los mismos turnos y la misma historia.</p>
        </div>
        <div className="cards c4"><div className="card rv" style={{padding: '26px'}}><div className="ico" style={{width: '40px', height: '40px', borderRadius: '11px', marginBottom: '15px'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="5" width="18" height="16" rx="3"/><path d="M3 10h18M8 3v4M16 3v4"/></svg></div><h3 style={{fontSize: '1.02rem'}}>Agenda y turnos</h3><p style={{fontSize: '.87rem'}}>Calendario por profesional, slots de 15 min, bloqueos y control total de tu agenda.</p></div><div className="card rv" style={{padding: '26px'}}><div className="ico" style={{width: '40px', height: '40px', borderRadius: '11px', marginBottom: '15px'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M16 20v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 20v-2a4 4 0 0 0-3-3.87"/></svg></div><h3 style={{fontSize: '1.02rem'}}>Gestión de clientes</h3><p style={{fontSize: '.87rem'}}>Base de clientes, historial completo, clasificación y seguimiento de inactividad.</p></div><div className="card rv" style={{padding: '26px'}}><div className="ico" style={{width: '40px', height: '40px', borderRadius: '11px', marginBottom: '15px'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.4 8.4 0 0 1-12.3 7.5L3 21l2-5.7A8.4 8.4 0 1 1 21 11.5z"/></svg></div><h3 style={{fontSize: '1.02rem'}}>WhatsApp automático</h3><p style={{fontSize: '.87rem'}}>Recordatorios pre-turno, mensajes post-servicio y respuestas automáticas, desde tu propio número.</p></div><div className="card rv" style={{padding: '26px'}}><div className="ico" style={{width: '40px', height: '40px', borderRadius: '11px', marginBottom: '15px'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M14 2H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7z"/><path d="M14 2v5h5M9 13h6M9 17h4"/></svg></div><h3 style={{fontSize: '1.02rem'}}>Ficha cosmiátrica</h3><p style={{fontSize: '.87rem'}}>Historial clínico, sesiones, consentimientos, fotos comparativas e informes con IA.</p></div><div className="card rv" style={{padding: '26px'}}><div className="ico" style={{width: '40px', height: '40px', borderRadius: '11px', marginBottom: '15px'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 15l3.5-4 3 2.5L20 7"/></svg></div><h3 style={{fontSize: '1.02rem'}}>Reportes y métricas</h3><p style={{fontSize: '.87rem'}}>Dashboard en tiempo real, satisfacción, calificación de profesionales y control de turnos.</p></div><div className="card rv" style={{padding: '26px'}}><div className="ico" style={{width: '40px', height: '40px', borderRadius: '11px', marginBottom: '15px'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10.5 18.5h3"/></svg></div><h3 style={{fontSize: '1.02rem'}}>App del cliente</h3><p style={{fontSize: '.87rem'}}>Reservan solos las 24 horas, ven sus turnos y sus cupones, y responden las encuestas desde el celular.</p></div><div className="card rv" style={{padding: '26px'}}><div className="ico" style={{width: '40px', height: '40px', borderRadius: '11px', marginBottom: '15px'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="6" width="20" height="12" rx="3"/><circle cx="12" cy="12" r="2.5"/><path d="M6 12h.01M18 12h.01"/></svg></div><h3 style={{fontSize: '1.02rem'}}>Cobranzas y caja</h3><p style={{fontSize: '.87rem'}}>Efectivo, transferencia y Mercado Pago. Señas, saldos y cierre de caja integrado.</p></div><div className="card rv" style={{padding: '26px'}}><div className="ico" style={{width: '40px', height: '40px', borderRadius: '11px', marginBottom: '15px'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M22 2 11 13M22 2l-7 20-4-9-9-4z"/></svg></div><h3 style={{fontSize: '1.02rem'}}>Campañas push</h3><p style={{fontSize: '.87rem'}}>Mensajes masivos por WhatsApp para clientes activos o en riesgo de abandono.</p></div></div>
      </div>
      </section><section className="section" style={{paddingBottom: '0'}}>
      <div className="wrap">
        <div className="dark rv" style={{borderRadius: '30px', padding: 'clamp(38px,5vw,62px)'}}>
          <svg className="nodes a" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs><linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#3B6FE8"/><stop offset="1" stopColor="#7B5CF0"/></linearGradient></defs>
      <line x1="60.00" y1="21.00" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="40.50" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="79.50" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="99.00" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="79.50" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="40.50" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="42.80" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="51.40" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="68.60" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="60.00" y1="77.20" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="68.60" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="51.40" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><circle cx="60.00" cy="21.00" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="40.50" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="60.00" cy="99.00" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="40.50" r="7.4" fill="url(#ng)"/>
      <circle cx="60" cy="60" r="15" fill="none" stroke="url(#ng)" strokeWidth="5"/>
      <circle cx="60" cy="60" r="6" fill="url(#ng)"/></svg>
          <div className="hero-grid" style={{alignItems: 'center'}}>
            <div>
              <span className="badge-pill" style={{background: 'rgba(123,92,240,.2)', borderColor: 'rgba(123,92,240,.4)'}}><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"><path d="M12 3v4M12 17v4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M3 12h4M17 12h4M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></svg> Exclusivo para cosmiatras</span>
              <h2 style={{marginTop: '22px', color: '#fff'}}>Informes clínicos generados con inteligencia artificial</h2>
              <ul style={{listStyle: 'none', marginTop: '26px', display: 'flex', flexDirection: 'column', gap: '15px'}}><li style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}><span style={{width: '7px', height: '7px', borderRadius: '99px', background: '#B9A5FF', marginTop: '9px', flexShrink: '0'}}></span><span style={{color: 'rgba(255,255,255,.82)'}}>Comparativa de fotos entre sesiones para visualizar la evolución del tratamiento.</span></li><li style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}><span style={{width: '7px', height: '7px', borderRadius: '99px', background: '#B9A5FF', marginTop: '9px', flexShrink: '0'}}></span><span style={{color: 'rgba(255,255,255,.82)'}}>Informe avanzado para el profesional con análisis clínico de cada paciente.</span></li><li style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}><span style={{width: '7px', height: '7px', borderRadius: '99px', background: '#B9A5FF', marginTop: '9px', flexShrink: '0'}}></span><span style={{color: 'rgba(255,255,255,.82)'}}>Informe personalizado para el paciente comparando imágenes de distintas sesiones.</span></li><li style={{display: 'flex', gap: '12px', alignItems: 'flex-start'}}><span style={{width: '7px', height: '7px', borderRadius: '99px', background: '#B9A5FF', marginTop: '9px', flexShrink: '0'}}></span><span style={{color: 'rgba(255,255,255,.82)'}}>Historial clínico completo con consentimientos y control de sesiones integrado.</span></li></ul>
            </div>
            <div className="stage win-flat">
              <div className="win">
                <div className="win-bar"><i></i><i></i><i></i><span className="win-url">Ficha · Sesión 1 vs Sesión 6</span></div>
                <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2px', background: 'var(--line)'}}>
                  <div style={{background: 'linear-gradient(145deg,#E8DFF5,#D6C7EC)', aspectRatio: '3/4', display: 'grid', placeItems: 'center', color: '#7B5CF0', fontSize: '.7rem', fontWeight: '600'}}>Sesión 1</div>
                  <div style={{background: 'linear-gradient(145deg,#DDE9FB,#C3D8F7)', aspectRatio: '3/4', display: 'grid', placeItems: 'center', color: '#3B6FE8', fontSize: '.7rem', fontWeight: '600'}}>Sesión 6</div>
                </div>
                <div style={{padding: '16px 18px', background: '#fff'}}>
                  <div style={{fontSize: '.72rem', color: 'var(--muted)', fontWeight: '600', letterSpacing: '.08em', textTransform: 'uppercase'}}>Informe IA</div>
                  <p style={{fontSize: '.8rem', color: 'var(--muted)', marginTop: '8px', lineHeight: '1.5'}}>Mejora visible en textura y uniformidad del tono. Se sugiere continuar el esquema y espaciar las sesiones a 21 días.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </section><section className="section" id="planes">
      <div className="wrap">
        <div className="section-head rv">
          <span className="eyebrow">Planes</span>
          <h2 style={{marginTop: '16px'}}>Todo Nexo, en los cuatro planes</h2>
          <p className="lead">Lo que cambia es cuánto lo usás. Quince días gratis, sin tarjeta, y cambiás de plan cuando tu negocio lo pida.</p>
        </div>

        <div className="incluye rv">
          <h3>Lo que incluye cualquier plan</h3>
          <div className="incluye-grid">
            <span>Agenda y turnos, con bloqueos y varias profesionales</span>
            <span>Clientes, con estados e historial</span>
            <span>Ficha cosmiátrica, sesiones y consentimientos</span>
            <span>Servicios y profesionales</span>
            <span>Cobros con señas y cierre de caja por método</span>
            <span>Reportes</span>
            <span>Recordatorios automáticos por WhatsApp</span>
            <span>Sugerencias de cupones con inteligencia artificial</span>
            <span>La app del cliente con el nombre, el logo y el color de tu centro</span>
            <span>Cero comisión: cobrás en tu propia cuenta de Mercado Pago</span>
          </div>
        </div>

        <div className="plans"><div className="plan  rv">
        <h3>Independiente</h3>
        <div className="price">$55.000<small>/mes</small></div>
        <div className="plan-cap">Para la que atiende sola</div>
        <div className="plan-destacado">Incluye la ficha cosmiátrica completa</div>
        <div className="plan-lim"><span className="chip">1 profesional</span><span className="chip">250 turnos/mes</span><span className="chip">700 notificaciones/mes</span></div>
        <a href={NEXO_SIGNUP} className="btn btn-ink">Empezar gratis</a>
      </div><div className="plan  rv">
        <h3>Inicial</h3>
        <div className="price">$85.000<small>/mes</small></div>
        <div className="plan-cap">El centro que dejó de ser una persona</div>
        <div className="plan-destacado">Suma encuestas y campañas push</div>
        <div className="plan-lim"><span className="chip">3 profesionales</span><span className="chip">500 turnos/mes</span><span className="chip">2.000 notificaciones/mes</span></div>
        <a href={NEXO_SIGNUP} className="btn btn-ink">Empezar gratis</a>
      </div><div className="plan top rv"><span className="plan-flag">Más elegido</span>
        <h3>Profesional</h3>
        <div className="price">$120.000<small>/mes</small></div>
        <div className="plan-cap">El centro con equipo armado</div>
        <div className="plan-destacado">El doble de cupos, para un equipo de seis</div>
        <div className="plan-lim"><span className="chip">6 profesionales</span><span className="chip">1.500 turnos/mes</span><span className="chip">4.000 notificaciones/mes</span></div>
        <a href={NEXO_SIGNUP} className="btn btn-grad">Empezar gratis</a>
      </div><div className="plan  rv">
        <h3>Premium</h3>
        <div className="price">$160.000<small>/mes</small></div>
        <div className="plan-cap">El centro grande o con foco clínico</div>
        <div className="plan-destacado">Dos sedes incluidas y turnos sin tope</div>
        <div className="plan-lim"><span className="chip">12 profesionales</span><span className="chip">turnos sin tope</span><span className="chip">8.000 notificaciones/mes</span></div>
        <a href={NEXO_SIGNUP} className="btn btn-ink">Empezar gratis</a>
      </div></div>

        <div className="tabla-wrap rv">
          <table className="cmp">
            <thead>
              <tr><th>Lo que cambia</th><th>Independiente</th><th>Inicial</th><th>Profesional</th><th>Premium</th></tr>
            </thead>
            <tbody>
              <tr><td>Profesionales</td><td>1</td><td>3</td><td>6</td><td>12</td></tr>
              <tr><td>Turnos por mes</td><td>250</td><td>500</td><td>1.500</td><td>sin tope</td></tr>
              <tr><td>Sedes incluidas</td><td>1</td><td>1</td><td>1</td><td>2</td></tr>
              <tr><td>Notificaciones por mes <span style={{opacity:.6}}>(WhatsApp o app)</span></td><td>700</td><td>2.000</td><td>4.000</td><td>8.000</td></tr>
              <tr><td>Sugerencias de cupones con IA</td><td>50</td><td>200</td><td>400</td><td>1.500</td></tr>
              <tr><td>Informes de cosmiatría con IA</td><td>5</td><td>10</td><td>25</td><td>50</td></tr>
              <tr><td>Campañas push por mes</td><td>—</td><td>1.000</td><td>2.000</td><td>6.000</td></tr>
              <tr><td>Encuestas de satisfacción</td><td>—</td><td>sí</td><td>sí</td><td>sí</td></tr>
              <tr><td>Soporte prioritario</td><td>—</td><td>sí</td><td>sí</td><td>sí</td></tr>
            </tbody>
          </table>
        </div>

        <div className="planes-pie rv">
          <p><strong>¿Qué cuenta como notificación?</strong> Cada aviso que le llega a tu clienta: el recordatorio antes del turno, el mensaje después del servicio y los cupones. Da igual si sale por WhatsApp o como notificación a la app — si tiene la app instalada le llega por ahí, que es más rápido y no depende del canal de WhatsApp.</p>
          <p><strong>¿Más de una sede?</strong> Cualquier plan suma sucursales: la primera adicional se cobra al 80% del plan y cada una desde la tercera, al 75%.</p>
          <p><strong>Quince días gratis, sin tarjeta.</strong> No pedimos datos de pago para empezar y podés dar de baja cuando quieras, sin permanencia.</p>
          <p><strong>Precios vigentes a agosto de 2026.</strong> Los ajustes se avisan con treinta días de anticipación, rigen desde el período siguiente y nunca son retroactivos.</p>
        </div>
      </div>
      </section><section className="section" id="faq" style={{background: 'var(--mist)'}}>
      <div className="wrap">
        <div className="section-head rv">
          <span className="eyebrow">Preguntas</span>
          <h2 style={{marginTop: '16px'}}>Lo que todos preguntan antes de empezar</h2>
        </div>
        <div className="cards c2"><div className="card rv" style={{padding: '26px'}}><h3 style={{fontSize: '1rem'}}>¿Tengo que instalar algo?</h3><p style={{fontSize: '.88rem'}}>No. Nexo funciona en el navegador, en la computadora del mostrador y en el celular de cada profesional. Se ingresa con usuario y contraseña.</p></div><div className="card rv" style={{padding: '26px'}}><h3 style={{fontSize: '1rem'}}>¿Los mensajes salen de mi número de WhatsApp?</h3><p style={{fontSize: '.88rem'}}>Sí. Se conecta tu propia línea, así el cliente recibe el mensaje de tu centro y te puede responder ahí mismo.</p></div><div className="card rv" style={{padding: '26px'}}><h3 style={{fontSize: '1rem'}}>¿Qué pasa con los datos de mis clientes?</h3><p style={{fontSize: '.88rem'}}>Son tuyos. Cada centro tiene su información aislada del resto y podés pedir una exportación cuando quieras.</p></div><div className="card rv" style={{padding: '26px'}}><h3 style={{fontSize: '1rem'}}>¿Y si tengo más de una sucursal?</h3><p style={{fontSize: '.88rem'}}>Cualquier plan suma sucursales, con agenda y profesionales separados pero una sola base de clientes. Premium incluye dos sedes; en los demás la primera adicional se cobra al 80% del plan.</p></div><div className="card rv" style={{padding: '26px'}}><h3 style={{fontSize: '1rem'}}>¿Me puedo dar de baja?</h3><p style={{fontSize: '.88rem'}}>Cuando quieras, sin permanencia. Los primeros 15 días son gratis y no pedimos tarjeta para empezar.</p></div><div className="card rv" style={{padding: '26px'}}><h3 style={{fontSize: '1rem'}}>¿Sirve si no soy un centro de estética?</h3><p style={{fontSize: '.88rem'}}>Sí. Está pensado para cualquier negocio que trabaje con turnos y profesionales; las fichas clínicas son opcionales.</p></div></div>
      </div>
      </section><section className="section">
      <div className="wrap">
        <div className="cta-box rv">
          <svg className="nodes a" viewBox="0 0 120 120" fill="none" aria-hidden="true">
      <defs><linearGradient id="ng" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stopColor="#3B6FE8"/><stop offset="1" stopColor="#7B5CF0"/></linearGradient></defs>
      <line x1="60.00" y1="21.00" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="40.50" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="93.77" y1="79.50" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="99.00" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="79.50" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="26.23" y1="40.50" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="1.1" opacity=".45"/><line x1="60.00" y1="42.80" x2="60.00" y2="21.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="51.40" x2="93.77" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="74.90" y1="68.60" x2="93.77" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="60.00" y1="77.20" x2="60.00" y2="99.00" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="68.60" x2="26.23" y2="79.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><line x1="45.10" y1="51.40" x2="26.23" y2="40.50" stroke="url(#ng)" strokeWidth="2.6" strokeLinecap="round"/><circle cx="60.00" cy="21.00" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="40.50" r="7.4" fill="url(#ng)"/><circle cx="93.77" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="60.00" cy="99.00" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="79.50" r="7.4" fill="url(#ng)"/><circle cx="26.23" cy="40.50" r="7.4" fill="url(#ng)"/>
      <circle cx="60" cy="60" r="15" fill="none" stroke="url(#ng)" strokeWidth="5"/>
      <circle cx="60" cy="60" r="6" fill="url(#ng)"/></svg>
          <h2>Tu negocio merece más que una agenda digital</h2>
          <p>Nexo es el sistema que trabaja mientras vos atendés. Probalo 15 días sin costo.</p>
          <div className="btns">
            <a href={NEXO_SIGNUP} className="btn btn-white">Empezar gratis</a>
            <a href={NEXO_LOGIN} className="btn btn-ghost">Ya soy usuario</a>
          </div>
          <p style={{fontSize: '.83rem', color: 'rgba(255,255,255,.72)', marginTop: '22px'}}>Sin tarjeta de crédito · 15 días gratis · Cancelás cuando querés</p>
        </div>
      </div>
      </section>
      <Footer />
    </>
  )
}
