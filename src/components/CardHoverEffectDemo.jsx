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
    title: " Peakst8",
    description: "Peakst8 is a lifestyle movement that helps everyday athletes unlock longevity, joy, and strength through simple, intentional living.",
    link: "https://peakst8.club/",
    tech: "React, Tailwind CSS, Sass, Vite, Figma, Git",
  },
     {
    title: " inherinterest",
    description: "inherinterest is Money talk that feels like a group chat. No jargon. No shame. Just clarity. An initiative by Zerodha.",
    link: "https://inherinterest.club/",
    tech: "React, Tailwind CSS, Sass, Vite, Figma, Git",
  },
  {
    title: "E-Commerce ",
    description: "A full-stack e-commerce platform featuring product listings, cart functionality and user authentication.",
    link: "https://square-frontend-ten.vercel.app/home",
    tech: "React, Tailwind CSS, Figma,Git ",
  },
  {
    title: "Accounting Software",
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
    title: "Password Generator",
    description: "A secure password generator with custom options and Firebase integration for user management and storage.",
    link: "https://password-generater-w-react-firebase.netlify.app/",
    tech: "React, Firebase, Express, Tailwind CSS , Git",
  },
  {
    title: "FinBizzy ",
    description: "A responsive and modern landing page for a financial accounting application, optimized for performance and SEO.",
    link: "https://finbizzy.vercel.app/",
    tech: "React, Tailwind CSS, Sass, Vite, Figma, Git",
  },
];
