"use client";

import { useEffect, useRef, useState } from "react";

type Video = { src: string; poster: string; label: string };

// Fondo de la portada de /version-3: un solo video a pantalla completa que va
// pasando por los tres, uno detrás del otro, con un fundido entre cada uno.
export default function FondoVideos({ videos }: { videos: Video[] }) {
  const [actual, setActual] = useState(0);
  return (
    <div className="relative h-full">
      {videos.map((v, i) => (
        <VideoMudo
          key={v.src}
          {...v}
          activo={i === actual}
          // El siguiente se precarga mientras suena el actual
          preload={i === actual || i === (actual + 1) % videos.length ? "auto" : "none"}
          onEnded={() => setActual((a) => (a + 1) % videos.length)}
          className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-700 ${i === actual ? "opacity-100" : "opacity-0"}`}
        />
      ))}
    </div>
  );
}

// React no escribe `muted` en el HTML y sin eso el navegador bloquea el
// autoplay: se fuerza a mano. `activo` decide si suena o queda en pausa.
function VideoMudo({
  src, poster, label, activo, preload = "metadata", onEnded, className,
}: Video & { activo: boolean; preload?: string; onEnded?: () => void; className: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    if (activo) {
      v.currentTime = 0;
      v.play().catch(() => {});
    } else {
      v.pause();
    }
  }, [activo]);

  return (
    <video
      ref={ref} src={src} poster={poster} aria-label={label}
      muted playsInline preload={preload} onEnded={onEnded}
      className={className}
    />
  );
}
