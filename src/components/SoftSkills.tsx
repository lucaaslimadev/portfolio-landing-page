'use client';
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { Brain, MessageSquare, Users, Clock, Eye, BookOpen, Puzzle, RefreshCw, Zap, Heart } from 'lucide-react';
import { motion } from 'framer-motion';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const softSkills = [
  {
    icon: Brain,
    title: "Raciocínio Lógico e Pensamento Crítico",
    description: "Análise sistemática de problemas, identificação de padrões e tomada de decisões fundamentadas em dados e lógica.",
    gradient: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-400"
  },
  {
    icon: MessageSquare,
    title: "Comunicação Clara",
    description: "Capacidade de expressar ideias de forma objetiva, ouvir ativamente e facilitar o entendimento entre equipes e stakeholders.",
    gradient: "from-green-500 to-emerald-500",
    iconColor: "text-green-400"
  },
  {
    icon: Users,
    title: "Trabalho em Equipe",
    description: "Colaboração efetiva, compartilhamento de conhecimento e construção de soluções coletivas com respeito e empatia.",
    gradient: "from-purple-500 to-pink-500",
    iconColor: "text-purple-400"
  },
  {
    icon: Clock,
    title: "Gestão de Tempo",
    description: "Organização eficiente de tarefas, priorização de atividades e entrega de resultados dentro dos prazos estabelecidos.",
    gradient: "from-yellow-500 to-orange-500",
    iconColor: "text-yellow-400"
  },
  {
    icon: Eye,
    title: "Atenção aos Detalhes",
    description: "Observação cuidadosa, revisão minuciosa e compromisso com a qualidade em cada aspecto do trabalho desenvolvido.",
    gradient: "from-indigo-500 to-blue-500",
    iconColor: "text-indigo-400"
  },
  {
    icon: BookOpen,
    title: "Aprendizado Contínuo",
    description: "Curiosidade constante, busca por novos conhecimentos e adaptação rápida a tecnologias e metodologias emergentes.",
    gradient: "from-teal-500 to-cyan-500",
    iconColor: "text-teal-400"
  },
  {
    icon: Puzzle,
    title: "Resolução de Problemas",
    description: "Abordagem criativa para desafios complexos, identificação de causas raiz e desenvolvimento de soluções eficazes.",
    gradient: "from-red-500 to-pink-500",
    iconColor: "text-red-400"
  },
  {
    icon: RefreshCw,
    title: "Adaptabilidade",
    description: "Flexibilidade para lidar com mudanças, ajuste rápido a novos contextos e manutenção da produtividade em cenários dinâmicos.",
    gradient: "from-violet-500 to-purple-500",
    iconColor: "text-violet-400"
  },
  {
    icon: Zap,
    title: "Proatividade",
    description: "Iniciativa para identificar oportunidades, antecipar necessidades e tomar ações preventivas sem esperar orientações.",
    gradient: "from-amber-500 to-yellow-500",
    iconColor: "text-amber-400"
  },
  {
    icon: Heart,
    title: "Inteligência Emocional",
    description: "Autoconsciência, gestão de emoções e empatia para construir relacionamentos saudáveis e ambientes de trabalho positivos.",
    gradient: "from-rose-500 to-pink-500",
    iconColor: "text-rose-400"
  }
];

export function SoftSkills() {
  return (
    <section id="soft-skills" className="relative py-24 md:py-32">
      <div className="container">
        <SectionReveal className="mb-12">
          <div className="text-center">
            <AnimatedHeading
              title="Soft Skills"
              subtitle="Competências comportamentais que complementam minha expertise técnica."
            />
          </div>
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="relative">
            <Swiper
              modules={[Navigation, Pagination]}
              spaceBetween={32}
              slidesPerView={1}
              slidesPerGroup={1}
              navigation={{
                nextEl: '.swiper-button-next-soft',
                prevEl: '.swiper-button-prev-soft',
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
                1280: {
                  slidesPerView: 5,
                  slidesPerGroup: 5,
                },
              }}
              className="!pb-12"
            >
              {softSkills.map((skill, i) => {
                const IconComponent = skill.icon;
                return (
                  <SwiperSlide key={skill.title}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: i * 0.05 }}
                      className="h-full"
                    >
                      <div className="relative group h-full">
                        {/* Glow effect */}
                        <div className={`absolute -inset-0.5 bg-gradient-to-br ${skill.gradient} rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500`} />
                        
                        {/* Card content */}
                        <div className="relative bg-navy-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-10 text-center shadow-professional hover:border-white/20 transition-all duration-300 h-full flex flex-col items-center justify-between min-h-[280px] md:min-h-[320px]">
                          {/* Icon - Altura fixa */}
                          <div className="flex justify-center items-center flex-shrink-0 h-[80px] md:h-[96px] w-full">
                            <div className={`w-20 h-20 md:w-24 md:h-24 flex items-center justify-center rounded-xl bg-gradient-to-br ${skill.gradient} border-2 border-white/40 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                              <IconComponent className={`h-10 w-10 md:h-12 md:w-12 ${skill.iconColor} drop-shadow-lg flex-shrink-0`} strokeWidth={2.5} />
                            </div>
                          </div>
                          
                          {/* Title - Altura fixa para acomodar textos de diferentes tamanhos */}
                          <h3 className="font-bold text-lg md:text-xl lg:text-2xl flex-shrink-0 flex items-center justify-center leading-tight px-2 min-h-[4rem] md:min-h-[5rem] w-full">
                            {skill.title}
                          </h3>
                        </div>
                      </div>
                    </motion.div>
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Custom Navigation Buttons */}
            <button
              className="swiper-button-prev-soft absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-navy-800/80 backdrop-blur-sm border border-white/10 hover:border-accent/50 text-white hover:text-accent transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 -translate-x-2 md:-translate-x-4"
              aria-label="Anterior"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              className="swiper-button-next-soft absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full bg-navy-800/80 backdrop-blur-sm border border-white/10 hover:border-accent/50 text-white hover:text-accent transition-all duration-300 flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:scale-100 translate-x-2 md:translate-x-4"
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

