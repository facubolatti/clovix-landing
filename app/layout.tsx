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
    "Clovix construye y opera soluciones de inteligencia artificial para negocios de servicios: productos SaaS propios y consultoría en IA.",
  manifest: "/site.webmanifest",
  openGraph: {
    siteName: "Clovix",
    locale: "es_AR",
    type: "website",
  },
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
        {children}
        <SiteEffects />
      </body>
    </html>
  );
}
