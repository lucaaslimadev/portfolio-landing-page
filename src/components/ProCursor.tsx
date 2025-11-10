'use client';
import { useEffect, useRef } from "react";

export function ProCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX; mouseY = e.clientY;
      dot.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;
    };
    const raf = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate3d(${ringX}px,${ringY}px,0)`;
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
    window.addEventListener('mousemove', move, { passive: true });
    return () => window.removeEventListener('mousemove', move);
  }, []);

  return (
    <>
      <div ref={dotRef} className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block w-1.5 h-1.5 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-screen" />
      <div ref={ringRef} className="pointer-events-none fixed left-0 top-0 z-[60] hidden md:block w-8 h-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent/40" />
    </>
  );
}


