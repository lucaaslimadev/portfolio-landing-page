'use client';
import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { MobileMenu } from "@/components/MobileMenu";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll('section[id]');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const navItems = [
    { href: "#sobre", label: "Sobre" },
    { href: "#stacks", label: "Stacks" },
    { href: "#habilidades", label: "Habilidades" },
    { href: "#projetos", label: "Projetos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md bg-navy-900/80 border-b border-white/10 shadow-professional"
          : "bg-transparent"
      }`}
    >
      <nav className="container h-16 flex items-center justify-between">
        <Link
          href="#home"
          className="font-bold text-xl tracking-tight bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity focus-visible:outline-accent/50"
          aria-label="Início"
        >
          LL
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.slice(1);
            return (
              <motion.a
                key={item.href}
                href={item.href}
                whileHover={{ scale: 1.05, y: -2 }}
                className={`relative px-2 py-1 transition-colors ${
                  isActive ? "text-accent" : "text-white/70 hover:text-accent"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.label}
                {isActive && (
                  <motion.span
                    layoutId="activeSection"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.a>
            );
          })}
          <motion.span
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-accent/20 to-purple-500/20 border border-accent/30 shadow-professional"
            whileHover={{ scale: 1.05 }}
          >
            <span className="relative flex h-1.5 w-1.5" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-accent"></span>
            </span>
            Disponível
          </motion.span>
        </div>
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </nav>
    </motion.header>
  );
}

