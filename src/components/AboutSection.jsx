
import { CardWithImage } from './ui/CardWithImage';
import LettersPullUp from './ui/LettersPullUp';
import { Separator } from './ui/Separator';



function AboutSection() {
  return (
    <div className="flex items-center justify-center  p-5 m-5">
      <div className="container mx-auto flex flex-col md:flex-row items-center gap-40 md:max-w-5xl max-w-11/12">
        
        {/* Left image */}
       <div className="md:w-1/3 w-11/12 flex flex-col justify-center items-center text-center">
  <CardWithImage />
</div>


        {/* Right animated text */}
        <div className="md:w-2/3 w-full  text-center md:text-left ">
          {/* Animated heading */}
          <LettersPullUp
            text="A Passionate Front-End Developer"
            className="text-3xl md:text-4xl font-bold mb-6 text-gray-800 dark:text-gray-100"
          />

          <div className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 space-y-6">
            <LettersPullUp
              text="I specialize in writing clean, efficient, and scalable code using modern web development technologies and best practices. With a passion"
            />
            <LettersPullUp
              text="for continuous learning and problem-solving,"
            />
            <LettersPullUp
              text=" I bring creative solutions to complex challenges. I’m a fast learner, a team player, and someone who thrives in dynamic, collaborative environments."
            />
          </div>
        </div>
      </div>
    </div>
  );
}


export default AboutSection;





