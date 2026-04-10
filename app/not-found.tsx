"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NotFoundPage = () => {
  const router = useRouter();
  return (
    <div className="px-4 sm:px-6 md:px-8 w-full max-w-5xl mx-auto pb-5 flex flex-col justify-center items-center min-h-[80vh] md:min-h-[85vh]">
      <div className="flex flex-col items-center justify-center w-full mt-6">
        <div className="w-full relative overflow-hidden rounded-lg border border-stone-700 bg-stone-900 shadow-xl max-w-lg sm:max-w-2xl lg:max-w-3xl aspect-video">
          <Image
            className="w-full h-full object-cover"
            src="/images/GoBack.gif"
            alt="404 Not Found"
            width={1920}
            height={1080}
            unoptimized
          />
        </div>

        <div className="flex flex-col text-center justify-center items-center mt-6 sm:mt-8 md:mt-10 gap-2 sm:gap-3 px-2 w-full">
          <h2 className="text-4xl sm:text-5xl md:text-7xl font-extrabold text-white tracking-wider">
            404
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-md sm:max-w-lg md:max-w-xl">
            Oops! The page you are looking for does not exist or has been moved
            to another universe.
          </p>

          <div
            onClick={() => router.push("/")}
            className="mt-6 sm:mt-8 w-fit flex items-center justify-center gap-2 border-2 px-5 py-2.5 sm:px-8 sm:py-3 text-sm sm:text-base md:text-lg font-semibold bg-[#d1ccc2]/90 text-[#1a1a1a] border-gray-500 rounded-xl cursor-pointer hover:bg-[#d1ccc2] hover:scale-105 active:scale-95 transition-all duration-300 shadow-lg"
          >
            Return Home
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFoundPage;
