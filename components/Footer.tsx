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
              <li><Link href="/#enfoque">El enfoque Clovix</Link></li>
              <li><Link href="/#contacto">Contacto</Link></li>
              <li><a href="https://nexo.clovix.app/login">Ingresar al sistema</a></li>
            </ul>
          </div>
          <div>
            <h4>Legal</h4>
            <ul>
              <li><Link href="/terminos">Términos y condiciones</Link></li>
              <li><Link href="/privacidad">Política de privacidad</Link></li>
              <li><Link href="/datos">Tratamiento de datos</Link></li>
            </ul>
          </div>
        </div>
        <div className="foot-bot">
          <span>© {new Date().getFullYear()} Clovix · Todos los derechos reservados</span>
          <span>comercial@clovix.app · Argentina</span>
        </div>
      </div>
    </footer>
  );
}
