'use client';
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle, X } from "lucide-react";
import { useEffect, useState } from "react";

interface ToastProps {
  message: string;
  type?: 'success' | 'error';
  duration?: number;
  onClose?: () => void;
}

export function Toast({ message, type = 'success', duration = 3000, onClose }: ToastProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onClose?.(), 300);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 0.95 }}
          className="fixed top-20 right-4 z-50 bg-navy-800/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl p-4 flex items-center gap-3 min-w-[280px]"
        >
          <CheckCircle className={`h-5 w-5 ${type === 'success' ? 'text-accent' : 'text-red-400'}`} />
          <p className="flex-1 text-sm text-white/90">{message}</p>
          <button
            onClick={() => {
              setIsVisible(false);
              setTimeout(() => onClose?.(), 300);
            }}
            className="p-1 rounded hover:bg-white/5 transition-colors"
            aria-label="Fechar"
          >
            <X className="h-4 w-4 text-white/60" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

