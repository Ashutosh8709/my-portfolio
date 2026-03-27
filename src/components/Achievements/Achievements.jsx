import researchPaperLogo from "./researchPaper.png";
import hackathonLogo from "./hackathon.jpg";
import patentLogo from "./patent.jpeg";
import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

export default function Achievements() {
  const [selectedProject, setSelectedProject] = useState(null);
  const handleOpenModel = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModel = (project) => {
    setSelectedProject(null);
  };

  const Projects = [
    {
      id: 0,
      title: "Research Paper – Smart Mirror with Deep Learning",
      img: researchPaperLogo,
      desc: "Published research on an AI-powered smart mirror for health evaluation, skincare analysis, and virtual enhancement using deep learning techniques.",
      link: "https://ieeexplore.ieee.org/document/11051879",
    },
    {
      id: 1,
      title: "Tech Forge 2025 – National Level Hackathon Winner",
      img: hackathonLogo,
      desc: "Secured a winning position in Tech Forge 2025, a national-level hackathon, by developing an innovative AI-driven solution under competitive conditions.",
      link: "https://drive.google.com/file/d/1wVX58hjcCZRpb1KqFjdcbV2AkoiFYwGa/view?usp=drive_link",
    },
    {
      id: 2,
      title: "Patent – Smart Mirror AI System",
      img: patentLogo,
      desc: "Filed a patent for an AI-based smart mirror system integrating deep learning for health monitoring, skincare insights, and virtual enhancements.",
      link: "#",
    },
  ];

  return (
    <section
      id="projects"
      className=" scroll-mt-[-101px] flex flex-col justify-center px-[7vw] relative"
    >
      <hr className="border-t border-white w-full my-25" />
      <motion.h2
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4"
      >
        Achievements
      </motion.h2>
      <motion.p
        variants={fadeIn("up", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0 }}
        className="text-gray-400 font-semibold text-lg mb-20"
      >
        A showcase of the projects I have worked on, highlighting my skills and
        experience in various technologies
      </motion.p>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {Projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleOpenModel(project)}
            className="border border-white bg-gray-800/20 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer shadow-[0_0_20px_1px_rgba(168,85,247,0.5)]
            hover:scale-105 transition-transform duration-300 
            "
          >
            <div className="p-4">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-48 object-cover rounded-xl "
              />
            </div>
            <div className="p-6 text-left">
              <h3 className="text-2xl font-bold text-white mb-2">
                {project.title}
              </h3>
              <p className="text-gray-500 mb-4 pt-5 line-clamp-3">
                {project.desc}
              </p>
            </div>
          </div>
        ))}
        ;
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-y-auto">
          <div className="bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-3xl relative max-h-[80vh] overflow-y-auto">
            <div className="sticky top-0 bg-gray-900 z-10 flex justify-end p-4">
              <button
                onClick={handleCloseModel}
                className="text-white text-3xl font-bold hover:text-white/80"
              >
                &times;
              </button>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex justify-center bg-gray-900 px-4">
                <img
                  src={selectedProject.img}
                  alt={selectedProject.title}
                  className="w-[95%] object-contain rounded-xl shadow-2xl"
                />
              </div>
              <div className="lg:p-8 p-6">
                <h3 className="lg:text-3xl font-bold text-white mb-4 text-md">
                  {selectedProject.title}
                </h3>
                <p className="text-gray-400 mb-6 lg:text-base text-xs">
                  {selectedProject.desc}
                </p>
                <div className="flex gap-4">
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center"
                  >
                    Verify
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
