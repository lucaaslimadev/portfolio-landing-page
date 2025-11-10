'use client';
import { useEffect } from "react";

export function ScrollAnimations() {
  useEffect(() => {
    let observer: IntersectionObserver | null = null;

    // Aguardar DOM estar pronto
    const timeoutId = setTimeout(() => {
      // Usar Intersection Observer para animações leves e performáticas
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            // Não precisa mais observar após animar
            observer?.unobserve(entry.target);
          }
        });
      }, observerOptions);

      // Observar elementos que devem animar
      const elementsToAnimate = document.querySelectorAll(
        'section[id], .card, .card-glass, h2, h3, .grid > *'
      );

      elementsToAnimate.forEach((el) => {
        observer?.observe(el);
      });
    }, 100);

    return () => {
      clearTimeout(timeoutId);
      if (observer) {
        observer.disconnect();
      }
    };
  }, []);

  return null;
}

