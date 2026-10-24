import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Experience from "@/app/components/experience";
import Skills from "@/app/components/skills";
import Projects from "@/app/components/projects";

export default function Home() {
  return (
      <div>
        <Hero/>
          <About/>
          <Experience/>
          <Skills/>
          <Projects/>
      </div>
  )
}