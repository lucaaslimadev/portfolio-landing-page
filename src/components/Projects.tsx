'use client';
import { motion } from "framer-motion";
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { TiltCard } from "@/components/TiltCard";
import { ExternalLink, Star } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Portfólio Profissional",
    description: "Landing page moderna e profissional com animações fluidas, design premium e performance otimizada. Desenvolvido com Next.js 15, TypeScript, Tailwind CSS e Framer Motion.",
    kpis: ["Lighthouse 95+", "100% Responsivo", "SEO Otimizado", "Animações Fluidas"],
    problem: "Necessidade de um portfólio profissional que demonstrasse habilidades técnicas de forma impactante, atraindo recrutadores e clientes com design moderno e performance excepcional.",
    solution: "Landing page completa com seções interativas, animações suaves, formulário de contato funcional, integração com GitHub API, carrosséis modernos e design glassmorphism. Totalmente responsivo e otimizado para SEO.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "React Hook Form", "Zod", "Swiper"],
    link: "https://github.com/lucaaslimadev/portfolio-landing-page",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3",
    featured: true
  },
  {
    title: "Pomodoro-app-styled",
    description: "App de produtividade com foco em consistência visual e UX.",
    kpis: ["+35% foco por sessão", "Lighthouse 95+"],
    problem: "Pouco foco e fricção na interface durante ciclos Pomodoro.",
    solution: "Componentização, timers precisos e feedback visual suave.",
    tech: ["TypeScript", "React", "Styled Components"],
    link: "https://github.com/lucaaslimadev/Pomodoro-app-styled",
    image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "BotControleGastos",
    description: "Automação simples para registrar e analisar despesas.",
    kpis: ["Tempo de registro -60%", "Zero fricção no input"],
    problem: "Dificuldade em registrar gastos rapidamente no dia a dia.",
    solution: "Bot com comandos rápidos e persistência leve.",
    tech: ["Python"],
    link: "https://github.com/lucaaslimadev/BotControleGastos",
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
  },
  {
    title: "Projeto_Advocacia",
    description: "Software de controle de providências e documentos para escritórios de advocacia.",
    kpis: ["Organização por sessões", "Conversão automática PDF/Word"],
    problem: "Dificuldade em organizar documentos e providências por área jurídica (criminal, civil, trabalhista, etc.).",
    solution: "Sistema com sessões personalizáveis, exportação/importação de PDF e Word com conversão automática.",
    tech: ["JavaScript", "HTML", "CSS"],
    link: "https://github.com/lucaaslimadev/Projeto_Advocacia",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.0.3"
  }
];

export function Projects() {
  return (
    <section id="projetos" className="relative py-24 md:py-32">
      <div className="container">
        <SectionReveal className="mb-12">
          <div className="text-center">
            <AnimatedHeading
              title="Projetos"
              subtitle="Trabalhos que demonstram minha capacidade técnica e atenção aos detalhes."
            />
          </div>
        </SectionReveal>

        <div className="grid gap-8 md:gap-12">
          {projects.map((project, i) => (
            <SectionReveal key={project.title} delay={i * 0.1}>
              <TiltCard>
                <motion.a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className={`card-glass overflow-hidden group block shadow-professional-lg hover-lift ${(project as any).featured ? 'ring-2 ring-accent/50 ring-offset-2 ring-offset-navy-900' : ''}`}
                >
                  <div className="grid md:grid-cols-[1.2fr,0.8fr] gap-0">
                    <div className="relative aspect-[16/10] md:aspect-auto md:h-full min-h-[280px] overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transition-transform duration-700 group-hover:scale-110"
                        fill
                        sizes="(min-width: 768px) 60vw, 100vw"
                        priority={i === 0}
                      />
                      <div className="absolute inset-0 bg-gradient-to-tr from-navy-900/60 via-navy-900/20 to-transparent" />
                      {(project as any).featured && (
                        <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-accent/90 to-purple-500/90 text-white text-xs font-bold shadow-lg backdrop-blur-sm border border-white/20">
                          <Star className="h-3 w-3 fill-current" />
                          Destaque
                        </div>
                      )}
                      <div className="absolute top-4 right-4 p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ExternalLink className="h-4 w-4 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6 md:p-8 flex flex-col justify-center bg-navy-800/40">
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <h3 className="text-xl md:text-2xl font-bold">{project.title}</h3>
                      </div>
                      
                      <p className="text-white/70 text-sm md:text-base mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {("kpis" in project) && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {(project as any).kpis.map((k: string) => (
                            <span key={k} className="text-[10px] md:text-xs px-2.5 py-1 rounded-full bg-accent/15 text-accent border border-accent/30 font-medium">
                              {k}
                            </span>
                          ))}
                        </div>
                      )}

                      {("problem" in project && "solution" in project) && (
                        <div className="mb-4 space-y-2 text-xs md:text-sm">
                          <div>
                            <span className="text-accent font-semibold">Problema: </span>
                            <span className="text-white/60">{(project as any).problem}</span>
                          </div>
                          <div>
                            <span className="text-accent font-semibold">Solução: </span>
                            <span className="text-white/60">{(project as any).solution}</span>
                          </div>
                        </div>
                      )}

                      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-white/10">
                        {project.tech.map(tech => (
                          <span key={tech} className="text-xs px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white/70">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.a>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 soft-grid" />
    </section>
  );
}

