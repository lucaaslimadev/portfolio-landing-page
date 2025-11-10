'use client';
import { motion } from "framer-motion";
import { ReactNode, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface RippleButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  variant?: 'primary' | 'secondary' | 'outline';
}

export function RippleButton({ children, href, onClick, className, variant = 'primary' }: RippleButtonProps) {
  const [ripples, setRipples] = useState<Array<{ x: number; y: number; id: number }>>([]);
  const buttonRef = useRef<HTMLButtonElement | HTMLAnchorElement>(null);

  const handleClick = (e: React.MouseEvent) => {
    const rect = buttonRef.current?.getBoundingClientRect();
    if (!rect) return;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const id = Date.now();

    setRipples(prev => [...prev, { x, y, id }]);
    setTimeout(() => setRipples(prev => prev.filter(r => r.id !== id)), 600);

    if (onClick) onClick();
  };

  const baseStyles = "relative inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-all duration-300 overflow-hidden group";
  const variants = {
    primary: "bg-gradient-to-r from-navy-700 via-navy-600 to-accent/80 text-white shadow-lg shadow-accent/20 hover:from-navy-600 hover:via-navy-500 hover:to-accent hover:shadow-xl hover:shadow-accent/30 border border-white/10",
    secondary: "bg-navy-800/60 backdrop-blur-sm hover:bg-navy-800/80 text-white border border-white/10 hover:border-white/20",
    outline: "bg-transparent border-2 border-accent/60 text-accent hover:bg-accent/10 hover:border-accent"
  };

  const content = (
    <>
      {ripples.map(ripple => (
        <motion.span
          key={ripple.id}
          className="absolute rounded-full bg-accent/20"
          initial={{ width: 0, height: 0, x: ripple.x, y: ripple.y }}
          animate={{ width: 300, height: 300, x: ripple.x - 150, y: ripple.y - 150, opacity: [1, 0] }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      ))}
      <span className="relative z-10">{children}</span>
    </>
  );

  if (href) {
    return (
      <motion.a
        ref={buttonRef as React.RefObject<HTMLAnchorElement>}
        href={href}
        onClick={handleClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(baseStyles, variants[variant], className)}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      ref={buttonRef as React.RefObject<HTMLButtonElement>}
      onClick={handleClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={cn(baseStyles, variants[variant], className)}
    >
      {content}
    </motion.button>
  );
}

