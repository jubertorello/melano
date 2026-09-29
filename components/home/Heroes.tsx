import Image from "next/image";
import Link from "next/link";
import AutoVideo from "@/components/home/AutoVideo";

// Las tres portadas de la home: recetario (/), videos en arco (/version-2)
// y videos de fondo (/version-3).

const ease = "cubic-bezier(.2,.7,.2,1)";

// `claro`: texto crema, para ir sobre los videos de fondo
function Textos({ min, claro = false }: { min: string; claro?: boolean }) {
  const texto = claro ? "text-crema" : "text-cafe";
  return (
    <div className="flex min-w-0 flex-col gap-7">
      <span className={`eyebrow ${claro ? "text-papel" : "text-oliva"}`} style={{ animation: `hUp .7s ${ease} .1s both` }}>Desde 1910 · Helados y cafetería</span>
      <h1
        className={`m-0 font-serif text-[clamp(56px,8vw,116px)] leading-[.95] font-normal tracking-[-.02em] text-balance ${texto}`}
        style={{ animation: `hUp .9s ${ease} .25s both` }}
      >
        Volver sin irte.
      </h1>
      <p
        className={`m-0 text-[clamp(17px,1.5vw,20px)] leading-[1.55] font-light text-pretty ${texto} ${min}`}
        style={{ animation: `hUp .9s ${ease} .45s both` }}
      >
        Helado que te recuerda a tu infancia. Sabores que te recuerdan a tu abuela. Café que te abraza como tu casa. Hecho con las recetas que Pietro trajo del Piamonte.
      </p>
      <div className="flex flex-wrap gap-3" style={{ animation: `hUp .9s ${ease} .6s both` }}>
        {claro ? (
          <>
            <Link href="/sabores" className="btn bg-papel text-cafe hover:bg-crema hover:text-cafe">Ver sabores</Link>
            <a href="#sucursales" className="btn border border-papel bg-transparent px-[25px] py-[17px] text-papel hover:bg-papel hover:text-cafe">Encontrá tu Melano</a>
          </>
        ) : (
          <>
            <Link href="/sabores" className="btn bg-cafe text-crema hover:bg-oliva hover:text-crema">Ver sabores</Link>
            <a href="#sucursales" className="btn border border-cafe bg-transparent px-[25px] py-[17px] text-cafe hover:bg-cafe hover:text-crema">Encontrá tu Melano</a>
          </>
        )}
      </div>
    </div>
  );
}

export function HeroRecetario() {
  return (
    <section data-hero-anim="" className="relative overflow-hidden bg-papel bg-[url(/assets/bg-papel.jpg)] bg-cover bg-center">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,440px),1fr))] items-center gap-2 px-6 sm:gap-12 pt-[clamp(48px,7vw,96px)] pb-[clamp(56px,7vw,110px)]">
        <Textos min="max-w-[480px]" />
        {/* Posiciones: sin prefijo = móvil (escenario de 360px centrado, todo
            dentro de la pantalla); con sm: = las del diseño original. */}
        <div className="relative mx-auto -mt-5 flex min-h-[450px] w-full max-w-[360px] items-end justify-center sm:mx-0 sm:mt-0 sm:min-h-[clamp(340px,60vw,520px)] sm:max-w-none">
          <Image
            src="/assets/sticker-recetas.png" alt="" width={800} height={656}
            className="absolute top-[60px] left-0 h-auto w-[134px] drop-shadow-[0_18px_24px_rgba(89,50,22,.18)] sm:top-[-12px] sm:left-[-10px] sm:w-[clamp(130px,24vw,300px)]"
            style={{ transform: "rotate(-6deg)", animation: "hPop .8s cubic-bezier(.3,1.4,.5,1) .9s both" }}
          />
          <div
            className="absolute right-0 bottom-9 aspect-square w-[170px] rounded-full bg-naranja sm:right-[clamp(-30px,-2vw,-8px)] sm:bottom-[clamp(16px,4vw,50px)] sm:w-[clamp(160px,24vw,320px)]"
            style={{ animation: "hCircle .8s cubic-bezier(.3,1.3,.5,1) .5s both" }}
          />
          <Image
            src="/assets/cucurucho-mano.png" alt="Cucurucho Melano de frutilla y dulce de leche" width={800} height={1249} priority
            className="absolute right-[-2px] bottom-3 h-[250px] w-auto max-w-[48%] object-contain object-right-bottom drop-shadow-[0_18px_24px_rgba(89,50,22,.22)] sm:right-[calc(clamp(12px,2.6vw,30px)_-_48px)] sm:bottom-[clamp(10px,3vw,40px)] sm:h-[clamp(260px,44vw,450px)]"
            style={{
              transform: "rotate(6deg)", transformOrigin: "bottom center",
              animation: "hConeIn 1s cubic-bezier(.2,.8,.2,1) .7s both, hFloat 4.5s ease-in-out 1.7s infinite",
            }}
          />
          <Image
            src="/assets/pietro-cucurucho.png" alt="Pietro con un cucurucho" width={700} height={1148} priority
            className="relative mr-[84px] h-[340px] w-auto max-w-full object-contain sm:mr-0 sm:h-[clamp(300px,50vw,500px)]"
            style={{ transformOrigin: "50% 100%", animation: "hRise .9s cubic-bezier(.2,.8,.2,1) .35s both" }}
          />
          <span
            className="absolute top-[112px] right-[6px] z-[3] flex flex-col items-end text-center font-hand text-[22px] leading-[1.05] font-medium text-naranja sm:top-[clamp(-60px,-4.5vw,-20px)] sm:right-[max(calc(clamp(8px,3vw,40px)_-_74px),min(-16px,calc(624px_-_50vw)))] sm:text-[clamp(22px,3vw,30px)]"
          >
            <span style={{ transform: "rotate(-8deg)", animation: "hWrite 1s steps(14,end) 1.6s both" }}>la receta<br />de siempre</span>
            <svg
              viewBox="0 0 80 70" fill="none" stroke="#CD3A17" strokeWidth={3.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden
              className="mr-6 h-auto w-10 sm:mr-[clamp(24px,4vw,48px)] sm:w-[clamp(40px,5vw,56px)]"
              style={{ transform: "scaleX(-1)" }}
            >
              <path d="M8 6 C 30 10, 58 26, 64 58" pathLength={100} style={{ strokeDasharray: 100, animation: "hDraw .6s ease-out 2.6s both" }} />
              <path d="M52 50 L 64 60 L 72 46" pathLength={100} style={{ strokeDasharray: 100, animation: "hDraw .3s ease-out 3.15s both" }} />
            </svg>
          </span>
        </div>
      </div>
    </section>
  );
}

