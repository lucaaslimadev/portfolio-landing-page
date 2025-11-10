'use client';
import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      const p = Math.max(0, Math.min(1, scrollTop / docHeight));
      setProgress(p);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 right-0 z-[60] h-0.5 bg-white/5">
      <div className="h-full bg-accent transition-[width] duration-200" style={{ width: `${progress * 100}%` }} />
    </div>
  );
}


