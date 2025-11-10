'use client';
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { motion } from "framer-motion";

const faq = [
  { q: "Você tem experiência profissional?", a: "Estou em transição de carreira. Tenho projetos reais publicados e foco em uma vaga júnior e freelas." },
  { q: "Qual stack você usa?", a: "Next.js, React, TypeScript, Node.js, Tailwind, Framer Motion. Já integrei MongoDB e faço deploy." },
  { q: "Prazo para uma landing?", a: "Geralmente até 7 dias, dependendo do conteúdo e do nível de animação." },
  { q: "Você cuida do SEO básico?", a: "Sim. Metatags, OG, sitemaps e boas práticas de performance." },
  { q: "Faz integrações simples?", a: "Sim. Formulários, APIs, webhooks, autenticação simples e planilhas." },
  { q: "Como começamos?", a: "Me chame no WhatsApp para uma call rápida. Definimos escopo e prazos e já seguimos." },
];

export function FAQ() {
  return (
    <section id="faq" className="relative py-24 md:py-28">
      <div className="container">
        <div className="mb-10 text-center">
          <AnimatedHeading
            title="Perguntas frequentes"
            subtitle="Transparência sobre meu momento e como posso ajudar."
          />
        </div>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {faq.map((item, i) => (
            <motion.div
              key={item.q}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.45, ease: "easeOut", delay: i * 0.03 }}
              className="card p-6"
            >
              <h3 className="font-semibold">{item.q}</h3>
              <p className="text-white/70 mt-2">{item.a}</p>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 soft-grid" />
    </section>
  );
}


