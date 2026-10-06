import Link from "next/link";

// Casilla obligatoria de los formularios: deja constancia de que la persona
// leyó la política de privacidad y acepta que usemos sus datos (Ley 25.326).
export default function AceptoPrivacidad({ checked, onChange, error }: { checked: boolean; onChange: (v: boolean) => void; error?: boolean }) {
  return (
    <div className="flex flex-col gap-[6px]">
      <label className="flex cursor-pointer items-start gap-[10px] text-[14px] leading-[1.45] font-light">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="mt-[3px] size-[16px] flex-none cursor-pointer accent-naranja"
        />
        <span>
          Leí y acepto la{" "}
          <Link href="/privacidad" target="_blank" className="text-cafe underline underline-offset-4 hover:text-naranja">
            política de privacidad
          </Link>
          .
        </span>
      </label>
      {error && <span className="field-error">Para enviar, tenés que aceptar la política de privacidad</span>}
    </div>
  );
}
