'use client';
import { motion } from "framer-motion";

export function AnimatedHeading({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="space-y-3 text-center">
      <motion.h2
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight"
      >
        {title}
      </motion.h2>
      {subtitle ? (
        <motion.p
          initial={{ y: 12, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.05 }}
          className="text-white/60"
        >
          {subtitle}
        </motion.p>
      ) : null}
    </div>
  );
}

