import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import {
  FaGithub,
  FaLinkedin,
  FaDownload,
  FaHome,
  FaUser,
  FaTools,
  FaProjectDiagram,
  FaBriefcase,
  FaEnvelope,
} from "react-icons/fa";

const FloatingNavbar = () => {
  const [activeSection, setActiveSection] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [tooltipId, setTooltipId] = useState(null); // for mobile tooltips

  const sections = [
    { id: "home", label: "Home", icon: <FaHome /> },
    { id: "about", label: "About", icon: <FaUser /> },
    { id: "tools", label: "Tools", icon: <FaTools /> },
    { id: "projects", label: "Projects", icon: <FaProjectDiagram /> },
    { id: "expreance", label: "Experience", icon: <FaBriefcase /> },
    // { id: "contact", label: "Contact", icon: <FaEnvelope /> },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sectionElements = sections
        .map((section) => document.getElementById(section.id))
        .filter(Boolean);

      if (sectionElements.length === 0) return;

      const offset = 100;
      const scrollPosition = window.scrollY + offset;

      const closest = sectionElements.reduce((prev, curr) => {
        const prevDistance = Math.abs(prev.offsetTop - scrollPosition);
        const currDistance = Math.abs(curr.offsetTop - scrollPosition);
        return prevDistance < currDistance ? prev : curr;
      });

      setActiveSection(closest.id);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide tooltip on outside click (for mobile)
  const navRef = useRef();
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!navRef.current?.contains(e.target)) {
        setTooltipId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <AnimatePresence>
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        exit={{ y: -100 }}
        transition={{ type: "spring", damping: 20, stiffness: 200 }}
        className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 
          ${
            scrolled
              ? "bg-white/10 backdrop-blur-lg border border-white/10"
              : "bg-transparent"
          } 
          rounded-full shadow-lg px-2 py-2 md:px-6 md:py-3 
          transition-all duration-300 max-w-[100vw] overflow-x-auto scrollbar-hide`}
      >
        <ul className="flex flex-nowrap items-center gap-3 md:gap-4 text-sm md:text-base justify-center h-[2.5rem] md:w-3xl px-2">
          {/* Logo */}
          <li className="pr-4 mr-2 border-r border-white/20 text-white font-bold text-lg md:text-xl whitespace-nowrap w-[55px] md:text-start text-center">
            <Link
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              offset={-70}
              className="cursor-pointer"
            >
              Jijin
            </Link>
          </li>

          {/* Navigation Links */}
          {sections.map((section) => (
            <li
              key={section.id}
              className="relative flex flex-col items-center"
              onClick={() => {
                if (window.innerWidth < 768) {
                  setTooltipId((prev) => (prev === section.id ? null : section.id));
                }
              }}
              onMouseEnter={() => {
                if (window.innerWidth >= 768) setTooltipId(section.id);
              }}
              onMouseLeave={() => {
                if (window.innerWidth >= 768) setTooltipId(null);
              }}
            >
              <Link
                to={section.id}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className={`relative px-4 py-2 md:px-6 md:py-3 rounded-full cursor-pointer font-semibold transition-colors whitespace-nowrap ${
                  activeSection === section.id
                    ? "text-white"
                    : "text-gray-300 hover:text-white"
                }`}
              >
                {activeSection === section.id && (
                  <motion.span
                    layoutId="nav-indicator"
                    className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-indigo-500 to-purple-600 z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}

                <span className="relative z-10 flex items-center gap-1 mix-blend-exclusion text-base md:text-lg">
                  <span className="md:hidden text-xl">{section.icon}</span>
                  <span className="hidden md:inline">{section.label}</span>
                </span>
              </Link>

              {/* Tooltip */}
              <AnimatePresence>
                {tooltipId === section.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 5 }}
                    transition={{ duration: 0.2 }}
                    className="absolute -bottom-8 md:hidden bg-black text-white text-[10px] px-2 py-1 rounded whitespace-nowrap z-50"
                  >
                    {section.label}
                  </motion.div>
                )}
              </AnimatePresence>
            </li>
          ))}

          {/* Social Links */}
          <li className="flex gap-3 pl-4 ml-2 border-l border-white/20 text-lg md:text-2xl whitespace-nowrap w-[90px] justify-center">
            <a
              href="https://github.com/Jijinvj21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/jijin-vj/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://drive.google.com/file/d/1Cr9fdRjXUDLzmSgpl-q1AaXP0ZhlOwJC/view"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-white transition-colors"
            >
              <FaDownload />
            </a>
          </li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
};

export default FloatingNavbar;
