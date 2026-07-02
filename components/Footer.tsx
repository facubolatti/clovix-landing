import Image from "next/image";

export function Footer({ showLogo = true }: { showLogo?: boolean }) {
  return (
    <footer id="contacto" className="border-t border-black/5 px-6 py-10">
      <div
        className={`mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row ${
          showLogo ? "justify-between" : "justify-center"
        }`}
      >
        {showLogo && (
          <Image src="/clovix_logo_solo.svg" alt="Clovix" width={120} height={36} />
        )}
        <p className="text-sm text-clovix-gray-text">
          © 2026 Clovix · hola@clovix.app
        </p>
      </div>
    </footer>
  );
}
