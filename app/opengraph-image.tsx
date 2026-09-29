import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Imagen que aparece al compartir un enlace del sitio (WhatsApp, Instagram,
// Facebook, X, LinkedIn…). Vale para todas las páginas.
export const alt = "Melano · Helados y cafetería desde 1910. Volver sin irte.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const dataUrl = async (ruta: string, tipo: string) =>
  `data:${tipo};base64,${(await readFile(join(process.cwd(), ruta))).toString("base64")}`;

export default async function Image() {
  const [serif, serifItalic, papel, logo, pietro] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/InstrumentSerif-Regular.ttf")),
    readFile(join(process.cwd(), "assets/fonts/InstrumentSerif-Italic.ttf")),
    dataUrl("public/assets/bg-papel.jpg", "image/jpeg"),
    dataUrl("public/assets/logo-word-marron.png", "image/png"),
    dataUrl("public/assets/pietro-cucurucho.png", "image/png"),
  ]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", position: "relative", background: "#F3ECE1", fontFamily: "Instrument Serif", color: "#593216" }}>
        <img src={papel} alt="" width={1200} height={630} style={{ position: "absolute", inset: 0, width: 1200, height: 630, objectFit: "cover" }} />

        <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between", padding: "64px 0 64px 72px", width: 700 }}>
          <img src={logo} alt="" width={250} height={60} />
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div style={{ fontSize: 132, lineHeight: 0.95, letterSpacing: "-0.02em" }}>Volver sin irte.</div>
            <div style={{ fontSize: 38, fontStyle: "italic", color: "#7D4C36" }}>Helados y cafetería desde 1910</div>
          </div>
          <div style={{ display: "flex", fontSize: 26, letterSpacing: "0.16em", textTransform: "uppercase", color: "#454637" }}>
            Las Varillas · Córdoba
          </div>
        </div>

        <div style={{ position: "absolute", right: 70, bottom: 70, width: 330, height: 330, borderRadius: 999, background: "#CD3A17" }} />
        <img src={pietro} alt="" width={335} height={550} style={{ position: "absolute", right: 150, bottom: 0 }} />
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Instrument Serif", data: serif, style: "normal", weight: 400 },
        { name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 },
      ],
    },
  );
}
