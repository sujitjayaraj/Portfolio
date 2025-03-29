import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Experience from "@/app/components/experience";
import Projects from "@/app/components/projects";
import Education from "@/app/components/education";

export default function Home() {
  return (
      <div>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Education />
      </div>
  )
}
