"use client";

import { useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";

import { useBichonFollowerVisibility } from "@/hooks/use-bichon-follower-visibility";
import { useIsClient } from "@/hooks/use-is-client";

// Load the heavy core (sprite animation + rAF loop) only on the client
const BichonFollowerCore = dynamic(() => import("./bichon_follower_core"), {
  ssr: false,
});

/**
 * Drop this anywhere in your layout (e.g. inside a ClientProviders wrapper).
 * The dog only renders when:
 *   - We're on the client
 *   - The user has toggled visibility on (stored in localStorage via jotai)
 *   - prefers-reduced-motion is NOT active
 *   - The device is NOT touch-based
 */
export function BichonFollower() {
  const isClient = useIsClient();
  const [isVisible] = useBichonFollowerVisibility();
  const shouldReduceMotion = useReducedMotion();

  const shouldRender = isClient && isVisible && !shouldReduceMotion;

  if (!shouldRender) return null;

  return <BichonFollowerCore />;
}
