import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PedidosList from "@/components/PedidosList";

export const metadata: Metadata = {
  title: "Pedí helado",
  description: "Melano, hasta tu casa. Pedí por Rappi, PedidosYa o WhatsApp a tu sucursal.",
};

export default function PedidosPage() {
  return (
    <>
      <section className="bg-naranja bg-[url(/assets/bg-naranja-pattern.jpg)] bg-cover bg-center text-crema">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-10 px-6 py-[clamp(56px,7vw,96px)]">
          <div className="flex flex-col gap-[22px]">
            <span className="eyebrow">Pedí helado</span>
            <h1 className="m-0 font-serif text-[clamp(52px,7vw,104px)] leading-[.95] font-normal tracking-[-.02em] text-balance">Melano, hasta tu casa.</h1>
            <p className="m-0 max-w-[480px] text-[18px] leading-[1.6] font-light">
              Elegí tu ciudad y pedí por la app que prefieras, o escribile directo a tu sucursal por WhatsApp.
            </p>
          </div>
          <div className="flex justify-center">
            <Image src="/assets/sticker-vasito.png" alt="" width={800} height={737} priority className="h-auto w-[clamp(150px,30vw,320px)] rotate-6 drop-shadow-[0_20px_30px_rgba(0,0,0,.25)]" />
          </div>
        </div>
      </section>

      <section className="mx-auto flex max-w-[1280px] flex-col gap-8 px-6 pt-[clamp(48px,6vw,80px)] pb-[110px]">
        <PedidosList />

        <div className="flex flex-wrap items-center justify-between gap-5 rounded-[22px] border border-dashed border-cafe/35 p-7">
          <div className="flex items-center gap-[18px]">
            <Image src="/assets/cono-marron.png" alt="" width={173} height={300} className="h-12 w-auto" />
            <span className="max-w-[560px] font-serif text-[22px] leading-[1.3]">¿Todavía no sabés qué sabores pedir? Mirá el recetario completo.</span>
          </div>
          <Link href="/sabores" className="btn bg-cafe px-[22px] py-4 text-[12px] text-crema hover:bg-oliva hover:text-crema">Ver sabores</Link>
        </div>
      </section>
    </>
  );
}
