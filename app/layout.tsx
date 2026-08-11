import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { SiteEffects } from "@/components/SiteEffects";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://clovix.app"),
  title: {
    default: "Clovix — Proveedor de soluciones de inteligencia artificial",
    template: "%s | Clovix",
  },
  description:
    "Clovix construye y opera soluciones de inteligencia artificial para negocios de servicios: una plataforma propia de productos SaaS con inteligencia artificial dentro.",
  manifest: "/site.webmanifest",
  openGraph: {
    siteName: "Clovix",
    locale: "es_AR",
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

export const viewport = {
  themeColor: "#3B6FE8",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={poppins.variable}>
      <body>
        {/* Los dos logos del nav se piden antes de que el navegador llegue al
            CSS que los referencia. Son fondos de `.l-clovix` y `.l-clovix-d`,
            asi que el navegador recien se entera de que existen despues de
            bajar y parsear la hoja de estilos: hasta ese momento la marca del
            encabezado es un hueco. Es lo primero que ve alguien que entra.

            Van los dos y no uno solo porque cual se muestra depende del tema
            —claro u oscuro—, y eso se resuelve en el cliente. Pesan pocos KB
            cada uno; adivinar mal cuesta mas que traer los dos. */}
        <link rel="preload" as="image" type="image/svg+xml" href="/clovix-logo.svg" />
        <link rel="preload" as="image" type="image/svg+xml" href="/clovix-logo-dark.svg" />

        {/* Enciende el modo animado antes de pintar. Si a los 2,5 s el cliente
            no dio senial de vida, lo apaga y el contenido se ve igual. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "(function(){var d=document.documentElement;d.classList.add('reveal');" +
              "setTimeout(function(){if(!window.__clovixReveal)d.classList.remove('reveal')},2500)})()",
          }}
        />
        {children}
        <SiteEffects />
      </body>
    </html>
  );
}
