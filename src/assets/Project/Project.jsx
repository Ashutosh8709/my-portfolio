import maarmitraLogo from './MaargMitra.png'
import checkifyLogo from './checkify.png'
import wanderlustLogo from './wanderlust.png'
import notesLogo from './Notes.png'
import todoLogo from './TO-DO.png'
import { useState } from 'react'



export default function Project(){
    const [selectedProject,setSelectedProject]=useState(null);
    const handleOpenModel=(project)=>{
        setSelectedProject(project);

    }

    const handleCloseModel=(project)=>{
        setSelectedProject(null);
    }

    const Projects=[
        {   
            id:0,
            title:"Traffic And Accident Management System",
            img:maarmitraLogo,
            desc:"A powerful and user-friendly AI-powered web application designed to uncover and showcase real-time traffic insights, detect road accidents, forecast congestion, and visualize accident-prone zones—helping users and authorities make safer, data-driven decisions on the road.",
            tags:['Real-Time','Python','Machine Learning','YOLOV8','OpenCV','Computer Vision','scikit-Learn','Streamlit','XGBoost'],
            github:"",
            webapp:"",
        },
        {   
            id:1,
            title:"Multiple Disease Diagnostics System",
            img:checkifyLogo,
            desc:"A smart, AI-driven web application designed to assist users in diagnosing multiple diseases by analyzing input symptoms or medical parameters—empowering early detection and preventive care with the help of machine learning.",
            tags:['Medical Diagnosis','Python','Machine Learning','YOLOV8','OpenCV','Computer Vision','scikit-Learn','Streamlit','XGBoost'],
            github:"",
            webapp:"",
        },
        {   
            id:2,
            title:"Travel & Stay Listing Platform",
            img:wanderlustLogo,
            desc:"A robust and dynamic MERN-based web application inspired by Airbnb, designed to allow users to explore, create, review, and manage stay listings—offering a seamless experience for travelers and hosts alike.",
            tags:['Node.js','Express.js','MongoDB','Mongoose','EJS','JavaScript','Cloudinary','Bootstrap','Multer','RESTful API'],
            github:"",
            webapp:"",
        },
        {   
            id:3,
            title:"Notes Manager",
            img:notesLogo,
            desc:"A minimalistic yet powerful full-stack notes application designed to help users create, update, and manage their personal notes with ease—featuring authentication, search, and a clean, intuitive interface.",
            tags:['React', 'Node.js' ,'Express.js', 'MongoDB' ,'Mongoose', 'JavaScript','Tailwind','CSS' ,'Axios', 'React Router'],
            github:"",
            webapp:"",
        },
        {   
            id:4,
            title:"Task Manager",
            img:todoLogo,
            desc:"A clean and efficient task management web app built for organizing daily to-dos with real-time CRUD operations, seamless UI, and modern backend integration—helping users stay productive and focused.",
            tags:['MERN','Tailwind CSS' ,'Axios' ,'React Router','Task Filtering', 'REST API'],
            github:"",
            webapp:"",
        },
    ];

    return(
        <section id="projects" className=" scroll-mt-[-101px] flex flex-col justify-center px-[7vw] relative">
            <hr className="border-t border-white w-full my-25" />
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
            Projects
        </h2>
        <p className='text-gray-400 font-semibold text-lg mb-20'>A showcase of the projects I have worked on, highlighting my skills and experience in various technologies</p>

        <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {Projects.map((project)=>
            <div key={project.id} onClick={()=>handleOpenModel(project)} className="border border-gray-600 bg-gray-800/20 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden cursor-pointer shadow-[0_0_20px_1px_rgba(168,85,247,0.5)]
            hover:scale-105 transition-transform duration-300 
            ">
                <div className='p-4'>
                    <img src={project.img} alt={project.title} className="w-full h-48 object-cover rounded-xl "/>
                </div>
                <div className='p-6 text-left'>
                    <h3 className='text-2xl font-bold text-white mb-2'>{project.title}</h3>
                    <p className='text-gray-500 mb-4 pt-5 line-clamp-3'>{project.desc}</p>
                    <div className='mb-4 '>
                        {project.tags.map((tag,index)=>(
                            <span key={index} className='inline-block text-xs font-semibold text-gray-300 rounded-full px-2 py-1 mr-2 mb-2 bg-[rgba(211,211,211,0.1)]'>{tag}</span>
                        ))}
                    </div>
                </div>
            </div>
            )};
        </div>


        {selectedProject && (
            <div className='fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-4 overflow-y-auto'>
  <div className='bg-gray-900 rounded-xl shadow-2xl w-[90%] max-w-3xl relative max-h-[80vh] overflow-y-auto'>
    <div className='sticky top-0 bg-gray-900 z-10 flex justify-end p-4'>
      <button onClick={handleCloseModel} className='text-white text-3xl font-bold hover:text-white/80'>&times;</button>
    </div>
    <div className='flex flex-col'>
      <div className='w-full flex justify-center bg-gray-900 px-4'>
        <img src={selectedProject.img} alt={selectedProject.title} className='w-[95%] object-contain rounded-xl shadow-2xl' />
      </div>
      <div className='lg:p-8 p-6'>
        <h3 className='lg:text-3xl font-bold text-white mb-4 text-md'>
          {selectedProject.title}
        </h3>
        <p className='text-gray-400 mb-6 lg:text-base text-xs'>
          {selectedProject.desc}
        </p>
        <div className='flex flex-wrap gap-2 mb-6'>
          {selectedProject.tags.map((tag, index) => (
            <span key={index} className='text-xs font-semibold text-gray-300 rounded-full px-2 py-1 bg-[rgba(211,211,211,0.1)]'>
              {tag}
            </span>
          ))}
        </div>
        <div className='flex gap-4'>
          <a href={selectedProject.github} target='_blank' rel='noopener noreferrer' className='w-1/2 bg-gray-800 text-gray-400 lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
            View Code
          </a>
          <a href={selectedProject.webapp} target='_blank' rel='noopener noreferrer' className='w-1/2 bg-gray-600 text-white lg:px-6 lg:py-2 px-2 py-1 rounded-xl lg:text-xl text-sm font-semibold text-center'>
            View Live
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