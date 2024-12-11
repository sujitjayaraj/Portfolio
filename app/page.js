import Hero from "./components/hero";
import About from './components/about';
import Contact from "./components/contact";

export default async function Home() {
  return (
      <>
        <Hero />
        <About />
        <Contact />
      </>
  )
}