import { FaFacebook,FaTwitter, FaLinkedin, FaInstagram,FaGithub } from "react-icons/fa";

export default function Footer(){
    const handleScroll=(id)=>{
        const section=document.getElementById(id);
        if(section){
            section.scrollIntoView({behavior: "smooth"});
        }
    };
    return(
        <footer className="text-white py-8 px-[12vw] md:px-[7vw] lg:px-[7vw] ">
            <hr className="border-t border-gray-700 w-full mt-15 mb-10" />
            <div className="container mx-auto text-center ">
                <h2 className="text-xl font-semibold bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
                    Ashutosh Kumar
                </h2>


                <nav className="flex flex-wrap justify-center space-x-4 sm:space-x-6 mt-4">
                    {
                        [
                            {name:"Home",id:"home"},
                            {name:"About",id:"about"},
                            {name:"Skills",id:"skills"},
                            {name:"Projects",id:"projects"},
                            {name:"Contact",id:"contact"},
                        ].map((item,index)=>(
                            <button key={index} onClick={()=>handleScroll(item.id)} className="text-sm sm:text-base my-1 hover:bg-gradient-to-r hover:from-purple-400 hover:to-pink-500 hover:text-transparent hover:bg-clip-text cursor-pointer">
                                {item.name}
                            </button>
                        ))
                    }

                </nav>

                <div className="flex flex-wrap justify-center space-x-4 mt-6 ">
                    {
                        [
                            {icon:<FaFacebook/>,link:""},
                            {icon:<FaTwitter/>,link:""},
                            {icon:<FaInstagram/>,link:""},
                            {icon:<FaGithub/>,link:"https://github.com/Ashutosh8709"},
                            {icon:<FaLinkedin/>,link:"https://linkedin.com/ashutoshkumarak9"},
                        ].map((item,index)=>(
                            <a key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xl text-gray-400 hover:text-white transition-transform transform hover:scale-110"
                            >{item.icon}</a>
                        ))
                    }

                </div>


                <p className="text-sm text-gray-400 mt-6 ">
                    &copy; 2025 Ashutosh Kumar. All rights reserved.
                </p>

            </div>

        </footer>
    );
}