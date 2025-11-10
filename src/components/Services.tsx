'use client';
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { TiltCard } from "@/components/TiltCard";
import { Server, Layers, Gauge, ShieldCheck, Database, Workflow } from "lucide-react";

const items = [
  {
    icon: <Layers className="h-5 w-5" />,
    title: "Front-end de Alto Nível",
    desc: "UI moderna com Next.js, React, animações e acessibilidade.",
    stack: ["Next.js", "React", "Framer Motion", "Tailwind"]
  },
  {
    icon: <Server className="h-5 w-5" />,
    title: "APIs e Back-end",
    desc: "Node.js, REST, autenticação e integrações externas.",
    stack: ["Node.js", "Express", "Auth", "Webhooks"]
  },
  {
    icon: <Database className="h-5 w-5" />,
    title: "Dados e Persistência",
    desc: "Modelagem simples e escalável, caches e otimizações.",
    stack: ["PostgreSQL", "Prisma", "Redis"]
  },
  {
    icon: <Gauge className="h-5 w-5" />,
    title: "Performance & SEO",
    desc: "Web Vitals, Core Web vitals, otimizações e OG/Schema.",
    stack: ["Lighthouse 95+", "OG/Schema", "Code Split"]
  },
  {
    icon: <Workflow className="h-5 w-5" />,
    title: "Dev Experience",
    desc: "DX organizada, CI/CD, preview e boas práticas.",
    stack: ["CI/CD", "Lint/Types", "Vercel"]
  },
  {
    icon: <ShieldCheck className="h-5 w-5" />,
    title: "Qualidade e Confiabilidade",
    desc: "Tratamento de erros, logs e monitoramento.",
    stack: ["Sentry", "Logs", "Retry/Timeout"]
  }
];

export function Services() {
  return (
    <section id="servicos" className="relative">
      <div className="container">
        <SectionReveal className="mb-10">
          <div className="text-center">
            <AnimatedHeading
              title="Como eu ajudo seu produto"
              subtitle="Pacote Full‑Stack: do design de interação até API em produção."
            />
          </div>
        </SectionReveal>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 items-stretch">
          {items.map((it, i) => (
            <SectionReveal key={it.title} delay={i * 0.05} className="h-full">
              <TiltCard className="h-full">
                <div className="card-glass p-6 shadow-professional hover-lift h-full flex flex-col">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-accent/10 text-accent flex-shrink-0">
                      {it.icon}
                    </div>
                    <h3 className="font-semibold">{it.title}</h3>
                  </div>
                  <p className="text-white/70 flex-1 mb-4">{it.desc}</p>
                  <div className="flex flex-wrap gap-2">
                    {it.stack.map(s => (
                      <span key={s} className="text-xs px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-white/80">{s}</span>
                    ))}
                  </div>
                </div>
              </TiltCard>
            </SectionReveal>
          ))}
        </div>
      </div>
      <div className="absolute inset-0 -z-10 soft-grid" />
    </section>
  );
}

