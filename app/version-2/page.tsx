import type { Metadata } from "next";
import Home from "@/components/home/Home";

// Variante de la home con la portada anterior (Pietro con el cucurucho), para comparar.
export const metadata: Metadata = {
  title: "Versión 2",
  robots: { index: false },
};

export default function Page() {
  return <Home portada="recetario" />;
}
