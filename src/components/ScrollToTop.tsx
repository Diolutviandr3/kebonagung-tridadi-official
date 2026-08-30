import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';

export const ScrollToTop: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 320) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.7, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.7, y: 20 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          aria-label="Kembali ke atas"
          title="Kembali ke atas"
          className="fixed bottom-6 right-6 z-40 p-3.5 rounded-2xl bg-purple text-cream shadow-purple-md border-2 border-cream/30 hover:bg-purple-800 hover:scale-110 active:scale-95 transition-all flex items-center justify-center cursor-pointer group"
        >
          <ChevronUp className="w-5 h-5 transition-transform group-hover:-translate-y-0.5" />
          <span className="sr-only">Kembali ke atas</span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};
