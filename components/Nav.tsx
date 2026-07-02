import Image from "next/image";
import Link from "next/link";

export function Nav({
  breadcrumb,
  ctaHref,
  ctaLabel = "Empezar gratis",
}: {
  breadcrumb?: string;
  ctaHref: string;
  ctaLabel?: string;
}) {
  return (
    <header className="sticky top-0 z-50 border-b border-black/5 bg-white/80 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/clovix_logo_solo.svg"
            alt="Clovix"
            width={160}
            height={48}
            priority
          />
          {breadcrumb && (
            <span className="hidden text-sm font-medium text-clovix-gray-text sm:inline">
              {breadcrumb}
            </span>
          )}
        </Link>
        <div className="hidden items-center gap-8 text-sm font-medium text-clovix-black md:flex">
          <a href="/#soluciones" className="hover:text-clovix-blue">
            Soluciones
          </a>
          <a href="/#por-que-clovix" className="hover:text-clovix-blue">
            Por qué Clovix
          </a>
          <a href="/#contacto" className="hover:text-clovix-blue">
            Contacto
          </a>
        </div>
        <a
          href={ctaHref}
          className="rounded-full bg-clovix-blue px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          {ctaLabel}
        </a>
      </nav>
    </header>
  );
}
