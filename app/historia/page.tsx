import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Nuestra historia",
  description: "Desde 1910, cinco generaciones de la familia Melano haciendo helado artesanal en Las Varillas, Córdoba.",
};

const LINEA = [
  ["1910", "Pietro llega desde el Piamonte con el oficio de heladero y pastelero."],
  ["1914", "Con su esposa se instalan definitivamente en Las Varillas. Nace Pedro Melano e Hijos: caramelos, panificación y cerca de cien empleados."],
  ["1952", "La empresa debe cerrar sus puertas."],
  ["1958", "La familia retoma la elaboración de helados en un local de calle Avellaneda."],
  ["Hoy", "La quinta generación sigue haciendo crecer la historia, con raíces en Las Varillas."],
];

const cuerpo = "m-0 text-[18px] leading-[1.7] font-light text-pretty";

export default function HistoriaPage() {
  return (
    <>
      <section className="bg-papel bg-[url(/assets/bg-papel.jpg)] bg-cover bg-center">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,420px),1fr))] items-center gap-12 px-6 py-[clamp(56px,7vw,104px)]">
          <div className="flex min-w-0 flex-col gap-6">
            <span className="eyebrow text-oliva">Nuestra historia</span>
            <h1 className="m-0 font-serif text-[clamp(52px,7vw,104px)] leading-[.95] font-normal tracking-[-.02em] text-balance">Más de 100 años haciendo historia.</h1>
            <p className="m-0 max-w-[520px] text-[clamp(17px,1.5vw,20px)] leading-[1.6] font-light text-pretty">
              Hay historias que comienzan con una receta. La de Melano comenzó con un oficio, una familia y el deseo de hacer algo que perdurara en el tiempo.
            </p>
          </div>
          <div className="relative flex justify-center">
            <Image src="/assets/pietro-leyendo.png" alt="Pietro leyendo su recetario" width={800} height={957} priority className="h-auto w-[min(78%,420px)]" />
            <span className="absolute top-[6%] right-[4%] -rotate-[8deg] font-hand text-[34px] leading-none font-medium text-naranja">Piamonte, 1910</span>
          </div>
        </div>
      </section>

      <section className="bg-crema">
        <div className="mx-auto flex max-w-[760px] flex-col gap-6 px-6 py-[clamp(72px,9vw,120px)]">
          <span className="eyebrow text-oliva">Los comienzos</span>
          <p className="m-0 font-serif text-[clamp(26px,2.8vw,34px)] leading-[1.35] text-pretty">
            En 1910, Pietro Melano llegó a la Argentina desde la región del Piamonte, Italia, trayendo consigo el oficio de heladero y pastelero.
          </p>
          <p className={cuerpo}>
            Se instaló inicialmente en Las Varas y comenzó a elaborar sus primeros productos de manera completamente artesanal. En aquellos primeros años, hacer helado requería mucho más que una receta. Era conocer los ingredientes, trabajar con lo que había disponible y encontrar la manera de transformar materias primas simples en algo extraordinario.
          </p>
          <p className={cuerpo}>
            Pietro preparaba la crema para sus helados artesanalmente y, ante la falta de los elementos necesarios para su conservación, encontraba en Las Varillas la forma de llevar adelante su elaboración.
          </p>
        </div>
      </section>

      <section className="bg-oliva text-papel">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-12 px-6 py-[clamp(72px,9vw,120px)]">
          <h2 className="m-0 max-w-[760px] font-serif text-[clamp(38px,4.6vw,60px)] leading-[1.02] font-normal tracking-[-.015em] text-balance">
            Las historias que perduran encuentran la manera de volver a empezar.
          </h2>
          <div className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-px border-y border-papel/20 bg-papel/20">
            {LINEA.map(([anio, txt]) => (
              <div key={anio} className="flex flex-col gap-3 bg-oliva px-6 pt-7 pb-8">
                <span className="font-serif text-[56px] leading-none">{anio}</span>
                <span className="text-[15px] leading-[1.55] font-light text-oliva-claro">{txt}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-crema">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center gap-[clamp(40px,6vw,88px)] px-6 py-[clamp(72px,9vw,120px)]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[24px] bg-papel">
            <Image src="/fotos/dsc-0277.jpg" alt="Pared con objetos y recetas de la familia" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover" />
          </div>
          <div className="flex flex-col gap-[22px]">
            <span className="eyebrow text-oliva">Cinco generaciones, una misma pasión</span>
            <h2 className="m-0 font-serif text-[clamp(36px,4.4vw,56px)] leading-[1.04] font-normal text-balance">Conservar una historia no significa quedarse en el pasado.</h2>
            <p className={cuerpo}>
              Cada generación de la familia Melano fue dejando su propia huella, incorporando nuevos conocimientos, nuevas ideas y nuevas formas de hacer, pero conservando aquello que siempre estuvo en el corazón de la marca: el respeto por el producto y la pasión por hacer un buen helado.
            </p>
            <p className={cuerpo}>
              Seleccionamos cuidadosamente nuestras materias primas, desarrollamos nuestras recetas y prestamos atención a cada ingrediente y a cada etapa del proceso. Es nuestra manera de unir el oficio artesanal que nos enseñaron nuestros antepasados con una mirada actual, inquieta y comprometida con la calidad.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-naranja text-crema">
        <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,400px),1fr))] items-center gap-[clamp(40px,6vw,88px)] px-6 py-[clamp(72px,9vw,120px)]">
          <div className="flex flex-col gap-[22px]">
            <span className="eyebrow">Una historia que sigue creciendo</span>
            <h2 className="m-0 font-serif text-[clamp(36px,4.4vw,56px)] leading-[1.04] font-normal text-balance">
              Antes de ser solamente una heladería, Melano fue una familia alrededor de una mesa.
            </h2>
            <p className={cuerpo}>
              La incorporación nuevamente de la cafetería y la pastelería a nuestros locales es también una forma de volver a nuestros orígenes. Queremos que nuestras heladerías sean lugares de encuentro.
            </p>
            <p className="m-0 font-hand text-[28px] leading-[1.3] font-medium text-papel">
              De charlas que se alargan. De familias que vuelven. De primeras citas. De chicos que eligen su sabor favorito.
            </p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="relative aspect-[4/3] overflow-hidden rounded-[24px] bg-naranja-oscuro">
              <Image src="/assets/familia-melano.jpg" alt="Cuatro integrantes de la familia Melano sentados bajo el cartel Tradición viva, cucharita a cucharita" fill sizes="(min-width: 1024px) 600px, 100vw" className="object-cover object-[50%_40%]" />
            </div>
            <span className="font-hand text-[22px] leading-[1.2] font-medium text-papel">La familia Melano · tradición viva</span>
          </div>
        </div>
      </section>

      <section className="bg-papel bg-[url(/assets/bg-papel.jpg)] bg-cover bg-center">
        <div className="mx-auto flex max-w-[820px] flex-col items-center gap-[26px] px-6 py-[clamp(80px,10vw,140px)] text-center">
          <Image src="/assets/cono-marron.png" alt="" width={173} height={300} className="h-16 w-auto" />
          <h2 className="m-0 font-serif text-[clamp(38px,4.8vw,64px)] leading-[1.04] font-normal text-balance">El futuro también forma parte de nuestra historia.</h2>
          <p className={`${cuerpo} max-w-[640px]`}>
            Lo artesanal es nuestro punto de partida. El conocimiento nos permite evolucionar. La innovación nos impulsa a seguir creciendo. Y la familia nos recuerda siempre de dónde venimos.
          </p>
          <p className="m-0 max-w-[640px] font-serif text-[clamp(22px,2.4vw,28px)] leading-[1.45] italic text-pretty">
            Los años pueden pasar. Las recetas pueden evolucionar. Pero hay algo que queremos que permanezca intacto: el placer de compartir un buen helado y la historia que hay detrás de él.
          </p>
          <Link href="/sabores" className="btn mt-2 bg-cafe text-crema hover:bg-oliva hover:text-crema">Probá nuestros sabores</Link>
        </div>
      </section>
    </>
  );
}
