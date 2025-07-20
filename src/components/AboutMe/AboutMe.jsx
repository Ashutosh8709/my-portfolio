import {motion} from 'framer-motion'
import { fadeIn } from '../../framerMotion/variants';


export default function AboutMe() {
  return (
    <section id="about" className="scroll-mt-[-101px] min-h-screen flex flex-col justify-center px-[7vw]">
      {/* Divider and Heading */}
      <hr className="border-t border-white w-full my-25" />
      <motion.h2 
      variants={fadeIn('up',0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{once:true,amount:0}}className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-16">
        About Me
      </motion.h2>
      

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row justify-between items-center gap-10">
        {/* Text */}
        <motion.div 
          variants={fadeIn('right',0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{once:true,amount:0.7}}className="lg:w-1/2 md:w-full text-white text-center lg:text-left flex items-center justify-center">
          <p className="text-xl leading-relaxed">
            I am a passionate Computer Science student with strong problem-solving skills
            and a deep interest in full-stack development.
            <br />
            <br />
            With experience in various programming languages and frameworks, I enjoy
            creating efficient and user-friendly applications.
          </p>
        </motion.div>

        {/* Images */}
        <motion.div variants={fadeIn('left',0.2)}
          initial='hidden'
          whileInView='show'
          viewport={{once:true,amount:0.7}}className="lg:w-1/2 flex flex-col items-center gap-2">
          <img
            src="https://github-readme-stats.vercel.app/api?username=Ashutosh8709&show_icons=true&theme=tokyonight&locale=en"
            alt="GitHub Stats"
            className="w-90 max-w-md h-40 rounded-xl shadow-lg"
          />
          <img
            src="https://github-profile-trophy.vercel.app/?username=Ashutosh8709&theme=algolia&column=3"
            alt="GitHub Trophies"
            className="w-90 max-w-md h-90 rounded-xl shadow-lg mb-10"
          />
        </motion.div>
      </div>
    </section>
  );
}
