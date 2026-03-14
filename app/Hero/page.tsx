"use client";
import Time from "@/components/Time";
import { FlipWords } from "@/components/ui/flip-words";
import Visitors from "@/components/Vistors";
import Image from "next/image";
import { CiStopwatch } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";

const Hero = () => {
  return (
    <div className="max-w-xl mx-auto flex items-center px-5 py-3 gap-8 select-none mt-10">

      <div className="px-1 py-1.5 rounded-3xl outline outline-2 outline-zinc-300/25 overflow-hidden">
        <Image
          className="w-28 h-28 md:w-34 md:h-34 rounded-3xl"
          src="/hero.jpg"
          alt="Hero"
          width={96}
          height={96}
        />
      </div>

      <div className="flex flex-col justify-center translate-y-1">

        <h1 className="font-bold text-2xl md:text-4xl">Sravan Surya</h1>

        <a
          href="https://twitter.com/ss19732004/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm md:text-lg hover:underline"
        >
          @ss19732004
        </a>

        <FlipWords
          className="text-gray-400 md:text-xl -translate-x-2"
          words={["Full Stack Developer", "Designer", "Engineer"]}
        />

        <div className="flex items-center gap-4 text-sm md:text-lg text-gray-400 mt-1">

          <div className="flex items-center gap-1 ">
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