import { HoverEffect } from "./ui/HoverEffect";


export default function CardHoverEffectDemo() {
  return (
    <div className="flex justify-center items-center px-6 py-12 ">
      <div className="max-w-6xl w-3/4">
        <HoverEffect items={projects} />
      </div>
    </div>
  );
}

// Projects data with tech icons
export const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform featuring product listings, cart functionality.",
    link: "https://square-frontend-ten.vercel.app/home",
    tech: "React, Tailwind CSS, Figma,Git ",
  },
  {
    title: "Tally Accounting Software",
    description: "A modern accounting and inventory management system inspired by Tally, designed for small and medium businesses.",
    link: "https://bill-tree-frontend-v1.vercel.app/sign-in",
    tech: "React, Tailwind CSS, Sass,Vite,Figma, Redux, Git",
  },
  {
    title: "Movie Learning Platform",
    description: "An interactive platform for learning through movies, including curated educational content and user progress tracking.",
    link: "https://wisetalkies.com/",
    tech: "React, Firebase, Sass,Vite,Figma, Redux, Git",
  },
  {
    title: "Social Learning Network",
    description: "A learning management platform with integrated social media features, enabling discussions and collaboration.",
    link: "https://steyp.com/feed/",
    tech: "Sass,Vite,Figma, Redux, Git, React",
  },
  {
    title: "Password Generator Tool",
    description: "A secure password generator with custom options and Firebase integration for user management and storage.",
    link: "https://password-generater-w-react-firebase.netlify.app/",
    tech: "React, Firebase, Express, Tailwind CSS , Git",
  },
  {
    title: "FinBizzy – Financial Software Landing Page",
    description: "A responsive and modern landing page for a financial accounting application, optimized for performance and SEO.",
    link: "https://finbizzy.vercel.app/",
    tech: "React, Tailwind CSS, Sass, Vite, Figma, Git",
  },
];
