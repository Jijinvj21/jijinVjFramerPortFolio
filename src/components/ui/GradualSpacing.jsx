'use client';

import { AnimatePresence, motion, useInView } from 'framer-motion';
import React, { useRef } from 'react';

export function GradualSpacing({ text = 'Gradual Spacing' , className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl"}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <div className="flex space-x-1 justify-center">
      <AnimatePresence>
        {text.split('').map((char, i) => (
          <motion.p
            ref={ref}
            key={i}
            initial={{ opacity: 0, x: -18 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            exit="hidden"
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className={className}
          >
            {char === ' ' ? <span>&nbsp;</span> : char}
          </motion.p>
        ))}
      </AnimatePresence>
    </div>
  );
}
