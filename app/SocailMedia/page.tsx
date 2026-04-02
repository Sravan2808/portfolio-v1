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

      <div className="mt-5 w-full overflow-x-auto flex justify-start md:justify-center pb-2">
        <div className="min-w-max">
          <GitHubCalendar
            blockSize={12}
            blockMargin={4}
            fontSize={12}
            username="sravan2808"
          />
        </div>
      </div>
    </div>
  );
};

export default Socialmedia;