const VIDEOS = [
  { src: "video-pistacho", label: "Helado de pistacho", mb: "clamp(30px,5vw,60px)", delay: ".5s" },
  { src: "video-cucurucho", label: "Armando un cucurucho de frutilla y dulce de leche", mb: "clamp(60px,9vw,110px)", delay: ".35s" },
  { src: "video-pote", label: "Armando un pote de helado para llevar", mb: "clamp(10px,2vw,24px)", delay: ".65s" },
];

export function HeroVideos() {
  return (
    <section data-hero-anim="" className="relative overflow-hidden bg-papel bg-[url(/assets/bg-papel.jpg)] bg-cover bg-center">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,340px),1fr))] items-center gap-[clamp(28px,4vw,72px)] px-6 pt-[clamp(48px,6vw,88px)] pb-[clamp(56px,7vw,100px)]">
        <Textos min="max-w-[480px]" />
        <div className="relative min-w-0 pt-[clamp(24px,4vw,48px)] pb-[clamp(16px,3vw,32px)]">
          <div className="grid grid-cols-3 items-end gap-[clamp(10px,1.6vw,20px)]">
            {VIDEOS.map((v) => (
              <div
                key={v.src}
                className="relative aspect-[9/16] min-w-0 overflow-hidden rounded-[999px_999px_28px_28px] bg-cafe shadow-[0_24px_50px_-20px_rgba(89,50,22,.45)]"
                style={{ marginBottom: v.mb, animation: `hRise .9s cubic-bezier(.2,.8,.2,1) ${v.delay} both` }}
              >
                <AutoVideo
                  src={`/assets/${v.src}.mp4`} poster={`/assets/poster-${v.src.replace("video-", "")}.jpg`}
                  preload="metadata" aria-label={v.label}
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            ))}
          </div>
          <Image
            src="/assets/sticker-recetas.png" alt="" width={800} height={656}
            className="absolute z-[2] h-auto w-[clamp(110px,15vw,190px)] drop-shadow-[0_14px_20px_rgba(89,50,22,.22)]"
            style={{ left: "clamp(-24px,-2vw,-8px)", bottom: "clamp(-20px,-1vw,0px)", transform: "rotate(-6deg)", animation: "hPop .8s cubic-bezier(.3,1.4,.5,1) 1.1s both" }}
          />
          <span
            className="absolute top-0 right-0 z-[2] rotate-6 text-center font-hand text-[clamp(22px,2.6vw,30px)] leading-[1.05] font-medium text-naranja"
            style={{ animation: "hUp .8s ease-out 1.4s both" }}
          >
            recién hecho,<br />todos los días
          </span>
        </div>
      </div>
    </section>
  );
}

// Los mismos tres videos de la versión 2, pero de fondo a sangre, con una
// capa café por encima para que el texto (en crema) se lea. En el móvil queda
// solo el del medio, a pantalla completa.
export function HeroFondo() {
  return (
    <section data-hero-anim="" className="relative isolate flex min-h-[clamp(580px,86svh,820px)] items-center overflow-hidden bg-cafe">
      <div className="absolute inset-0 -z-10 grid grid-cols-1 sm:grid-cols-3">
        {VIDEOS.map((v, i) => (
          <div key={v.src} className={`relative ${i === 1 ? "" : "hidden sm:block"}`}>
            <AutoVideo
              src={`/assets/${v.src}.mp4`} poster={`/assets/poster-${v.src.replace("video-", "")}.jpg`}
              preload="metadata" aria-label={v.label}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        ))}
      </div>
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(0deg,rgba(89,50,22,.92)_0%,rgba(89,50,22,.55)_55%,rgba(89,50,22,.3)_100%)] sm:bg-[linear-gradient(90deg,rgba(89,50,22,.9)_0%,rgba(89,50,22,.6)_45%,rgba(89,50,22,.15)_100%)]" />

      <div className="mx-auto w-full max-w-[1280px] px-6 pt-[clamp(120px,30svh,200px)] pb-[clamp(48px,7vw,96px)] sm:pt-[clamp(48px,7vw,96px)]">
        <Textos min="max-w-[480px]" claro />
      </div>

      <span
        className="absolute right-[clamp(16px,4vw,56px)] bottom-[clamp(20px,4vw,48px)] hidden rotate-[-6deg] text-center font-hand text-[clamp(22px,2.6vw,30px)] leading-[1.05] font-medium text-papel sm:block"
        style={{ animation: "hUp .8s ease-out 1.4s both" }}
      >
        recién hecho,<br />todos los días
      </span>
    </section>
  );
}
