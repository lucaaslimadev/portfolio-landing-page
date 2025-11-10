'use client';
import { motion, AnimatePresence } from "framer-motion";
import { X, Menu } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "#sobre", label: "Sobre" },
  { href: "#stacks", label: "Stacks" },
  { href: "#habilidades", label: "Habilidades" },
  { href: "#projetos", label: "Projetos" },
  { href: "#contato", label: "Contato" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden p-2 rounded-lg hover:bg-white/5 transition-colors"
        aria-label="Menu"
        aria-expanded={isOpen}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-navy-900/80 backdrop-blur-sm z-40 md:hidden"
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-80 bg-navy-800/95 backdrop-blur-xl border-l border-white/10 z-50 md:hidden shadow-2xl"
            >
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between mb-8">
                  <span className="font-bold text-xl bg-gradient-to-r from-accent to-purple-400 bg-clip-text text-transparent">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg hover:bg-white/5"
                    aria-label="Fechar menu"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
                <nav className="space-y-2">
                  {navItems.map((item, i) => (
                    <motion.a
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="block px-4 py-3 rounded-lg hover:bg-white/5 hover:text-accent transition-colors"
                    >
                      {item.label}
                    </motion.a>
                  ))}
                </nav>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

