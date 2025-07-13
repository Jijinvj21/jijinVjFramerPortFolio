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
    description: "Full-featured online shopping experience with payment integration.",
    link: "https://example.com/ecommerce",
    tech: "React, Node.js, MongoDB",
  },
  {
    title: "Portfolio Website",
    description: "Professional portfolio showcasing design and development projects.",
    link: "https://example.com/portfolio",
    tech: "React, Tailwind CSS, Framer Motion",
  },
  {
    title: "Task Management App",
    description: "Productivity application for organizing tasks and projects.",
    link: "https://example.com/tasks",
    tech: "React, Firebase, Material UI",
  },
  {
    title: "Analytics Dashboard",
    description: "Data visualization platform for business metrics.",
    link: "https://example.com/analytics",
    tech: "React, D3.js, Express",
  },
  {
    title: "Social Media Integration",
    description: "API integration for social media platforms.",
    link: "https://example.com/social",
    tech: "Node.js, OAuth, MongoDB",
  },
  {
    title: "Mobile Application",
    description: "Cross-platform mobile app for iOS and Android.",
    link: "https://example.com/mobile",
    tech: "React Native, Firebase, Redux",
  },
];