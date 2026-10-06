import Image from "next/image";
import Link from "next/link";
import { HeroFondo, HeroRecetario, HeroVideos } from "@/components/home/Heroes";
import Sucursales from "@/components/home/Sucursales";
import { CONTACTO, SABORES, TEMPORADA } from "@/lib/data";

const MARQUESINA = SABORES.slice(0, 14).map((s) => s.nombre);
const CLASICOS = SABORES.filter((s) => s.clasico).slice(0, 6);
const DE_TEMPORADA = SABORES.filter((s) => s.cat === "temporada");

const linkFlecha = "self-start text-[13px] leading-none font-semibold uppercase tracking-[.12em] text-cafe underline-offset-[6px] hover:text-cafe";

// Tres portadas: "videos" (tres videos en arco, en /), "recetario" (Pietro
// con el cucurucho, en /version-2) y "fondo" (los mismos videos de fondo, en
// /version-3).
export default function Home({ portada }: { portada: "recetario" | "videos" | "fondo" }) {
  return (
    <>
      {portada === "recetario" ? <HeroRecetario /> : portada === "videos" ? <HeroVideos /> : <HeroFondo />}

      <div className="overflow-hidden bg-cafe py-[18px] text-papel" aria-hidden>
        <div className="flex w-max animate-marquee">
          {[...MARQUESINA, ...MARQUESINA].map((n, i) => (
            <span key={i} className="flex items-center gap-7 pr-7 font-serif text-[24px] leading-none whitespace-nowrap">
              {n}
              <Image src="/assets/cono-beige.png" alt="" width={173} height={300} className="h-[22px] w-auto opacity-90" />
            </span>
          ))}
        </div>
      </div>

      <section id="historia" className="scroll-mt-[110px] bg-crema">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-[clamp(40px,6vw,96px)] px-6 py-[clamp(72px,9vw,128px)]">
          <div className="relative flex justify-center">
            <div className="absolute inset-[8%_6%_0] rounded-[50%_50%_24px_24px] bg-papel" />
            <Image src="/assets/pietro-leyendo.png" alt="Pietro leyendo su recetario" width={800} height={957} className="relative h-auto w-[min(78%,420px)]" />
            <Image src="/assets/sticker-recetario.png" alt="" width={700} height={853} className="absolute right-0 bottom-[-10px] h-auto w-[clamp(96px,14vw,150px)] rotate-[9deg] drop-shadow-[0_12px_18px_rgba(89,50,22,.18)]" />
          </div>
          <div className="flex min-w-0 flex-col gap-6">
            <span className="eyebrow text-oliva">Nuestra historia</span>
            <h2 className="m-0 font-serif text-[clamp(40px,5vw,68px)] leading-[1.02] font-normal tracking-[-.015em] text-balance">Más de 100 años haciendo historia.</h2>
            <p className="m-0 max-w-[560px] text-[18px] leading-[1.65] font-light text-pretty">
              En 1910, Pietro Melano llegó a la Argentina desde el Piamonte, trayendo consigo el oficio de heladero y pastelero. Se instaló en Las Varillas y empezó a elaborar sus primeros helados de manera completamente artesanal. Hoy, más de un siglo después, Melano está en manos de la quinta generación.
            </p>
            <p className="m-0 font-hand text-[30px] leading-[1.15] font-medium text-naranja">Cinco generaciones, una misma pasión.</p>
            <div className="mt-2 grid grid-cols-3 gap-px overflow-hidden rounded-[16px] border border-cafe/15 bg-cafe/15">
              {[["1910", "Pietro llega desde el Piamonte."], ["1958", "La familia vuelve a empezar en calle Avellaneda."], ["5ª", "Generación al frente, hoy."]].map(([n, t]) => (
                <div key={n} className="flex flex-col gap-[6px] bg-crema px-3 py-4 sm:p-[22px]">
                  <span className="font-serif text-[30px] leading-none sm:text-[40px]">{n}</span>
                  <span className="text-[12.5px] leading-[1.35] font-light sm:text-[14px] sm:leading-[1.4]">{t}</span>
                </div>
              ))}
            </div>
            <Link href="/historia" className={linkFlecha}>Leer la historia completa →</Link>
          </div>
        </div>
      </section>

      <section className="bg-papel">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-11 px-6 py-[clamp(72px,9vw,120px)]">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="flex flex-col gap-4">
              <span className="eyebrow text-oliva">Los clásicos</span>
              <h2 className="m-0 font-serif text-[clamp(40px,5vw,64px)] leading-none font-normal tracking-[-.015em]">Del recetario de Pietro</h2>
            </div>
            <Link href="/sabores" className={linkFlecha}>Ver todos los sabores →</Link>
          </div>
          <div className="grid grid-cols-2 gap-[clamp(10px,2vw,16px)] sm:grid-cols-3 lg:grid-cols-6">
            {CLASICOS.map((s) => (
              <Link
                key={s.nombre}
                href="/sabores"
                className="flex flex-col gap-[clamp(10px,1.6vw,16px)] rounded-[20px] bg-crema px-[clamp(12px,2vw,20px)] pt-[clamp(12px,2vw,22px)] pb-[clamp(14px,2vw,24px)] text-cafe no-underline transition-[transform,box-shadow] duration-250 hover:-translate-y-1 hover:text-cafe hover:shadow-[0_18px_30px_-18px_rgba(89,50,22,.35)]"
              >
                {s.img && (
                  <div className="relative mx-[-4px] mt-[-6px] aspect-[4/5] overflow-hidden rounded-[14px]" style={{ background: s.color }}>
                    <Image src={s.img} alt={s.nombre} fill sizes="(min-width: 1280px) 200px, (min-width: 640px) 25vw, 50vw" className="object-cover" />
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <span className="font-serif text-[clamp(19px,2vw,24px)] leading-[1.1]">{s.nombre}</span>
                  <span className="text-[clamp(13px,1.2vw,14px)] leading-[1.45] font-light text-cafe-suave">{s.desc}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-naranja text-crema">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-start gap-12 px-6 py-[clamp(72px,9vw,120px)]">
          <div className="flex flex-col gap-5">
            <span className="eyebrow">De temporada · {TEMPORADA.titulo}</span>
            <h2 className="m-0 font-serif text-[clamp(44px,5.4vw,76px)] leading-[.98] font-normal tracking-[-.02em] text-balance">Lo que trae la estación, por poco tiempo.</h2>
            <p className="m-0 font-hand text-[28px] leading-[1.1] font-medium text-papel">{TEMPORADA.hasta}</p>
          </div>
          <div className="flex flex-col gap-[14px]">
            {DE_TEMPORADA.length === 0 ? (
              <div className="flex flex-col items-start gap-[18px] rounded-[24px] border border-dashed border-crema/45 bg-crema/8 p-8">
                <Image src="/assets/sticker-del-recetario.png" alt="Del recetario de Pietro" width={2394} height={842} className="h-auto w-[clamp(200px,24vw,300px)] -rotate-3" />
                <span className="font-serif text-[30px] leading-[1.1]">Pietro está probando los sabores de esta temporada.</span>
                <span className="text-[16px] leading-[1.5] font-light">Seguinos en Instagram para enterarte primero cuando lleguen.</span>
                <a href={CONTACTO.instagram} target="_blank" rel="noopener" className="rounded-full bg-papel px-5 py-[14px] text-[12px] leading-none font-semibold uppercase tracking-[.12em] text-naranja no-underline hover:bg-crema hover:text-naranja-oscuro">
                  {CONTACTO.instagramUser}
                </a>
              </div>
            ) : (
              DE_TEMPORADA.map((s) => (
                <div key={s.nombre} className="grid grid-cols-[auto_1fr] items-center gap-[22px] rounded-[20px] border border-crema/22 bg-crema/8 p-[22px]">
                  <div className="h-[84px] w-[84px] rounded-full shadow-[inset_-8px_-10px_0_rgba(0,0,0,.08)]" style={{ background: s.color }} />
                  <div className="flex min-w-0 flex-col gap-2">
                    <span className="font-serif text-[28px] leading-[1.05]">{s.nombre}</span>
                    <span className="text-[15px] leading-[1.45] font-light">{s.desc}</span>
                    <span className="text-[11px] leading-none font-semibold uppercase tracking-[.14em] text-papel">{s.tags.join(" · ")}</span>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      <section className="bg-crema">
        <div className="mx-auto flex max-w-[1280px] flex-wrap items-stretch gap-5 px-6 py-[clamp(72px,9vw,120px)]">
          <div className="flex flex-[1_1_300px] flex-col justify-between gap-7 py-2 pr-2">
            <div className="flex flex-col gap-[18px]">
              <span className="eyebrow text-oliva">Helados y cafetería</span>
              <h2 className="m-0 font-serif text-[clamp(38px,4.4vw,58px)] leading-[1.02] font-normal tracking-[-.015em] text-balance">Un rincón que te recibe.</h2>
              <p className="m-0 text-[17px] leading-[1.6] font-light text-pretty">
                Café recién molido, medialunas y cannoli de la casa. Espacios pensados para frenar, compartir y quedarte un rato más.
              </p>
            </div>
            <Image src="/assets/sticker-melano-vasito.png" alt="Sticker Melano" width={2380} height={2192} className="h-auto w-[clamp(170px,20vw,260px)] -rotate-[4deg]" />
          </div>
          <div className="grid min-h-[clamp(340px,50vw,460px)] min-w-0 flex-[2_1_520px] grid-cols-2 grid-rows-[repeat(2,minmax(160px,1fr))] gap-[clamp(10px,2vw,20px)]">
            {[
              { src: "/fotos/dsc-0313.jpg", alt: "Barista sirviendo un latte", big: true },
              { src: "/fotos/dsc-0408.jpg", alt: "Entregando un cucurucho", big: false },
              { src: "/fotos/dsc-0393.jpg", alt: "Puerta con los horarios de la casa", big: false },
            ].map((f) => (
              <div key={f.src} className={`relative overflow-hidden rounded-[24px] bg-papel ${f.big ? "row-span-2" : ""}`}>
                <Image src={f.src} alt={f.alt} fill sizes="(min-width: 1024px) 420px, 50vw" className="object-cover" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="sucursales" className="scroll-mt-[100px] bg-papel">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-9 px-6 py-[clamp(72px,9vw,120px)]">
          <div className="flex flex-col gap-4">
            <span className="eyebrow text-oliva">Sucursales</span>
            <h2 className="m-0 font-serif text-[clamp(48px,6vw,88px)] leading-[.95] font-normal tracking-[-.02em]">Tu Melano más cerca.</h2>
          </div>
          <Sucursales />
        </div>
      </section>

      <section className="bg-crema">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] gap-5 px-6 py-[clamp(56px,7vw,96px)]">
          <Sumate
            href="/franquicias" bg="bg-oliva text-papel hover:text-papel"
            eyebrow="Franquicias" titulo="Llevá Melano a tu ciudad."
            texto="Recetas, marca y acompañamiento de más de un siglo de oficio." textoClass="text-oliva-claro"
            cta="Conocé el modelo →" ctaClass="bg-naranja text-crema"
            img={<Image src="/assets/logo-full-beige.png" alt="Melano" width={900} height={628} className="mb-[clamp(36px,4.5vw,56px)] ml-auto block h-auto w-[clamp(72px,10vw,160px)] min-w-0 flex-[0_1_auto] opacity-95" />}
          />
        </div>
      </section>
    </>
  );
}

function Sumate(p: { href: string; bg: string; eyebrow: string; titulo: string; texto: string; textoClass: string; cta: string; ctaClass: string; img: React.ReactNode }) {
  return (
    <Link href={p.href} className={`relative flex min-h-[360px] flex-col justify-between gap-7 overflow-hidden rounded-[28px] p-[clamp(28px,4vw,48px)] no-underline transition-transform duration-250 hover:-translate-y-1 ${p.bg}`}>
      <div className="relative z-[1] flex max-w-[360px] flex-col gap-4">
        <span className="eyebrow">{p.eyebrow}</span>
        <h2 className="m-0 font-serif text-[clamp(36px,4vw,54px)] leading-[1.02] font-normal tracking-[-.015em] text-balance">{p.titulo}</h2>
        <p className={`m-0 text-[16px] leading-[1.55] font-light ${p.textoClass}`}>{p.texto}</p>
      </div>
      <div className="mb-[clamp(-48px,-4vw,-28px)] flex flex-wrap items-end justify-between gap-4">
        <span className={`mb-[clamp(28px,4vw,48px)] flex-none rounded-full px-[22px] py-4 text-[13px] leading-none font-semibold uppercase tracking-[.12em] ${p.ctaClass}`}>{p.cta}</span>
        {p.img}
      </div>
    </Link>
  );
}
