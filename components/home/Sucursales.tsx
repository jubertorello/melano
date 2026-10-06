"use client";

import Link from "next/link";
import { useState } from "react";
import { SUCURSALES, embedQ, lineaDir, telHref } from "@/lib/data";

const norm = (t: string) => t.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
const coincide = (q: string) => SUCURSALES.filter((s) => norm(`${s.nombre} ${s.ciudad}`).includes(norm(q.trim())));

const accion = "rounded-full border border-papel/60 px-[15px] py-3 text-[12px] leading-none font-semibold uppercase tracking-[.12em] text-papel no-underline hover:text-papel";

export default function Sucursales() {
  const [sel, setSel] = useState(SUCURSALES[0].id);
  const [q, setQ] = useState("");

  const lista = coincide(q);
  const actual = SUCURSALES.find((s) => s.id === sel) ?? SUCURSALES[0];

  // Al buscar, si la elegida queda afuera, se pasa a la primera que coincide
  const onQ = (v: string) => {
    const m = coincide(v);
    setQ(v);
    if (m.length && !m.some((s) => s.id === sel)) setSel(m[0].id);
  };

  return (
    <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-stretch gap-5">
      <div className="flex h-[min(640px,80vh)] min-h-0 flex-col gap-3">
        <div className="relative flex flex-none items-center">
          <span className="pointer-events-none absolute left-[18px] text-[18px] leading-none text-cafe-suave">⌕</span>
          <input
            value={q}
            onChange={(e) => onQ(e.target.value)}
            placeholder="Buscá tu ciudad o pueblo…"
            aria-label="Buscá tu ciudad o pueblo"
            className="w-full rounded-full border border-cafe/18 bg-crema px-11 py-4 text-[16px] leading-[1.3] font-light text-cafe outline-none focus:border-cafe"
          />
          {q && (
            <button onClick={() => setQ("")} aria-label="Borrar búsqueda" className="absolute right-[10px] h-8 w-8 cursor-pointer rounded-full border-none bg-papel text-[16px] leading-none text-cafe">×</button>
          )}
        </div>

        {lista.length === 0 && (
          <div className="flex flex-col gap-3 rounded-[18px] bg-crema p-[22px]">
            <span className="font-serif text-[24px] leading-[1.2]">Todavía no hay un Melano en “{q}”.</span>
            <Link href="/franquicias" className="self-start rounded-full bg-naranja px-[18px] py-[13px] text-[12px] leading-none font-semibold uppercase tracking-[.12em] text-crema no-underline hover:bg-naranja-oscuro hover:text-crema">
              ¿Lo abrís vos? Franquicias
            </Link>
          </div>
        )}

        <div className="flex min-h-0 flex-1 flex-col gap-2 overflow-y-auto pr-[6px] [scrollbar-color:rgba(89,50,22,.3)_transparent] [scrollbar-width:thin]">
          {lista.map((s) => {
            const a = s.id === actual.id;
            const tel = telHref(s.tel);
            return (
              <div key={s.id} className={`flex flex-none flex-col rounded-[16px] px-5 py-4 transition-colors duration-200 ${a ? "bg-cafe text-crema" : "bg-crema text-cafe"}`}>
                <button onClick={() => setSel(s.id)} aria-expanded={a} className="flex cursor-pointer flex-col gap-2 border-none bg-transparent p-0 text-left text-inherit">
                  <span className="flex flex-wrap items-center gap-[10px]">
                    <span className="font-serif text-[26px] leading-[1.1]">{s.nombre}</span>
                    {s.nueva && <span className="rounded-full bg-naranja px-2 py-[5px] text-[10px] leading-none font-semibold uppercase tracking-[.14em] text-crema">Nueva</span>}
                    {s.central && (
                      <span className={`rounded-full border px-2 py-[5px] text-[10px] leading-none font-semibold uppercase tracking-[.14em] ${a ? "border-crema/50 text-crema" : "border-oliva/40 text-oliva"}`}>
                        Casa central
                      </span>
                    )}
                  </span>
                  <span className="text-[15px] leading-[1.4] font-light">{lineaDir(s)}, Córdoba</span>
                </button>
                {a && (
                  <div className="mt-[6px] flex flex-wrap gap-2 border-t border-crema/20 pt-[14px]">
                    <a href={s.maps} target="_blank" rel="noopener" className="rounded-full bg-papel px-4 py-[13px] text-[12px] leading-none font-semibold uppercase tracking-[.12em] text-cafe no-underline hover:text-cafe">
                      Ver en Google Maps
                    </a>
                    {tel && <a href={tel} className={accion}>Llamar {s.tel}</a>}
                    {s.wa && <a href={s.wa} target="_blank" rel="noopener" className={accion}>WhatsApp</a>}
                    {s.rappi && <a href={s.rappi} target="_blank" rel="noopener" className={accion}>Rappi</a>}
                    {!s.tel && !s.wa && <span className="self-center text-[13px] leading-[1.4] font-light text-[#E0CDB8]">Teléfono a confirmar</span>}
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <span className="flex-none text-[13px] leading-[1.3] font-light text-cafe-suave">{lista.length} de {SUCURSALES.length} sucursales</span>
      </div>

      <div className="flex h-[min(640px,80vh)] flex-col overflow-hidden rounded-[24px] bg-arena">
        <iframe
          title="Mapa de sucursales"
          src={`https://www.google.com/maps?q=${embedQ(actual)}&z=15&output=embed`}
          loading="lazy"
          className="w-full flex-1 border-0 [filter:sepia(.35)_saturate(.8)]"
        />
      </div>
    </div>
  );
}
