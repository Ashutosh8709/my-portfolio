import bootstrapLogo from '../../assets/tech_logo/bootstrap.png'
import htmlLogo from '../../assets/tech_logo/html.png'
import cssLogo from '../../assets/tech_logo/css.png'
import javaScriptLogo from '../../assets/tech_logo/javascript.png'
import reactLogo from '../../assets/tech_logo/reactjs.png'
import tailwindLogo from '../../assets/tech_logo/tailwindcss.png'
import materialUILogo from '../../assets/tech_logo/materialui.png'
import nodeLogo from '../../assets/tech_logo/nodejs.png'
import expressLogo from '../../assets/tech_logo/express.png'
import sqlLogo from '../../assets/tech_logo/mysql.png'
import mongoDBLogo from '../../assets/tech_logo/mongodb.png'
import cLogo from '../../assets/tech_logo/c.png'
import cppLogo from '../../assets/tech_logo/cpp.png'
import javaLogo from '../../assets/tech_logo/java.png'
import pythonLogo from '../../assets/tech_logo/python.png'
import gitLogo from '../../assets/tech_logo/git.png'
import githubLogo from '../../assets/tech_logo/github.png'
import vscodeLogo from '../../assets/tech_logo/vscode.png'





export default function Skills(){
    return(
    <section id='skills' className="scroll-mt-[-101px] flex flex-col justify-center px-[7vw]">
        <hr className="border-t border-white w-full my-25" />
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4">
            Skills
        </h2>
        <p className='text-gray-400 font-semibold text-lg'>A collection of my technical skills nd expertise honed through various projects and experiences</p>
        <div className='flex flex-wrap gap-1 lg:gap-5 py-10 justify-between'>
            <div className='bg-gray-800/20 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(168,85,247,0.5)]'>
                <h3 className='text-2xl sm:text-3xl font-semibold mb-4 text-center text-gray-400'>
                    Frontend
                </h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={htmlLogo} alt="html" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            HTML
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={cssLogo} alt="css" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            CSS
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={javaScriptLogo} alt="javascript" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            JavaScript
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={reactLogo} alt="reactJS" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            ReactJS
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={materialUILogo} alt="materailUI" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            Material UI
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={bootstrapLogo} alt="bootstrap" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            Bootstrap
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={bootstrapLogo} alt="tailwindLogo" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            Tailwind CSS
                        </span>
                    </div>
                </div>
            </div>
            <div className='bg-gray-800/20 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(168,85,247,0.5)]'>
                <h3 className='text-2xl sm:text-3xl font-semibold mb-4 text-center text-gray-400'>
                    Backend
                </h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={nodeLogo} alt="nodeJS" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            Node JS
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={expressLogo} alt="expressJS" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            Express JS
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={sqlLogo} alt="sqlLogo" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            MySQL
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={mongoDBLogo} alt="MongoDB" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            MongoDB
                        </span>
                    </div>
                </div>
            </div>
            <div className='bg-gray-800/20 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(168,85,247,0.5)]'>
                <h3 className='text-2xl sm:text-3xl font-semibold mb-4 text-center text-gray-400'>
                    Languages
                </h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={cLogo} alt="c" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            C
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={cppLogo} alt="c++" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            C++
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={javaLogo} alt="java" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            Java
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={pythonLogo} alt="python" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            Python
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={materialUILogo} alt="javascript" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            JavaScript
                        </span>
                    </div>
                </div>
            </div>
            <div className='bg-gray-800/20 backdrop-blur-md px-6 sm:px-10 py-8 sm:py-6 mb-10 w-full sm:w-[48%] rounded-2xl border border-white shadow-[0_0_20px_1px_rgba(168,85,247,0.5)]'>
                <h3 className='text-2xl sm:text-3xl font-semibold mb-4 text-center text-gray-400'>
                    Tools
                </h3>
                <div className='grid grid-cols-2 sm:grid-cols-3 gap-3 w-full'>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={gitLogo} alt="git" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            Git
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={githubLogo} alt="github" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            Github
                        </span>
                    </div>
                    <div className='flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-700 rounded-3xl py-2 px-2 transition-all duration-300 ease-in-out cursor-pointer hover:-translate-y-1 hover:bg-[rgba(211,211,211,0.1)]'>
                        <img src={vscodeLogo} alt="vs code" className='w-6 h-6 sm:w-8 sm:h-8 '/>
                        <span className='text-xs sm:text-sm text-gray-300'>
                            VS Code
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}