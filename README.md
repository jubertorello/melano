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
| Home (`/`, portada de videos) y sus variantes (`/version-2`, `/version-3`) | `components/home/Home.tsx` |
| Adónde llegan los formularios (Web3Forms)         | `lib/enviar.ts` |

## Pendientes antes de publicar

- **Fotos de sabores**: por ahora están apagadas (`MOSTRAR_FOTOS` en
  `lib/data.ts`) y las tarjetas muestran solo el texto. Las de `public/sabores/` son de
  ejemplo, no son de Melano: reemplazarlas antes de volver a prenderlas.
- **Sucursales**: faltan direcciones de casi todas (los horarios se sacaron por ahora).
- **WhatsApp de contacto** (`11 4000-1910`) venía del diseño; confirmar.

## Al compartir el enlace

La imagen para redes (`app/opengraph-image.tsx`), el favicon (`app/icon.tsx`)
y el ícono del celular (`app/apple-icon.tsx`) se generan solos a partir de las
ilustraciones de `public/assets`.

Para que las redes encuentren la imagen, el sitio necesita saber su dirección:
cuando haya dominio propio, definir `NEXT_PUBLIC_SITE_URL` (por ejemplo
`https://melano.com.ar`). En Vercel, sin esa variable se usa la dirección de
producción del proyecto.
