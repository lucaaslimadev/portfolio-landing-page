'use client';
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { Check, Clock, Rocket } from "lucide-react";
import { RippleButton } from "@/components/RippleButton";

const whatsapp = "https://wa.me/5514991935486?text=Oi%2C%20Lucas!%20Vi%20seu%20portf%C3%B3lio%20e%20quero%20conversar%20sobre%20um%20projeto.";

const plans = [
  {
    icon: <Rocket className="h-5 w-5" />,
    name: "Landing de Conversão",
    time: "até 7 dias",
    pitch: "Landing moderna com UI premium, animações e SEO base.",
    includes: ["Seções essenciais", "Copy e CTAs", "Formulário com validação", "Deploy"],
    cta: whatsapp
  },
  {
    icon: <Clock className="h-5 w-5" />,
    name: "MVP Rápido",
    time: "2–3 semanas",
    pitch: "Protótipo funcional com front, API e banco.",
    includes: ["Next.js + Node", "Autenticação simples", "Banco (MongoDB/Postgres)", "Deploy"],
    cta: whatsapp
  },
  {
    icon: <Check className="h-5 w-5" />,
    name: "Site Institucional",
    time: "1–2 semanas",
    pitch: "Site leve, acessível e fácil de manter.",
    includes: ["Páginas chave", "Blog simples (opcional)", "SEO e OG", "Deploy"],
    cta: whatsapp
  }
];

export function Packages() {
  return (
    <section id="pacotes" className="relative">
      <div className="container">
        <SectionReveal className="mb-10">
          <div className="text-center">
            <AnimatedHeading
              title="Pacotes de serviço"
              subtitle="Opções objetivas para tirar sua ideia do papel sem enrolação."
            />
          </div>
        </SectionReveal>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {plans.map((p, i) => (
            <SectionReveal key={p.name} delay={i * 0.05}>
              <div className="card p-6 flex flex-col shadow-professional hover-lift h-full">
                <div className="flex items-center gap-3">
                  <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent">
                    {p.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="text-white/60 text-sm">{p.time}</p>
                  </div>
                </div>
                <p className="text-white/80 mt-3">{p.pitch}</p>
                <ul className="mt-4 space-y-2 text-sm text-white/80 flex-1">
                  {p.includes.map(item => (
                    <li key={item} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-accent" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-auto pt-6">
                  <RippleButton
                    href={p.cta}
                    variant="primary"
                    className="w-full justify-center"
                  >
                    Falar no WhatsApp
                  </RippleButton>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 soft-grid" />
    </section>
  );
}

