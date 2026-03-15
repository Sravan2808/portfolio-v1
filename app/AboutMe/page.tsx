"use client";

import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent,TooltipTrigger } from "@/components/ui/tooltip";
import React from "react";
import { IoMail } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaRegFilePdf } from "react-icons/fa6";





const AboutMe = () => {

    const openLink = (url:string) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

  return (
    <div className="px-5 py-3  mt-5 rounded-lg ">

      <p className="font-normal">
        Hey, I'm Sravan Surya a full-stack developer who enjoys building modern
        web apps where clean design, performance, and great user experience come
        together.
      </p>
      <p className="font-normal">
        I mostly work with <span className="text-[#ffffff]">JavaScript, React, Next.js, Node.js, and MongoDB</span>, and
        I'm always open to learning new technologies and growing through new
        opportunities.
      </p>

      <div className="flex items-center justify-start mt-3 gap-3">
        <Button onClick={() => openLink("https://x.com/SS19732004")}>
          <SiMinutemailer /> Twitter Dm
        </Button>
        <div className="text-bold text-sm -rotate-45">OR</div>
        <Button onClick={() => openLink("mailto:vsravansurya@gmail.com.com")}>
            <IoMail /> Email Me
        </Button>
        <div>
            |
        </div>

        <Tooltip>
            <TooltipTrigger asChild>
              <Button  onClick={()=>openLink("https://github.com/Sravan2808")}>
                <SiGithub />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>GitHub</p>
            </TooltipContent>
        </Tooltip>
        
        <Tooltip>
            <TooltipTrigger asChild>
              <Button onClick={()=>openLink("https://drive.google.com/file/d/1SD95XKcO0feTLfJ77l5OIEn1Ihz0oIYe/view?usp=sharing")}>
                <FaRegFilePdf />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>Resume</p>
            </TooltipContent>
        </Tooltip>
      </div>
    </div>
  );
};

export default AboutMe;
