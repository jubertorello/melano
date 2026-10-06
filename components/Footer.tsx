import Image from "next/image";
import Link from "next/link";
import { CONTACTO } from "@/lib/data";

const col = "flex flex-col gap-3";
const title = "text-[11px] leading-none font-semibold uppercase tracking-[.16em] text-oliva-texto";
const link = "text-[15px] leading-[1.4] font-light text-papel no-underline hover:text-papel";

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-oliva text-papel">
      <div className="mx-auto grid max-w-[1280px] grid-cols-[repeat(auto-fit,minmax(min(100%,200px),1fr))] gap-10 px-6 pt-[72px] pb-8">
        <div className="col-span-2 flex min-w-0 flex-col gap-5 max-[479px]:col-span-1">
          <Image src="/assets/logo-full-beige.png" alt="Melano helados y cafetería" width={900} height={628} className="block h-auto w-[190px]" />
          <p className="m-0 max-w-[340px] font-serif text-[22px] leading-[1.35] italic text-pretty">Las recetas se heredan como las historias.</p>
        </div>
        <div className={col}>
          <span className={title}>Melano</span>
          <Link href="/sabores" className={link}>Sabores</Link>
          <Link href="/#sucursales" className={link}>Sucursales</Link>
          <Link href="/pedidos" className={link}>Pedí helado</Link>
          <Link href="/historia" className={link}>Nuestra historia</Link>
        </div>
        <div className={col}>
          <span className={title}>Sumate</span>
          <Link href="/franquicias" className={link}>Franquicias</Link>
          <Link href="/contacto" className={link}>Contacto</Link>
        </div>
        <div className={col}>
          <span className={title}>Seguinos</span>
          <a href={CONTACTO.instagram} target="_blank" rel="noopener" className={link}>Instagram · {CONTACTO.instagramUser}</a>
          <Link href="/contacto" className={link}>{CONTACTO.email}</Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-[1280px] flex-wrap justify-between gap-4 border-t border-papel/18 px-6 pt-[22px] pb-7 text-[13px] leading-[1.4] font-light text-oliva-texto">
        <span>
          © {new Date().getFullYear()} Melano Helados y Cafetería ·{" "}
          <Link href="/privacidad" className="text-oliva-texto underline underline-offset-4 hover:text-papel">Política de privacidad</Link>
        </span>
        <span className="font-hand text-[20px] leading-none font-medium text-papel">Volver sin irte.</span>
        <span>
          Sitio by{" "}
          <a href="https://www.instagram.com/honestechfactory/" target="_blank" rel="noopener" className="text-papel underline underline-offset-4 hover:text-papel">
            Honest Tech Factory
          </a>
        </span>
      </div>
    </footer>
  );
}
