// Botón-píldora de los filtros y de las opciones de los formularios.
// `idle` es el fondo cuando no está elegido (crema dentro de tarjetas papel,
// transparente sobre fondo crema).
export default function Pill({
  active,
  onClick,
  idle = "transparent",
  className = "px-4 py-3 text-[14px]",
  children,
}: {
  active: boolean;
  onClick: () => void;
  idle?: "transparent" | "crema";
  className?: string;
  children: React.ReactNode;
}) {
  const off = idle === "crema" ? "bg-crema" : "bg-transparent";
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`cursor-pointer rounded-full border leading-none font-normal ${className} ${
        active ? "border-cafe bg-cafe text-crema" : `border-cafe/25 ${off} text-cafe`
      }`}
    >
      {children}
    </button>
  );
}
