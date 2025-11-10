'use client';
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { TiltCard } from "@/components/TiltCard";
import { Code, GitBranch, Package, Zap, Settings, Workflow, Terminal, Layers, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const tools = [
  {
    icon: Sparkles,
    title: "Editor de Código",
    items: ["Cursor", "VS Code", "Extensões", "Snippets"],
    description: "Ambiente de desenvolvimento otimizado para produtividade",
    gradient: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-400"
  },
  {
    icon: GitBranch,
    title: "Controle de Versão",
    items: ["Git", "GitHub", "Commits semânticos", "Branching"],
    description: "Versionamento e colaboração em projetos",
    gradient: "from-orange-500 to-red-500",
    iconColor: "text-orange-400"
  },
  {
    icon: Package,
    title: "Gerenciadores",
    items: ["npm", "yarn", "pnpm", "Dependências"],
    description: "Gerenciamento eficiente de pacotes e dependências",
    gradient: "from-red-500 to-pink-500",
    iconColor: "text-red-400"
  },
  {
    icon: Zap,
    title: "Build & Deploy",
    items: ["Vercel", "Netlify", "CI/CD", "Automação"],
    description: "Deploy automatizado e pipelines de integração",
    gradient: "from-yellow-500 to-orange-500",
    iconColor: "text-yellow-400"
  },
  {
    icon: Settings,
    title: "Ferramentas",
    items: ["ESLint", "Prettier", "TypeScript", "Debugging"],
    description: "Qualidade de código e ferramentas de desenvolvimento",
    gradient: "from-green-500 to-emerald-500",
    iconColor: "text-green-400"
  },
  {
    icon: Workflow,
    title: "Metodologias",
    items: ["Agile", "Scrum", "Kanban", "Iterativo"],
    description: "Organização e gestão de projetos",
    gradient: "from-purple-500 to-pink-500",
    iconColor: "text-purple-400"
  },
  {
    icon: Terminal,
    title: "CLI & Terminal",
    items: ["Bash", "Zsh", "Scripts", "Automação"],
    description: "Produtividade através da linha de comando",
    gradient: "from-indigo-500 to-blue-500",
    iconColor: "text-indigo-400"
  },
  {
    icon: Layers,
    title: "Design & Prototipagem",
    items: ["Figma", "Canva", "Wireframes", "UI/UX"],
    description: "Planejamento visual antes do desenvolvimento",
    gradient: "from-teal-500 to-cyan-500",
    iconColor: "text-teal-400"
  }
];

export function ToolsAndMethodologies() {
  return (
    <section id="ferramentas" className="relative py-24 md:py-32">
      <div className="container">
        <SectionReveal className="mb-12">
          <div className="text-center">
            <AnimatedHeading
              title="Ferramentas e Metodologias"
              subtitle="Stack de desenvolvimento, ferramentas e processos que utilizo no dia a dia."
            />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={24}
              slidesPerView={1}
              slidesPerGroup={1}
              navigation={{
                nextEl: '.swiper-button-next-tools',
                prevEl: '.swiper-button-prev-tools',
              }}
              pagination={{
                clickable: true,
                dynamicBullets: true,
              }}
              breakpoints={{
                640: {
                  slidesPerView: 2,
                  slidesPerGroup: 2,
                },
                768: {
                  slidesPerView: 3,
                  slidesPerGroup: 3,
                },
                1024: {
                  slidesPerView: 4,
                  slidesPerGroup: 4,
                },
              }}
              className="!pb-12"
            >
              {tools.map((tool, i) => {
                const IconComponent = tool.icon;
                return (
                  <SwiperSlide key={tool.title} className="!h-auto">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="h-full flex"
                    >
                      <TiltCard className="h-full w-full">
                        <div className="relative group h-full w-full">
                          {/* Glow effect */}
                          <div className={`absolute -inset-0.5 bg-gradient-to-br ${tool.gradient} rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500`} />
                          
                          {/* Card content */}
                          <div className="relative bg-navy-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 shadow-professional hover:border-white/20 transition-all duration-300 h-full flex flex-col items-center">
                            {/* Icon - Altura fixa e padronizada */}
                            <div className="flex justify-center items-center flex-shrink-0 h-[80px] md:h-[96px] w-full mb-4">
                              <div className={`w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl bg-gradient-to-br ${tool.gradient} border-2 border-white/40 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                                <IconComponent className={`h-10 w-10 md:h-12 md:w-12 ${tool.iconColor} drop-shadow-lg flex-shrink-0`} strokeWidth={2.5} />
                              </div>
                            </div>
                            
                            {/* Title - Altura fixa */}
                            <h3 className="font-bold text-lg md:text-xl lg:text-2xl flex-shrink-0 text-center h-[5rem] md:h-[6rem] flex items-center justify-center leading-tight px-2 w-full mb-4">
                              {tool.title}
                            </h3>
                            
                            {/* Description - Altura fixa e centralizada */}
                            <p className="text-white/60 text-sm md:text-base flex-shrink-0 text-center leading-relaxed px-2 h-[3.5rem] md:h-[4rem] flex items-center justify-center w-full mb-6">
                              {tool.description}
                            </p>
                            
                            {/* Items - Altura fixa e centralizada */}
                            <div className="flex-shrink-0 w-full mt-auto flex items-center justify-center">
                              <div className="flex flex-wrap gap-2 justify-center">
                                {tool.items.map((item) => (
                                  <motion.span
                                    key={item}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.3 }}
                                    className="text-sm px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-white/70 hover:bg-accent/10 hover:border-accent/30 hover:text-accent transition-all"
                                  >
                                    {item}
                                  </motion.span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </TiltCard>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              className="swiper-button-prev-tools absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-navy-800/80 backdrop-blur-sm border border-white/10 hover:border-accent/50 text-white hover:text-accent transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 -translate-x-2 md:-translate-x-4"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="swiper-button-next-tools absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-navy-800/80 backdrop-blur-sm border border-white/10 hover:border-accent/50 text-white hover:text-accent transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 translate-x-2 md:translate-x-4"
              aria-label="Próximo"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </SectionReveal>
      </div>
      <div className="absolute inset-0 -z-10 soft-grid" />
    </section>
  );
}

