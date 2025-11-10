'use client';
import { useEffect } from "react";

export function AnchorScrollEnhancer() {
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const el = e.target as HTMLElement;
      const link = el.closest('a') as HTMLAnchorElement | null;
      if (!link) return;
      const href = link.getAttribute('href') || '';
      if (!href.startsWith('#') || href === '#') return;
      const target = document.querySelector(href) as HTMLElement | null;
      if (!target) return;
      e.preventDefault();
      const lenis = (window as any).lenis;
      if (lenis?.scrollTo) {
        lenis.scrollTo(target, { 
          offset: -80, 
          duration: 0.5,  // Reduzido de 0.8 para 0.5 - navegação mais rápida
          easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t))
        });
      } else {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
      // destaque sutil da seção ao chegar
      target.classList.remove('section-highlight');
      // força reflow para reiniciar animação
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      target.offsetWidth;
      target.classList.add('section-highlight');
      setTimeout(() => target.classList.remove('section-highlight'), 1200);
    }
    document.addEventListener('click', onClick);
    return () => document.removeEventListener('click', onClick);
  }, []);
  return null;
}


