'use client';
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { Lightbulb, Handshake, Code, Rocket } from "lucide-react";

const steps = [
  {
    icon: <Lightbulb className="h-6 w-6 text-accent" />,
    title: "1. Descoberta e Planejamento",
    description: "Entendimento profundo da sua ideia, objetivos e público-alvo. Definimos escopo, tecnologias e prazos."
  },
  {
    icon: <Handshake className="h-6 w-6 text-accent" />,
    title: "2. Proposta e Acordo",
    description: "Apresentação de uma proposta detalhada, alinhamento de expectativas e formalização do projeto."
  },
  {
    icon: <Code className="h-6 w-6 text-accent" />,
    title: "3. Desenvolvimento Ágil",
    description: "Construção iterativa com comunicação constante, protótipos e validações para garantir o melhor resultado."
  },
  {
    icon: <Rocket className="h-6 w-6 text-accent" />,
    title: "4. Lançamento e Suporte",
    description: "Deploy otimizado, testes finais e suporte inicial para garantir que tudo funcione perfeitamente."
  }
];

export function Process() {
  return (
    <section id="processo" className="relative">
      <div className="container">
        <SectionReveal className="mb-10">
          <div className="text-center">
            <AnimatedHeading
              title="Meu Processo de Trabalho"
              subtitle="Transparência e eficiência em cada etapa do seu projeto."
            />
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {steps.map((step, i) => (
            <SectionReveal key={step.title} delay={i * 0.1}>
              <div className="card-glass p-6 text-center shadow-professional hover-lift h-full flex flex-col">
                <div className="flex justify-center mb-4">{step.icon}</div>
                <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                <p className="text-white/70 text-sm flex-1">{step.description}</p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 soft-grid" />
    </section>
  );
}


