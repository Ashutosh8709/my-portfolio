import lpuLogo from './seal.svg'
import iitmLogo from './iitm.svg'
import schoolLogo from './logo2.png'

export default function Education(){
    const education=[
        {   id:0,
            img:iitmLogo,
            school:"Indian Institute of Technology, Madras",
            date:"Sept 2023 - Sept 2027(pursuing)",
            grade:"8 - CGPA",
            degree:"BS - Data Science And Applications",
        },
        {
            id:1,
            img:lpuLogo,
            school:"Lovely Professional University, Jalandhar",
            date:"Aug 2023 - Aug 2027(pursuing)",
            grade:"9 - CGPA",
            degree:"B.Tech - Computer Science and Engineering",
        },
        {
            id:2,
            img:schoolLogo,
            school:"Shiksha Niketan Schhol, Jamshedpur",
            date:"2021 - 2023",
            grade:"CBSE - 85%",
            degree:"CBSE(XII) - PCM with Computer Science",
        },
    ];
    return(
        <section 
            id='education'
            className='scroll-mt-[-145px] py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[7vw] font-sans'>
                <hr className="border-t border-white w-full mt-12 mb-25" />


            <div className='text-center mb-16'>
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4'>Education Journey</h2>
                <p className='text-gray-400 mt-4 text-lg font-semibold '>My education has been a Journey of learning and development. Here are the details of my academic backkground</p>    
            </div>

            <div className='relative '>
                <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 sm:-translate-x-0 w-1 bg-gradient-to-r from-purple-500 to-pink-500 h-full'></div>
                {education.map((edu,index)=>(
                    <div 
                    key={edu.id}
                    className={`flex flex-col sm:flex-row items-center mb-16 ${index % 2 === 0 ? "sm:justify-start":"sm:justify-end"}`}>
                        <div className='absolute sm:left-1/2 left-0 transform -translate-x-1/2 bg-gray-400 border-4 w-12 h-12 border-white sm:w-16 sm:h-16 rounded-full flex justify-center items-center z-10'>
                            <img src={edu.img} alt={edu.school} className='w-full h-full object-cover rounded-full'/>
                        </div>

                        <div className={`w-full sm:max-w-md md:max-w-lg p-4 sm:p-8 rounded-2xl shadow-2xl border border-white bg-gray-800/20 backdrop-blur-md shadow-[0_0_20px_1px_rgba(168,85,247,0.5)] ${index % 2 === 0 ? "sm:ml-64 md:ml-20 ml-8" : "sm:mr-64 md:mr-20 ml-8"}  transform transition-transform duration-300 hover:scale-105`}>
                            <div className='flex items-center space-x-6'>
                                <div className='min-h-16 min-w-16 w-16 h-16 bg-white rounded-md overflow-hidden flex-shrink-0'>
                                    <img src={edu.img} alt={edu.school} className='w-full h-full object-cover '/>
                                </div>
                                <div className='flex flex-col justify-between text-left w-full'>
                                    <div>
                                        <h3 className='text-xl sm:text-2xl font-semibold text-white'>
                                            {edu.degree}
                                        </h3>
                                        <h4 className='text-md sm:text-sm text-gray-300'>
                                            {edu.school}
                                        </h4>
                                    </div>

                                    <p className='text-sm text-gray-500 mt-2'>
                                        {edu.date}
                                    </p>
                                    <p className='mt-4 text-gray-400 font-bold'>Grade: {edu.grade}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}