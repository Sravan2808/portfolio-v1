"use client";
import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
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
          <img
            className="w-full h-auto object-cover"
            src="/images/Projects.gif"
            alt="Project Preview"
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
            </div>
    </div>
  );
};

export default ViewProjects;
