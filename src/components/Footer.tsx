'use client';
import { motion, AnimatePresence } from "framer-motion";
import { Github, Linkedin, Instagram, Mail, ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const footerLinks = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stacks", label: "Stacks" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

const socialLinks = [
  { href: "https://github.com/lucaaslimadev", icon: Github, label: "GitHub" },
  { href: "https://www.linkedin.com/in/lucas-lima-789970372/", icon: Linkedin, label: "LinkedIn" },
  { href: "https://www.instagram.com/lucaaslima_/", icon: Instagram, label: "Instagram" },
];

export function Footer() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    const lenis = (window as any).lenis;
    if (lenis?.scrollTo) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative mt-24 border-t border-white/10 bg-gradient-to-b from-transparent to-navy-950/50">
      {/* Background gradient effect */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-20 pointer-events-none" />
      
      <div className="container relative py-12 md:py-16">
        <div className="max-w-4xl mx-auto flex flex-col items-center">
          {/* Links de navegação */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-wrap items-center justify-center gap-6 md:gap-8 mb-10"
          >
            {footerLinks.map((link, i) => (
              <motion.a
                key={link.href}
                href={link.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                whileHover={{ y: -2, scale: 1.05 }}
                className="text-base md:text-lg text-white/60 hover:text-accent transition-colors relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-accent group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </motion.nav>

          {/* Redes sociais */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-center justify-center gap-5 mb-10"
          >
            {socialLinks.map((social, i) => {
              const IconComponent = social.icon;
              return (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15, y: -4, rotate: [0, -10, 10, -10, 0] }}
                  whileTap={{ scale: 0.95 }}
                  className="relative group"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="relative w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-accent/50 transition-all duration-300 backdrop-blur-sm">
                    <IconComponent className="h-6 w-6 md:h-7 md:w-7 text-white/70 group-hover:text-accent transition-colors" />
                  </div>
                </motion.a>
              );
            })}
          </motion.div>

          {/* Copyright e CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center space-y-5 w-full"
          >
            <div className="flex flex-col items-center justify-center gap-5">
              <a
                href="https://wa.me/5514991935486?text=Olá!%20Gostaria%20de%20conversar%20sobre%20um%20projeto."
                target="_blank"
                rel="noreferrer"
                className="group relative inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-accent/10 to-purple-500/10 border border-accent/30 text-accent hover:from-accent/20 hover:to-purple-500/20 hover:border-accent/50 transition-all duration-300 hover:scale-105"
              >
                <Mail className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="text-base md:text-lg font-medium">Vamos conversar</span>
              </a>
              <p className="text-base md:text-lg text-white/50">
                © {new Date().getFullYear()} Lucas Lima. Todos os direitos reservados.
              </p>
            </div>
            <p className="text-sm md:text-base text-white/40">
              Desenvolvido com ❤️ usando Next.js, React e TypeScript
            </p>
          </motion.div>
        </div>

        {/* Botão scroll to top */}
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0, y: 20 }}
              whileHover={{ scale: 1.1, y: -4 }}
              whileTap={{ scale: 0.9 }}
              onClick={scrollToTop}
              className="fixed bottom-8 right-8 z-40 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-gradient-to-br from-accent/80 to-purple-500/80 hover:from-accent hover:to-purple-500 text-white shadow-lg shadow-accent/30 hover:shadow-xl hover:shadow-accent/50 transition-all duration-300 backdrop-blur-sm border border-white/20"
              aria-label="Voltar ao topo"
            >
              <ArrowUp className="h-5 w-5 md:h-6 md:w-6" />
            </motion.button>
          )}
        </AnimatePresence>
      </div>
    </footer>
  );
}
