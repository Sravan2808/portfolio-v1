"use client"; // <--- This tells Next.js to let this run in the browser

import React from "react";
import { skills } from "@/components/Data";
import { Button } from "@/components/ui/button";

const Skills = () => {
  const sendToBack = (url:string) => {
    if (url) window.open(url, "_blank");
  };
  return (
    <div className="px-5 py-3 mt-3 mb-5 flex flex-col gap-2 rounded-lg">
      <h1 className="font-bold text-2xl mb-3">Skills & Technologies</h1>
      <div className="flex flex-wrap gap-3">
        {skills.map((skill) => (
          <Button
            key={skill.name}
            variant="outline"
            onClick={() => sendToBack(skill.url)}
            className="flex items-center text-gray-400 cursor-pointer  border-gray-400/75 bg-transparent gap-2"
          >
            <span className="text-lg">{skill.icon}</span>
            <span>{skill.name}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Skills;
