// Contenido de Melano: sabores, sucursales y precios.
// Todo lo que cambia seguido se toca acá, no en los componentes.

export type CategoriaId = "crema" | "chocolate" | "ddl" | "fruta" | "sorbete" | "temporada";

export const CATEGORIAS: { id: "todos" | CategoriaId; label: string }[] = [
  { id: "todos", label: "Todos" },
  { id: "crema", label: "Cremas" },
  { id: "chocolate", label: "Chocolates" },
  { id: "ddl", label: "Dulce de leche" },
  { id: "fruta", label: "Frutas" },
  { id: "sorbete", label: "Sorbetes" },
  { id: "temporada", label: "De temporada" },
];

// Frase a mano junto al título de cada grupo en /sabores
export const NOTAS_CATEGORIA: Record<CategoriaId, string> = {
  crema: "la base de todo",
  chocolate: "para los intensos",
  ddl: "bien nuestro",
  fruta: "con fruta de verdad",
  sorbete: "todos con 50% de fruta",
  temporada: "por poco tiempo",
};

export type Sabor = {
  nombre: string;
  cat: CategoriaId;
  desc: string;
  /** Color de fondo mientras carga la foto, o si no hay foto */
  color: string;
  clasico: boolean;
  tags: string[];
  img: string | null;
};

// OJO: fotos de EJEMPLO que vinieron con el diseño, no son de Melano.
// Reemplazarlas por fotos propias antes de publicar (o dejar el mapa vacío
// y se ve el color de cada sabor).
const IMG: Record<string, string> = {
  "Chocolate": "chocolate-21-chocolate-amazonas",
  "Chocolate con almendras": "chocolate-23-chocolate-con-almendras",
  "Rocher": "chocolate-22-chocolate-rocher",
  "Selva Negra": "agua-06-cacao-al-agua",
  "Raffaello": "crema-14-coco-con-dulce-de-leche",
  "Super Chocolate": "chocolate-24-chocolate-marquisse",
  "Chocolate Marquise": "chocolate-24-chocolate-marquisse",
  "Dulce de Leche": "dulce-de-leche-27-ddl-leroma",
  "Dulce de Leche con Nuez": "dulce-de-leche-25-ddl-blend",
  "Dulce de Leche Lunes Empiezo": "dulce-de-leche-30-ddl-gourmet",
  "Dulce de Leche de la Casa": "dulce-de-leche-30-ddl-gourmet",
  "Dulce de Leche Granizado": "dulce-de-leche-28-ddl-granizado",
  "Dulce de Leche Rogel": "dulce-de-leche-25-ddl-blend",
  "Dolce Biscotti": "dulce-de-leche-26-ddl-biscotti",
  "Chocotorta": "dulce-de-leche-29-ddl-chocotorta",
  "Banana Split": "agua-04-mix-frutal",
  "Frutilla a la Reina": "crema-17-frutilla",
  "Cerezas al Marrasquino": "agua-02-frambuesa-con-chocolates",
  "Limón": "crema-13-lemon-pie",
  "Limón Tropical": "agua-01-mix-patagonico",
  "Frutilla-Lima": "agua-01-mix-patagonico",
  "Naranja-Maracuyá": "agua-05-mango-maracuya",
  "Naranja-Durazno": "agua-03-naranja-durazno",
  "Americana": "crema-07-crema-chantilly",
  "Cielo": "crema-07-crema-chantilly",
  "Dolce Caramelo": "crema-09-flan-croccante",
  "Crema Biscotti": "crema-08-crema-cookie",
  "Tramontana": "crema-18-tramontana",
  "Filadelfia": "crema-20-cheese-cake",
  "Cheesecake": "crema-20-cheese-cake",
  "Granizado": "crema-18-tramontana",
  "Tiramisú": "crema-15-tiramisu",
  "Bombón Nocciola": "crema-12-caramel-crunch",
  "Vainilla con Toffee y Nueces": "crema-12-caramel-crunch",
  "Don Pepe": "crema-19-pistacho-nutella-dubai",
  "Lemon Pie": "crema-13-lemon-pie",
  "Coco con Dulce de Leche": "crema-14-coco-con-dulce-de-leche",
  "Menta Granizada": "crema-11-menta-granizada",
  "Zabaione": "crema-16-sambayon",
};

