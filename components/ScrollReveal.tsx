"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

// Hace aparecer el contenido de cada sección al llegar a ella con el scroll.
// No hace falta marcar nada en las páginas: toma cada <section> de <main>
// (menos las portadas, que ya tienen su propia animación) y el pie, y anima
// los bloques de adentro. Las grillas de tarjetas entran de a una.
//
// Solo se aplica con JS, así que sin JS todo se ve igual; y lo que ya está en
// pantalla al cargar no se esconde, para que no parpadee.
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const secciones = document.querySelectorAll<HTMLElement>("main section:not([data-hero-anim]), body > footer");
    const targets: HTMLElement[] = [];

    secciones.forEach((sec) => {
      // Casi todas las secciones envuelven su contenido en un solo contenedor;
      // las que no (varios hijos directos) son ellas mismas el contenedor.
      const cont = (sec.children.length > 1 ? sec : sec.firstElementChild) as HTMLElement | null;
      if (!cont) return;
      const bloques = cont.children.length ? [...cont.children] : [cont];
      bloques.forEach((b) => {
        const el = b as HTMLElement;
        const esGrilla = getComputedStyle(el).display === "grid" && el.children.length >= 3 && el.children.length <= 12;
        const piezas = esGrilla ? [...el.children] : [el];
        piezas.forEach((p, i) => {
          const pieza = p as HTMLElement;
          if (pieza.getBoundingClientRect().top < window.innerHeight * 0.9) return;
          pieza.classList.add("reveal");
          pieza.style.transitionDelay = esGrilla ? `${Math.min(i, 6) * 80}ms` : "";
          targets.push(pieza);
        });
      });
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          el.classList.add("is-visible");
          io.unobserve(el);
          // Al terminar se sacan las clases para no pisar las transiciones
          // propias del elemento (el hover de las tarjetas, por ejemplo)
          // (por tiempo y no con transitionend, que se pierde si la pestaña
          // queda en segundo plano a mitad de la animación)
          const espera = 850 + (parseInt(el.style.transitionDelay) || 0);
          setTimeout(() => {
            el.classList.remove("reveal", "is-visible");
            el.style.transitionDelay = "";
          }, espera);
        });
      },
      { rootMargin: "0px 0px -10% 0px" },
    );
    targets.forEach((t) => io.observe(t));

    return () => {
      io.disconnect();
      targets.forEach((t) => {
        t.classList.remove("reveal", "is-visible");
        t.style.transitionDelay = "";
      });
    };
  }, [pathname]);

  return null;
}
