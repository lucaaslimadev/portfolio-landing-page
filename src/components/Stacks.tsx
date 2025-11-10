'use client';
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { motion } from "framer-motion";
import { SiNextdotjs, SiReact, SiTypescript, SiNodedotjs, SiPostgresql, SiTailwindcss, SiMongodb, SiFramer, SiPython, SiJavascript } from "react-icons/si";

const stacks = [
  { name: "Next.js", icon: SiNextdotjs, area: "Front/SSR", color: "from-gray-900 to-black" },
  { name: "React", icon: SiReact, area: "Front", color: "from-blue-900 to-blue-800" },
  { name: "TypeScript", icon: SiTypescript, area: "Linguagem", color: "from-blue-800 to-blue-700" },
  { name: "JavaScript", icon: SiJavascript, area: "Linguagem", color: "from-yellow-900 to-yellow-800" },
  { name: "Node.js", icon: SiNodedotjs, area: "Back-end", color: "from-green-900 to-green-800" },
  { name: "Python", icon: SiPython, area: "Linguagem", color: "from-blue-700 to-blue-600" },
  { name: "MongoDB", icon: SiMongodb, area: "Banco", color: "from-green-800 to-green-700" },
  { name: "PostgreSQL", icon: SiPostgresql, area: "Banco", color: "from-blue-700 to-blue-600" },
  { name: "Tailwind", icon: SiTailwindcss, area: "UI", color: "from-cyan-900 to-cyan-800" },
  { name: "Framer Motion", icon: SiFramer, area: "Animações", color: "from-pink-900 to-pink-800" },
];

export function Stacks() {
  return (
    <section id="stacks" className="relative py-24 md:py-32">
      <div className="container">
        <SectionReveal className="mb-12">
          <div className="text-center">
            <AnimatedHeading
              title="Tecnologias"
              subtitle="Stack que domino e utilizo no dia a dia para criar soluções modernas."
            />
          </div>
        </SectionReveal>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 items-stretch">
          {stacks.map((stack, i) => {
            const IconComponent = stack.icon;
            return (
              <SectionReveal key={stack.name} delay={i * 0.03} className="h-full">
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  className="group relative h-full w-full"
                >
                  <div className="card-glass p-8 md:p-10 flex flex-col items-center justify-center gap-4 text-center shadow-professional hover-lift h-full">
                    <div className={`relative w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl bg-gradient-to-br ${stack.color} shadow-lg group-hover:shadow-xl transition-shadow flex-shrink-0`}>
                      <IconComponent className="h-10 w-10 md:h-12 md:w-12 text-white" />
                    </div>
                    <div className="flex-1 flex flex-col justify-center w-full">
                      <p className="font-semibold text-base md:text-lg lg:text-xl h-[3rem] md:h-[3.5rem] flex items-center justify-center">{stack.name}</p>
                      <p className="text-white/50 text-sm md:text-base h-[2rem] md:h-[2.5rem] flex items-center justify-center">{stack.area}</p>
                    </div>
                  </div>
                </motion.div>
              </SectionReveal>
            );
          })}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 soft-grid" />
    </section>
  );
}

