// import { motion, AnimatePresence } from "framer-motion";
// import { useState, useEffect } from "react";

// const AnimatedText = () => {
//   const texts = ["FullStack Developer", "React Expert", "Node.js Developer"];
//   const [index, setIndex] = useState(0);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setIndex((prev) => (prev + 1) % texts.length);
//     }, 3000); // change text every 3 seconds
//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <div className="text-center">
//       <AnimatePresence mode="wait">
//         <motion.h1
//           key={texts[index]}
//           className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-3xl font-bold text-transparent sm:text-3xl md:text-5xl lg:text-6xl"
//           initial={{ opacity: 0, y: 20 }}
//           animate={{ opacity: 1, y: 0 }}
//           exit={{ opacity: 0, y: -20 }}
//           transition={{ duration: 0.5 }}
//         >
//           {texts[index]}
//         </motion.h1>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default AnimatedText;
// import { motion } from "framer-motion";
// import { useState, useEffect } from "react";

// const TypewriterText = () => {
//   const texts = ["FullStack Developer", "React Expert", "Node.js Developer"];
//   const [displayedText, setDisplayedText] = useState("");
//   const [textIndex, setTextIndex] = useState(0);
//   const [charIndex, setCharIndex] = useState(0);

//   useEffect(() => {
//     const timeout = setTimeout(() => {
//       setDisplayedText(
//         texts[textIndex].substring(0, charIndex + 1)
//       );
//       setCharIndex(charIndex + 1);

//       if (charIndex + 1 === texts[textIndex].length) {
//         setTimeout(() => {
//           setCharIndex(0);
//           setTextIndex((prev) => (prev + 1) % texts.length);
//         }, 1500); // pause before next text
//       }
//     }, 100); // typing speed

//     return () => clearTimeout(timeout);
//   }, [charIndex, textIndex, texts]);

//   return (
//     <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-3xl md:text-5xl lg:text-6xl">
//       {displayedText}
//       <motion.span
//         className="inline-block"
//         animate={{ opacity: [0, 1] }}
//         transition={{ repeat: Infinity, duration: 0.6 }}
//       >
//         |
//       </motion.span>
//     </h1>
//   );
// };

// export default TypewriterText;

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const TypewriterText = () => {
  const texts = ["FullStack Developer", "React js Developer", "Node.js Developer",'Freelancer'];
  const [displayedText, setDisplayedText] = useState("");
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const typingSpeed = isDeleting ? 100 : 100; // faster when deleting

    const timeout = setTimeout(() => {
      const fullText = texts[textIndex];

      if (!isDeleting) {
        setDisplayedText(fullText.substring(0, charIndex + 1));
        setCharIndex(charIndex + 1);

        if (charIndex + 1 === fullText.length) {
          setTimeout(() => setIsDeleting(true), 500); // pause before deleting
        }
      } else {
        setDisplayedText(fullText.substring(0, charIndex - 1));
        setCharIndex(charIndex - 1);

        if (charIndex - 1 === 0) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length); // move to next text
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, textIndex, texts]);

  return (
    <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-3xl font-bold text-transparent sm:text-3xl md:text-5xl lg:text-6xl">
      {displayedText}
      <motion.span
        className="inline-block"
        animate={{ opacity: [0, 1] }}
        transition={{ repeat: Infinity, duration: 0.6 }}
      >
        |
      </motion.span>
    </h1>
  );
};

export default TypewriterText;
