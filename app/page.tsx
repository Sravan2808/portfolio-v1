"use client";
import AboutMe from "./AboutMe/page";
import Blogs from "./Blogs/page";
import Hero from "./Hero/page";
import Projects from "./Projects/page";
import Socialmedia from "./SocailMedia/page";
import Skills from "./Skills/page";
import Footer from "./Footer/page";
import Banner from "@/components/Banner";
import BlurFadeIn from "@/components/BlurFadeIn";

export default function Home() {
  return (
    <>
      <BlurFadeIn inView={false} duration={0.8} yOffset={0} blurPx={16}>
        <Banner />
      </BlurFadeIn>
      <Hero />
      <AboutMe />
      <Socialmedia />
      <Projects />
      <Blogs />
      <Skills />
      <Footer />
    </>
  );
}
