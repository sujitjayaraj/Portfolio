import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Projects from "@/app/components/projects";
import Education from "@/app/components/education";

export default function Home() {
  return (
      <div>
        <Hero />
        <About />
        <Projects />
        <Education />
      </div>
  )
}
