"use client";

import { Button } from "@/components/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import React from "react";
import { IoMail } from "react-icons/io5";
import { SiMinutemailer } from "react-icons/si";
import { SiGithub } from "react-icons/si";
import { FaRegFilePdf } from "react-icons/fa6";
import { openLink } from "@/components/openLink";
import LastPlayed from "@/components/last_playlist";

const AboutMe = () => {
  return (
    <div className="px-5 py-3  mt-5 rounded-lg ">
      <p className="font-normal">
        Hey, I'm Sravan Surya a{" "}
        <span className="font-bold text-primary-foreground">
          full-stack developer
        </span>{" "}
        who enjoys building modern web apps where clean design, performance, and
        great user experience come together.
      </p>
      <p className="font-normal">
        I mostly work with{" "}
        <span className="text-primary-foreground font-bold">
          JavaScript,TypeScript, React, Next.js, Node.js, PostgreSQL and MongoDB
        </span>
        , and I'm always open to learning new technologies and growing through
        new opportunities.
      </p>

      <div className="mt-3 flex  flex-nowrap items-center justify-start gap-1 overflow-x-hidden pb-1 sm:flex-wrap sm:overflow-visible sm:gap-3">
        <Button
          className="cursor-pointer shrink-0"
          onClick={() => openLink("https://x.com/SS19732004")}
        >
          <SiMinutemailer /> Twitter Dm
        </Button>
        <div className="shrink-0 text-bold text-sm -rotate-45">OR</div>
        <Button
          className="cursor-pointer shrink-0"
          onClick={() => openLink("mailto:vsravansurya@gmail.com")}
        >
          <IoMail /> Email Me
        </Button>
        <div className="shrink-0">|</div>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="cursor-pointer shrink-0"
              onClick={() => openLink("https://github.com/Sravan2808")}
            >
              <SiGithub className="size-3.5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p className="size-1">GitHub</p>
          </TooltipContent>
        </Tooltip>

        <Tooltip>
          <TooltipTrigger asChild>
            <Button
              className="cursor-pointer shrink-0"
              onClick={() =>
                openLink(
                  "https://drive.google.com/file/d/1SD95XKcO0feTLfJ77l5OIEn1Ihz0oIYe/view?usp=sharing",
                )
              }
            >
              <FaRegFilePdf className="size-3.5" />
            </Button>
          </TooltipTrigger>
          <TooltipContent>
            <p>Resume</p>
          </TooltipContent>
        </Tooltip>
      </div>
      <div className="mt-6 w-full sm:mt-8">
        <LastPlayed />
      </div>
    </div>
  );
};

export default AboutMe;
