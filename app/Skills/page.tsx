"use client"; // <--- This tells Next.js to let this run in the browser

import React from "react";
import { skills } from "@/components/Data";
import { Button } from "@/components/ui/button";

const Skills = () => {
  const sendToBack = (url: string) => {
    if (url) window.open(url, "_blank");
  };
  return (
    <div className="px-4 sm:px-5 py-3 mt-3 mb-5 flex flex-col gap-2 rounded-lg">
      <h1 className="font-bold text-xl sm:text-2xl mb-3">
        Skills & Technologies
      </h1>
      <div className="flex flex-wrap gap-2 sm:gap-3">
        {skills.map((skill) => (
          <Button
            key={skill.name}
            variant="outline"
            onClick={() => sendToBack(skill.url)}
            className="flex items-center text-sm md:text-base text-gray-400 cursor-pointer border-gray-400/75 bg-transparent gap-1.5 sm:gap-2 h-9 sm:h-10 px-3 sm:px-4"
          >
            <span className="text-base sm:text-lg">{skill.icon}</span>
            <span>{skill.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
