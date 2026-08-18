import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

const ITEMS = [
  { label: "Qué hacemos", href: "/#capacidades" },
  { label: "Productos", href: "/soluciones" },
  { label: "El enfoque", href: "/#enfoque" },
  { label: "Contacto", href: "/#contacto" },
];

export const metadata: Metadata = {
  title: "Tratamiento de datos",
  description: "Acuerdo de tratamiento de datos: el negocio es responsable de la base de sus clientes y Clovix es encargado del tratamiento.",
  alternates: { canonical: "/datos" },
  // Fuera de Google desde el 18/08: la landing no muestra seccion legal.
  // La pagina sigue respondiendo si alguien tiene la direccion.
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Nav items={ITEMS} crumb="Clovix / Legal" cta={{ href: "/#contacto", label: "Hablar con nosotros" }} />
      <main className="legal">
        <h1>Tratamiento de datos</h1>
        <p className="fecha">Última actualización: agosto de 2026</p>

        <p>
          Este acuerdo explica qué pasa con los datos de <strong>tus clientes</strong>
          —los que cargás en el sistema— y complementa a los{' '}
          <a href="/terminos">términos y condiciones</a> y a la{' '}
          <a href="/privacidad">política de privacidad</a>.
        </p>

        <h2>Quién es quién</h2>
        <p>
          Vos, el negocio que contrata el servicio, sos el{' '}
          <strong>responsable</strong> de esa base de datos: decidís qué datos
          cargás, para qué los usás y a quién le mandás mensajes. Clovix es el{' '}
          <strong>encargado del tratamiento</strong>: los procesa por tu cuenta y
          orden, únicamente para prestarte el servicio.
        </p>

        <h2>Qué hacemos y qué no</h2>
        <p>Con los datos de tus clientes, Clovix:</p>
        <ul>
          <li>Los almacena y los procesa para que el sistema funcione: agenda, fichas, cobros, mensajes y reportes.</li>
          <li>Los usa para generar las sugerencias automáticas del propio sistema —recordatorios, encuestas, alertas de inactividad y propuestas de cupones— que siempre quedan a tu aprobación.</li>
          <li><strong>No los usa para ningún fin propio</strong>, ni comercial ni estadístico fuera de tu cuenta.</li>
          <li><strong>No los cede ni los vende</strong> a terceros.</li>
          <li>No los cruza con los de otros negocios: cada cuenta está aislada.</li>
        </ul>

        <h2>Datos de salud en las fichas</h2>
        <p>
          Las fichas cosmiátricas pueden contener información sobre la salud de tus
          clientes, incluidas fotografías de tratamientos. La Ley 25.326 considera
          esa información <strong>dato sensible</strong> y la protege de manera
          especial.
        </p>
        <p>
          Como responsable, sos vos quien debe obtener el{' '}
          <strong>consentimiento expreso</strong> de cada cliente antes de registrar
          ese tipo de información y de tomarle fotografías, y quien debe informarle
          para qué se usa. Clovix pone las herramientas para registrar ese
          consentimiento, pero no reemplaza tu obligación de pedirlo.
        </p>

        <h2>Inteligencia artificial</h2>
        <p>
          Algunas funciones del sistema se apoyan en un servicio de inteligencia
          artificial de un tercero: <strong>Anthropic</strong>{' '}
          (<code>api.anthropic.com</code>), radicado fuera de la Argentina.
          Conviene que sepas exactamente qué se le envía, porque en dos de los
          tres casos se trata de datos de salud.
        </p>
        <ul>
          <li>
            <strong>Sugerencias de cupones.</strong> Se envía el nombre de la
            clienta, su identificador interno, el criterio por el que fue
            seleccionada y un resumen de su comportamiento: cuándo vino, qué
            servicios se hizo y hace cuánto que no vuelve.
          </li>
          <li>
            <strong>Informe comparativo de fichas.</strong> Se envían los
            recortes de las fotografías de tratamiento.
          </li>
          <li>
            <strong>Informes de cosmiatría.</strong> Se envían las fotografías y
            los antecedentes cargados en la ficha.
          </li>
        </ul>
        <p>
          En los tres casos el resultado es una sugerencia o un informe que{' '}
          <strong>queda a tu aprobación</strong>: nada se le envía a tu clienta
          ni se guarda en su ficha sin que vos lo apruebes.
        </p>
        <p>
          Como esto involucra datos sensibles y un tercero radicado en otro
          país, <strong>el consentimiento que le pedís a tu clienta debería
          contemplarlo expresamente</strong>. Si necesitás ayuda para redactarlo,
          escribinos a{' '}
          <a href="mailto:comercial@clovix.app">comercial@clovix.app</a>.
        </p>

        <h2>Los mensajes</h2>
        <p>
          Los recordatorios, encuestas y campañas salen desde tu propia línea de
          WhatsApp y hacia los contactos que vos cargaste. Sos vos quien debe
          contar con el consentimiento de esas personas para contactarlas.
        </p>

        <h2>Dónde están alojados</h2>
        <p>
          En servidores de proveedores de infraestructura que pueden estar
          radicados fuera de la Argentina. Esos proveedores actúan como
          subencargados: acceden solo a lo necesario para prestar el servicio y
          están alcanzados por obligaciones de confidencialidad.
        </p>

        <h2>Seguridad y confidencialidad</h2>
        <p>
          El acceso viaja cifrado, cada cuenta está separada de las demás a nivel
          de base de datos, y solo el personal de Clovix que necesita hacerlo para
          dar soporte puede acceder a la información, bajo deber de
          confidencialidad. Si ocurriera un incidente que comprometa datos de tus
          clientes, te lo informamos para que puedas cumplir con tus propias
          obligaciones.
        </p>

        <h2>Qué pasa si te das de baja</h2>
        <p>
          Podés pedir una <strong>exportación completa</strong> de tu información
          antes de irte: escribinos y te la preparamos.
        </p>
        <p>
          Después de la baja conservamos tus datos <strong>60 días</strong>, para
          que puedas recuperar la cuenta si cambiaste de idea. Pasado ese plazo,
          eliminamos de los sistemas activos los datos de tus clientes: fichas,
          turnos, contactos e historial.
        </p>
        <p>
          Se conservan por más tiempo, y solo esos, los{' '}
          <strong>registros de cobros y facturación</strong>, porque las
          obligaciones contables e impositivas nos obligan a guardarlos.
        </p>

        <h2>Derechos de tus clientes</h2>
        <p>
          Si una clienta tuya te pide acceder a sus datos, corregirlos o
          eliminarlos, el pedido te corresponde a vos como responsable. Si
          necesitás ayuda técnica para responderlo, escribinos a{' '}
          <a href="mailto:comercial@clovix.app">comercial@clovix.app</a> y te
          asistimos.
        </p>
        <div className="nota">
          <p style={{ marginBottom: 0 }}>
            Este documento está redactado en lenguaje claro y a nombre de Clovix
            (clovix.app). Ante cualquier duda escribinos a{' '}
            <a href="mailto:comercial@clovix.app">comercial@clovix.app</a>.
          </p>
        </div>
      </main>
      <Footer />
    </>
  )
}
