import type { Metadata } from "next";
import Image from "next/image";
import ContactoForm from "@/components/ContactoForm";
import Faq from "@/components/Faq";
import { CONTACTO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Escribinos por WhatsApp, email o Instagram. Preguntas frecuentes sobre Melano.",
};

const FAQ: [string, string][] = [
  ["¿Tienen opciones sin lácteos?", "Sí, todos nuestros sorbetes. Además tienen 50% de fruta. Consultá en cada sucursal por alérgenos."],
  ["¿Hacen tortas heladas o pedidos para eventos?", "Sí, con 48 h de anticipación. Escribinos por WhatsApp con la fecha y la cantidad de personas."],
  ["¿Hasta dónde llega el delivery?", "Cada sucursal cubre un radio aproximado de 3 km. Al armar tu pedido te mostramos la sucursal más cercana."],
  ["¿Puedo ir con mi mascota?", "En las sucursales con patio, sí. Preguntá en cada local."],
];

const CANALES = [
  { label: "WhatsApp", valor: CONTACTO.whatsappTxt, href: CONTACTO.whatsapp, externo: true },
  { label: "Email", valor: CONTACTO.email, href: `mailto:${CONTACTO.email}`, externo: false },
  { label: "Instagram", valor: CONTACTO.instagramUser, href: CONTACTO.instagram, externo: true },
];

export default function ContactoPage() {
  return (
    <>
      <section className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-[clamp(40px,6vw,80px)] px-6 py-[clamp(56px,7vw,96px)]">
        <div className="flex flex-col gap-7">
          <span className="eyebrow text-oliva">Contacto</span>
          <h1 className="m-0 font-serif text-[clamp(48px,6vw,88px)] leading-[.96] font-normal tracking-[-.02em] text-balance">
            Contanos, que te escuchamos.
          </h1>
          <div className="flex flex-col border-b border-cafe/18">
            {CANALES.map((c) => (
              <a
                key={c.label}
                href={c.href}
                {...(c.externo ? { target: "_blank", rel: "noopener" } : {})}
                className="flex items-center justify-between gap-3 border-t border-cafe/18 py-5 text-cafe no-underline hover:text-naranja"
              >
                <span className="flex flex-col gap-1">
                  <span className="field-label">{c.label}</span>
                  <span className="font-serif text-[24px] leading-[1.2]">{c.valor}</span>
                </span>
                <span>→</span>
              </a>
            ))}
          </div>
          <Image src="/assets/sticker-croissant.png" alt="" width={800} height={801} className="h-auto w-[clamp(130px,18vw,220px)] -rotate-[4deg]" />
        </div>
        <ContactoForm />
      </section>

      <section className="bg-papel">
        <div className="mx-auto flex max-w-[900px] flex-col gap-7 px-6 py-[clamp(64px,8vw,104px)]">
          <h2 className="m-0 font-serif text-[clamp(36px,4.4vw,56px)] leading-none font-normal">Preguntas frecuentes</h2>
          <Faq items={FAQ} />
        </div>
      </section>
    </>
  );
}
