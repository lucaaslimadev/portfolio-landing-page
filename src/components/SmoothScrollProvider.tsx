'use client';
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 0.6,  // Reduzido de 1.2 para 0.6 - rolagem mais rápida
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Easing mais responsivo
      smoothWheel: true,
      wheelMultiplier: 1.8,   // Aumentado de 1.0 para 1.8 - rolagem mais rápida
    });
    
    // Expõe para outros componentes (anchors)
    (window as any).lenis = lenis;

    // Otimização: usar requestAnimationFrame de forma mais eficiente
    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}

