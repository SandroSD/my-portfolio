import Divider from "@/components/Divider";
import Intro from "@/components/Intro";
import About from "../components/About";
import Projects from "@/components/Projects";
import Skills from "../components/Skills";
import Experience from "../components/Experience";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
