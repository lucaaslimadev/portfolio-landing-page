'use client';
import { AnimatedHeading } from "@/components/AnimatedHeading";
import { SectionReveal } from "@/components/SectionReveal";
import { TiltCard } from "@/components/TiltCard";
import { Github, Code, Rocket, FileText, CheckCircle, TrendingUp, Calendar, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { motion } from "framer-motion";

interface GitHubData {
  profile: {
    publicRepos: number;
    followers: number;
    following: number;
    createdAt: string;
    monthsActive: number;
  };
  stats: {
    totalStars: number;
    totalForks: number;
    totalRepos: number;
    reposWithReadme: number;
    reposDeployed: number;
    reposWithDescription: number;
    recentActivity: number;
  };
  topLanguages: Array<{ name: string; count: number }>;
  recentRepos: Array<{ name: string; updated_at: string; language: string | null }>;
}

const languageColors: Record<string, string> = {
  'TypeScript': 'from-blue-500 to-blue-600',
  'JavaScript': 'from-yellow-500 to-yellow-600',
  'Python': 'from-blue-600 to-blue-700',
  'HTML': 'from-orange-500 to-orange-600',
  'CSS': 'from-blue-400 to-blue-500',
  'Java': 'from-red-500 to-red-600',
  'React': 'from-cyan-500 to-cyan-600',
  'Vue': 'from-green-500 to-green-600',
  'Other': 'from-gray-500 to-gray-600',
};

export function GitHubStats() {
  const [data, setData] = useState<GitHubData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchGitHubData() {
      try {
        const res = await fetch('/api/github');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setData(data);
      } catch (err) {
        setError('Não foi possível carregar as estatísticas');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    fetchGitHubData();
  }, []);

  // Métricas focadas em qualidade e crescimento
  const qualityMetrics = [
    {
      icon: Rocket,
      label: "Projetos Deployados",
      value: data?.stats.reposDeployed || 0,
      description: "Aplicações em produção",
      gradient: "from-green-500 to-emerald-500",
      iconColor: "text-green-400"
    },
    {
      icon: FileText,
      label: "Com Documentação",
      value: data?.stats.reposWithReadme || 0,
      description: "Projetos bem documentados",
      gradient: "from-blue-500 to-cyan-500",
      iconColor: "text-blue-400"
    },
    {
      icon: TrendingUp,
      label: "Atividade Recente",
      value: data?.stats.recentActivity || 0,
      description: "Atualizados nos últimos 30 dias",
      gradient: "from-purple-500 to-pink-500",
      iconColor: "text-purple-400"
    },
    {
      icon: Calendar,
      label: "Meses Ativos",
      value: data?.profile.monthsActive || 0,
      description: "Dedicação constante",
      gradient: "from-yellow-500 to-orange-500",
      iconColor: "text-yellow-400"
    }
  ];

  if (loading) {
    return (
      <section id="github-stats" className="relative py-24 md:py-32">
        <div className="container">
          <SectionReveal className="mb-12">
            <div className="text-center">
              <AnimatedHeading
                title="GitHub Stats"
                subtitle="Minhas estatísticas e contribuições no GitHub."
              />
            </div>
          </SectionReveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="card-glass p-6 animate-pulse">
                <div className="h-12 w-12 bg-white/10 rounded-xl mb-4" />
                <div className="h-8 w-20 bg-white/10 rounded mb-2" />
                <div className="h-4 w-32 bg-white/10 rounded" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (error || !data) {
    return null;
  }

  const qualityPercentage = data.stats.totalRepos > 0 
    ? Math.round((data.stats.reposWithReadme / data.stats.totalRepos) * 100)
    : 0;

  return (
    <section id="github-stats" className="relative py-24 md:py-32">
      <div className="container">
        <SectionReveal className="mb-12">
          <div className="text-center">
            <AnimatedHeading
              title="GitHub Stats"
              subtitle="Foco em qualidade, aprendizado contínuo e projetos que agregam valor."
            />
          </div>
        </SectionReveal>

        {/* Contexto sobre a jornada */}
        <SectionReveal delay={0.1} className="mb-12">
          <TiltCard>
            <div className="card-glass p-6 md:p-8 shadow-professional-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-gradient-to-br from-accent/20 to-purple-500/20 border-2 border-accent/30 flex-shrink-0">
                  <Sparkles className="h-6 w-6 text-accent" strokeWidth={2.5} />
                </div>
                <div>
                  <h3 className="font-bold text-lg md:text-xl mb-2">Jornada de Aprendizado</h3>
                  <p className="text-white/70 text-sm md:text-base leading-relaxed">
                    Como desenvolvedor em transição de carreira, priorizo a <strong className="text-white">qualidade sobre quantidade</strong>. 
                    Cada projeto é uma oportunidade de aprender, aplicar boas práticas e criar soluções que realmente funcionem. 
                    Foco em projetos completos, bem documentados e deployados, demonstrando não apenas código, mas também 
                    <strong className="text-white"> capacidade de entregar resultados</strong>.
                  </p>
                </div>
              </div>
            </div>
          </TiltCard>
        </SectionReveal>

        {/* Métricas de qualidade */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-12">
          {qualityMetrics.map((stat, i) => {
            const IconComponent = stat.icon;
            return (
              <SectionReveal key={stat.label} delay={i * 0.1}>
                <TiltCard>
                  <div className="relative group h-full">
                    <div className={`absolute -inset-0.5 bg-gradient-to-br ${stat.gradient} rounded-2xl opacity-0 group-hover:opacity-60 blur-xl transition-opacity duration-500`} />
                    <div className="relative bg-navy-800/40 backdrop-blur-xl border border-white/10 rounded-2xl p-6 text-center shadow-professional hover:border-white/20 transition-all duration-300 h-full flex flex-col">
                      <div className="flex justify-center mb-4 flex-shrink-0">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${stat.gradient} border-2 border-white/40 shadow-lg group-hover:scale-110 group-hover:shadow-2xl transition-all duration-300`}>
                          <IconComponent className={`h-6 w-6 md:h-7 md:w-7 ${stat.iconColor} drop-shadow-lg`} strokeWidth={2.5} />
                        </div>
                      </div>
                      <div className="text-3xl md:text-4xl font-bold text-accent mb-2 flex-shrink-0 h-[3rem] flex items-center justify-center">
                        <AnimatedCounter value={stat.value} />
                      </div>
                      <h3 className="font-bold text-base md:text-lg mb-1 flex-shrink-0">{stat.label}</h3>
                      <p className="text-white/60 text-xs flex-shrink-0">{stat.description}</p>
                    </div>
                  </div>
                </TiltCard>
              </SectionReveal>
            );
          })}
        </div>

        {/* Linguagens e atividade recente */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {/* Linguagens mais usadas */}
          {data.topLanguages.length > 0 && (
            <SectionReveal delay={0.4}>
              <TiltCard>
                <div className="card-glass p-6 md:p-8 shadow-professional-lg h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-500 border-2 border-white/40 shadow-lg">
                      <Code className="h-6 w-6 text-indigo-400" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl">Linguagens Exploradas</h3>
                  </div>
                  <div className="space-y-3">
                    {data.topLanguages.map((lang, i) => {
                      const gradient = languageColors[lang.name] || languageColors['Other'];
                      const percentage = Math.round((lang.count / data.stats.totalRepos) * 100);
                      return (
                        <motion.div
                          key={lang.name}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          className="flex items-center gap-3"
                        >
                          <div className={`w-3 h-3 rounded-full bg-gradient-to-br ${gradient} flex-shrink-0`} />
                          <div className="flex-1">
                            <div className="flex items-center justify-between mb-1">
                              <p className="font-semibold text-sm">{lang.name}</p>
                              <p className="text-white/60 text-xs">{lang.count} {lang.count === 1 ? 'projeto' : 'projetos'}</p>
                            </div>
                            <div className="h-2 bg-white/5 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${percentage}%` }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, delay: i * 0.1 + 0.3 }}
                                className={`h-full bg-gradient-to-r ${gradient} rounded-full`}
                              />
                            </div>
                          </div>
                        </motion.div>
                      );
                    })}
                  </div>
                </div>
              </TiltCard>
            </SectionReveal>
          )}

          {/* Atividade recente */}
          {data.recentRepos.length > 0 && (
            <SectionReveal delay={0.5}>
              <TiltCard>
                <div className="card-glass p-6 md:p-8 shadow-professional-lg h-full">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-3 rounded-xl bg-gradient-to-br from-green-500 to-emerald-500 border-2 border-white/40 shadow-lg">
                      <CheckCircle className="h-6 w-6 text-green-400" strokeWidth={2.5} />
                    </div>
                    <h3 className="font-bold text-xl md:text-2xl">Atividade Recente</h3>
                  </div>
                  <div className="space-y-3">
                    {data.recentRepos.map((repo, i) => {
                      const daysAgo = Math.floor(
                        (new Date().getTime() - new Date(repo.updated_at).getTime()) / (1000 * 60 * 60 * 24)
                      );
                      return (
                        <motion.a
                          key={repo.name}
                          href={`https://github.com/lucaaslimadev/${repo.name}`}
                          target="_blank"
                          rel="noreferrer"
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: i * 0.1 }}
                          whileHover={{ x: 4 }}
                          className="flex items-center gap-3 p-3 rounded-xl bg-white/5 border border-white/10 hover:border-accent/50 hover:bg-white/10 transition-all group"
                        >
                          <div className="flex-1 min-w-0">
                            <p className="font-semibold text-sm truncate group-hover:text-accent transition-colors">{repo.name}</p>
                            <div className="flex items-center gap-2 mt-1">
                              {repo.language && (
                                <span className="text-xs text-white/60">{repo.language}</span>
                              )}
                              <span className="text-xs text-white/40">•</span>
                              <span className="text-xs text-white/60">
                                {daysAgo === 0 ? 'Hoje' : daysAgo === 1 ? 'Ontem' : `${daysAgo} dias atrás`}
                              </span>
                            </div>
                          </div>
                          <Github className="h-4 w-4 text-white/40 group-hover:text-accent transition-colors flex-shrink-0" />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </TiltCard>
            </SectionReveal>
          )}
        </div>

        {/* Link para GitHub */}
        <SectionReveal delay={0.6} className="mt-8 text-center">
          <motion.a
            href="https://github.com/lucaaslimadev"
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 text-white hover:text-accent transition-all duration-300"
          >
            <Github className="h-5 w-5" />
            <span className="font-medium">Ver perfil completo no GitHub</span>
          </motion.a>
        </SectionReveal>
      </div>
      <div className="absolute inset-0 -z-10 soft-grid" />
    </section>
  );
}
