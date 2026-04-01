"use client";

import React from "react";
import { FaChevronLeft } from "react-icons/fa6";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Blog from "@/components/Blog";

const ViewBlogs = () => {
  const router = useRouter();
  return (
    <div className="px-4 sm:px-6 md:px-8 w-full max-w-5xl mx-auto pb-5">
      <div className="mt-8 md:mt-14 flex flex-row items-center justify-start gap-3 md:gap-5 font-bold text-lg sm:text-xl md:text-2xl">
        <Button
          onClick={() => router.back()}
          variant={"ghost"}
          className={"cursor-pointer"}
        >
          <FaChevronLeft />
        </Button>
        <h1>Blogs</h1>
      </div>

      <div className="mx-auto mt-6 md:mt-8 border border-gray-600 rounded-xl p-1 w-full max-w-4xl">
        <div className="w-full h-full overflow-hidden rounded-lg border border-stone-700 bg-stone-900 shadow-xl">
          <img
            className="w-full h-auto object-cover"
            src="/images/Blogs.gif"
            alt="Blog Preview"
          />
        </div>
      </div>
      <div className="mt-8 flex flex-col gap-4 md:gap-6 w-full max-w-4xl mx-auto">
        <Blog
          arr={["Node.js", "React", "JavaScript"]}
          title="How to Send Emails in Node.js Using Nodemailer"
          publishedDate="March 15, 2026"
          url="https://medium.com/@sravansurya/how-to-send-emails-in-node-js-using-nodemailer-8b1dd48e871a"
        />
        <Blog
          arr={["Node.js", "Redis", "Jwt", "Backend Development"]}
          title="How I Solved JWT Logout Security Using Redis Token Blacklisting"
          publishedDate="March 25, 2026"
          url="https://medium.com/@sravansurya/how-i-solved-jwt-logout-security-using-redis-token-blacklisting-24377e81d4fe"
        />
      </div>
    </div>
  );
};

export default ViewBlogs;
