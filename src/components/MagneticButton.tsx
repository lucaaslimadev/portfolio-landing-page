'use client';
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef } from "react";

export function MagneticButton({
  children,
  className = "",
  href
}: {
  children: React.ReactNode;
  className?: string;
  href?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotate = useTransform([x, y], ([latestX, latestY]: number[]) => (latestX + latestY) / 15);

  function handleMouseMove(e: React.MouseEvent) {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const relX = e.clientX - rect.left - rect.width / 2;
    const relY = e.clientY - rect.top - rect.height / 2;
    animate(x, relX / 4, { type: "spring", stiffness: 400, damping: 20 });
    animate(y, relY / 4, { type: "spring", stiffness: 400, damping: 20 });
  }
  function handleMouseLeave() {
    animate(x, 0); animate(y, 0);
  }

  const Comp = href ? "a" : "button";
  const props: any = href ? { href, target: "_blank", rel: "noreferrer" } : { type: "button" };

  return (
    <motion.div
      ref={ref}
      style={{ x, y, rotate }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-block"
    >
      <Comp
        {...props}
        className={`px-5 py-3 rounded-full bg-accent/10 text-accent hover:bg-accent/20 transition-colors ${className}`}
      >
        {children}
      </Comp>
    </motion.div>
  );
}

