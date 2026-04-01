"use client";

import { useBichonFollowerVisibility } from "@/hooks/use-bichon-follower-visibility";

/**
 * A ready-made toggle button you can drop into a settings panel,
 * navbar, or anywhere else. Fully optional — you can call
 * useBichonFollowerVisibility() directly from your own UI instead.
 */
export function BichonFollowerToggle() {
  const [isVisible, setIsVisible] = useBichonFollowerVisibility();

  return (
    <button
      type="button"
      onClick={() => setIsVisible((v) => !v)}
      aria-label={isVisible ? "Hide the dog" : "Show the dog"}
      className="inline-flex items-center justify-center gap-2 rounded-full border border-pink-300 bg-pink-50 px-4 py-2 text-sm font-medium text-pink-700 shadow-sm transition hover:bg-pink-100 dark:border-pink-700 dark:bg-pink-950 dark:text-pink-300 dark:hover:bg-pink-900 w-fit"
    >
      <span aria-hidden>🐾</span>
      {isVisible ? "Hide the dog" : "Show the dog"}
    </button>
  );
}
