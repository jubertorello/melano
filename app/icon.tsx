import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

// Favicon: el cono de Melano sobre fondo transparente
export const size = { width: 256, height: 256 };
export const contentType = "image/png";

export default async function Icon() {
  const cono = `data:image/png;base64,${(await readFile(join(process.cwd(), "public/assets/cono-marron.png"))).toString("base64")}`;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <img src={cono} alt="" width={138} height={240} />
      </div>
    ),
    size,
  );
}
