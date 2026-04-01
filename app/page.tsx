import AboutMe from "./AboutMe/page";
import Blogs from "./Blogs/page";
import Hero from "./Hero/page";
import Projects from "./Projects/page";
import Socialmedia from "./SocailMedia/page";
import Skills from "./Skills/page";
import Footer from "./Footer/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <AboutMe />
      <Socialmedia />
      <Projects />
      <Blogs />
      <Skills />
      <Footer />
    </div>
  );
}
