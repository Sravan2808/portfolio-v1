"use client";

import { useCursorOffset } from "@/hooks/useCursorOffset";

type Props = { src: string; strength: number };

export default function MascotOverlay({ src, strength }: Props) {
  const { ref, pos } = useCursorOffset<HTMLDivElement>();

  return (
    <div ref={ref} className="pointer-events-none absolute inset-0">
      <img
        src={src}
        alt=""
        draggable={false}
        className="h-full w-full transition-transform duration-150 ease-out"
        style={{
          transform: `translate(${pos.x * strength}px, ${pos.y * strength}px)`,
        }}
      />
    </div>
  );
}
