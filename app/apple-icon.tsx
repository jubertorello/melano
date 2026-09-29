import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Ícono al guardar el sitio en la pantalla de inicio del celular. iOS no
// admite transparencia, así que va sobre el papel de la marca.
export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const cono = `data:image/png;base64,${(await readFile(join(process.cwd(), "public/assets/cono-marron.png"))).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#F3ECE1" }}>
        <img src={cono} alt="" width={69} height={120} />
      </div>
    ),
    size,
  );
}
