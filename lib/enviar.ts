export const EMAIL_RE = /^\S+@\S+\.\S+$/;
export const telValido = (t: string) => t.replace(/\D/g, "").length >= 8;

// Manda un formulario a /api/formularios. Devuelve null si salió bien, o el
// mensaje de error para mostrar.
export async function enviarFormulario(
  tipo: "equipo" | "franquicia" | "contacto",
  campos: Record<string, string | string[] | File | null>,
): Promise<string | null> {
  const fd = new FormData();
  fd.set("tipo", tipo);
  for (const [k, v] of Object.entries(campos)) {
    if (v == null) continue;
    if (Array.isArray(v)) fd.set(k, v.join(", "));
    else fd.set(k, v);
  }
  try {
    const res = await fetch("/api/formularios", { method: "POST", body: fd });
    if (res.ok) return null;
    const body = await res.json().catch(() => null);
    return body?.error ?? "No pudimos enviarlo. Probá de nuevo en un rato.";
  } catch {
    return "No pudimos enviarlo. Revisá tu conexión y probá de nuevo.";
  }
}
