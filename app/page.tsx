import Hero from "@/app/components/hero";
import About from "@/app/components/about";
import Experience from "@/app/components/experience";
import Skills from "@/app/components/skills";

export default function Home() {
  return (
      <div>
        <Hero/>
          <About/>
          <Experience/>
          <Skills/>
      </div>
  )
}