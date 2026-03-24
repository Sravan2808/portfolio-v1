import { Button } from "@/components/ui/button";
import { LinkPreview } from "@/components/ui/link-preview";
import React from "react";
import { GitHubCalendar } from "react-github-calendar";

import { socialLinks } from "@/components/Data";

const Socialmedia = () => {
  return (
    <div className="px-5 py-3 mt-3 rounded-lg">
      <h3>
        Here are my{" "}
        <span className="font-bold text-[var(--primary-foreground)]">
          SocialMedia
        </span>{" "}
        profiles
      </h3>

      <div className="flex gap-3 cursor-pointer mt-3  flex-wrap">
        {socialLinks.map((social, index) => (
          <LinkPreview key={index} url={social.url}>
            <Button className="flex gap-2 cursor-pointer items-center">
              {social.icon}
              {social.name}
            </Button>
          </LinkPreview>
        ))}
      </div>

      <div className="mt-3  -translate-x-3 max-w-9xl flex justify-center scale-90 overflow-hidden ">
        <GitHubCalendar
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          username="sravan2808"
        />
      </div>
    </div>
  );
};

export default Socialmedia;
