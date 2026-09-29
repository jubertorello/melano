"use client";

import { useEffect, useRef } from "react";

// React no escribe el atributo `muted` en el HTML, y sin él los navegadores
// bloquean el autoplay. Lo forzamos al montar y arrancamos el video a mano.
export default function AutoVideo(props: React.VideoHTMLAttributes<HTMLVideoElement>) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.play().catch(() => {});
  }, []);
  return <video ref={ref} autoPlay muted loop playsInline {...props} />;
}
