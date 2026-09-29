"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const LINKS = [
  { href: "/historia", label: "Historia" },
  { href: "/sabores", label: "Sabores" },
  { href: "/#sucursales", label: "Sucursales" },
  { href: "/franquicias", label: "Franquicias" },
  { href: "/trabaja", label: "Trabajá con nosotros" },
  { href: "/contacto", label: "Contacto" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLElement>(null);

  // Publica la altura real del header en --header-h para que las barras
  // pegajosas de cada página (filtros de sabores) se apoyen justo debajo.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(() => {
      document.documentElement.style.setProperty("--header-h", `${el.offsetHeight}px`);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <header ref={ref} className="sticky top-0 z-[60] border-b border-cafe/14 bg-crema">
      <div className="flex flex-wrap justify-center gap-[10px] bg-oliva px-5 py-[9px] text-center text-[12px] leading-none uppercase tracking-[.14em] text-papel">
        {/* En el móvil se oculta para que la barra entre en una sola línea */}
        <span className="hidden sm:inline">Desde 1910</span>
        <span className="hidden opacity-50 sm:inline">·</span>
        <span>Helados y cafetería</span>
        <span className="opacity-50">·</span>
        <Link href="/pedidos" className="text-papel underline underline-offset-[3px] hover:text-papel">Pedí helado</Link>
      </div>

      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-6 px-6 py-[14px]">
        <Link href="/" className="flex items-center gap-[10px] no-underline" aria-label="Melano, inicio">
          <Image src="/assets/cono-marron.png" alt="" width={173} height={300} priority className="block h-[34px] w-auto" />
          <Image src="/assets/logo-word-marron.png" alt="Melano" width={1000} height={240} priority className="block h-[30px] w-auto" />
        </Link>

        <nav className="hidden items-center gap-[26px] min-[1120px]:flex">
          {LINKS.map((l) => {
            const active = l.href === pathname;
            return (
              <Link key={l.href} href={l.href} className="relative py-2 text-[15px] leading-none text-cafe no-underline hover:text-naranja">
                {l.label}
                {active && <span className="absolute inset-x-0 bottom-0 h-[2px] rounded-[2px] bg-naranja" />}
              </Link>
            );
          })}
          <Link href="/pedidos" className="rounded-full bg-naranja px-[18px] py-[13px] text-[13px] leading-none font-semibold uppercase tracking-[.1em] text-crema no-underline hover:bg-naranja-oscuro hover:text-crema">
            Pedir helado
          </Link>
        </nav>

        <button
          onClick={() => setOpen((o) => !o)}
          aria-label="Menú"
          aria-expanded={open}
          className="h-[46px] w-[46px] cursor-pointer rounded-full border border-cafe/25 bg-transparent text-[20px] leading-none font-medium text-cafe min-[1120px]:hidden"
        >
          {open ? "×" : "≡"}
        </button>
      </div>

      {open && (
        <nav className="flex flex-col gap-[2px] border-t border-cafe/10 px-6 pt-2 pb-6 min-[1120px]:hidden">
          {LINKS.map((l) => (
            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="border-b border-cafe/10 py-3 font-serif text-[24px] leading-[1.2] text-cafe no-underline hover:text-cafe">
              {l.label}
            </Link>
          ))}
          <Link href="/pedidos" onClick={() => setOpen(false)} className="mt-4 rounded-full bg-naranja p-4 text-center text-[14px] leading-none font-semibold uppercase tracking-[.1em] text-crema no-underline hover:text-crema">
            Pedir helado
          </Link>
        </nav>
      )}
    </header>
  );
}
