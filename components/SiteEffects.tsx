"use client";
import { useEffect } from "react";

declare global {
  interface Window {
    __clovixReveal?: boolean;
  }
}

/** Revelado al scrollear y barra superior que se aclara al bajar. */
export function SiteEffects() {
  useEffect(() => {
    // Avisa al script de arranque que el cliente está vivo: si esto no pasa,
    // el modo animado se apaga solo y la página se ve igual, sin animación.
    window.__clovixReveal = true;

    const nav = document.querySelector(".nav");
    const onScroll = () => nav?.classList.toggle("solid", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const elementos = Array.from(document.querySelectorAll<HTMLElement>(".rv"));

    const enPantalla = (el: HTMLElement) => {
      const r = el.getBoundingClientRect();
      return r.top < window.innerHeight && r.bottom > 0;
    };

    /**
     * Muestra lo que ya está a la vista.
     *
     * Con `ya` en true lo hace sin animación: es el caso del salto a un ancla.
     * Ahí la sección de destino entra en pantalla todavía en opacity 0 y tarda
     * casi un segundo en aparecer — hasta 210 ms de retraso más 700 ms de
     * transición — y sobre fondo blanco eso se lee como una pantalla en blanco.
     */
    const mostrarLoVisible = (ya = false) => {
      elementos.forEach((el) => {
        if (!enPantalla(el)) return;
        if (ya) {
          // Sin transición: poner la clase no alcanza, porque la transición de
          // opacidad queda encolada y el bloque sigue en 0 casi un segundo.
          el.style.transition = "none";
          el.classList.add("in");
          requestAnimationFrame(() => {
            el.style.transition = "";
            el.style.transitionDelay = "0ms";
          });
        } else {
          el.classList.add("in");
        }
        io.unobserve(el);
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px" },
    );
    elementos.forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });
    mostrarLoVisible();

    // Cualquier salto a un ancla revela el destino en el acto. Se engancha al
    // clic (mismo hash que el actual no dispara hashchange) y al hashchange.
    const alSaltar = () => {
      requestAnimationFrame(() => mostrarLoVisible(true));
      window.setTimeout(() => mostrarLoVisible(true), 120);
    };
    const alClic = (e: MouseEvent) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a[href*="#"]');
      if (a) alSaltar();
    };
    document.addEventListener("click", alClic);
    window.addEventListener("hashchange", alSaltar);

    // Red de seguridad para el primer dibujo, por si el salto inicial del
    // navegador termina después del primer barrido.
    const t = window.setTimeout(() => mostrarLoVisible(true), 1000);

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("click", alClic);
      window.removeEventListener("hashchange", alSaltar);
      window.clearTimeout(t);
      io.disconnect();
    };
  }, []);

  return null;
}
