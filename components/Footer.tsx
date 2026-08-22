import Link from "next/link";
import { Nodes } from "./Nodes";

export function Footer() {
  return (
    <footer className="foot">
      <Nodes variant="b" />
      <div className="wrap">
        <div className="foot-grid">
          <div>
            <span className="mark l-clovix-d" role="img" aria-label="Clovix" />
            <p>Software que gestiona. Inteligencia que fideliza. Vínculos que duran.</p>
          </div>
          <div>
            <h4>Productos</h4>
            <ul>
              <li><Link href="/nexo">Clovix Nexo</Link></li>
              <li><Link href="/soluciones#saas">Clovix Contable</Link></li>
              <li><Link href="/soluciones#saas">Clovix Analytics</Link></li>
            </ul>
          </div>
          <div>
            <h4>Empresa</h4>
            <ul>
              <li><Link href="/#capacidades">Qué hacemos</Link></li>
              <li><Link href="/#enfoque">Enfoque Clovix</Link></li>
              <li><Link href="/#contacto">Contacto</Link></li>
              <li><a href="https://nexo.clovix.app/login">Ingresar al sistema</a></li>
            </ul>
          </div>
          {/*
            La columna "Legal" salió el 18/08 por decisión de Daniel: la landing
            no muestra una sección de términos por ahora.

            **Las tres páginas siguen existiendo** —/terminos, /privacidad y
            /datos— con `noindex`, así que no salen en Google pero responden si
            alguien tiene la dirección. Se dejaron porque MercadoPago, Google y
            las tiendas de aplicaciones suelen pedir una URL de política de
            privacidad, y reescribirlas de cero es caro.

            Para volver a mostrarlas: reponer este bloque y poner
            `robots: { index: true, follow: true }` en las tres páginas.
          */}
        </div>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} Clovix · Todos los derechos reservados</span>

          {/*
            ── P-05 · BOTON DE ARREPENTIMIENTO ─────────────────────────────
            Esto NO comparte destino con la columna "Legal" que salió el 18/08.
            Aquellas páginas se ocultaron por decisión de producto y se puede
            volver a decidir. Esta no: la Disposición 954/2025 obliga a que el
            botón esté "a simple vista, en lugar destacado y en el primer
            acceso", con ese nombre exacto.

            Por eso va acá y no en una columna: el pie de página inferior está
            en TODAS las páginas del sitio y no depende de que la grilla de
            arriba tenga tres columnas o cuatro. Y por eso tiene clase propia
            —`foot-arrep`— en vez de heredar el gris del copyright: al lado de
            un texto tenue, "destacado" no se cumple.

            El destino es absoluto y apunta a nexo.clovix.app porque la página
            vive en el repo de la aplicación, no en este. `/arrepentimiento` en
            este sitio da 404.

            ⚠ Si se borra o se apaga, se rompe una obligación legal y NADA
            FALLA: no hay error, no hay alerta. Solo deja de encontrarse.
          */}
          <a
            className="foot-arrep"
            href="https://nexo.clovix.app/arrepentimiento"
          >
            Botón de arrepentimiento
          </a>

          <span>comercial@clovix.app · Argentina</span>
        </div>
      </div>
    </footer>
  );
}
