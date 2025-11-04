// import AboutMe from "./(public)/_components/about-me";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Banner from "./(public)/_components/banner";
// import Contact from "./(public)/_components/contact";
// import Projects from "./(public)/_components/projects";

export default function Home() {
  return (
    <>
      <AnimatedThemeToggler
        duration={400}
        className="fixed z-40 top-2 right-2 dark:text-white"
      />

      <Banner />
      {/* <AboutMe /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </>
  );
}
