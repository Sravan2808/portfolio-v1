"use client";

import ToggableHeroImage from "@/components/ToggableHeroImage";

const Hero = () => {
  return (
    <div className=" flex items-center px-5 py-3  gap-8 select-none mt-10">
      {/* Moved logic into entirely new separate robust component */}
      <ToggableHeroImage />
    </div>
  );
};

export default Hero;
