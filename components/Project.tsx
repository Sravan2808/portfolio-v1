"use client"
import Image from "next/image";
import React from "react";
import PulseDot from "@/components/PulseDot";
import ArrowIcon from "./ArrowIcon";

interface ProjectProps {
  Title: string;
  Background: string;
  PreviewImage: string;
  Content: string;
  url?:string
}


const Project = ({ Title, Background, PreviewImage, Content , url }: ProjectProps) => {
  return (
    <div className="group w-[300px] relative border border-stone-700 rounded-lg p-[5px] cursor-grabbing">

      {/* Top Image Section */}
      <div onClick={()=> window.open(url, "_blank")} className="relative w-full h-[200px] overflow-hidden rounded-[14px]">

        <div className="absolute inset-0 bg-[#33323266]" />

        <Image
          src={Background}
          alt="Project Background"
          fill
          className="object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />

        <h2
          className="
          absolute top-[20px] left-[10px]
          text-[var(--primary-foreground)]
          text-sm font-bold
          transition-all duration-500
          group-hover:text-[var(--primary)]
          group-hover:left-1/2
          group-hover:-translate-x-1/2
          "
        >
          {Title}
        </h2>

        <div
          className="
          absolute left-[15px] top-[70px]
          w-[270px] h-[130px]
          transition-all duration-500
          group-hover:top-[80px]
          "
        >
          <Image
            src={PreviewImage}
            alt="Project Preview"
            fill
            className="object-contain"
          />
        </div>
      </div>

      {/* Title + Status */}
      <div className="mt-2 flex justify-between">
        <h2 className="font-bold">{Title}</h2>

        <div className="flex items-center gap-2">
          <PulseDot />
          <span className="text-sm">Live</span>
        </div>
      </div>

      {/* Content */}
      <div className="mt-1 text-[var(--light-gray)] text-sm">
        {Content}
      </div>

      {/* View Project */}
      <div
      onClick={() => window.open(url, "_blank")}
        className="
        mt-2 flex items-center gap-2
        text-[var(--light-gray)]
        group-hover:text-[var(--primary-foreground)]
        transition-colors duration-300
        "
      >
        View Project

        <div onClick={()=>window.open(url,"_blank")} className="transition-transform duration-300 group-hover:rotate-0 rotate-[-39deg]">
          <ArrowIcon />
        </div>
      </div>

    </div>
  );
};

export default Project;