
// import { CardWithImage } from './ui/CardWithImage';
// import LettersPullUp from './ui/LettersPullUp';
// import { Separator } from './ui/Separator';

import AnimatedNumber from "./ui/AnimatedNumber";



// function AboutSection() {
//   return (
//     <div className="flex items-center justify-center  p-5 m-5">
//       <div className="container mx-auto flex flex-col md:flex-row items-center gap-40 md:max-w-5xl max-w-11/12">
        
//         {/* Left image */}
//        <div className="md:w-1/3 w-11/12 flex flex-col justify-center items-center text-center">
//   <CardWithImage />
// </div>


//         {/* Right animated text */}
//         <div className="md:w-2/3 w-full  text-center md:text-left ">
//           {/* Animated heading */}
//           <LettersPullUp
//             text="A Passionate Front-End Developer"
//             className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100"
//           />

//           <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-6">
//             <LettersPullUp
//               text="I specialize in writing clean, efficient, and scalable code using modern web development technologies and best practices. With a passion"
//             />
//             <LettersPullUp
//               text="for continuous learning and problem-solving,"
//             />
//             <LettersPullUp
//               text=" I bring creative solutions to complex challenges. I’m a fast learner, a team player, and someone who thrives in dynamic, collaborative environments."
//             />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }


// export default AboutSection;



import { motion } from "framer-motion";
import { Progress } from "./ui/Progress";

export default function AboutSection() {
  const stats = [
    { label: "Projects", value: 7 },
    { label: "Technologies", value: 10 },
    { label: "Happy Clients", value: 5 },
    { label: "Years Experience", value: 2 },
  ];

  const skills = [
    { name: "React.js", level: 90 },
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "TailwindCSS", level: 70 },
  ];

  return (
    <div className="px-4 py-10 grid md:grid-cols-2 gap-8 flex-wrap md:w-8/12">
      {/* Description */}
      <div className="border border-white/[0.1] text-white !p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">Hai Dedicated Full-Stack Developer</h2>
        <p className="text-gray-300 mb-4">
          I am a full-stack developer with over 2 years of hands-on experience in
          building robust, scalable, and user-friendly web applications. I
          specialize in both front-end and back-end development using
          technologies like React, Node.js, Express, and MongoDB.
        </p>
        <p className="text-gray-300">
          Passionate about problem-solving and continuous learning, I deliver
          clean, efficient code and creative solutions to complex challenges. I
          thrive in collaborative environments, adapt quickly to new tools and
          frameworks, and am committed to creating high-quality applications that
          enhance user experience.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="border border-white/[0.1] text-white  !py-1 rounded-lg shadow-lg flex flex-col items-center justify-center"
          >
            <AnimatedNumber value={stat.value} />
            <div className="text-gray-400 mt-2">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* What I Do */}
      <div className="border border-white/[0.1] text-white !p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">What I Do</h2>
        <ul>
          <li className="text-gray-300 mb-2 list-disc list-inside">Build MERN stack apps.</li>
          <li className="text-gray-300 mb-2 list-disc list-inside">Design user interfaces.</li>
          <li className="text-gray-300 mb-2 list-disc list-inside">Develop APIs & services.</li>
          <li className="text-gray-300 mb-2 list-disc list-inside">Integrate databases.</li>
          <li className="text-gray-300 mb-2 list-disc list-inside">Optimize performance.</li>
          <li className="text-gray-300 mb-2 list-disc list-inside">Ensure scalability.</li>
          <li className="text-gray-300 mb-2 list-disc list-inside">Review and test code.</li>
          <li className="text-gray-300 mb-2 list-disc list-inside">Collaborate in teams.</li>
          <li className="text-gray-300 mb-2 list-disc list-inside">Deploy & maintain apps.</li>
          <li className="text-gray-300 mb-2 list-disc list-inside">Stay updated with tech.</li>
        </ul>
      </div>

      {/* Skill Proficiency */}
      <div className="border border-white/[0.1] text-white !p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold ">Skill Proficiency</h2>
        <div className="space-y-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className=" flex flex-col gap-2"
            >
              <div className="flex justify-between !mt-2 text-sm">
                <span className="text-gray-200">{skill.name}</span>
                <span className="text-gray-400 ">{skill.level}%</span>
              </div>
              <Progress value={skill.level} className="h-2 bg-gray-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Note: Ensure you have the shadcn/ui Progress component installed.

