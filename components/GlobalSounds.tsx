"use client";

import { useEffect } from "react";

export function GlobalSounds() {
  useEffect(() => {
    // Preload audio objects with URL-encoded spaces
    const clickSound = new Audio("/audio/Mouse%20Click.wav");
    const whooshSound = new Audio("/audio/Whoosh%202.mp3");

    // Setting volume explicitly if needed, optional
    clickSound.volume = 0.5;
    whooshSound.volume = 0.5;

    // Ensure files are fully preloaded for zero latency
    clickSound.preload = "auto";
    whooshSound.preload = "auto";

    const playSound = (sound: HTMLAudioElement) => {
      // Clone the node so rapid consecutive clicks don't cut each other off
      const clone = sound.cloneNode() as HTMLAudioElement;
      clone.volume = sound.volume;
      clone.play().catch((e) => {
        // Autoplay policy might block sound if the user hasn't interacted with the page yet
        console.warn("Sound could not be played:", e);
      });
    };

    const handleInteraction = (e: MouseEvent) => {
      let target = e.target as HTMLElement | null;
      let shouldPlayClick = false;
      let shouldPlayWhoosh = false;

      // Bubble up to check for specific elements or styles
      while (target && target !== document.body) {
        // If it's a project or blog link/card (adjust class/ID check based on your actual HTML)
        // Checking common attributes or text contexts for projects and blogs
        const isProjectOrBlog =
          target.closest('[data-type="project"]') ||
          target.closest('[data-type="blog"]') ||
          target.closest('[data-type="whoosh"]') ||
          target.closest('a[href*="/Projects"]') ||
          target.closest('a[href*="/Blogs"]');

        if (isProjectOrBlog) {
          shouldPlayWhoosh = true;
          shouldPlayClick = false; // Override default click
          break;
        }

        // Check if cursor is pointer via computed style
        if (target instanceof Element) {
          const style = window.getComputedStyle(target);
          if (
            style.cursor === "pointer" ||
            target.tagName === "A" ||
            target.tagName === "BUTTON"
          ) {
            shouldPlayClick = true;
          }
        }

        target = target.parentElement;
      }

      if (shouldPlayWhoosh) {
        playSound(whooshSound);
      } else if (shouldPlayClick) {
        playSound(clickSound);
      }
    };

    // Trigger on mousedown instead of click for instant feedback
    document.addEventListener("mousedown", handleInteraction);

    return () => {
      document.removeEventListener("mousedown", handleInteraction);
    };
  }, []);

  return null;
}
