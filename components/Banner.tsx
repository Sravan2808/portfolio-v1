"use client";

import Image from "next/image";
import { memo, useEffect, useRef, useState, type CSSProperties } from "react";
import samuraiImage from "../public/images/samurai.webp";

const r = (a: number, b: number) => a + Math.random() * (b - a);

type Star = { left: number; top: number; size: number; d: number; w: number };
type Petal = { top: number; size: number; dur: number; delay: number; dy: number; sw: number };

// y = top offset (px), w = width (px), sp = drift duration (s), dl = start offset (s)
const CLOUDS = [
  { y: 30, w: 170, sp: 95, dl: -10 },
  { y: 78, w: 230, sp: 130, dl: -70 },
  { y: 18, w: 120, sp: 80, dl: -45 },
  { y: 110, w: 150, sp: 110, dl: -95 },
];

// Soft fade at the bottom and left/right edges.
const MASK: CSSProperties = {
  WebkitMaskImage:
    "linear-gradient(to bottom,#000 76%,transparent),linear-gradient(to right,transparent,#000 6%,#000 94%,transparent)",
  WebkitMaskComposite: "source-in",
  maskImage:
    "linear-gradient(to bottom,#000 76%,transparent),linear-gradient(to right,transparent,#000 6%,#000 94%,transparent)",
  maskComposite: "intersect",
};

function Banner({ className = "" }: { className?: string }) {
  const rootRef = useRef<HTMLElement>(null);
  const starsRef = useRef<HTMLDivElement>(null);
  const cloudsRef = useRef<HTMLDivElement>(null);
  const petalsRef = useRef<HTMLDivElement>(null);

  const [stars, setStars] = useState<Star[]>([]);
  const [petals, setPetals] = useState<Petal[]>([]);
  const [width, setWidth] = useState(0);

  // Random values are created after mount so server and client HTML match.
  useEffect(() => {
    const id = window.setTimeout(() => {
      setStars(
        Array.from({ length: 70 }, () => ({
          left: r(0, 100),
          top: r(0, 60),
          size: r(1, 2.4),
          d: r(2, 6),
          w: r(0, 6),
        }))
      );
      setPetals(
        Array.from({ length: 16 }, () => ({
          top: r(0, 70),
          size: r(5, 11),
          dur: r(14, 28),
          delay: r(0, 28),
          dy: r(40, 150),
          sw: r(8, 26),
        }))
      );
    }, 0);
    return () => window.clearTimeout(id);
  }, []);

  // Track the banner width so petals and clouds always cross the full banner.
  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    const ro = new ResizeObserver(() => setWidth(Math.round(el.offsetWidth)));
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  // All motion uses the Web Animations API, so no extra CSS or Tailwind config is needed.
  useEffect(() => {
    if (!width || !stars.length || !petals.length) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const anims: Animation[] = [];
    const opts = (ms: number, delayMs: number, easing = "linear"): KeyframeAnimationOptions => ({
      duration: ms,
      delay: delayMs,
      iterations: Infinity,
      easing,
      fill: "both",
    });

    Array.from(starsRef.current?.children ?? []).forEach((el, i) => {
      const s = stars[i];
      if (!s) return;
      anims.push(
        el.animate([{ opacity: 0.15 }, { opacity: 1 }, { opacity: 0.15 }], opts(s.d * 1000, -s.w * 1000, "ease-in-out"))
      );
    });

    Array.from(cloudsRef.current?.children ?? []).forEach((el, i) => {
      const c = CLOUDS[i];
      anims.push(
        el.animate(
          [{ transform: `translateX(${-c.w - 60}px)` }, { transform: `translateX(${width + 60}px)` }],
          opts(c.sp * 1000, c.dl * 1000)
        )
      );
    });

    const D = width + 40;
    Array.from(petalsRef.current?.children ?? []).forEach((el, i) => {
      const p = petals[i];
      if (!p) return;
      anims.push(
        el.animate(
          [
            { transform: "translate(0px,0px) rotate(0deg)" },
            { transform: `translate(${-D * 0.25}px,${p.dy * 0.25 + p.sw}px) rotate(120deg)` },
            { transform: `translate(${-D * 0.5}px,${p.dy * 0.5 - p.sw}px) rotate(240deg)` },
            { transform: `translate(${-D * 0.75}px,${p.dy * 0.75 + p.sw}px) rotate(360deg)` },
            { transform: `translate(${-D}px,${p.dy}px) rotate(480deg)` },
          ],
          opts(p.dur * 1000, -p.delay * 1000)
        )
      );
    });

    return () => anims.forEach((a) => a.cancel());
  }, [stars, petals, width]);

  return (
    <header
      ref={rootRef}
      aria-label="A samurai resting in a field of flowers"
      className={`relative h-[clamp(140px,32vw,190px)] w-full overflow-hidden sm:h-[clamp(165px,24vw,190px)] ${className}`}
      style={MASK}
    >
      {/* sky */}
      <div className="absolute inset-0 bg-[linear-gradient(#040a26,#102a64)]" />

      {/* stars */}
      <div ref={starsRef} className="absolute inset-0">
        {stars.map((s, i) => (
          <i
            key={i}
            className="absolute rounded-full bg-white"
            style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, opacity: 0.15 }}
          />
        ))}
      </div>

      {/* clouds */}
      <div ref={cloudsRef} className="absolute inset-0">
        {CLOUDS.map((c, i) => (
          <i
            key={i}
            className="absolute left-0 rounded-full bg-[rgba(52,84,160,0.55)] blur-[5px]
              before:absolute before:bottom-[30%] before:left-[14%] before:h-[180%] before:w-[42%] before:rounded-full before:bg-inherit
              after:absolute after:bottom-[30%] after:left-[52%] after:h-[140%] after:w-[32%] after:rounded-full after:bg-inherit"
            style={{ top: c.y, width: c.w, height: c.w * 0.2, transform: `translateX(${-c.w - 60}px)` }}
          />
        ))}
      </div>

      {/* samurai + hill */}
      <Image
        src={samuraiImage}
        alt=""
        fill
        priority
        placeholder="blur"
        sizes="(max-width: 640px) 100vw, 768px"
        className="z-[2] object-cover object-[15%_82%] sm:object-[18%_82%]"
      />

      {/* petals */}
      <div ref={petalsRef} className="pointer-events-none absolute inset-0 z-[3]">
        {petals.map((p, i) => (
          <i
            key={i}
            className="absolute -right-4 rounded-[100%_0_100%_0] bg-[#f6e6a6] opacity-90"
            style={{ top: `${p.top}%`, width: p.size, height: p.size * 0.65 }}
          />
        ))}
      </div>

    </header>
  );
}

export default memo(Banner);