import type { Metadata } from "next";
import Home from "@/components/home/Home";

// Variante de la home con los videos de fondo, para comparar.
export const metadata: Metadata = {
  title: "Versión 3",
  robots: { index: false },
};

export default function Page() {
  return <Home portada="fondo" />;
}
