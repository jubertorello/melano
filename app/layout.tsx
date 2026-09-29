import type { Metadata } from "next";
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

export const metadata: Metadata = {
  title: {
    default: "Melano · Helados y cafetería desde 1910",
    template: "%s · Melano",
  },
  description:
    "Helado artesanal, café y pastelería con las recetas que Pietro trajo del Piamonte. Desde 1910 en Las Varillas, Córdoba.",
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
