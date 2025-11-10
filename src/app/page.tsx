import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Contact } from "@/components/Contact";
import { About } from "@/components/About";
import { Stacks } from "@/components/Stacks";
import { Skills } from "@/components/Skills";
import { Stats } from "@/components/Stats";
import { SoftSkills } from "@/components/SoftSkills";
import { ToolsAndMethodologies } from "@/components/ToolsAndMethodologies";

export default function Page() {
  return (
    <main className="relative">
      <Hero />
      <About />
      <Stacks />
      <Skills />
      <Stats />
      <SoftSkills />
      <ToolsAndMethodologies />
      <Projects />
      <Contact />
    </main>
  );
}

