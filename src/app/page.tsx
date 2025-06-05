import AboutMe from "./(public)/_components/about-me";
import Banner from "./(public)/_components/banner";
import Projects from "./(public)/_components/projects";

export default function Home() {
  return (
    <>
      <Banner />
      <div className="min-h-dvh"></div>
      <AboutMe />
      <Projects />
    </>
  );
}
