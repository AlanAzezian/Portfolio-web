import Hero from "@/components/Hero";
import About from "@/components/About";
import Stats from "@/components/Stats";
import Timeline from "@/components/Timeline";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 sm:px-12 md:px-24">
      <Hero />
      <Stats />
      <About />
      <Timeline />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
