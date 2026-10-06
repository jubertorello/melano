import type { Metadata } from "next";
import Image from "next/image";
import FormFranquicia from "@/components/FormFranquicia";
import { CONTACTO } from "@/lib/data";

export const metadata: Metadata = {
  title: "Franquicias",
  description: "Una receta de más de 100 años, lista para tu ciudad. Conocé el modelo de franquicias Melano.",
};

const INCLUYE = [
  ["01", "Producto y recetas", "Helado elaborado en nuestra fábrica y recetario de cafetería y pastelería estandarizado."],
  ["02", "Local y marca", "Moodboard de arquitectura, identidad, packaging y todo el universo visual de Pietro."],
  ["03", "Capacitación", "Formación del equipo en producto, servicio y atención que reconoce a cada cliente por su nombre."],
  ["04", "Acompañamiento", "Gestión, proveedores y marketing compartido para que el negocio funcione desde el día uno."],
];

const PASOS = [
  ["Nos conocemos", "Completás el formulario y agendamos una llamada."],
  ["Evaluamos la zona", "Analizamos juntos ubicación, local y proyección."],
  ["Armamos el local", "Obra, equipamiento y capacitación del equipo."],
  ["Abrimos la puerta", "Y seguimos acompañándote después de la inauguración."],
];

export default function FranquiciasPage() {
  return (
    <>
      <section className="bg-oliva text-papel">
        <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,460px),1fr))]">
          <div className="flex flex-col justify-center gap-6 px-[clamp(24px,6vw,88px)] py-[clamp(56px,7vw,110px)]">
            <span className="eyebrow">Franquicias Melano</span>
            <h1 className="m-0 font-serif text-[clamp(48px,6.4vw,96px)] leading-[.96] font-normal tracking-[-.02em] text-balance">
              Una receta de más de 100 años, lista para tu ciudad.
            </h1>
            <p className="m-0 max-w-[480px] text-[18px] leading-[1.6] font-light text-oliva-claro">
              Queremos crecer sin perder la esencia. Por eso buscamos socios estratégicos que cuiden cada detalle como si fuera la primera heladería de Pietro.
            </p>
            <a href="#form" className="btn self-start bg-naranja text-crema hover:bg-naranja-oscuro hover:text-crema">Quiero información</a>
          </div>
          <div className="min-h-[clamp(320px,55vw,520px)] bg-verde bg-[url(/assets/bg-verde-pietro.jpg)] bg-cover bg-[70%_100%]" />
        </div>
      </section>

      <section className="bg-crema">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-11 px-6 py-[clamp(72px,9vw,120px)]">
          <h2 className="m-0 max-w-[760px] font-serif text-[clamp(38px,4.6vw,60px)] leading-[1.02] font-normal tracking-[-.015em] text-balance">
            Todo lo que aprendimos en generaciones, en tus manos.
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,260px),1fr))] gap-4">
            {INCLUYE.map(([n, t, d]) => (
              <div key={n} className="flex flex-col gap-[14px] rounded-[20px] bg-papel p-7">
                <span className="font-serif text-[44px] leading-none text-naranja">{n}</span>
                <span className="font-serif text-[24px] leading-[1.15]">{t}</span>
                <span className="text-[15px] leading-[1.55] font-light">{d}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-papel">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-center gap-12 px-6 py-[clamp(72px,9vw,120px)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-arena">
            <Image src="/assets/fachada-melano.jpg" alt="Fachada de un local Melano con el cartel de Pietro" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover object-[60%_50%]" />
          </div>
          <div className="flex flex-col gap-[22px]">
            <span className="eyebrow text-oliva">Cómo seguimos</span>
            <h2 className="m-0 font-serif text-[clamp(36px,4.4vw,56px)] leading-[1.02] font-normal text-balance">De la primera charla a la primera cucharita.</h2>
            <div className="flex flex-col border-b border-cafe/18">
              {PASOS.map(([t, d], i) => (
                <div key={t} className="grid grid-cols-[48px_1fr] gap-4 border-t border-cafe/18 py-[18px]">
                  <span className="font-hand text-[26px] leading-none font-medium text-naranja">{i + 1}.</span>
                  <div className="flex flex-col gap-1">
                    <span className="font-serif text-[22px] leading-[1.2]">{t}</span>
                    <span className="text-[15px] leading-[1.5] font-light">{d}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="form" className="scroll-mt-[110px] bg-oliva text-papel">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,380px),1fr))] items-start gap-[clamp(40px,6vw,80px)] px-6 py-[clamp(72px,9vw,120px)]">
          <div className="flex flex-col gap-5">
            <h2 className="m-0 font-serif text-[clamp(40px,5vw,64px)] leading-none font-normal text-balance">Contanos dónde te imaginás tu Melano.</h2>
            <p className="m-0 max-w-[440px] text-[17px] leading-[1.6] font-light text-oliva-claro">
              También podés escribirnos a <a href={`mailto:${CONTACTO.email}`} className="text-papel hover:text-papel">{CONTACTO.email}</a>.
            </p>
            <Image src="/assets/sticker-recetas.png" alt="" width={800} height={656} className="mt-3 h-auto w-[clamp(150px,20vw,260px)] -rotate-[5deg]" />
          </div>
          <FormFranquicia />
        </div>
      </section>
    </>
  );
}
