"use client";
import React from "react";
import { motion } from "motion/react";
import { Signature } from "@/components/signature";

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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: false }}
          className="flex absolute top-0 md:top-auto md:-bottom-7 w-full md:w-auto justify-center md:right-15 items-center gap-1 z-20"
        >
          <p>Designed by </p>
          <Signature
            text="Sravan Surya"
            fontSize={5}
            inView={true}
            once={false}
            color="#ffffff"
          />
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
