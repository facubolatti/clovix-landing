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
  title: "Términos y condiciones",
  description: "Términos y condiciones del servicio Clovix Nexo: qué se contrata, planes, prueba, baja, responsabilidades y ley aplicable.",
  alternates: { canonical: "/terminos" },
  // Fuera de Google desde el 18/08: la landing no muestra seccion legal.
  // La pagina sigue respondiendo si alguien tiene la direccion.
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Nav items={ITEMS} crumb="Clovix / Legal" cta={{ href: "/#contacto", label: "Hablar con nosotros" }} />
      <main className="legal">
        <h1>Términos y condiciones</h1>
        <p className="fecha">Última actualización: agosto de 2026</p>

        <p>
          Estos términos regulan el uso de <strong>Clovix Nexo</strong>, el servicio
          de gestión de turnos, clientes y comunicaciones que se contrata en{' '}
          <a href="https://clovix.app">clovix.app</a> y se usa en{' '}
          <a href="https://nexo.clovix.app">nexo.clovix.app</a>. Al crear una cuenta
          aceptás lo que sigue.
        </p>

        <h2>Qué es el servicio</h2>
        <p>
          Nexo es un software que se usa desde el navegador. No se instala nada y
          no se entrega ninguna licencia de programa: se contrata el acceso al
          sistema por el tiempo que dure la suscripción.
        </p>

        <h2>La cuenta</h2>
        <p>
          Cada negocio tiene su propia cuenta, con sus usuarios y sus datos
          separados del resto. Sos responsable de las credenciales de tu equipo y
          de lo que hagan los usuarios que crees. Si detectás un acceso indebido,
          avisanos y lo bloqueamos.
        </p>

        <h2>Prueba, planes y pagos</h2>
        <p>
          La cuenta empieza con <strong>15 días de prueba sin costo y sin tarjeta</strong>.
          Terminada la prueba, para seguir usando el sistema hay que contratar uno
          de los planes vigentes. Cada plan tiene sus propios límites —cantidad de
          profesionales, de turnos, de mensajes y de informes— publicados en el
          sitio al momento de contratar.
        </p>
        <p>
          Los precios están expresados en pesos argentinos y pueden actualizarse.
          Cualquier cambio de precio se avisa con anticipación razonable y rige
          desde el período siguiente: nunca se aplica de forma retroactiva.
        </p>

        <h2>Baja</h2>
        <p>
          Podés dar de baja la suscripción cuando quieras, sin permanencia mínima
          ni penalidad, escribiendo a{' '}
          <a href="mailto:comercial@clovix.app">comercial@clovix.app</a>. La baja
          rige al final del período ya abonado; no se cobran períodos posteriores.
        </p>

        <h2>Uso responsable</h2>
        <p>
          El sistema envía mensajes desde tu propia línea de WhatsApp y a los
          contactos que vos cargues. Te comprometés a usarlo solo para
          comunicaciones vinculadas a la relación con tus clientes, con su
          consentimiento, y a no usarlo para envíos masivos no solicitados. El
          uso indebido puede derivar en la suspensión de la cuenta y es
          responsabilidad tuya frente a terceros.
        </p>

        <h2>Disponibilidad</h2>
        <p>
          Trabajamos para que el servicio esté disponible de forma continua, pero
          no garantizamos un funcionamiento ininterrumpido: puede haber cortes
          por mantenimiento, por fallas de proveedores de infraestructura o por
          causas ajenas a nosotros. Cuando haya una interrupción programada,
          avisamos con anticipación.
        </p>

        <h2>Tus datos son tuyos</h2>
        <p>
          La información que cargás —tus clientes, tus turnos, tus fichas, tus
          cobros— es tuya. Podés pedir una exportación en cualquier momento y
          también su eliminación al dar de baja la cuenta. El detalle está en el{' '}
          <a href="/datos">acuerdo de tratamiento de datos</a>.
        </p>

        <h2>Propiedad intelectual</h2>
        <p>
          El software, la marca Clovix, sus logos y su diseño son de titularidad
          de Clovix. Contratar el servicio no transfiere ningún derecho sobre
          ellos.
        </p>

        <h2>Límite de responsabilidad</h2>
        <p>
          Clovix responde por el funcionamiento del servicio en los términos aquí
          descriptos. No respondemos por daños indirectos ni por lucro cesante, ni
          por decisiones comerciales que tomes a partir de la información del
          sistema. En ningún caso la responsabilidad total supera el monto
          abonado por el servicio en los últimos tres meses.
        </p>

        <h2>Cambios</h2>
        <p>
          Podemos actualizar estos términos. Si el cambio es relevante lo avisamos
          por el sistema o por correo, y si no estás de acuerdo podés dar de baja
          la cuenta sin costo.
        </p>

        <h2>Ley aplicable</h2>
        <p>
          Se aplica la ley de la República Argentina. Ante cualquier conflicto, las
          partes se someten a los tribunales ordinarios competentes en la
          República Argentina.
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
