"use client";

import { useCallback, useEffect, useRef, useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

type Position = {
  x: number;
  y: number;
};

type AnimationConfig = {
  row: number;
  frames: number;
  duration: number;
  loop?: boolean;
  loopCount?: number;
};

type AnimationName = "walking" | "sitting" | "barking";

// ─── Config ───────────────────────────────────────────────────────────────────

/**
 * The sprite sheet (Gemini-generated Bichon Frisé pixel art) has:
 *   - 6 columns × 3 rows
 *   - Row 0: walking  (6 frames)
 *   - Row 1: sitting  (6 frames, hearts appear mid-animation)
 *   - Row 2: barking  (6 frames)
 *
 * Place the image at /public/sprites/bichon.png in your Next.js project.
 */
const CONFIG = {
  // Natural cell size in the source image (px).
  // The sheet is roughly 1400 × 640 with 6 cols × 3 rows → ~233 × 213 per cell.
  // We normalise with background-size so only renderedWidth/Height matter.
  cols: 6,
  rows: 3,

  renderedWidth: 32,
  renderedHeight: 32,

  spriteSheet: "/sprites/bichon.png",

  animations: {
    walking: { row: 0, frames: 6, duration: 1.2, loop: true },
    sitting: { row: 1, frames: 6, duration: 2.0, loop: false, loopCount: 1 },
    barking: { row: 2, frames: 6, duration: 1.2, loopCount: 3 },
  } as const satisfies Record<AnimationName, AnimationConfig>,

  walkSpeed: 0.8,
  cursorOffset: { x: -16, y: 40 },
  idleThreshold: 600,
  maxSpeedMultiplier: 5,
  maxBoostClicks: 10,
  boostDecayInterval: 300,
  idleDeadZone: 50,
} as const;

const IDLE_ANIMATIONS: AnimationName[] = ["sitting", "barking"];

// ─── Derived sprite dimensions ────────────────────────────────────────────────

/**
 * background-size for the full sprite sheet so each visible cell
 * matches renderedWidth × renderedHeight.
 */
const SPRITE_BG_SIZE = {
  width: CONFIG.cols * CONFIG.renderedWidth, // 480
  height: CONFIG.rows * CONFIG.renderedHeight, // 240
};

// ─── Per-animation CSS styles (computed once) ─────────────────────────────────

function generateAnimationStyle(animationName: AnimationName) {
  const anim = CONFIG.animations[animationName];
  const { renderedHeight, renderedWidth } = CONFIG;
  const yOffset = anim.row * renderedHeight;

  let iterationCount: string | number = "infinite";
  const cfg = anim as AnimationConfig;
  if ("loop" in cfg && !cfg.loop) {
    iterationCount =
      "loopCount" in cfg && typeof cfg.loopCount === "number"
        ? cfg.loopCount
        : 1;
  }

  return {
    width: renderedWidth,
    height: renderedHeight,
    // backgroundImage: `url(${CONFIG.spriteSheet})`, // handled dynamically
    backgroundSize: `${SPRITE_BG_SIZE.width}px ${SPRITE_BG_SIZE.height}px`,
    backgroundPosition: `0 -${yOffset}px`,
    backgroundRepeat: "no-repeat" as const,
    imageRendering: "pixelated" as const,
    animation: `bichon-${animationName} var(--anim-duration-${animationName}, ${anim.duration}s) steps(${anim.frames}) ${iterationCount}`,
  };
}

const ANIMATION_STYLES: Record<
  AnimationName,
  ReturnType<typeof generateAnimationStyle>
> = {
  walking: generateAnimationStyle("walking"),
  sitting: generateAnimationStyle("sitting"),
  barking: generateAnimationStyle("barking"),
};

// ─── Keyframes CSS (injected once via <style>) ────────────────────────────────

const KEYFRAMES_CSS = (() => {
  const { renderedWidth, renderedHeight, rows, cols, animations } = CONFIG;
  const totalWidth = cols * renderedWidth; // full sheet width  (480)

  return (Object.entries(animations) as [AnimationName, AnimationConfig][])
    .map(([name, anim]) => {
      const yPos = anim.row * renderedHeight;
      const travelX = anim.frames * renderedWidth; // how far we step across X

      return `
        @keyframes bichon-${name} {
          from { background-position: 0 -${yPos}px; }
          to   { background-position: -${travelX}px -${yPos}px; }
        }
      `;
    })
    .join("\n");
})();

// ─── Utility ──────────────────────────────────────────────────────────────────

function clampToViewport(position: Position): Position {
  const maxX = window.innerWidth - CONFIG.renderedWidth;
  const maxY = window.innerHeight - CONFIG.renderedHeight;
  return {
    x: Math.max(0, Math.min(position.x, maxX)),
    y: Math.max(0, Math.min(position.y, maxY)),
  };
}

// ─── Main state hook ──────────────────────────────────────────────────────────

function useBichonState() {
  const [position, setPosition] = useState<Position>(() => ({
    x: window.innerWidth - CONFIG.renderedWidth - 20,
    y: 20,
  }));
  const [targetPosition, setTargetPosition] = useState<Position>(position);
  const [animation, setAnimation] = useState<AnimationName>("sitting");
  const [direction, setDirection] = useState<"left" | "right">("left");
  const [isIdle, setIsIdle] = useState(true);
  const [hasReachedTarget, setHasReachedTarget] = useState(true);
  const [clickBoost, setClickBoost] = useState(0);

  // Refs to latest values (avoid stale closures in rAF loops)
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const lastIdleAnimationRef = useRef<AnimationName | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const isPlayingIdleRef = useRef(true);
  const boostDecayTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const currentPositionRef = useRef(position);
  const targetPositionRef = useRef(targetPosition);
  const hasReachedTargetRef = useRef(hasReachedTarget);
  const clickBoostRef = useRef(clickBoost);

  useEffect(() => {
    currentPositionRef.current = position;
  }, [position]);
  useEffect(() => {
    targetPositionRef.current = targetPosition;
  }, [targetPosition]);
  useEffect(() => {
    hasReachedTargetRef.current = hasReachedTarget;
  }, [hasReachedTarget]);
  useEffect(() => {
    clickBoostRef.current = clickBoost;
  }, [clickBoost]);

  // ── Pick a random idle animation (avoids immediate repeat) ──────────────────
  const getRandomIdleAnimation = useCallback((): AnimationName => {
    const available = IDLE_ANIMATIONS.filter(
      (a) => a !== lastIdleAnimationRef.current,
    );
    const pick = available[Math.floor(Math.random() * available.length)];
    lastIdleAnimationRef.current = pick;
    return pick;
  }, []);

  // ── Mouse-move → update target ───────────────────────────────────────────────
  useEffect(() => {
    let rafId: number | null = null;

    const handleMouseMove = (e: MouseEvent | TouchEvent) => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        rafId = null;

        let clientX: number;
        let clientY: number;

        if ("touches" in e) {
          clientX = e.touches[0].clientX;
          clientY = e.touches[0].clientY;
        } else {
          clientX = (e as MouseEvent).clientX;
          clientY = (e as MouseEvent).clientY;
        }

        const newTarget = clampToViewport({
          x: clientX + CONFIG.cursorOffset.x,
          y: clientY + CONFIG.cursorOffset.y,
        });

        if (isPlayingIdleRef.current) {
          const dx = newTarget.x - currentPositionRef.current.x;
          const dy = newTarget.y - currentPositionRef.current.y;
          if (Math.sqrt(dx * dx + dy * dy) < CONFIG.idleDeadZone) return;

          isPlayingIdleRef.current = false;
          setAnimation("walking");
        }

        setTargetPosition(newTarget);
        setIsIdle(false);
        setHasReachedTarget(false);

        if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
        idleTimerRef.current = setTimeout(
          () => setIsIdle(true),
          CONFIG.idleThreshold,
        );
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("touchmove", handleMouseMove, { passive: true });
    window.addEventListener("touchstart", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("touchmove", handleMouseMove);
      window.removeEventListener("touchstart", handleMouseMove);
      if (rafId) cancelAnimationFrame(rafId);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  // ── Click → boost speed ──────────────────────────────────────────────────────
  useEffect(() => {
    const handleClick = () =>
      setClickBoost((prev) => Math.min(prev + 1, CONFIG.maxBoostClicks));

    window.addEventListener("click", handleClick, { passive: true });
    return () => window.removeEventListener("click", handleClick);
  }, []);

  // ── Decay boost over time ────────────────────────────────────────────────────
  useEffect(() => {
    if (clickBoost === 0) return;
    boostDecayTimerRef.current = setTimeout(
      () => setClickBoost((prev) => Math.max(prev - 1, 0)),
      CONFIG.boostDecayInterval,
    );
    return () => {
      if (boostDecayTimerRef.current) clearTimeout(boostDecayTimerRef.current);
    };
  }, [clickBoost]);

  // ── rAF position update ──────────────────────────────────────────────────────
  useEffect(() => {
    const updatePosition = () => {
      const boostFactor = clickBoostRef.current / CONFIG.maxBoostClicks;
      const speedMultiplier = 1 + boostFactor * (CONFIG.maxSpeedMultiplier - 1);
      const speed = CONFIG.walkSpeed * speedMultiplier;

      setPosition((cur) => {
        const dx = targetPositionRef.current.x - cur.x;
        const dy = targetPositionRef.current.y - cur.y;
        const d = Math.sqrt(dx * dx + dy * dy);

        if (d < speed) {
          if (!hasReachedTargetRef.current) {
            queueMicrotask(() => {
              setHasReachedTarget(true);
              setClickBoost(0);
              setDirection(CONFIG.cursorOffset.x < 0 ? "left" : "right");
            });
            hasReachedTargetRef.current = true;
          }
          return clampToViewport(targetPositionRef.current);
        }

        if (Math.abs(dx) > 0.5) {
          const newDir = dx > 0 ? "right" : "left";
          queueMicrotask(() => setDirection(newDir));
        }

        const ratio = speed / d;
        return clampToViewport({
          x: cur.x + dx * ratio,
          y: cur.y + dy * ratio,
        });
      });

      animationFrameRef.current = requestAnimationFrame(updatePosition);
    };

    animationFrameRef.current = requestAnimationFrame(updatePosition);
    return () => {
      if (animationFrameRef.current)
        cancelAnimationFrame(animationFrameRef.current);
    };
  }, []);

  // ── Animation state machine ──────────────────────────────────────────────────
  useEffect(() => {
    let next: AnimationName | null = null;

    if (!isIdle || !hasReachedTarget) {
      if (isPlayingIdleRef.current) isPlayingIdleRef.current = false;
      if (animation !== "walking") next = "walking";
    } else if (!isPlayingIdleRef.current) {
      isPlayingIdleRef.current = true;
      const rand = getRandomIdleAnimation();
      if (animation !== rand) next = rand;
    }

    if (next) queueMicrotask(() => setAnimation(next!));
  }, [isIdle, hasReachedTarget, animation, getRandomIdleAnimation]);

  // ── Handle animation end → cycle idle ───────────────────────────────────────
  const handleAnimationEnd = useCallback(() => {
    if (!isPlayingIdleRef.current) return;

    if (isIdle && hasReachedTarget) {
      setAnimation(getRandomIdleAnimation());
    } else {
      isPlayingIdleRef.current = false;
      setAnimation("walking");
    }
  }, [isIdle, hasReachedTarget, getRandomIdleAnimation]);

  return { position, animation, direction, onAnimationEnd: handleAnimationEnd };
}

// ─── Component ────────────────────────────────────────────────────────────────

export default function BichonFollowerCore() {
  const { position, animation, direction, onAnimationEnd } = useBichonState();
  const [spriteUrl, setSpriteUrl] = useState<string>(CONFIG.spriteSheet);

  useEffect(() => {
    // Process the image to make the pink background transparent
    const img = new Image();
    img.src = CONFIG.spriteSheet;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = img.width;
      canvas.height = img.height;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.drawImage(img, 0, 0);
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;

      // Assuming the top-left pixel color is the background pink
      const bgR = data[0];
      const bgG = data[1];
      const bgB = data[2];
      const bgA = data[3];

      // Only perform background removal if the top-left pixel is actually opaque.
      // If it is already transparent, the image likely has a transparent background already!
      if (bgA > 250) {
        for (let i = 0; i < data.length; i += 4) {
          // Higher tolerance to catch the pink anti-aliased borders and outline strokes
          const rDiff = Math.abs(data[i] - bgR);
          const gDiff = Math.abs(data[i + 1] - bgG);
          const bDiff = Math.abs(data[i + 2] - bgB);

          // We only sweep away the matching background color
          if (rDiff < 95 && gDiff < 95 && bDiff < 95) {
            data[i + 3] = 0; // alpha = 0 (transparent)
          }
        }
      }

      ctx.putImageData(imageData, 0, 0);
      setSpriteUrl(canvas.toDataURL());
    };
  }, []);

  const style = ANIMATION_STYLES[animation];

  const transform =
    direction === "left"
      ? `translate3d(${position.x}px, ${position.y}px, 0) scaleX(-1)`
      : `translate3d(${position.x}px, ${position.y}px, 0)`;

  return (
    <>
      <style>{KEYFRAMES_CSS}</style>
      <div
        className="bichon-follower pointer-events-none fixed left-0 top-0 z-50 drop-shadow-md"
        style={
          {
            ...style,
            "--anim-duration-walking": `${CONFIG.animations.walking.duration}s`,
            "--anim-duration-sitting": `${CONFIG.animations.sitting.duration}s`,
            "--anim-duration-barking": `${CONFIG.animations.barking.duration}s`,
            backgroundImage: `url(${spriteUrl})`,
            transform,
            willChange: "transform",
          } as React.CSSProperties
        }
        onAnimationEnd={onAnimationEnd}
        aria-hidden
      />
    </>
  );
}
