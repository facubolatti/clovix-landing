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
  title: "Política de privacidad",
  description: "Qué datos trata Clovix cuando usás el sitio o contratás Nexo, para qué, con quién se comparten y cómo ejercer tus derechos.",
  alternates: { canonical: "/privacidad" },
  // Fuera de Google desde el 18/08: la landing no muestra seccion legal.
  // La pagina sigue respondiendo si alguien tiene la direccion.
  robots: { index: false, follow: false },
};

export default function Page() {
  return (
    <>
      <Nav items={ITEMS} crumb="Clovix / Legal" cta={{ href: "/#contacto", label: "Hablar con nosotros" }} />
      <main className="legal">
        <h1>Política de privacidad</h1>
        <p className="fecha">Última actualización: agosto de 2026</p>

        <p>
          Esta política explica qué datos <strong>tuyos</strong> tratamos cuando
          usás clovix.app o contratás Clovix Nexo. Los datos de tus clientes son
          otra cosa y están explicados en el{' '}
          <a href="/datos">acuerdo de tratamiento de datos</a>.
        </p>

        <h2>Qué datos tomamos</h2>
        <ul>
          <li>Los que nos das al contactarnos o crear una cuenta: nombre, negocio, correo y teléfono.</li>
          <li>Los de facturación necesarios para cobrar la suscripción.</li>
          <li>Datos técnicos de uso del sistema, como registros de acceso y de errores, que sirven para operarlo y para investigar problemas.</li>
        </ul>

        <h2>Para qué los usamos</h2>
        <p>
          Para darte acceso al servicio, para facturarlo, para brindarte soporte y
          para avisarte de cambios que te afecten. <strong>No vendemos ni cedemos
          tus datos</strong> a terceros con fines comerciales, y no los usamos para
          publicidad de otras empresas.
        </p>

        <h2>Con quién los compartimos</h2>
        <p>
          Solo con los proveedores necesarios para que el servicio funcione:
          alojamiento y base de datos, envío de mensajes y procesamiento de pagos.
          Esos proveedores pueden estar radicados fuera de la Argentina, lo que
          implica una transferencia internacional de datos, y solo acceden a la
          información en la medida necesaria para prestar su servicio.
        </p>

        <h2>Cuánto tiempo los guardamos</h2>
        <p>
          Mientras tengas la cuenta activa. Después de la baja conservamos lo
          mínimo que exigen las obligaciones legales y contables, y eliminamos el
          resto.
        </p>

        <h2>Seguridad</h2>
        <p>
          Las contraseñas se guardan cifradas, el acceso viaja por conexión
          segura y cada cuenta está aislada de las demás a nivel de base de datos.
          Ningún sistema es infalible: si ocurriera un incidente que afecte tus
          datos, te lo informamos.
        </p>

        <h2>Tus derechos</h2>
        <p>
          Conforme a la <strong>Ley 25.326 de Protección de los Datos Personales</strong>,
          podés acceder a tus datos, rectificarlos, actualizarlos y pedir su
          supresión. Escribinos a{' '}
          <a href="mailto:comercial@clovix.app">comercial@clovix.app</a> y lo
          resolvemos.
        </p>
        <p>
          La <strong>Agencia de Acceso a la Información Pública</strong>, en su
          carácter de órgano de control de la Ley 25.326, tiene la atribución de
          atender las denuncias y reclamos que interpongan quienes resulten
          afectados en sus derechos por incumplimiento de las normas vigentes en
          materia de protección de datos personales.
        </p>

        <h2>Cookies</h2>
        <p>
          El sitio y el sistema usan únicamente las cookies necesarias para
          mantener tu sesión iniciada y para que la aplicación funcione. No usamos
          cookies de publicidad ni de seguimiento entre sitios.
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
