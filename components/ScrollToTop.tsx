"use client";

import { useEffect, useState } from "react";
import type React from "react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

type ScrollToTopButtonProps = Omit<
  React.ComponentPropsWithoutRef<"button">,
  "onAnimationStart" | "onAnimationEnd" | "onAnimationIteration"
>;

interface ScrollToTopProps extends ScrollToTopButtonProps {
  showAfter?: number;
}

const ScrollToTop = ({
  className,
  showAfter = 100,
  ...props
}: ScrollToTopProps) => {
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
        "fixed bottom-4 right-4 z-50 group",
        "sm:bottom-6 sm:right-6",
        className,
      )}
      aria-label="Scroll to top"
      initial={false}
      animate={{
        opacity: isVisible ? 1 : 0,
        y: isVisible ? 0 : 8,
        scale: isVisible ? 1 : 0.98,
      }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      {...props}
    >
      <div className="flex items-center cursor-pointer justify-center rounded-[8px] border border-border w-full h-full p-1.5 bg-nonHover group-hover:bg-hover transition duration-300">
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="0 0 512 512"
          className="size-6 text-background"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="m112 244 144-144 144 144M256 120v292"
          ></path>
        </svg>
      </div>
    </motion.button>
  );
};

export default ScrollToTop;
