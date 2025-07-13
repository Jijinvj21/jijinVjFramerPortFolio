
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

// Reusable animated text component
function LettersPullUp({ text, className = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-20%' });

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.01,
      },
    },
  };

  const item = {
    hidden: { y: 10, opacity: 0 },
    show: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.2 },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={container}
      initial="hidden"
      animate={isInView ? 'show' : 'hidden'}
      className={`${className} overflow-hidden flex flex-wrap`}
    >
      {text?.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex">
          {word.split('').map((char, charIndex) => (
            <motion.span key={charIndex} variants={item} className="inline-block">
              {char}
            </motion.span>
          ))}
          {/* Add space after word */}
          <motion.span variants={item} className="inline-block">
            &nbsp;
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}
export default LettersPullUp
