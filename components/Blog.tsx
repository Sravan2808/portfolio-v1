"use client";
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
      onClick={() => sendTo(url)}
      className="group flex flex-col cursor-grab h-fit relative  items-start  md:flex-wrap justify-between  rounded-lg p-4 md:border-2 md:border-gray-500 md:hover:border-gray-100/70 md:border-dashed"
    >
      <h1 className="font-bold ">{title}</h1>
      <div className="flex justify-between  w-full items-start text-sm text-gray-500 mt-1">
        <h1>
          <Calendar className="inline-block mr-1" size={16} />
          Published on {publishedDate}
        </h1>
        <ArrowIcon
          className="group-hover:rotate-33  transition-transform duration-200"
          rotate={-33}
        />
      </div>
      <div className="flex items-start justify-start">
        {arr.map((item, index) => (
          <button
            key={index}
            className="text-(--light-gray) px-2 py-1 border text-sm mt-1 rounded-sm border-gray-300/20 "
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Blog;
