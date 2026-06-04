"use client";

import React from "react";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";

type BlurFadeInProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  duration?: number;
  once?: boolean;
  yOffset?: number;
  blurPx?: number;
  inView?: boolean;
};

const BlurFadeIn = ({
  children,
  className,
  delayMs = 0,
  duration = 0.6,
  once = true,
  yOffset = 16,
  blurPx = 12,
  inView = true,
}: BlurFadeInProps) => {
  const hidden = { opacity: 0, y: yOffset, filter: `blur(${blurPx}px)` };
  const visible = { opacity: 1, y: 0, filter: "blur(0px)" };

  return (
    <motion.div
      className={cn(className)}
      initial={hidden}
      animate={inView ? undefined : visible}
      whileInView={inView ? visible : undefined}
      transition={{ duration, delay: delayMs / 1000, ease: "easeOut" }}
      viewport={inView ? { once, amount: 0.2 } : undefined}
    >
      {children}
    </motion.div>
  );
};

export default BlurFadeIn;
