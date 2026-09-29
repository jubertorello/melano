import type { Metadata } from "next";
import Home from "@/components/home/Home";

// Variante de la home con la portada de videos, para comparar.
export const metadata: Metadata = {
  title: "Versión 2",
  robots: { index: false },
};

export default function Page() {
  return <Home portada="videos" />;
}
