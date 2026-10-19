"use client";
import { useEffect, useRef, useState } from "react";
import { enlaceWhatsApp } from "@/lib/contacto";

/**
 * Botón flotante de WhatsApp, abajo a la derecha.
 *
 * NO PUEDE TAPAR UN BOTÓN
 *
 * En el celular el margen lateral es de 24 px y los botones de los planes
 * ocupan todo el ancho: cualquier botón fijo en la esquina les pasa por encima
 * al scrollear. Por eso, cada vez que la página se mueve, se fija si tiene
 * debajo un botón o un enlace y, si lo tiene, se aparta (se desvanece y deja de
 * recibir toques) hasta que el otro termine de pasar.
 */
export function BotonWhatsApp({ mensaje }: { mensaje: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const [tapa, setTapa] = useState(false);

  useEffect(() => {
    let cuadro = 0;
    const revisar = () => {
      cancelAnimationFrame(cuadro);
      cuadro = requestAnimationFrame(() => {
        const yo = ref.current;
        if (!yo) return;
        // Se mide con un margen de 8 px para que no quede pegado al borde del otro.
        const r = yo.getBoundingClientRect();
        const m = 8;
        const encima = Array.from(document.querySelectorAll<HTMLElement>("a, button, input, select, textarea"))
          .some((el) => {
            if (el === yo) return false;
            const o = el.getBoundingClientRect();
            if (o.width === 0 || o.height === 0) return false;
            return o.left < r.right + m && o.right > r.left - m && o.top < r.bottom + m && o.bottom > r.top - m;
          });
        setTapa(encima);
      });
    };
    revisar();
    window.addEventListener("scroll", revisar, { passive: true });
    window.addEventListener("resize", revisar);
    return () => {
      cancelAnimationFrame(cuadro);
      window.removeEventListener("scroll", revisar);
      window.removeEventListener("resize", revisar);
    };
  }, []);

  return (
    <a
      ref={ref}
      href={enlaceWhatsApp(mensaje)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribinos por WhatsApp"
      className={tapa ? "wa-float apartado" : "wa-float"}
    >
      <svg viewBox="0 0 32 32" aria-hidden="true">
        <path
          fill="currentColor"
          d="M16.04 3C9 3 3.3 8.68 3.3 15.7c0 2.25.6 4.45 1.72 6.38L3.2 28.8l6.9-1.8a12.8 12.8 0 0 0 5.94 1.5h.01c7.03 0 12.74-5.68 12.74-12.7C28.8 8.68 23.07 3 16.04 3Zm0 23.35h-.01c-1.9 0-3.77-.51-5.4-1.48l-.39-.23-4.1 1.07 1.1-3.98-.26-.41a10.5 10.5 0 0 1-1.62-5.62c0-5.84 4.77-10.6 10.68-10.6 2.85 0 5.53 1.1 7.55 3.11a10.5 10.5 0 0 1 3.12 7.5c0 5.85-4.78 10.64-10.67 10.64Zm5.85-7.95c-.32-.16-1.9-.93-2.19-1.04-.3-.1-.5-.16-.72.16-.21.32-.83 1.04-1.01 1.25-.19.21-.37.24-.69.08-.32-.16-1.35-.5-2.57-1.58-.95-.85-1.6-1.89-1.78-2.2-.19-.33-.02-.5.14-.66.14-.14.32-.37.48-.56.16-.18.21-.31.32-.52.1-.21.05-.4-.03-.56-.08-.16-.72-1.72-.98-2.36-.26-.62-.52-.53-.72-.54h-.61c-.21 0-.56.08-.85.4-.29.31-1.12 1.09-1.12 2.66 0 1.57 1.15 3.08 1.3 3.3.17.2 2.26 3.44 5.47 4.82.77.33 1.36.53 1.83.68.77.24 1.47.2 2.02.12.62-.09 1.9-.77 2.17-1.52.27-.75.27-1.39.19-1.52-.08-.13-.29-.21-.61-.37Z"
        />
      </svg>
    </a>
  );
}
