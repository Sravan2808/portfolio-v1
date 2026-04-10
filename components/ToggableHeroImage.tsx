"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogImage,
  MorphingDialogContainer,
  MorphingDialogContent,
  MorphingDialogClose,
} from "@/components/motion-primitives/morphing-dialog";
import { MdLoop } from "react-icons/md";
import Time from "@/components/Time";
import { CiStopwatch } from "react-icons/ci";
import { FlipWords } from "@/components/ui/flip-words";

const ToggableHeroImage = () => {
  const [isFirst, setIsFirst] = useState<boolean>(true);

  const currentImage = isFirst ? "https://github.com/Sravan2808.png" : "https://unavatar.io/x/SS19732004";

  return (
    <>
      <MorphingDialog>
        <div className="p-1 flex items-center justify-center rounded-3xl border-2 border-zinc-300/25 overflow-hidden">
          <MorphingDialogTrigger className="flex cursor-pointer relative w-28 h-28 md:w-30 md:h-30">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentImage}
                initial={{
                  opacity: 0,
                  scale: 1.1,
                  filter:
                    "brightness(2) contrast(2) saturate(200%) hue-rotate(90deg)",
                }}
                animate={{
                  opacity: [0, 1, 0.8, 1, 0.9, 1],
                  x: [0, -8, 8, -4, 4, 0],
                  y: [0, 8, -8, 4, -4, 0],
                  skewX: [0, 20, -20, 10, -10, 0],
                  filter: [
                    "brightness(2) contrast(2) saturate(200%) hue-rotate(90deg)",
                    "brightness(0.5) invert(1) hue-rotate(-90deg) blur(2px)",
                    "brightness(1.5) contrast(1.5) saturate(150%) hue-rotate(45deg)",
                    "brightness(1.2) contrast(1.2) saturate(120%) blur(1px)",
                    "brightness(1) contrast(1) saturate(100%) hue-rotate(0deg)",
                    "brightness(1) contrast(1) saturate(100%) hue-rotate(0deg)",
                  ],
                }}
                exit={{
                  opacity: 0,
                  scale: 1.1,
                  x: [0, 15, -15, 0],
                  skewX: [0, 30, -30, 0],
                  filter: "brightness(2) invert(1) hue-rotate(180deg)",
                  transition: { duration: 0.15, ease: "linear" },
                }}
                transition={{ duration: 0.35, ease: "linear" }}
                className="absolute inset-0"
              >
                <MorphingDialogImage
                  key={`trigger-${currentImage}`}
                  className="w-full h-full rounded-3xl object-cover"
                  src={currentImage}
                  alt="Hero"
                />
              </motion.div>
            </AnimatePresence>
          </MorphingDialogTrigger>
          <MorphingDialogContainer>
            <MorphingDialogContent className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] rounded-3xl overflow-hidden shadow-xl">
              <MorphingDialogImage
                key={`content-${currentImage}`}
                src={currentImage}
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

        <div className="flex items-center gap-4 text-sm md:text-lg text-gray-400 mt-2 sm:mt-1">
          <div className="flex items-center gap-1">
            <CiStopwatch size={18} />
            <Time />
          </div>

          <div className="flex items-center gap-1">
            <MdLoop
              data-type="glitch"
              onClick={() => setIsFirst((prev) => !prev)}
              className="cursor-pointer active:scale-110 transition-transform hover:text-gray-300"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggableHeroImage;
