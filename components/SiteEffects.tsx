"use client";
import { useEffect } from "react";

/** Revelado al scrollear y barra superior que se aclara al bajar. */
export function SiteEffects() {
  useEffect(() => {
    const nav = document.querySelector(".nav");
    const onScroll = () => nav?.classList.toggle("solid", window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

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
    document.querySelectorAll<HTMLElement>(".rv").forEach((el, i) => {
      el.style.transitionDelay = `${(i % 4) * 70}ms`;
      io.observe(el);
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
      io.disconnect();
    };
  }, []);

  return null;
}