const S = (nombre: string, cat: CategoriaId, desc: string, color: string, clasico = false, tags: string[] = []): Sabor => ({
  nombre, cat, desc, color, tags, clasico,
  img: IMG[nombre] ? `/sabores/${IMG[nombre]}.jpg` : null,
});

export const SABORES: Sabor[] = [
  S("Chocolate", "chocolate", "Chocolate intenso.", "#5E3219", true),
  S("Chocolate con almendras", "chocolate", "Chocolate con leche con almendras praliné.", "#6E4127"),
  S("Rocher", "chocolate", "Chocolate con corazón de avellanas, veteado de chocolate y avellanas.", "#7A4A2A"),
  S("Selva Negra", "chocolate", "Chocolate y crema al marrasquino, con cerezas al marrasquino y chocolate.", "#4A2416"),
  S("Raffaello", "chocolate", "Chocolate blanco con coco y almendras.", "#F1E8D6"),
  S("Super Chocolate", "chocolate", "Chocolate con leche con alfajores blancos y dulce de leche familiar.", "#6B3A1E"),
  S("Chocolate Marquise", "chocolate", "Chocolate con merengue italiano y dulce de leche familiar.", "#3E2211"),
  S("Dulce de Leche", "ddl", "Dulce de leche, intenso y cremoso.", "#B87A3E", true),
  S("Dulce de Leche con Nuez", "ddl", "Dulce de leche con nueces.", "#A7703F"),
  S("Dulce de Leche Lunes Empiezo", "ddl", "Dulce de leche con merengue francés y dulce de leche familiar.", "#C38B52"),
  S("Dulce de Leche de la Casa", "ddl", "Dulce de leche con alfajores negros y dulce de leche familiar.", "#9E5F2C"),
  S("Dulce de Leche Granizado", "ddl", "Dulce de leche con stracciatella de chocolate.", "#A96C35", true),
  S("Dulce de Leche Rogel", "ddl", "Dulce de leche con masa quebrada, dulce de leche familiar y merengue italiano.", "#C99A63"),
  S("Dolce Biscotti", "ddl", "Dulce de leche con salsa de cacao y galletas.", "#8C5226"),
  S("Chocotorta", "ddl", "Dulce de leche y queso crema con dulce de leche familiar y Chocolinas.", "#7D4C36"),
  S("Banana Split", "fruta", "Banana con dulce de leche familiar.", "#EEDC9A"),
  S("Frutilla a la Reina", "fruta", "Frutilla con frutillas en almíbar.", "#E9A3A0", true),
  S("Cerezas al Marrasquino", "fruta", "Marrasquino con cerezas al marrasquino.", "#D98A98"),
  S("Limón", "sorbete", "Sorbete de limón, fresco y natural.", "#F2E08A", true),
  S("Limón Tropical", "sorbete", "Sorbete de limón con frutillas en almíbar.", "#F0D27A"),
  S("Frutilla-Lima", "sorbete", "Sorbete de frutilla con lima.", "#D9534F"),
  S("Naranja-Maracuyá", "sorbete", "Sorbete de naranja con maracuyá.", "#F0A640"),
  S("Naranja-Durazno", "sorbete", "Sorbete de naranja con durazno.", "#F2B27A"),
  S("Americana", "crema", "Crema helada de sabor suave, lácteo y cremoso.", "#F6EEDC", true),
  S("Cielo", "crema", "Crema helada suave y delicada.", "#CFE0E8"),
  S("Dolce Caramelo", "crema", "Flan al caramelo con dulce de leche.", "#D9A45E"),
  S("Crema Biscotti", "crema", "Americana con Oreo y dulce de leche familiar.", "#D8D0C4"),
  S("Tramontana", "crema", "Americana con microgalletitas bañadas en chocolate y dulce de leche familiar.", "#E9D7B6", true),
  S("Filadelfia", "crema", "Mascarpone con mermelada de frutos rojos.", "#E7C3C9"),
  S("Cheesecake", "crema", "Queso crema con crumble y mermelada de frutos rojos.", "#EFD9C8"),
  S("Granizado", "crema", "Americana con stracciatella de chocolate.", "#EDE3D0"),
  S("Tiramisú", "crema", "Mascarpone y café, con savoiardi caseras embebidas en café y Marsala.", "#C9A887"),
  S("Bombón Nocciola", "crema", "Avellanas con chocolate con leche y wafer crujiente.", "#B08560"),
  S("Vainilla con Toffee y Nueces", "crema", "Vainilla al huevo con toffee y nueces.", "#F0DDA8"),
  S("Don Pepe", "crema", "Chocolate y vainilla con dulce de leche familiar y merengue francés.", "#CFA57A"),
  S("Lemon Pie", "crema", "Limón con curd de limón, crumble y merengue italiano.", "#F3E4A2"),
  S("Coco con Dulce de Leche", "crema", "Coco con dulce de leche familiar.", "#F4EDE0"),
  S("Menta Granizada", "crema", "Menta con stracciatella de chocolate.", "#BFDCC4"),
  S("Zabaione", "crema", "Huevo y vino Marsala. La receta de Pietro.", "#EBCB7E", true),
];

