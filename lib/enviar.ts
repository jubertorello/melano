export const EMAIL_RE = /^\S+@\S+\.\S+$/;
export const telValido = (t: string) => t.replace(/\D/g, "").length >= 8;

// Los formularios se mandan desde el navegador a Web3Forms, que los reenvía
// por mail a info@heladosmelano.com. Cada formulario tiene su clave (se crean
// en web3forms.com); no son secretas, solo dicen a qué casilla mandar.
const CLAVES = {
  contacto: "29582520-e1a5-4c24-b5bf-41f63b5dcdeb",
  franquicia: "db29062b-b464-47b9-98fd-e3fa308ea48b",
};

const ASUNTO = {
  franquicia: "Nueva consulta de franquicia",
  contacto: "Nuevo mensaje de contacto",
};

// Nombre con que aparece cada campo en el mail, sin acentos (Web3Forms los
// desarma en los nombres de campo). "email" queda tal cual para que lo use
// como dirección de respuesta.
const ETIQUETAS: Record<string, string> = {
  nombre: "Nombre",
  tel: "Telefono",
  ciudad: "Ciudad",
  local: "Tiene local",
  capital: "Capital estimado",
  motivo: "Motivo",
  msg: "Mensaje",
};

// Manda un formulario. Devuelve null si salió bien, o el mensaje de error
// para mostrar.
export async function enviarFormulario(tipo: keyof typeof ASUNTO, campos: Record<string, string>): Promise<string | null> {
  const fd = new FormData();
  fd.set("access_key", CLAVES[tipo]);
  fd.set("subject", `${ASUNTO[tipo]} · ${campos.nombre}`);
  fd.set("from_name", "Sitio de Melano");
  for (const [k, v] of Object.entries(campos)) {
    if (v.trim()) fd.set(ETIQUETAS[k] ?? k, v);
  }
  try {
    const res = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
    if (res.ok) return null;
    console.error("[formulario]", await res.json().catch(() => res.status));
    return "No pudimos enviarlo. Probá de nuevo en un rato.";
  } catch {
    return "No pudimos enviarlo. Revisá tu conexión y probá de nuevo.";
  }
}
