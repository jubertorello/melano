"use client";

import { useState } from "react";
import Pill from "@/components/Pill";
import { SUCURSALES, lineaDir, telHref } from "@/lib/data";

const CIUDADES = ["Todas", ...Array.from(new Set(SUCURSALES.map((s) => s.ciudad)))];
const MSG_WA = encodeURIComponent("¡Hola Melano! Quiero hacer un pedido.");

const canal = "flex items-center justify-between gap-3 rounded-[14px] px-[18px] text-[16px] leading-none font-medium no-underline";

export default function PedidosList() {
  const [city, setCity] = useState("Todas");
  const list = SUCURSALES.filter((s) => city === "Todas" || s.ciudad === city);

  return (
    <>
      <div className="flex flex-col gap-[14px]">
        <span className="field-label tracking-[.16em] text-oliva">¿Dónde estás?</span>
        <div className="flex flex-wrap gap-2">
          {CIUDADES.map((c) => (
            <Pill key={c} active={city === c} onClick={() => setCity(c)} className="px-[18px] py-[13px] text-[15px]">{c}</Pill>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(min(100%,360px),1fr))] gap-4">
        {list.map((s) => {
          // Los enlaces wa.me/message/… no aceptan texto precargado
          const wa = s.wa ? (s.wa.includes("/message/") ? s.wa : `${s.wa}?text=${MSG_WA}`) : null;
          const tel = telHref(s.tel);
          const sinCanal = !s.wa && !s.tel && !s.rappi && !s.pedidosya;
          return (
            <div key={s.id} className="flex flex-col gap-[18px] rounded-[22px] bg-papel p-[26px]">
              <div className="flex flex-col gap-[6px]">
                <span className="flex flex-wrap items-center gap-[10px]">
                  <span className="font-serif text-[28px] leading-[1.1]">{s.nombre}</span>
                  {s.nueva && <span className="rounded-full bg-naranja px-2 py-[5px] text-[10px] leading-none font-semibold uppercase tracking-[.14em] text-crema">Nueva</span>}
                </span>
                <span className="text-[15px] leading-[1.4] font-light">{lineaDir(s)}, Córdoba</span>
              </div>
              <div className="flex flex-col gap-2">
                {s.rappi && (
                  <a href={s.rappi} target="_blank" rel="noopener" className={`${canal} border border-cafe/12 bg-crema py-4 text-cafe hover:border-cafe hover:text-cafe`}>
                    <span>Pedir por Rappi</span><span>↗</span>
                  </a>
                )}
                {s.pedidosya && (
                  <a href={s.pedidosya} target="_blank" rel="noopener" className={`${canal} border border-cafe/12 bg-crema py-4 text-cafe hover:border-cafe hover:text-cafe`}>
                    <span>Pedir por PedidosYa</span><span>↗</span>
                  </a>
                )}
                {wa && (
                  <a href={wa} target="_blank" rel="noopener" className={`${canal} bg-oliva py-4 text-papel hover:bg-verde hover:text-papel`}>
                    <span>Pedir por WhatsApp</span><span>↗</span>
                  </a>
                )}
                {tel && (
                  <a href={tel} className={`${canal} border border-cafe/30 bg-transparent py-[15px] text-cafe hover:bg-cafe hover:text-crema`}>
                    <span>Llamar · {s.tel}</span><span>→</span>
                  </a>
                )}
                {sinCanal && (
                  <a href={s.maps} target="_blank" rel="noopener" className={`${canal} border border-dashed border-cafe/35 py-[15px] text-cafe hover:bg-cafe hover:text-crema`}>
                    <span>Delivery a confirmar · Ver local</span><span>↗</span>
                  </a>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
