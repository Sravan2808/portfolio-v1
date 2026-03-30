"use client";
import Time from "@/components/Time";
import ToggleImage from "@/components/ToggleImage";
import { FlipWords } from "@/components/ui/flip-words";
import Image from "next/image";
import { CiStopwatch } from "react-icons/ci";
import { MdLoop, MdOutlineRemoveRedEye } from "react-icons/md";
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
