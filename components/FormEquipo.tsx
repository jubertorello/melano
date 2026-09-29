"use client";

import Image from "next/image";
import { useState } from "react";
import Pill from "@/components/Pill";
import { SUCURSALES } from "@/lib/data";
import { EMAIL_RE, enviarFormulario, telValido } from "@/lib/enviar";

const PUESTOS = ["Heladería", "Barista", "Atención al público", "Pastelería", "Delivery"];
const TURNOS = ["Mañana", "Tarde", "Noche", "Fines de semana"];
const MAX_CV = 5 * 1024 * 1024;

type Campos = { nombre: string; email: string; tel: string; sucursal: string; puestos: string[]; turno: string; cv: File | null };
const VACIO: Campos = { nombre: "", email: "", tel: "", sucursal: "", puestos: [], turno: "", cv: null };
type Errores = { nombre?: boolean; email?: boolean; tel?: boolean; puestos?: boolean; cv?: string; envio?: string };

const input = "field-input bg-crema";

export default function FormEquipo() {
  const [f, setF] = useState<Campos>(VACIO);
  const [err, setErr] = useState<Errores>({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const set = (k: "nombre" | "email" | "tel" | "sucursal") => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const v = e.target.value;
    setF((s) => ({ ...s, [k]: v }));
    setErr((s) => ({ ...s, [k]: false }));
  };

  const togglePuesto = (p: string) => {
    setErr((s) => ({ ...s, puestos: false }));
    setF((s) => ({ ...s, puestos: s.puestos.includes(p) ? s.puestos.filter((x) => x !== p) : [...s.puestos, p] }));
  };

  const onFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;
    if (!/\.(pdf|jpe?g|png)$/i.test(file.name)) return setErr((s) => ({ ...s, cv: "Formato no válido. Subí un PDF, JPG o PNG." }));
    if (file.size > MAX_CV) return setErr((s) => ({ ...s, cv: "El archivo supera los 5 MB." }));
    setF((s) => ({ ...s, cv: file }));
    setErr((s) => ({ ...s, cv: undefined }));
  };

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    const er = { nombre: !f.nombre.trim(), email: !EMAIL_RE.test(f.email), tel: !telValido(f.tel), puestos: f.puestos.length === 0 };
    if (Object.values(er).some(Boolean)) return setErr(er);
    setSending(true);
    const fallo = await enviarFormulario("equipo", f);
    setSending(false);
    if (fallo) return setErr({ envio: fallo });
    setSent(true);
  };

  const reset = () => {
    setSent(false);
    setF(VACIO);
    setErr({});
  };

  return (
    <div className="rounded-[20px] bg-papel p-[clamp(24px,4vw,40px)] text-cafe">
      {sent ? (
        <div className="flex flex-col items-start gap-4 py-6">
          <Image src="/assets/pietro-cucurucho.png" alt="" width={700} height={1148} className="h-[160px] w-auto" />
          <h3 className="m-0 font-serif text-[36px] leading-[1.1] font-normal">¡Ya sos parte del recetario, {f.nombre.split(" ")[0]}!</h3>
          <p className="m-0 max-w-[420px] text-[17px] leading-[1.55] font-light">
            Guardamos tu postulación para {f.puestos.join(", ").toLowerCase()}. Si hay una búsqueda que encaje, te llamamos.
          </p>
          <button onClick={reset} className="mt-2 cursor-pointer rounded-full border border-cafe bg-transparent px-5 py-[13px] text-[12px] leading-none font-semibold uppercase tracking-[.12em] text-cafe">
            Enviar otra postulación
          </button>
        </div>
      ) : (
        <form onSubmit={submit} noValidate className="grid grid-cols-[repeat(auto-fit,minmax(min(100%,220px),1fr))] gap-[18px]">
          <h3 className="col-span-full m-0 mb-1 font-serif text-[30px] leading-[1.1] font-normal">Dejanos tus datos</h3>

          <div className="col-span-full flex flex-col gap-[10px]">
            <span className="field-label">¿Qué te gustaría hacer? (podés elegir varios)</span>
            <div className="flex flex-wrap gap-2">
              {PUESTOS.map((p) => (
                <Pill key={p} active={f.puestos.includes(p)} onClick={() => togglePuesto(p)} idle="crema">{p}</Pill>
              ))}
            </div>
            {err.puestos && <span className="field-error">Elegí al menos un puesto</span>}
          </div>

          <label className="flex flex-col gap-2">
            <span className="field-label">Nombre y apellido</span>
            <input value={f.nombre} onChange={set("nombre")} placeholder="Tomás Rinaldi" autoComplete="name" className={input} />
            {err.nombre && <span className="field-error">Contanos tu nombre</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="field-label">Email</span>
            <input type="email" value={f.email} onChange={set("email")} placeholder="vos@mail.com" autoComplete="email" className={input} />
            {err.email && <span className="field-error">Revisá el email</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="field-label">Teléfono / WhatsApp</span>
            <input type="tel" value={f.tel} onChange={set("tel")} placeholder="11 5555-5555" autoComplete="tel" className={input} />
            {err.tel && <span className="field-error">Dejanos un teléfono</span>}
          </label>
          <label className="flex flex-col gap-2">
            <span className="field-label">Sucursal preferida</span>
            <select value={f.sucursal} onChange={set("sucursal")} className={input}>
              <option value="">Cualquiera</option>
              {SUCURSALES.map((s) => {
                const nombre = s.id === "laspiur" ? "Laspiur" : s.ciudad;
                return <option key={s.id} value={nombre}>{nombre}</option>;
              })}
            </select>
          </label>

          <div className="col-span-full flex flex-col gap-[10px]">
            <span className="field-label">Disponibilidad</span>
            <div className="flex flex-wrap gap-2">
              {TURNOS.map((t) => (
                <Pill key={t} active={f.turno === t} onClick={() => setF((s) => ({ ...s, turno: t }))} idle="crema">{t}</Pill>
              ))}
            </div>
          </div>

          <div className="col-span-full flex flex-col gap-2">
            <label className={`flex cursor-pointer items-center gap-[14px] rounded-[12px] border border-dashed bg-crema p-4 ${err.cv ? "border-naranja-oscuro" : "border-cafe/40"}`}>
              <span className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-cafe text-[22px] leading-none text-crema">{f.cv ? "✓" : "+"}</span>
              <span className="flex min-w-0 flex-1 flex-col gap-1">
                <span className="truncate text-[15px] leading-[1.3] font-medium">{f.cv ? f.cv.name : "Adjuntá tu CV (opcional)"}</span>
                <span className="text-[13px] leading-[1.3] font-light text-cafe-suave">
                  {f.cv ? (f.cv.size / 1048576).toFixed(1).replace(".", ",") + " MB" : "PDF, JPG o PNG · hasta 5 MB"}
                </span>
              </span>
              <input type="file" accept=".pdf,.jpg,.jpeg,.png,application/pdf,image/jpeg,image/png" onChange={onFile} className="hidden" />
            </label>
            {f.cv && (
              <button type="button" onClick={() => setF((s) => ({ ...s, cv: null }))} className="cursor-pointer self-start border-none bg-transparent p-0 text-[13px] leading-none text-cafe-suave underline">
                Quitar archivo
              </button>
            )}
            {err.cv && <span className="field-error leading-[1.3]">{err.cv}</span>}
          </div>

          <div className="col-span-full mt-1 flex flex-wrap items-center justify-end gap-4">
            {err.envio && <span className="field-error mr-auto leading-[1.3]">{err.envio}</span>}
            <button type="submit" disabled={sending} className="cursor-pointer rounded-full border-none bg-cafe px-[26px] py-4 text-[13px] leading-none font-semibold uppercase tracking-[.12em] text-crema hover:bg-oliva disabled:cursor-wait disabled:opacity-70">
              {sending ? "Enviando…" : "Postularme"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
