"use client";
import React from "react";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <footer className="relative w-[100vw] ml-[calc(50%-50vw)] overflow-hidden min-h-[250px] flex flex-col justify-end mt-20">
      {/* Light gradient effect spanning the full bottom width, animates in on scroll */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 0.8, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: false }}
        className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-b from-transparent via-[#10175A]/40 to-[#254F97] blur-[2px] -z-10"
      />

      {/* Footer Content */}
      <div className="relative z-10 w-full p-10 flex flex-col justify-center items-center gap-4 text-gray-300">
        <h2 className="absolute bottom-0 left-0 right-0 translate-y-[35%] lg:text-[240px] text-[140px] text-center text-white/65 tracking-tighter mx-auto items-center">
          SRVN
        </h2>
      </div>
    </footer>
  );
};

export default Footer;
