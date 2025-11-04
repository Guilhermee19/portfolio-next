// import AboutMe from "./(public)/_components/about-me";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import Banner from "./(public)/_components/banner";
import { Particles } from "@/components/ui/particles";
// import Contact from "./(public)/_components/contact";
// import Projects from "./(public)/_components/projects";

export default function Home() {
  return (
    <>
      <AnimatedThemeToggler
        duration={400}
        className="fixed z-40 top-4 right-4 dark:text-white"
      />

      <Particles className=" fixed w-full h-dvh top-0 z-0" />

      <div className="relative z-10">
        <Banner />
      </div>
      {/* <AboutMe /> */}
      {/* <Projects /> */}
      {/* <Contact /> */}
    </>
  );
}