export const TEMPORADA = { titulo: "Primavera 2026", hasta: "Muy pronto" };

export type Sucursal = {
  id: string;
  nombre: string;
  ciudad: string;
  provincia: string;
  maps: string;
  tel: string | null;
  wa: string | null;
  /** URL de la tienda en Rappi, o null */
  rappi: string | null;
  /** URL de la tienda en PedidosYa, o null */
  pedidosya: string | null;
  direccion: string;
  nueva: boolean;
  central: boolean;
};

// Falta: dirección exacta de casi todas.
const SU = (id: string, nombre: string, ciudad: string, maps: string, tel: string | null = null, wa: string | null = null, extra: Partial<Sucursal> = {}): Sucursal => ({
  id, nombre, ciudad, provincia: "Córdoba", maps, tel, wa,
  rappi: null, pedidosya: null, direccion: "",
  nueva: false, central: false, ...extra,
});

export const SUCURSALES: Sucursal[] = [
  SU("lasvarillas", "Las Varillas · Casa central", "Las Varillas", "https://maps.app.goo.gl/xRDEBASh8Nn9PZRdA", "3533-512428", null, { central: true, direccion: "Carlos Pellegrini 345" }),
  SU("cordoba", "Córdoba · Nueva Córdoba", "Córdoba", "https://maps.app.goo.gl/yES6e4G4WoBvbSBu6", "351 706-4813", "https://wa.me/5493517064813", { direccion: "Bv. Chacabuco 721", rappi: "https://www.rappi.com.ar/restaurantes/253974-melano-helados-y-cafeteria" }),
  SU("leones", "Leones", "Leones", "https://maps.app.goo.gl/s5UATeN4QkAsBokw8", "3472 62-0271", "https://wa.me/message/XETKDVUCHAEWJ1"),
  SU("marcosjuarez", "Marcos Juárez", "Marcos Juárez", "https://maps.app.goo.gl/7bykzCdw5Y1o3rLe9"),
  SU("pozodelmolle", "Pozo del Molle", "Pozo del Molle", "https://maps.app.goo.gl/T5QjxzP5HsoNQjBr7"),
  SU("elaranado", "El Arañado", "El Arañado", "https://maps.app.goo.gl/CQHTQHm5Tyfw5JHC6"),
  SU("sacanta", "Sacanta", "Sacanta", "https://maps.app.goo.gl/MeQTwJwnN7C7eHfr5"),
  SU("luque", "Luque", "Luque", "https://maps.app.goo.gl/WrPUAmepBy7s4zTi7"),
  SU("laspiur", "Laspiur", "Saturnino María Laspiur", "https://maps.app.goo.gl/iEx9Hf5zDNt3iHYT9"),
];

export const embedQ = (s: Sucursal) =>
  encodeURIComponent(s.direccion ? `${s.direccion}, ${s.ciudad}, Córdoba, Argentina` : `Helados Melano, ${s.ciudad}, Córdoba, Argentina`);
export const lineaDir = (s: Sucursal) => (s.direccion ? s.direccion + ", " : "") + s.ciudad;
export const telHref = (tel: string | null) => (tel ? "tel:" + tel.replace(/\D/g, "") : null);

export const PRECIOS = [
  { id: "cuarto", label: "1/4 kg", sabores: 3, precio: 7800 },
  { id: "medio", label: "1/2 kg", sabores: 3, precio: 14500 },
  { id: "kilo", label: "1 kg", sabores: 4, precio: 26000 },
];

export const CONTACTO = {
  email: "info@heladosmelano.com",
  instagram: "https://www.instagram.com/heladosmelano",
  instagramUser: "@heladosmelano",
  whatsapp: "https://wa.me/5491140001910",
  whatsappTxt: "11 4000-1910",
};
