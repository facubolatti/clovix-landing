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
          <span>comercial@clovix.app · Argentina</span>
        </div>
      </div>
    </footer>
  );
}
