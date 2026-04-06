import { Button } from "@/components/ui/button";
import { LinkPreview } from "@/components/ui/link-preview";
import React from "react";

import { socialLinks } from "@/components/Data";
import GitCalendar from "@/components/GitCalendar";

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

      <GitCalendar />

    </div>
  );
};

export default Socialmedia;
