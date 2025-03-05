import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Experience from "@/app/components/experience";
import Skills from "@/app/components/skills";
import Projects from "@/app/components/projects";
import Education from "@/app/components/education";
import Contact from "@/app/components/contact";

export default function Home() {
  return (
      <div>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </div>
  )
}
