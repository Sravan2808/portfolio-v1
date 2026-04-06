"use client";

import Image from "next/image";
import ArrowIcon from "@/components/ArrowIcon";
import { Button } from "@/components/ui/button";
import { useRouter, useParams } from "next/navigation";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { GoServer } from "react-icons/go";
import { projects } from "@/components/Data";

const ViewProject = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug as string;

  const project = projects.find((p) => p.slug === slug);

  if (!project) return <div>Project not found...</div>;

  const sendToBack = (url: string) => {
    if (url) window.open(url, "_blank");
  };

  const hasVideo = project.slug === "s2chat"; // ✨ control which projects have demo videos

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
        <h1>Project</h1>
      </div>

      <div className="mx-auto mt-6 md:mt-8 border border-gray-600 rounded-xl p-1 w-full max-w-4xl">
        <div className="w-full h-full overflow-hidden rounded-lg border border-stone-700 bg-stone-900 shadow-xl relative">
          {hasVideo ? (
            <video
              className="w-full h-auto object-cover"
              autoPlay
              loop
              muted
              playsInline
              src={`/Videos/demo/${project.title}.mp4`}
            />
          ) : (
            <Image
              className="w-full h-auto object-cover"
              src="/images/Chill Mario.gif"
              alt={`${project.title} Preview`}
              width={1920}
              height={1080}
            />
          )}
        </div>
      </div>

      <div className="w-full flex sm:flex-row items-start sm:items-center justify-between mt-6 gap-4 sm:gap-2">
        <div
          onClick={() => sendToBack(project.githubUrl)}
          className={`flex group items-center justify-center transition-all duration-300 gap-2 ${
            project.githubUrl
              ? "cursor-pointer hover:underline"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <SiGithub className="size-5" />
          <h1 className="text-base sm:text-lg">GitHub</h1>
          {project.githubUrl && (
            <ArrowIcon
              className="opacity-0 group-hover:opacity-100 transition-all duration-300"
              rotate={-33}
            />
          )}
        </div>
        <div
          onClick={() => sendToBack(project.websiteUrl)}
          className={`flex group items-center justify-center transition-all duration-300 gap-2 ${
            project.websiteUrl
              ? "cursor-pointer hover:underline"
              : "opacity-50 cursor-not-allowed"
          }`}
        >
          <GoServer className="size-5" />
          <h1 className="text-base sm:text-lg">Website</h1>
          {project.websiteUrl && (
            <ArrowIcon
              className="opacity-0 group-hover:opacity-100 transition-all duration-300"
              rotate={-33}
            />
          )}
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3">
        <h1 className="font-bold text-lg sm:text-xl">{project.title}</h1>
        <p className="whitespace-pre-wrap text-sm sm:text-base text-gray-300">
          {project.description}
        </p>
      </div>

      <div className="mt-6 mb-20">
        <h1 className="font-bold text-lg mb-4">Stack used</h1>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {project.stack.map((skill, skillIndex) => (
            <Button
              key={skillIndex}
              variant="outline"
              onClick={() => sendToBack(skill.url)}
              className="flex items-center text-gray-400 cursor-pointer border-gray-400/75 bg-transparent gap-2 text-xs sm:text-sm"
            >
              <span className="text-base sm:text-lg">{skill.icon}</span>
              <span>{skill.name}</span>
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ViewProject;