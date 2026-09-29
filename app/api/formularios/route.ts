import { NextResponse } from "next/server";

// Recibe los tres formularios del sitio: equipo, franquicia y contacto.
//
// TODO: todavía no se guardan ni se envían a ningún lado, solo se registran
// en el log del servidor. Conectar acá el destino real (email con Resend,
// Supabase, una planilla…) cuando esté definido.
const TIPOS = new Set(["equipo", "franquicia", "contacto"]);
const MAX_CV = 5 * 1024 * 1024;

export async function POST(req: Request) {
  const data = await req.formData();
  const tipo = String(data.get("tipo") ?? "");
  if (!TIPOS.has(tipo)) {
    return NextResponse.json({ ok: false, error: "Formulario desconocido" }, { status: 400 });
  }

  const cv = data.get("cv");
  if (cv instanceof File && cv.size > MAX_CV) {
    return NextResponse.json({ ok: false, error: "El archivo supera los 5 MB." }, { status: 413 });
  }

  const campos: Record<string, string> = {};
  for (const [k, v] of data.entries()) {
    if (typeof v === "string") campos[k] = v;
  }
  console.log("[formulario]", tipo, campos, cv instanceof File ? `CV: ${cv.name} (${cv.size} B)` : "");

  return NextResponse.json({ ok: true });
}
