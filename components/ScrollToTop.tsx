"use client";

import { useEffect, useState } from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

interface ScrollToTopProps {
  className?: string;
  showAfter?: number;
}

const ScrollToTop = ({ className, showAfter = 100 }: ScrollToTopProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > showAfter);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showAfter]);

  const handleClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.button
      type="button"
      onClick={handleClick}
      className={cn(
        // Base positioning — safe inset for all devices including phones with home indicators
        "fixed z-50 group",
        "bottom-[max(1rem,env(safe-area-inset-bottom,1rem))]",
        "right-[max(1rem,env(safe-area-inset-right,1rem))]",
        // Slightly larger tap target on small screens, then grows on sm+
        "w-10 h-10",
        "sm:w-11 sm:h-11",
        "md:w-12 md:h-12",
        className,
      )}
      aria-label="Scroll to top"
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 8,
        scale: isVisible ? 1 : 0.98,
        pointerEvents: isVisible ? "auto" : "none",
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
    >
      <div
        className={cn(
          "flex items-center justify-center w-full h-full cursor-pointer",
          "rounded-[8px] border border-border",
          "bg-nonHover group-hover:bg-hover",
          "transition duration-300",
          // Tap highlight removed on touch devices to avoid sticky highlight
          "touch-manipulation select-none",
        )}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          // Icon scales with button: 20px on mobile, 22px on sm, 24px on md+
          className="w-5 h-5 sm:w-[22px] sm:h-[22px] md:w-6 md:h-6 text-background"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="m112 244 144-144 144 144M256 120v292"
          />
        </svg>
      </div>
    </motion.button>
  );
};

export default ScrollToTop;