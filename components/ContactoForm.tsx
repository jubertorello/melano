"use client";

import { useState } from "react";
import AceptoPrivacidad from "@/components/AceptoPrivacidad";
import Pill from "@/components/Pill";
import { EMAIL_RE, enviarFormulario } from "@/lib/enviar";

const MOTIVOS = ["Consulta", "Eventos", "Sugerencia", "Prensa"];
const VACIO = { nombre: "", email: "", msg: "" };
const input = "field-input bg-crema";

export default function ContactoForm() {
  const [f, setF] = useState(VACIO);
  const [motivo, setMotivo] = useState("Consulta");
  const [acepto, setAcepto] = useState(false);
  const [err, setErr] = useState<string | null>(null);
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (k: keyof typeof VACIO) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const v = e.target.value;
    setF((s) => ({ ...s, [k]: v }));
    setErr(null);
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!f.nombre.trim() || !EMAIL_RE.test(f.email) || !f.msg.trim()) return setErr("Completá nombre, un email válido y tu mensaje.");
    if (!acepto) return setErr("Para enviar, tenés que aceptar la política de privacidad.");
    setSending(true);
    const fallo = await enviarFormulario("contacto", { ...f, motivo });
    setSending(false);
    if (fallo) return setErr(fallo);
    setSent(true);
  };

  return (
    <div className="rounded-[24px] bg-papel p-[clamp(24px,4vw,40px)]">
      {sent ? (
        <div className="flex flex-col gap-[14px] py-5">
          <h2 className="m-0 font-serif text-[36px] leading-[1.1] font-normal">¡Gracias por escribirnos!</h2>
          <p className="m-0 text-[17px] leading-[1.55] font-light">Te respondemos a la brevedad.</p>
          <button
            onClick={() => { setSent(false); setF(VACIO); setAcepto(false); }}
            className="cursor-pointer self-start rounded-full border border-cafe bg-transparent px-5 py-[13px] text-[12px] leading-none font-semibold uppercase tracking-[.12em] text-cafe"
          >
            Enviar otro mensaje
          </button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="flex flex-col gap-[18px]">
          <div className="flex flex-col gap-[10px]">
            <span className="field-label">Motivo</span>
            <div className="flex flex-wrap gap-2">
              {MOTIVOS.map((m) => (
                <Pill key={m} active={motivo === m} onClick={() => setMotivo(m)} idle="crema">{m}</Pill>
              ))}
            </div>
          </div>
          <label className="flex flex-col gap-2">
            <span className="field-label">Nombre</span>
            <input value={f.nombre} onChange={set("nombre")} placeholder="Tu nombre" autoComplete="name" className={input} />
          </label>
          <label className="flex flex-col gap-2">
            <span className="field-label">Email</span>
            <input type="email" value={f.email} onChange={set("email")} placeholder="vos@mail.com" autoComplete="email" className={input} />
          </label>
          <label className="flex flex-col gap-2">
            <span className="field-label">Mensaje</span>
            <textarea value={f.msg} onChange={set("msg")} rows={5} placeholder="Contanos…" className={`${input} resize-y leading-[1.45]`} />
          </label>
          <AceptoPrivacidad checked={acepto} onChange={(v) => { setAcepto(v); setErr(null); }} />
          {err && <span className="text-[14px] leading-[1.3] text-naranja-oscuro">{err}</span>}
          <button type="submit" disabled={sending} className="cursor-pointer self-end rounded-full border-none bg-naranja px-[26px] py-4 text-[13px] leading-none font-semibold uppercase tracking-[.12em] text-crema hover:bg-naranja-oscuro disabled:cursor-wait disabled:opacity-70">
            {sending ? "Enviando…" : "Enviar"}
          </button>
        </form>
      )}
    </div>
  );
}
