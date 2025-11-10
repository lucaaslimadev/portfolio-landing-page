'use client';
import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 3), // Easing suave e natural
      direction: 'vertical',
      gestureDirection: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,   // Multiplicador padrão para rolagem natural
      smoothTouch: false,     // Desabilitado em mobile para melhor performance
      infinite: false,
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

