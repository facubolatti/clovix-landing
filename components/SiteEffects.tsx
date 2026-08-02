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

    // Lo que ya está en pantalla se muestra de entrada. Importa al entrar por
    // un ancla (/soluciones#saas): ahí todo lo visible es una sección .rv.
    const mostrarLoVisible = () => {
      elementos.forEach((el) => {
        const r = el.getBoundingClientRect();
        if (r.top < window.innerHeight && r.bottom > 0) el.classList.add("in");
      });
    };
    mostrarLoVisible();

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

    // Segunda red: si el salto al ancla terminó después del primer barrido,
    // vuelve a revisar qué quedó en pantalla.
    const t = window.setTimeout(mostrarLoVisible, 1200);

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(t);
      io.disconnect();
    };
  }, []);

  return null;
}
