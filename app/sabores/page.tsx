import type { Metadata } from "next";
import Link from "next/link";
import SaboresList from "@/components/SaboresList";

export const metadata: Metadata = {
  title: "Sabores",
  description: "Cremas, chocolates, dulce de leche, frutas y sorbetes. Todos hechos a diario en nuestra fábrica.",
};

export default function SaboresPage() {
  return (
    <>
      <section className="bg-cafe bg-[url(/assets/bg-cafe-helado.jpg)] bg-cover bg-center text-papel">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-5 px-6 py-[clamp(56px,7vw,96px)]">
          <span className="eyebrow">Nuestros sabores</span>
          <h1 className="m-0 max-w-[900px] font-serif text-[clamp(52px,7vw,104px)] leading-[.95] font-normal tracking-[-.02em] text-balance">
            Elegí el tuyo. O dejá que te elija.
          </h1>
          <p className="m-0 max-w-[560px] text-[18px] leading-[1.6] font-light text-beige-claro">
            Todos se hacen a diario en nuestra fábrica, con leche fresca, fruta de estación y las recetas de siempre.
          </p>
        </div>
      </section>

      <SaboresList />

      <section className="bg-naranja text-crema">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-center justify-between gap-6 px-6 py-14">
          <h2 className="m-0 max-w-[640px] font-serif text-[clamp(32px,4vw,52px)] leading-[1.05] font-normal">¿Ya sabés cuáles querés? Pedilos a domicilio.</h2>
          <Link href="/pedidos" className="btn bg-papel text-naranja hover:bg-crema hover:text-naranja-oscuro">Pedí helado</Link>
        </div>
      </section>
    </>
  );
}
