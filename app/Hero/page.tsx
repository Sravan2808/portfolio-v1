"use client";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogImage,
  MorphingDialogClose,
} from "@/components/motion-primitives/morphing-dialog";
import Time from "@/components/Time";
import { FlipWords } from "@/components/ui/flip-words";
import Visitors from "@/components/Vistors";
import Image from "next/image";
import { CiStopwatch } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Hero = () => {
  return (
    <div className=" flex items-center px-5 py-3  gap-8 select-none mt-10">
      <MorphingDialog>
        <div className="p-1 flex items-center justify-center rounded-3xl border-2 border-zinc-300/25 overflow-hidden">
          <MorphingDialogTrigger className="flex">
            <MorphingDialogImage
              className="w-28 h-28 md:w-30 md:h-30 rounded-3xl object-cover"
              src="/Hero.jpg"
              alt="Hero"
            />
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent className="relative max-w-[80vw] max-h-[80vh] w-fit sm:w-[500px] rounded-3xl overflow-hidden shadow-xl">
              <MorphingDialogImage
                src="/Hero.jpg"
                alt="Hero"
                className="w-full h-full object-cover"
              />
              <MorphingDialogClose className="text-white drop-shadow-md z-50 bg-black/20 p-2 rounded-full hover:bg-black/40 transition" />
            </MorphingDialogContent>
          </MorphingDialogContainer>
        </div>
      </MorphingDialog>

      <div className="flex flex-col justify-center translate-y-1">
        <h1 className="font-bold text-2xl md:text-3xl">Sravan Surya</h1>

        <a
          href="https://x.com/SS19732004"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-lg hover:underline"
        >
          @ss19732004
        </a>

        <FlipWords
          className="text-gray-400 text-[14px] md:text-[15px] sm:-translate-x-2"
          words={["Full Stack Developer", "Designer", "Engineer"]}
        />

        <div className="flex items-center justify-center sm:justify-start gap-4 text-sm md:text-lg text-gray-400 mt-2 sm:mt-1">
          <div className="flex items-center gap-1">
            <CiStopwatch size={18} />
            <Time />
          </div>

          <div className="flex items-center gap-1">
            <MdOutlineRemoveRedEye size={18} />
            <Visitors />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
