"use client";

import Image from "next/image";
import { useState } from "react";
import AceptoPrivacidad from "@/components/AceptoPrivacidad";
import Pill from "@/components/Pill";
import { EMAIL_RE, enviarFormulario, telValido } from "@/lib/enviar";

const VACIO = { nombre: "", email: "", tel: "", ciudad: "", local: "", capital: "", msg: "" };
type Campos = typeof VACIO;
type Errores = { nombre?: boolean; email?: boolean; tel?: boolean; ciudad?: boolean; acepto?: boolean; envio?: string };

const LOCAL = ["Sí, propio", "Sí, alquilado", "Todavía no"];
const input = "field-input bg-papel";

export default function FormFranquicia() {
  const [f, setF] = useState<Campos>(VACIO);
  const [err, setErr] = useState<Errores>({});
  const [acepto, setAcepto] = useState(false);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (k: keyof Campos) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const v = e.target.value;
    setF((s) => ({ ...s, [k]: v }));
    setErr((s) => ({ ...s, [k]: false }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const er = { nombre: !f.nombre.trim(), email: !EMAIL_RE.test(f.email), tel: !telValido(f.tel), ciudad: !f.ciudad.trim(), acepto: !acepto };
    if (Object.values(er).some(Boolean)) return setErr(er);
    setSending(true);
    const fallo = await enviarFormulario("franquicia", f);
    setSending(false);
    if (fallo) return setErr({ envio: fallo });
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setF(VACIO);
    setAcepto(false);
    setErr({});
  };

  return (
    <div className="rounded-[20px] bg-crema p-[clamp(24px,4vw,40px)] text-cafe shadow-[0_30px_60px_-30px_rgba(0,0,0,.35)]">
      {sent ? (
        <div className="flex flex-col items-start gap-4 py-6">
          <Image src="/assets/cono-naranja.png" alt="" width={173} height={300} className="h-14 w-auto" />
          <h3 className="m-0 font-serif text-[36px] leading-[1.1] font-normal">¡Gracias, {f.nombre.split(" ")[0]}!</h3>
          <p className="m-0 max-w-[420px] text-[17px] leading-[1.55] font-light">
            Recibimos tu consulta. En los próximos días te escribe alguien del equipo de expansión para contarte cómo seguimos.
          </p>
          <button onClick={reset} className="mt-2 cursor-pointer rounded-full border border-cafe bg-transparent px-5 py-[13px] text-[12px] leading-none font-semibold uppercase tracking-[.12em] text-cafe">
            Enviar otra consulta
          </button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-[18px]">
          <h3 className="col-span-full m-0 mb-1 font-serif text-[30px] leading-[1.1] font-normal">Quiero saber más</h3>
          <label className="flex flex-col gap-2">
            <span className="field-label">Nombre y apellido</span>
            <input value={f.nombre} onChange={set("nombre")} placeholder="Lucía Fernández" autoComplete="name" className={input} />
            {err.nombre && <span className="field-error">Contanos tu nombre</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="field-label">Email</span>
            <input type="email" value={f.email} onChange={set("email")} placeholder="vos@mail.com" autoComplete="email" className={input} />
            {err.email && <span className="field-error">Revisá el email</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="field-label">Teléfono</span>
            <input type="tel" value={f.tel} onChange={set("tel")} placeholder="11 5555-5555" autoComplete="tel" className={input} />
            {err.tel && <span className="field-error">Dejanos un teléfono</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="field-label">Ciudad y provincia</span>
            <input value={f.ciudad} onChange={set("ciudad")} placeholder="Rosario, Santa Fe" className={input} />
            {err.ciudad && <span className="field-error">¿Dónde te gustaría abrir?</span>}
          </label>
          <div className="col-span-full flex flex-col gap-[10px]">
            <span className="field-label">¿Ya tenés local?</span>
            <div className="flex flex-wrap gap-2">
              {LOCAL.map((l) => (
                <Pill key={l} active={f.local === l} onClick={() => setF((s) => ({ ...s, local: l }))}>{l}</Pill>
              ))}
            </div>
          </div>
          <label className="col-span-full flex flex-col gap-2">
            <span className="field-label">Capital estimado a invertir</span>
            <select value={f.capital} onChange={set("capital")} className={input}>
              <option value="">Elegí una opción</option>
              <option value="Hasta USD 50.000">Hasta USD 50.000</option>
              <option value="USD 50.000 – 100.000">USD 50.000 – 100.000</option>
              <option value="Más de USD 100.000">Más de USD 100.000</option>
              <option value="Prefiero hablarlo">Prefiero hablarlo</option>
            </select>
          </label>
          <label className="col-span-full flex flex-col gap-2">
            <span className="field-label">Contanos un poco de vos (opcional)</span>
            <textarea value={f.msg} onChange={set("msg")} rows={3} placeholder="¿Por qué Melano? ¿Tenés experiencia en gastronomía?" className={`${input} resize-y leading-[1.45]`} />
          </label>
          <div className="col-span-full">
            <AceptoPrivacidad checked={acepto} onChange={(v) => { setAcepto(v); setErr((s) => ({ ...s, acepto: false })); }} error={err.acepto} />
          </div>
          <div className="col-span-full mt-1 flex flex-wrap items-center justify-between gap-4">
            <span className={err.envio ? "field-error leading-[1.4]" : "text-[13px] leading-[1.4] font-light text-cafe-suave"}>
              {err.envio ?? "Te respondemos en menos de 72 h hábiles."}
            </span>
            <button type="submit" disabled={sending} className="cursor-pointer rounded-full border-none bg-naranja px-[26px] py-4 text-[13px] leading-none font-semibold uppercase tracking-[.12em] text-crema hover:bg-naranja-oscuro disabled:cursor-wait disabled:opacity-70">
              {sending ? "Enviando…" : "Quiero mi Melano"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
