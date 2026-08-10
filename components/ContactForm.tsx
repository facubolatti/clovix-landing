"use client";
import { useState } from "react";

/**
 * El formulario de contacto.
 *
 * Hasta el 10/08/2026 esto validaba en el navegador, mostraba la confirmación
 * y no mandaba nada a ningún lado. Ahora postea a `/api/contacto`, que guarda
 * la consulta en la base y avisa por ntfy y por mail.
 *
 * DOS COSAS QUE CAMBIARON ADEMÁS DEL ENVÍO
 *
 * La confirmación **solo aparece si el servidor confirmó que guardó**. Antes
 * aparecía siempre; ahora, si algo falla, la persona ve el error y la dirección
 * a la que escribir, con lo que escribió todavía en pantalla para no perderlo.
 *
 * Y el texto ya no promete "el mismo día hábil". Prometer un plazo que no se
 * puede sostener es la forma más rápida de arrancar mal con alguien que recién
 * te conoce.
 */
export function ContactForm() {
  const [enviado, setEnviado] = useState(false);
  const [enviando, setEnviando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (enviando) return;

    setEnviando(true);
    setError(null);

    // Se arma campo por campo en vez de volcar el FormData entero: así lo que
    // viaja es exactamente lo que el servidor espera, y nada más.
    const fd = new FormData(e.currentTarget);
    const texto = (k: string) => String(fd.get(k) ?? "");
    const datos = {
      nombre: texto("nombre"),
      negocio: texto("negocio"),
      email: texto("email"),
      whatsapp: texto("whatsapp"),
      interes: texto("interes"),
      mensaje: texto("mensaje"),
      web: texto("web"),
    };

    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(datos),
      });
      const cuerpo = await res.json().catch(() => ({}));

      if (res.ok && cuerpo.ok) {
        setEnviado(true);
        return;
      }
      setError(cuerpo.error ?? "No pudimos enviar tu consulta. Probá de nuevo en un momento.");
    } catch {
      setError("No pudimos conectarnos. Revisá tu conexión y probá de nuevo.");
    } finally {
      setEnviando(false);
    }
  }

  if (enviado) {
    return (
      <div className="form rv" style={{ textAlign: "center", padding: "56px 32px" }}>
        <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>¡Gracias! Recibimos tu mensaje.</p>
        <p className="lead" style={{ fontSize: ".92rem", marginTop: "10px" }}>
          Te vamos a escribir al WhatsApp o al mail que nos dejaste. Si preferís adelantarte,
          escribinos a <a href="mailto:comercial@clovix.app">comercial@clovix.app</a>.
        </p>
      </div>
    );
  }

  return (
    <form className="form rv" onSubmit={enviar}>
      {/*
        Campo trampa. Queda fuera de la pantalla y sin foco por teclado, así que
        una persona no lo ve ni lo pisa tabulando; los robots que completan todo
        lo que encuentran, sí. Si viene con algo, el servidor descarta.
      */}
      <input
        type="text"
        name="web"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        style={{ position: "absolute", left: "-9999px", width: 1, height: 1, opacity: 0 }}
      />

      <div className="row2">
        <div className="field">
          <label htmlFor="nombre">Nombre</label>
          <input id="nombre" name="nombre" type="text" placeholder="Tu nombre" required />
        </div>
        <div className="field">
          <label htmlFor="negocio">Negocio</label>
          <input id="negocio" name="negocio" type="text" placeholder="Nombre del centro o empresa" />
        </div>
      </div>
      <div className="row2">
        <div className="field">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" placeholder="vos@tunegocio.com" required />
        </div>
        <div className="field">
          <label htmlFor="whatsapp">WhatsApp</label>
          <input id="whatsapp" name="whatsapp" type="tel" placeholder="+54 9 ..." />
        </div>
      </div>
      <div className="field">
        <label htmlFor="interes">¿Qué te interesa?</label>
        <select id="interes" name="interes" defaultValue="nexo">
          <option value="nexo">Clovix Nexo — turnos y fidelización</option>
          <option value="contable">Clovix Contable</option>
          <option value="analytics">Clovix Analytics</option>
          <option value="orientacion">Todavía no sé, quiero que me orienten</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="mensaje">Contanos brevemente</label>
        <textarea
          id="mensaje"
          name="mensaje"
          placeholder="Cuántos son, cómo trabajan hoy, qué les gustaría resolver…"
        />
      </div>

      {error && (
        <p
          role="alert"
          style={{
            fontSize: ".85rem",
            color: "#dc2626",
            background: "rgba(220,38,38,.07)",
            border: "1px solid rgba(220,38,38,.2)",
            borderRadius: "10px",
            padding: "10px 14px",
            marginBottom: "14px",
          }}
        >
          {error}
        </p>
      )}

      <button
        className="btn btn-grad"
        style={{ width: "100%", opacity: enviando ? 0.6 : 1 }}
        type="submit"
        disabled={enviando}
      >
        {enviando ? "Enviando…" : "Quiero que me contacten"}
      </button>
      <p style={{ fontSize: ".76rem", color: "var(--muted)", marginTop: "14px", textAlign: "center" }}>
        No compartimos tus datos. Sin llamados automáticos.
      </p>
    </form>
  );
}
