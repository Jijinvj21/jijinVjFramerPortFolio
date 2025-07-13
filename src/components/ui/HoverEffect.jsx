"use client";

import { useState, useRef } from 'react';
import { 
  motion, 
  AnimatePresence, 
  useTransform, 
  useMotionValue, 
  useSpring, 
  useInView 
} from "framer-motion";
import { cn } from "../../utils/cn";

// Centered animated text component
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
      className={`${className} overflow-hidden block text-center`}
    >
      {text?.split(' ').map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex justify-center">
          {word.split('').map((char, charIndex) => (
            <motion.span key={charIndex} variants={item} className="inline-block">
              {char}
            </motion.span>
          ))}
          <motion.span variants={item} className="inline-block">
            &nbsp;
          </motion.span>
        </span>
      ))}
    </motion.div>
  );
}

// Updated HoverEffect with centered content
export const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 py-10 max-w-7xl mx-auto px-4",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={idx}
          className="relative group block w-full"
          target="_blank"
          rel="noopener noreferrer"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 h-full w-full bg-neutral-200 dark:bg-slate-800/[0.8] block rounded-3xl"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <div className="flex flex-col justify-between items-center h-full p-6 gap-4 w-full">
              <div className="flex flex-col items-center w-full gap-4">
                <CardTitle>
                  <LettersPullUp text={item.title} />
                </CardTitle>
                <CardDescription>
                  <LettersPullUp text={item.description} />
                </CardDescription>
              </div>
              
              <div className="w-full mt-4">
                <AnimatedTooltip items={
                  item.tech.split(',').map((tech, index) => ({
                    id: idx * 100 + index,
                    name: tech.trim(),
                    image: getTechIconUrl(tech.trim())
                  }))
                } />
              </div>
            </div>
            <div className="absolute top-4 right-4 opacity-70 group-hover:opacity-100 transition-opacity">
              <ArrowIcon />
            </div>
          </Card>
        </a>
      ))}
    </div>
  );
};

// Tech icon mapping function
const getTechIconUrl = (techName) => {
  const iconMap = {
    "React": "https://cdn.simpleicons.org/react",
    "Node.js": "https://cdn.simpleicons.org/nodedotjs",
    "MongoDB": "https://cdn.simpleicons.org/mongodb",
    "D3.js": "https://cdn.simpleicons.org/d3dotjs",
    "React Native": "https://cdn.simpleicons.org/react",
    "Python": "https://cdn.simpleicons.org/python",
    "JavaScript": "https://cdn.simpleicons.org/javascript",
    "TypeScript": "https://cdn.simpleicons.org/typescript",
    "HTML": "https://cdn.simpleicons.org/html5",
    "CSS": "https://cdn.simpleicons.org/css3",
    "Next.js": "https://cdn.simpleicons.org/nextdotjs",
    "Vue.js": "https://cdn.simpleicons.org/vuedotjs",
    "Angular": "https://cdn.simpleicons.org/angular",
    "Svelte": "https://cdn.simpleicons.org/svelte",
    "Express": "https://cdn.simpleicons.org/express",
    "Django": "https://cdn.simpleicons.org/django",
    "Flask": "https://cdn.simpleicons.org/flask",
    "Firebase": "https://cdn.simpleicons.org/firebase",
    "AWS": "https://cdn.simpleicons.org/amazonaws",
    "Azure": "https://cdn.simpleicons.org/microsoftazure",
    "GCP": "https://cdn.simpleicons.org/googlecloud",
    "Docker": "https://cdn.simpleicons.org/docker",
    "Kubernetes": "https://cdn.simpleicons.org/kubernetes",
    "Git": "https://cdn.simpleicons.org/git",
    "Redux": "https://cdn.simpleicons.org/redux",
    "GraphQL": "https://cdn.simpleicons.org/graphql",
    "Tailwind CSS": "https://cdn.simpleicons.org/tailwindcss",
    "Bootstrap": "https://cdn.simpleicons.org/bootstrap",
    "Sass": "https://cdn.simpleicons.org/sass",
    "PostgreSQL": "https://cdn.simpleicons.org/postgresql",
    "MySQL": "https://cdn.simpleicons.org/mysql",
    "SQLite": "https://cdn.simpleicons.org/sqlite",
    "Redis": "https://cdn.simpleicons.org/redis",
    "Elasticsearch": "https://cdn.simpleicons.org/elasticsearch",
    "Jest": "https://cdn.simpleicons.org/jest",
    "Cypress": "https://cdn.simpleicons.org/cypress",
    "Webpack": "https://cdn.simpleicons.org/webpack",
    "Vite": "https://cdn.simpleicons.org/vite",
    "Figma": "https://cdn.simpleicons.org/figma",
    "Adobe XD": "https://cdn.simpleicons.org/adobexd",
    "Sketch": "https://cdn.simpleicons.org/sketch",
    "Linux": "https://cdn.simpleicons.org/linux",
    "Windows": "https://cdn.simpleicons.org/windows",
    "MacOS": "https://cdn.simpleicons.org/macos",
    "Android": "https://cdn.simpleicons.org/android",
    "iOS": "https://cdn.simpleicons.org/ios",
    "Swift": "https://cdn.simpleicons.org/swift",
    "Kotlin": "https://cdn.simpleicons.org/kotlin",
    "Java": "https://cdn.simpleicons.org/java",
    "C++": "https://cdn.simpleicons.org/cplusplus",
    "C#": "https://cdn.simpleicons.org/csharp",
    "Go": "https://cdn.simpleicons.org/go",
    "Rust": "https://cdn.simpleicons.org/rust",
    "PHP": "https://cdn.simpleicons.org/php",
    "Ruby": "https://cdn.simpleicons.org/ruby",
    "Rails": "https://cdn.simpleicons.org/rubyonrails",
    "TensorFlow": "https://cdn.simpleicons.org/tensorflow",
    "PyTorch": "https://cdn.simpleicons.org/pytorch",
    "Three.js": "https://cdn.simpleicons.org/threedotjs",
    "Unity": "https://cdn.simpleicons.org/unity",
    "Unreal Engine": "https://cdn.simpleicons.org/unrealengine",
    "Blender": "https://cdn.simpleicons.org/blender",
    "Arduino": "https://cdn.simpleicons.org/arduino",
    "Raspberry Pi": "https://cdn.simpleicons.org/raspberrypi",
    "WordPress": "https://cdn.simpleicons.org/wordpress",
    "Shopify": "https://cdn.simpleicons.org/shopify",
    "WooCommerce": "https://cdn.simpleicons.org/woocommerce",
    "Magento": "https://cdn.simpleicons.org/magento",
    "Drupal": "https://cdn.simpleicons.org/drupal",
    "Joomla": "https://cdn.simpleicons.org/joomla",
    "npm": "https://cdn.simpleicons.org/npm",
    "Yarn": "https://cdn.simpleicons.org/yarn",
    "Homebrew": "https://cdn.simpleicons.org/homebrew",
    "Vercel": "https://cdn.simpleicons.org/vercel",
    "Netlify": "https://cdn.simpleicons.org/netlify",
    "Heroku": "https://cdn.simpleicons.org/heroku",
    "DigitalOcean": "https://cdn.simpleicons.org/digitalocean",
    "Cloudflare": "https://cdn.simpleicons.org/cloudflare",
    "Nginx": "https://cdn.simpleicons.org/nginx",
    "Apache": "https://cdn.simpleicons.org/apache",
    "Jira": "https://cdn.simpleicons.org/jira",
    "Trello": "https://cdn.simpleicons.org/trello",
    "Slack": "https://cdn.simpleicons.org/slack",
    "Discord": "https://cdn.simpleicons.org/discord",
    "Zoom": "https://cdn.simpleicons.org/zoom",
    "Teams": "https://cdn.simpleicons.org/microsoftteams",
    "Notion": "https://cdn.simpleicons.org/notion",
    "Markdown": "https://cdn.simpleicons.org/markdown",
    "LaTeX": "https://cdn.simpleicons.org/latex",
    "Visual Studio Code": "https://cdn.simpleicons.org/visualstudiocode",
    "Sublime Text": "https://cdn.simpleicons.org/sublimetext",
    "IntelliJ IDEA": "https://cdn.simpleicons.org/intellijidea",
    "Eclipse": "https://cdn.simpleicons.org/eclipseide",
    "Xcode": "https://cdn.simpleicons.org/xcode",
    "Android Studio": "https://cdn.simpleicons.org/androidstudio",
  };
  
  return iconMap[techName] || `https://via.placeholder.com/40/333333/ffffff?text=${techName.substring(0,2)}`;
};

