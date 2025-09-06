import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import GlowingStarsDemo from "./components/GlowingStarsDemo";
import SpotlightPreview from "./components/SpotlightPreview";
import AboutSection from "./components/AboutSection";
import InfiniteMovingTechDemo from "./components/InfiniteMovingTechDemo";
import { Separator } from "./components/ui/Separator";
import CardHoverEffectDemo from "./components/CardHoverEffectDemo";
import FloatingNavbar from "./components/ui/FloatingNavbar";
import Contact from "./components/Contact";
import { ExperienceCard } from "./components/ui/ExperienceCard";
import { Helmet } from "react-helmet";
import jvicon from "./assets/jv.svg"
function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black z-50">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-t-4 border-purple-500 rounded-full"
        />
      </div>
    );
  }
  return (
    <div className="bg-black">
        <Helmet>
        <title>Jijin VJ | Portfolio</title>
        <meta
          name="description"
          content="Portfolio of Jijin VJ - Frontend Developer with a focus on React, Framer Motion, and modern web technologies."
        />
        <meta property="og:title" content="Jijin VJ | Portfolio" />
        <meta
          property="og:description"
          content="Explore the projects and experience of Jijin VJ, a passionate frontend developer skilled in building modern UI/UX with React and Framer Motion."
        />
        <meta property="og:image" content="https://jijin-vj.vercel.app/og-image.png" />
        <meta property="og:url" content="https://jijin-vj.vercel.app/" />
        <meta property="og:site_name" content="Jijin Portfolio" />
        <meta property="og:type" content="website" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />

        {/* Optional: Twitter card support */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Jijin VJ | Portfolio" />
        <meta
          name="twitter:description"
          content="Explore the portfolio of Jijin VJ, React developer focused on performance, animation, and great UI."
        />
        <meta name="twitter:image" content="https://jijin-vj.vercel.app/og-image.png" />
      </Helmet>
      <FloatingNavbar />

      {/* Home section*/}
      <div className="mb-auto" id="home">
        <SpotlightPreview />
      </div>
      <div id="about" className="!mt-20">
        {/* Separator 1  */}
        {/* <div className="flex justify-center w-full h-[10rem] "> */}
          {/* <div className="w-60">
            <Separator label="ABOUT ME" gradient />
          </div> */}
        {/* </div> */}

        {/* About section */}
        <div className=" flex justify-center !mx-6" id="about">
          <AboutSection />
        </div>
      </div>
      <div id="tools">
        {/* Separator 2  */}
        <div className="flex justify-center w-full h-[4rem] items-center">
          {/* <div className="w-60">
            <Separator label="TOOLS" gradient />
          </div> */}
        </div>

        {/* Skills section  */}
        <div className="mt-16">
          <InfiniteMovingTechDemo />
        </div>
        
      </div>
      <div id="projects">
        {/* Separator 3 */}
        <div className="flex justify-center w-full h-[4rem] items-center">
          {/* <div className="w-60">
            <Separator label="PROJECTS" gradient />
          </div> */}
        </div>

        {/* project section */}
        <div className="  ">
          <CardHoverEffectDemo />
        </div>
      </div>
      <div id="expreance" className="">
        {/* Separator 4 */}
        <div className="flex justify-center w-full h-[10rem] items-center">
          {/* <div className="w-60">
            <Separator label="EXPREANCE" gradient />
          </div> */}
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 flex-wrap">
          <ExperienceCard
            company="Tegain"
            period="April 2024 - Present"
            location="Kochi, Kerala"
            description={`Develop and optimize user interfaces, improve front-end architecture, and enhance performance through modern development techniques, ensuring accessibility, cross-browser compatibility, and mobile responsiveness.\n\nCollaborate with design and back-end teams to create seamless user experiences, maintain high code quality through peer reviews, and implement cutting-edge technologies for progressive web applications.`}
            className="my-6"
          />

          <ExperienceCard
            company="The Capital Hub"
            period="September 2023 - February 2024"
            location="Bengaluru"
            description={`As a developer focused on frontend responsibilities in the company, I had the authority to make decisions regarding structures, feature progression, and services, all while working closely with the rest of the team.\n\nEngaged in multiple projects, encompassing both live and in-development initiatives. Contributed technically while also offering innovative ideas and suggestions to enhance client satisfaction.`}
            className="my-6"
            width="332px"
          />
        </div>
      </div>

      <div id="contact" className="">
        {/* Separator 5 */}
        <div className="flex justify-center w-full h-[10rem] items-center">
          {/* <div className="w-60">
            <Separator label="CONTACT" gradient />
          </div> */}
        </div>

        {/* Contact section */}
        <div className="h-[250px]  ">
          <Contact />
        </div>
      </div>
      <footer className="mt-20 mb-10 text-center text-sm text-gray-400 flex flex-col items-center ">
        <p>© {new Date().getFullYear()} Jijin VJ. All rights reserved.</p>
        <div className="w-65 h-[10px]">
          <Separator />
        </div>
      </footer>
    </div>
  );
}

export default App;
