"use client";

import Image from "next/image";
import { useState } from "react";
import Pill from "@/components/Pill";
import { CATEGORIAS, NOTAS_CATEGORIA, SABORES, type CategoriaId } from "@/lib/data";

type Filtro = "todos" | CategoriaId;

export default function SaboresList() {
  const [cat, setCat] = useState<Filtro>("todos");
  const [q, setQ] = useState("");

  const ql = q.trim().toLowerCase();
  const match = (nombre: string, desc: string) => !ql || `${nombre} ${desc}`.toLowerCase().includes(ql);

  const grupos = CATEGORIAS.filter((c) => c.id !== "todos" && (cat === "todos" || cat === c.id))
    .map((c) => ({
      id: c.id as CategoriaId,
      label: c.label,
      items: SABORES.filter((s) => s.cat === c.id && match(s.nombre, s.desc)),
    }))
    .filter((g) => g.items.length);

  const cuenta = (id: Filtro) => (id === "todos" ? SABORES.length : SABORES.filter((s) => s.cat === id).length);

  return (
    <>
      <div className="sticky top-[var(--header-h,98px)] z-20 border-b border-cafe/12 bg-crema/96 backdrop-blur-[8px]">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-4 px-6 py-4">
          <div className="flex flex-wrap gap-2">
            {CATEGORIAS.map((c) => (
              <Pill key={c.id} active={cat === c.id} onClick={() => setCat(c.id)} className="px-4 py-[11px] text-[14px] whitespace-nowrap">
                {c.label} <span className="ml-1 opacity-60">{cuenta(c.id)}</span>
              </Pill>
            ))}
          </div>
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Buscar sabor…"
            aria-label="Buscar sabor"
            className="w-[min(200px,100%)] rounded-full border border-transparent bg-papel px-[18px] py-3 text-[15px] leading-none font-light text-cafe outline-none focus:border-cafe"
          />
        </div>
      </div>

      <section className="mx-auto flex max-w-[1280px] flex-col gap-16 px-6 pt-12 pb-[110px]">
        {grupos.map((g) => (
          <div key={g.id} className="flex flex-col gap-6">
            <div className="flex flex-wrap items-baseline gap-4 border-b border-cafe/15 pb-[14px]">
              <h2 className="m-0 font-serif text-[clamp(34px,4vw,48px)] leading-none font-normal">{g.label}</h2>
              <span className="font-hand text-[24px] leading-none font-medium text-naranja">{NOTAS_CATEGORIA[g.id]}</span>
            </div>
            <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,150px),1fr))] gap-[clamp(10px,2vw,16px)]">
              {g.items.map((s) => (
                <div key={s.nombre} className="flex flex-col gap-3 rounded-[18px] bg-papel px-[clamp(10px,1.6vw,14px)] pt-[clamp(10px,1.6vw,14px)] pb-[clamp(14px,2vw,18px)]">
                  {s.img && (
                    <div className="relative aspect-[4/5] overflow-hidden rounded-[12px]" style={{ background: s.color }}>
                      <Image src={s.img} alt={s.nombre} fill sizes="(min-width: 1280px) 200px, (min-width: 640px) 25vw, 50vw" className="object-cover" />
                    </div>
                  )}
                  <div className="flex min-w-0 flex-col gap-[6px]">
                    <span className="font-serif text-[clamp(19px,2vw,22px)] leading-[1.1]">
                      {s.nombre}
                      {s.clasico && <span className="ml-2 font-hand text-[18px] leading-none font-medium text-naranja">clásico</span>}
                    </span>
                    <span className="text-[14px] leading-[1.4] font-light text-cafe-suave">{s.desc}</span>
                    {s.tags.length > 0 && (
                      <span className="text-[10px] leading-[1.3] font-semibold uppercase tracking-[.14em] text-oliva">{s.tags.join(" · ")}</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {grupos.length === 0 && (
          <div className="flex flex-col items-center gap-4 py-[60px] text-center">
            <Image src="/assets/pietro-leyendo.png" alt="" width={800} height={957} className="h-[180px] w-auto" />
            <p className="m-0 font-serif text-[28px] leading-[1.2]">
              {ql ? <>Pietro buscó en el recetario y no encontró “{q}”.</> : <>Pietro está probando los sabores de esta temporada.</>}
            </p>
            <button
              onClick={() => { setQ(""); setCat("todos"); }}
              className="cursor-pointer rounded-full border-none bg-cafe px-[22px] py-[14px] text-[12px] leading-none font-semibold uppercase tracking-[.12em] text-crema"
            >
              Ver todos
            </button>
          </div>
        )}
      </section>
    </>
  );
}