// Centered card components
const Card = ({ className, children }) => (
  <div
    className={cn(
      "rounded-2xl h-full w-full p-4 overflow-hidden bg-black border border-white/[0.1] group-hover:border-slate-700 relative z-20 flex flex-col items-center justify-center min-h-[16rem] md:min-h-[20rem]",
      className
    )}
  >
    <div className="relative z-50 w-full flex flex-col items-center">
      {children}
    </div>
  </div>
);

const CardTitle = ({ className, children }) => (
  <h4 className={cn("text-zinc-100 font-bold tracking-wide text-xl mb-4 text-center w-full", className)}>
    {children}
  </h4>
);

const CardDescription = ({ className, children }) => (
  <p
    className={cn(
      "text-zinc-400 tracking-wide leading-relaxed text-base w-full text-center",
      className
    )}
  >
    {children}
  </p>
);

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="5" y1="12" x2="19" y2="12"></line>
    <polyline points="12 5 19 12 12 19"></polyline>
  </svg>
);

// AnimatedTooltip for tech icons
export const AnimatedTooltip = ({ items }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0);
  const rotate = useSpring(useTransform(x, [-100, 100], [-45, 45]), springConfig);
  const translateX = useSpring(useTransform(x, [-100, 100], [-50, 50]), springConfig);
  
  const handleMouseMove = (event) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth);
  };

  return (
    <div className="flex flex-wrap justify-center gap-2">
      {items.map((item, idx) => (
        <div
          className="relative group"
          key={item.id}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-10 left-1/2 z-50 flex -translate-x-1/2 flex-col items-center justify-center rounded-md bg-black px-3 py-1 text-xs shadow-xl"
              >
                <div className="absolute inset-x-10 -bottom-px z-30 h-px w-[20%] bg-gradient-to-r from-transparent via-emerald-500 to-transparent" />
                <div className="absolute -bottom-px left-10 z-30 h-px w-[40%] bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                <div className="relative z-30 text-sm font-medium text-white">
                  {item.name}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
          <div
            onMouseMove={handleMouseMove}
            className="bg-white/10 backdrop-blur-sm rounded-full p-2 border border-white/20 transition-all duration-300 group-hover:scale-110 group-hover:bg-white/20"
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-8 w-8 rounded-full object-contain"
            />
          </div>
        </div>
      ))}
    </div>
  );
};