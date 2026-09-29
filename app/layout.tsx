import type { Metadata, Viewport } from "next";
import { Caveat, DM_Sans, Instrument_Serif } from "next/font/google";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ScrollReveal from "@/components/ScrollReveal";
import "./globals.css";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  axes: ["opsz"],
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-instrument-serif",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

const caveat = Caveat({
  variable: "--font-caveat",
  subsets: ["latin"],
  weight: ["500", "600"],
});

// Dirección pública del sitio, para que la imagen al compartir tenga una URL
// completa. Cuando haya dominio propio, definir NEXT_PUBLIC_SITE_URL (por
// ejemplo https://melano.com.ar); en Vercel, sin eso se usa su dirección.
const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ??
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : "http://localhost:3000");

const DESCRIPCION =
  "Helado artesanal, café y pastelería con las recetas que Pietro trajo del Piamonte. Desde 1910 en Las Varillas, Córdoba.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Melano · Helados y cafetería desde 1910",
    template: "%s · Melano",
  },
  description: DESCRIPCION,
  openGraph: {
    type: "website",
    locale: "es_AR",
    siteName: "Melano",
    title: "Melano · Volver sin irte.",
    description: DESCRIPCION,
  },
  twitter: {
    card: "summary_large_image",
    title: "Melano · Volver sin irte.",
    description: DESCRIPCION,
  },
};

export const viewport: Viewport = {
  themeColor: "#FFFCF8",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-AR">
      <body className={`${dmSans.variable} ${instrumentSerif.variable} ${caveat.variable}`}>
        <Header />
        <main className="overflow-x-clip">{children}</main>
        <Footer />
        <ScrollReveal />
      </body>
    </html>
  );
}
