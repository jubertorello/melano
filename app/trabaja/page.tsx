import type { Metadata } from "next";
import Image from "next/image";
import FormEquipo from "@/components/FormEquipo";

export const metadata: Metadata = {
  title: "Trabajá con nosotros",
  description: "Sumate al equipo de Melano: heladería, café, pastelería y atención al público.",
};

const MOTIVOS = [
  ["Aprendés un oficio", "Te capacitamos en helado artesanal, café y pastelería."],
  ["Horarios que se adaptan", "Turnos de mañana, tarde, noche o fines de semana."],
  ["Crecés con nosotros", "Cada nueva sucursal abre lugares para encargados y referentes."],
];

export default function TrabajaPage() {
  return (
    <>
      <section className="bg-papel bg-[url(/assets/bg-papel.jpg)] bg-cover bg-center">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-12 px-6 py-[clamp(56px,7vw,96px)]">
          <div className="flex flex-col gap-6">
            <span className="eyebrow text-oliva">Trabajá con nosotros</span>
            <h1 className="m-0 font-serif text-[clamp(48px,6.4vw,96px)] leading-[.96] font-normal tracking-[-.02em] text-balance">
              En esta mesa siempre hay lugar.
            </h1>
            <p className="m-0 max-w-[480px] text-[18px] leading-[1.6] font-light">
              Somos una comunidad que se construye con cada amigo, cliente y colaborador que se suma. Si te gusta el oficio y la gente, sumate.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-[14px]">
            <div className="relative aspect-[3/4] overflow-hidden rounded-[24px] bg-arena">
              <Image src="/fotos/dsc-0377.jpg" alt="Barista de Melano" fill sizes="(min-width: 1024px) 300px, 50vw" className="object-cover" priority />
            </div>
            <div className="relative mt-12 aspect-[3/4] overflow-hidden rounded-[24px] bg-arena">
              <Image src="/fotos/dsc-0415.jpg" alt="Integrante del equipo Melano armando un pote de helado" fill sizes="(min-width: 1024px) 300px, 50vw" className="object-cover object-[50%_40%]" priority />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-crema">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,240px),1fr))] gap-7 px-6 py-[clamp(64px,8vw,104px)]">
          {MOTIVOS.map(([t, d]) => (
            <div key={t} className="flex flex-col gap-[10px] border-t-2 border-cafe pt-5">
              <span className="font-serif text-[26px] leading-[1.15]">{t}</span>
              <span className="text-[15px] leading-[1.55] font-light">{d}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-cafe bg-[url(/assets/bg-cafe-pasteles.jpg)] bg-cover bg-center text-papel">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-[clamp(40px,6vw,80px)] px-6 py-[clamp(72px,9vw,120px)]">
          <div className="flex flex-col gap-5">
            <h2 className="m-0 font-serif text-[clamp(40px,5vw,64px)] leading-none font-normal text-balance">Postulate en dos minutos.</h2>
            <p className="m-0 max-w-[420px] text-[17px] leading-[1.6] font-light text-beige-claro">
              Guardamos tu postulación aunque hoy no haya búsquedas abiertas en tu zona.
            </p>
            <Image src="/assets/pietro-cafe.png" alt="" width={750} height={1033} className="mt-3 h-auto w-[clamp(130px,18vw,220px)]" />
          </div>
          <FormEquipo />
        </div>
      </section>
    </>
  );
}
