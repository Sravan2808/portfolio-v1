"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaChevronLeft, FaArrowRightLong } from "react-icons/fa6";
import { SiGithub } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { projects } from "@/components/Data";
import Project from "@/components/Project";

const ViewProjects = () => {
  const router = useRouter();
  return (
    <div className="px-4 sm:px-6 md:px-8 w-full max-w-5xl mx-auto pb-5">
      <div className="mt-8 md:mt-14 flex flex-row items-center justify-start gap-3 md:gap-5 font-bold text-lg sm:text-xl md:text-2xl">
        <Button
          onClick={() => router.back()}
          variant={"ghost"}
          className={"cursor-pointer"}
        >
          <FaChevronLeft />
        </Button>
        <h1>Projects</h1>
      </div>

      <div className="mx-auto mt-6 md:mt-8 border border-gray-600 rounded-xl p-1 w-full max-w-4xl">
        <div className="w-full h-full overflow-hidden rounded-lg border border-stone-700 bg-stone-900 shadow-xl">
          <Image
            className="w-full h-auto object-cover"
            src="/images/Projects.gif"
            alt="Project Preview"
            width={1920}
            height={1080}
            unoptimized
          />
        </div>
      </div>

      <div className="mt-5 flex flex-col md:flex-row h-fit relative items-center gap-10 md:flex-wrap justify-between rounded-lg p-4 md:border-2 md:border-gray-500 md:hover:border-gray-100/70 md:border-dashed">
        {projects.map((project, index) => (
          <Project
            key={project.slug}
            slug={project.slug}
            Title={project.title}
            Background={project.background}
            PreviewImage={project.previewImage}
            Content={project.description.slice(0, 120) + "..."}
          />
        ))}

        {/* Coming Soon / GitHub Link Block */}
        <Link
          href="https://github.com/Sravan2808"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full sm:w-[300px] h-[340px] relative border border-stone-700/60 border-dashed rounded-lg p-[5px] cursor-pointer max-w-full flex items-center justify-center group overflow-hidden bg-stone-900/20 hover:bg-stone-800/80 transition-all duration-500 ease-out"
        >
          {/* Default State */}
          <div className="flex flex-col items-center justify-center transition-all duration-500 group-hover:scale-95 group-hover:opacity-0 absolute inset-0">
            <div className="w-16 h-16 rounded-full bg-stone-800 flex items-center justify-center mb-4 border border-stone-700">
              <SiGithub className="text-3xl text-stone-400" />
            </div>
            <h2 className="text-xl flex items-center gap-2 font-bold text-stone-500">
              More Projects{" "}
              <FaArrowRightLong className="mt-[2px] -rotate-[33deg]" />
            </h2>
          </div>

          {/* Hover State ("Focus Card" Effect) */}
          <div className="flex flex-col items-center justify-center opacity-0 scale-105 group-hover:scale-100 group-hover:opacity-100 transition-all duration-500 absolute inset-0 z-10">
            <h2 className="text-2xl font-bold text-white mb-2 tracking-wide">
              Coming Soon
            </h2>
            <p className="text-sm font-medium text-stone-400 flex items-center gap-2">
              Check my GitHub for more <SiGithub />
            </p>
          </div>
        </Link>
      </div>

      <div className="flex flex-col items-center justify-center p-8 mt-4">
        <h1 className="text-lg text-stone-400 flex items-center gap-2">
          For more cool projects, visit my
          <Link
            href="https://github.com/Sravan2808"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center font-bold text-stone-200 hover:text-white transition-colors"
          >
            <span className="relative">
              GitHub
              <span className="absolute left-0 -bottom-1 w-full h-[2px] bg-white origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></span>
            </span>
            <FaArrowRightLong className="ml-2 text-sm opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 -rotate-[33deg] transition-all duration-300 ease-out" />
          </Link>
        </h1>
      </div>
    </div>
  );
};

export default ViewProjects;