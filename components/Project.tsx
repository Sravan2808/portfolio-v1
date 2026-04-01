"use client";
import Image from "next/image";
import React from "react";
import PulseDot from "@/components/PulseDot";
import ArrowIcon from "./ArrowIcon";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";

interface ProjectProps {
  Title: string;
  Background: string;
  PreviewImage: string;
  Content: string;
}

const Project = ({
  Title,
  Background,
  PreviewImage,
  Content,
}: ProjectProps) => {
  const router = useRouter();
  return (
    <motion.div
      onClick={() => router.push("/ViewProject")}
      data-type="project"
      className="w-full sm:w-[300px] relative border border-stone-700 rounded-lg p-[5px] cursor-pointer max-w-full"
      initial="initial"
      whileHover="hover"
    >
      {/* Top Image Section */}
      <div className="relative w-full h-[200px] overflow-hidden rounded-[14px]">
        <div className="absolute inset-0 bg-[#33323266]" />

        <motion.div
          variants={{ initial: { opacity: 0 }, hover: { opacity: 1 } }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={Background}
            alt="Project Background"
            fill
            className="object-cover"
          />
        </motion.div>

        <motion.h2
          variants={{
            initial: {
              color: "var(--primary-foreground)",
              left: "10px",
              x: "0%",
            },
            hover: { color: "var(--primary)", left: "50%", x: "-50%" },
          }}
          transition={{ duration: 0.5 }}
          className="absolute top-[20px] text-sm font-bold whitespace-nowrap"
        >
          {Title}
        </motion.h2>

        <motion.div
          variants={{ initial: { top: "70px" }, hover: { top: "80px" } }}
          transition={{ duration: 0.5 }}
          className="absolute left-1/2 -translate-x-1/2 w-[90%] h-[130px]"
        >
          <Image
            src={PreviewImage}
            alt="Project Preview"
            fill
            className="object-contain"
          />
        </motion.div>
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
      <div className="mt-1 text-[var(--light-gray)] text-sm">{Content}</div>

      {/* View Project */}
      <motion.div
        variants={{
          initial: { color: "var(--light-gray)" },
          hover: { color: "var(--primary-foreground)" },
        }}
        transition={{ duration: 0.3 }}
        className="mt-2 flex items-center gap-2"
      >
        View Project
        <motion.div
          variants={{ initial: { rotate: -39 }, hover: { rotate: 0 } }}
          transition={{ duration: 0.3 }}
        >
          <ArrowIcon />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Project;
