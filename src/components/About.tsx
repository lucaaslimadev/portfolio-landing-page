'use client';
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { TiltCard } from "@/components/TiltCard";

export function About() {
  return (
    <section id="sobre" className="relative">
      <div className="container">
        <SectionReveal className="mb-10">
          <div className="text-center">
            <AnimatedHeading
              title="Sobre mim"
              subtitle="Conheça um pouco da minha trajetória e paixão por tecnologia."
            />
          </div>
        </SectionReveal>

        <div className="max-w-4xl mx-auto">
          <SectionReveal delay={0.1}>
            <TiltCard>
              <div className="card-glass p-6 md:p-8 lg:p-10 shadow-professional-lg hover-lift">
                <div className="prose prose-invert max-w-none">
                  <p className="text-white/80 leading-relaxed text-base md:text-lg mb-4">
                    Olá! Sou <strong className="text-white">Lucas Lima</strong>, desenvolvedor Full-Stack em formação e apaixonado por tecnologia e inovação.
                  </p>
                  
                  <p className="text-white/80 leading-relaxed text-base md:text-lg mb-4">
                    Depois de alguns anos atuando nas áreas de <strong className="text-white">Administração e Marketing</strong>, decidi dar um novo rumo à minha carreira — hoje meu foco está em criar soluções digitais que unam funcionalidade, design e propósito.
                  </p>
                  
                  <p className="text-white/80 leading-relaxed text-base md:text-lg mb-4">
                    Tenho uma boa base em <strong className="text-white">JavaScript e TypeScript</strong>, e experiência prática com <strong className="text-white">React, Next.js, Node.js, TailwindCSS e Framer Motion</strong>.
                  </p>
                  
                  <p className="text-white/80 leading-relaxed text-base md:text-lg mb-4">
                    Gosto de colocar a mão na massa e transformar ideias em projetos reais. Já desenvolvi e publiquei aplicações completas — desde APIs até interfaces interativas e integrações com ferramentas como <strong className="text-white">Google Sheets, Meta e Telegram</strong>.
                  </p>
                  
                  <p className="text-white/80 leading-relaxed text-base md:text-lg mb-4">
                    Um dos meus projetos favoritos foi um <strong className="text-white">sistema de controle de gastos via bot do Telegram</strong>, que registra dados automaticamente no Google Sheets e atualiza um dashboard em tempo real. Esse projeto me fez enxergar o quanto gosto de unir automação e experiência do usuário para facilitar o dia a dia das pessoas.
                  </p>
                  
                  <p className="text-white/80 leading-relaxed text-base md:text-lg mb-4">
                    Sou formado em <strong className="text-white">Administração</strong>, tenho <strong className="text-white">MBA em Marketing e Comunicação Digital</strong> e atualmente curso pós-graduação em <strong className="text-white">Desenvolvimento Full-Stack e Inteligência Artificial</strong>.
                  </p>
                  
                  <p className="text-white/80 leading-relaxed text-base md:text-lg mb-4">
                    Sigo aprendendo todos os dias e busco minha primeira oportunidade como desenvolvedor júnior, além de realizar freelas de sites, landing pages e APIs para aprimorar minhas habilidades na prática.
                  </p>
                  
                  <p className="text-white/80 leading-relaxed text-base md:text-lg">
                    Acredito que tecnologia é mais do que código — é sobre resolver problemas, gerar valor e criar experiências que façam diferença de verdade.
                  </p>
                </div>
              </div>
            </TiltCard>
          </SectionReveal>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 soft-grid" />
    </section>
  );
}

