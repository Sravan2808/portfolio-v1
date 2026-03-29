"use client";

import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const ViewProject = () => {
  const router = useRouter();

  return (
    <>
      <div className="mt-14 flex flex-row items-center justify-start gap-5 font-bold md:text-2xl sm:text-xl">
        <Button
          onClick={() => router.back()}
          variant={"ghost"}
          className={"cursor-pointer"}
        >
          <FaChevronLeft />
        </Button>
        <h1>Project</h1>
      </div>

      <div className="w-fit m-12 flex relative items-start gap-1 border-2 px-3 py-1  border-gray-600 rounded-lg cursor-pointer hover:bg-[#d1ccc2] transition-all duration-300">
      
      </div>
    </>
  );
};

export default ViewProject;
