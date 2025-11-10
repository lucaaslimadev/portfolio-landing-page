'use client';
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { TiltCard } from "@/components/TiltCard";
import { Code, Rocket, Database, Award } from "lucide-react";

const stats = [
  {
    icon: Code,
    label: "Projetos Publicados",
    value: 3,
    description: "Aplicações completas em produção",
    gradient: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-400"
  },
  {
    icon: Database,
    label: "Tecnologias",
    value: 10,
    description: "Stack que domino e utilizo",
    gradient: "from-green-500 to-emerald-500",
    iconColor: "text-green-400"
  },
  {
    icon: Rocket,
    label: "Anos de Estudo",
    value: 2,
    description: "Dedicação constante ao aprendizado",
    gradient: "from-purple-500 to-pink-500",
    iconColor: "text-purple-400"
  },
  {
    icon: Award,
    label: "Formações",
    value: 3,
    description: "Graduação, MBA e pós-graduações",
    gradient: "from-yellow-500 to-orange-500",
    iconColor: "text-yellow-400"
  }
];

export function Stats() {
  return (
    <section id="estatisticas" className="relative py-24 md:py-32">
      <div className="container">
        <SectionReveal className="mb-12">
          <div className="text-center">
            <AnimatedHeading
              title="Resultados"
              subtitle="Dados que comprovam minha dedicação e evolução constante."
            />
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch">
          {stats.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <SectionReveal key={stat.label} delay={i * 0.1} className="h-full">
                <TiltCard className="h-full">
                  <div className="relative group h-full w-full">
                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500`} />
                    
                    {/* Card content */}
                    <div className="relative bg-navy-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 text-center shadow-professional hover:border-white/20 transition-all duration-300 h-full flex flex-col items-center justify-between">
                      {/* Ícone */}
                      <div className="flex justify-center items-center flex-shrink-0 h-[80px] md:h-[96px] w-full">
                        <div className={`w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl bg-gradient-to-br ${stat.gradient} border-2 border-white/40 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                          <IconComponent className={`h-10 w-10 md:h-12 md:w-12 ${stat.iconColor} drop-shadow-lg flex-shrink-0`} strokeWidth={2.5} />
                        </div>
                      </div>
                      
                      {/* Número */}
                      <div className="text-4xl md:text-5xl lg:text-6xl font-bold text-accent flex-shrink-0 h-[5rem] md:h-[6rem] flex items-center justify-center w-full">
                        <AnimatedCounter value={stat.value} />
                        {stat.label === "Anos de Estudo" && "+"}
                      </div>
                      
                      {/* Título */}
                      <h3 className="font-bold text-lg md:text-xl lg:text-2xl flex-shrink-0 h-[5rem] md:h-[6rem] flex items-center justify-center leading-tight px-2 w-full">{stat.label}</h3>
                      
                      {/* Descrição */}
                      <p className="text-white/60 text-sm md:text-base flex-shrink-0 h-[3rem] md:h-[3.5rem] flex items-center justify-center leading-relaxed px-2 w-full">{stat.description}</p>
                    </div>
                  </div>
                </TiltCard>
              </SectionReveal>
            );
          })}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 soft-grid" />
    </section>
  );
}

