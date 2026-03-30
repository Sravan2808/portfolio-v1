import { Calendar } from "lucide-react";
import React from "react";
import ArrowIcon from "./ArrowIcon";

interface BlogProps {
  arr: string[];
  title: string;
  publishedDate: string;
  url: string;
}

const sendTo = (url: string) => {
  window.open(url, "_blank");
};

const Blog = ({ arr, title, publishedDate, url }: BlogProps) => {
  return (
    <div
      data-type="blog"
      onClick={() => sendTo(url)}
      className="group w-full flex flex-col cursor-pointer h-fit relative items-start justify-between rounded-xl sm:rounded-lg p-4 sm:p-5 border border-gray-800 md:border-2 md:border-gray-500 md:hover:border-gray-100/70 md:border-dashed hover:bg-stone-900 md:hover:bg-transparent transition-all"
    >
      <div className="flex justify-between w-full items-start gap-4">
        <h1 className="font-bold text-base sm:text-lg lg:text-xl leading-snug text-gray-100 group-hover:text-white transition-colors">
          {title}
        </h1>
        <ArrowIcon
          className="group-hover:rotate-33 transition-transform duration-200 mt-1 shrink-0"
          rotate={-33}
        />
      </div>

      <div className="flex w-full items-center text-xs sm:text-sm text-gray-500 mt-2 sm:mt-3">
        <h1 className="flex items-center">
          <Calendar className="mr-1.5 sm:mr-2" size={14} />
          Published on {publishedDate}
        </h1>
      </div>

      <div className="flex items-start justify-start flex-wrap gap-2 mt-3 sm:mt-4 w-full">
        {arr.map((item, index) => (
          <button
            key={index}
            className="text-(--light-gray) px-2.5 py-1 border text-xs sm:text-sm rounded-md border-gray-300/20 whitespace-nowrap hover:bg-gray-800 transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
