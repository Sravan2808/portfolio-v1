"use client";

import React, { useEffect, useState } from "react";
import { GitHubCalendar } from "react-github-calendar";
import { Activity } from "react-github-calendar";

const theme = {
  light: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
  dark: ["#161b22", "#0e4429", "#006d32", "#26a641", "#39d353"],
};

// skeleton that matches the calendar's approximate dimensions
const CalendarSkeleton = () => (
  <div className="flex flex-col gap-2 animate-pulse">
    <div className="flex gap-1">
      {Array.from({ length: 53 }).map((_, i) => (
        <div key={i} className="flex flex-col gap-1">
          {Array.from({ length: 7 }).map((_, j) => (
            <div key={j} className="w-3 h-3 rounded-sm bg-[#161b22]" />
          ))}
        </div>
      ))}
    </div>
  </div>
);

const GitCalendar = () => {
  return (
    <div className="mt-5 w-full overflow-x-auto pb-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <div className="w-max mx-auto px-4 md:px-2 flex justify-start">
        <GitHubCalendar
          blockSize={12}
          blockMargin={4}
          fontSize={12}
          username="sravan2808"
          theme={theme}
        />
      </div>
    </div>
  );
};

export default GitCalendar;
