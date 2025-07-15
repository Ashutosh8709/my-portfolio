import { TypeAnimation } from 'react-type-animation';
import './cursor.css'
import { FaLinkedin,FaGithub } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt'
import profileImage from '../assets/myphoto.jpg';


export default function About() {
    const handleContactClick = (e) => {
    e.preventDefault();
    window.location.href = "mailto:ashutosh2003.sahi@gmail.com";
  };
  return (
    <section id='home' className="py-4 px-[7vw] md:px-[7vw] lg:px-[7vw] font-sans mt-24 md:mt-35 lg:mt-30 scroll-mt-30">
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="md:w-[50%] lg:w-[60%] text-center md:text-left mt-8 md:mt-10">
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight flex flex-wrap justify-center md:justify-start gap-x-2">
            Hi, I am&nbsp;
            <span className='inline align-baseline'>
            <TypeAnimation
                sequence={[
                    'Ashutosh Kumar', 3000,
                    'a FullStack Developer', 3000,
                    'a Researcher',3000,
                    'a Problem Solver.', 3000
                ]}
                speed={300}
                deletionSpeed={150}
                repeat={Infinity}
                className="bg-gradient-to-r from-purple-400 to-pink-600 text-transparent bg-clip-text"
                wrapper="span"
                cursor={false} 
                />
              <span className="custom-cursor" />
            </span>
          </h1>
            <p className='text-lg font-semibold'>
              Full Stack Developer | Researcher | Computer Science Engineer
            </p>
            {/* Buttons */}
            <a href="https://www.linkedin.com/in/ashutoshkumarak9/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 py-3 px-6 rounded-full mt-5 text-base bg-transparent border border-purple-400 text-white font-medium transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)] hover:text-[#0a66c2]  shadow-md">
            <FaLinkedin size={18} />LinkedIn</a>
            
            <a href="https://github.com/Ashutosh8709"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex ml-8 items-center gap-2 py-3 px-6 rounded-full mt-5 text-base bg-transparent border border-purple-400 text-white font-medium transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)] hover:text-[#0a66c2]  shadow-md">
            <FaGithub size={18} />Github</a>
            <div className='mt-6'>
            <a href="#contact" onClick={handleContactClick}
            className="inline-block px-6 py-4 text-base bg-gradient-to-r from-purple-500/80 to-pink-500/80 text-white font-medium rounded-full transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-105 cursor-pointer border border-white/20 hover:from-purple-500 hover:to-pink-500">
            Get In Touch</a>
            </div>
        </div>

            {/* Right side */}
            <div className='md:w-1/2 flex justify-center md:justify-end '>
            <Tilt className=' w-48 h-48 sm:w-60 sm:h-60 md:w-90 md:h-90 lg:w-135 lg:h-135 border-3 border-purple-500 rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.051}
            transitionSpeed={1000}
            gyroscope={true}
            >
            <img src={profileImage} alt="Ashutosh Kumar" className='h-48 w-48 sm:w-60 sm:h-60  md:w-90 md:h-90 lg:w-135 lg:h-135  rounded-full object-cover drop-shadow-[0_10px_20px_rgba(168,85,247,0.5)]'/>
            </Tilt>
            </div>
      </div>
    </section>
  );
}
