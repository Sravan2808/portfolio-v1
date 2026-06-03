"use client";

import ToggableHeroImage from "@/components/ToggableHeroImage";
import BlurFadeIn from "@/components/BlurFadeIn";

const Hero = () => {
  return (
    <BlurFadeIn className="flex items-center px-5 py-3 gap-8 select-none mt-10">
      <ToggableHeroImage />
    </BlurFadeIn>
  );
};

export default Hero;
