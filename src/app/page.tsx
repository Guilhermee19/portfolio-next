import AboutMe from "./(public)/_components/about-me";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Banner from "./(public)/_components/banner";
import Contact from "./(public)/_components/contact";
import Projects from "./(public)/_components/projects";

export default function Home() {
  return (
    <div className="relative">
      <AnimatedThemeToggler
        duration={400}
        className="fixed z-40 top-4 right-4 dark:text-white"
      />

      <div className="relative z-10">
        <Banner />
        <AboutMe />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}
