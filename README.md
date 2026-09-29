# Melano · Helados y cafetería

Sitio de Melano. Next.js 15 + Tailwind 4. Diseño importado de Claude Design
(«Sitio web heladería»).

```bash
npm run dev   # http://localhost:3000
```

## Dónde se toca qué

| Quiero cambiar…                                   | Archivo |
| ------------------------------------------------- | ------- |
| Sabores, sucursales, temporada, email, WhatsApp   | `lib/data.ts` |
| Colores y tipografías                             | `app/globals.css` (bloque `@theme`) |
| Home (`/`, portada original) y su variante con videos (`/version-2`) | `components/home/Home.tsx` |
| Qué pasa cuando alguien manda un formulario       | `app/api/formularios/route.ts` |

## Pendientes antes de publicar

- **Formularios**: los tres (equipo, franquicias, contacto) validan y muestran
  el mensaje de gracias, pero hoy solo se registran en el log del servidor.
  Falta conectarlos a un email o base de datos en `app/api/formularios/route.ts`.
- **Fotos de sabores**: las de `public/sabores/` son de ejemplo, no son de
  Melano. Reemplazarlas o vaciar el mapa `IMG` de `lib/data.ts` (se ve el color
  de cada sabor).
- **Sucursales**: faltan direcciones y horarios de casi todas.
- **WhatsApp de contacto** (`11 4000-1910`) venía del diseño; confirmar.
