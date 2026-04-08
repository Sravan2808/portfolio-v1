"use client";

import { motion } from "motion/react";
import AboutMe from "./AboutMe/page";
import Blogs from "./Blogs/page";
import Hero from "./Hero/page";
import Projects from "./Projects/page";
import Socialmedia from "./SocailMedia/page";
import Skills from "./Skills/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <AboutMe />
      <Socialmedia />
      <Projects />
      <Blogs />
      <Skills />
      <Footer />
    </motion.div>
  );
}
