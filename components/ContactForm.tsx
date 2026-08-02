"use client";
import { useState } from "react";

/**
 * TODO: conectar el envío real (formulario a un endpoint o a un servicio de
 * mail). Por ahora valida en el navegador y muestra la confirmación.
 */
export function ContactForm() {
  const [enviado, setEnviado] = useState(false);

  if (enviado) {
    return (
      <div className="form rv" style={{ textAlign: "center", padding: "56px 32px" }}>
        <p style={{ fontSize: "1.1rem", fontWeight: 600 }}>¡Gracias! Recibimos tu mensaje.</p>
        <p className="lead" style={{ fontSize: ".92rem", marginTop: "10px" }}>
          Te respondemos el mismo día hábil, al WhatsApp o al mail que nos dejaste.
        </p>
      </div>
    );
  }

  return (
    <form
      className="form rv"
      onSubmit={(e) => {
        e.preventDefault();
        setEnviado(true);
      }}
    >
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
          <option value="consultoria">Consultoría en IA</option>
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
      <button className="btn btn-grad" style={{ width: "100%" }} type="submit">
        Quiero que me contacten
      </button>
      <p style={{ fontSize: ".76rem", color: "var(--muted)", marginTop: "14px", textAlign: "center" }}>
        No compartimos tus datos. Sin llamados automáticos.
      </p>
    </form>
  );
}
