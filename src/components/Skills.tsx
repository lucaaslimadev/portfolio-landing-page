'use client';
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { TiltCard } from "@/components/TiltCard";
import { Code, Database, Palette, Zap, Sparkles } from "lucide-react";

const skills = [
  {
    icon: Code,
    title: "Front-end",
    description: "Desenvolvimento de interfaces modernas, responsivas e interativas com foco em performance e experiência do usuário.",
    highlights: ["Interfaces responsivas", "Animações fluidas", "Performance otimizada"],
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    gradient: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-400"
  },
  {
    icon: Database,
    title: "Back-end",
    description: "Construção de APIs robustas, escaláveis e seguras com integração de bancos de dados e serviços externos.",
    highlights: ["APIs RESTful", "Integração de dados", "Segurança"],
    items: ["Node.js", "Python", "MongoDB", "PostgreSQL"],
    gradient: "from-green-500 to-emerald-500",
    iconColor: "text-green-400"
  },
  {
    icon: Palette,
    title: "UI & UX",
    description: "Criação de designs intuitivos e acessíveis que priorizam a experiência do usuário e a usabilidade.",
    highlights: ["Design responsivo", "Acessibilidade", "Experiência do usuário"],
    items: ["Design System", "Responsive Design", "Acessibilidade", "Animações"],
    gradient: "from-purple-500 to-pink-500",
    iconColor: "text-purple-400"
  },
  {
    icon: Zap,
    title: "API",
    description: "Integração de serviços, automações e webhooks para conectar diferentes plataformas e sistemas.",
    highlights: ["Integrações", "Automações", "Webhooks"],
    items: ["REST APIs", "Webhooks", "Autenticação", "Integrações"],
    gradient: "from-yellow-500 to-orange-500",
    iconColor: "text-yellow-400"
  }
];

export function Skills() {
  return (
    <section id="habilidades" className="relative py-24 md:py-32">
      <div className="container">
        <SectionReveal className="mb-12">
          <div className="text-center">
            <AnimatedHeading
              title="Habilidades"
              subtitle="Competências técnicas que aplico em cada projeto para entregar soluções de qualidade."
            />
          </div>
        </SectionReveal>

        <div className="grid sm:grid-cols-2 gap-6 md:gap-8 items-stretch">
          {skills.map((skill, i) => {
            const IconComponent = skill.icon;
            return (
              <SectionReveal key={skill.title} delay={i * 0.1} className="h-full">
                <TiltCard className="h-full">
                  <div className="relative group h-full w-full">
                    {/* Glow effect */}
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${skill.gradient} rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500`} />
                    
                    {/* Card content */}
                    <div className="relative bg-navy-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 h-full flex flex-col shadow-professional hover:border-white/20 transition-all duration-300">
                      {/* Icon and title */}
                      <div className="flex items-start gap-6 mb-6 flex-shrink-0">
                        <div className={`w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl bg-gradient-to-br ${skill.gradient} border-2 border-white/40 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300 flex-shrink-0`}>
                          <IconComponent className={`h-10 w-10 md:h-12 md:w-12 ${skill.iconColor} drop-shadow-lg`} strokeWidth={2.5} />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-bold text-xl md:text-2xl lg:text-3xl mb-3">{skill.title}</h3>
                          <p className="text-white/70 text-base md:text-lg leading-relaxed">
                            {skill.description}
                          </p>
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6 flex flex-wrap gap-2 flex-shrink-0">
                        {skill.highlights.map((highlight) => (
                          <span
                            key={highlight}
                            className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent font-medium"
                          >
                            <Sparkles className="h-4 w-4" />
                            {highlight}
                          </span>
                        ))}
                      </div>

                      {/* Technologies */}
                      <div className="mt-auto pt-6 border-t border-white/10 flex-shrink-0">
                        <p className="text-sm text-white/50 mb-4 font-medium uppercase tracking-wider">Tecnologias</p>
                        <div className="flex flex-wrap gap-2">
                          {skill.items.map((item) => (
                            <span
                              key={item}
                              className="text-sm px-4 py-2 rounded-lg bg-white/5 border border-white/10 text-white/70 hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all cursor-default"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
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

