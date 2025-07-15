import { FaExternalLinkAlt } from "react-icons/fa";

export default function CodingProfiles(){
    const codingProfiles = [
  {
    title: "LeetCode",
    image: "https://leetcard.jacoblin.cool/Ashutosh_8709?ext=contest",
    stats: [
      { label: "Problems Solved:", value: "650+" },
      { label: "Max Rating:", value: "1759" },
      { label: "Total Contests:", value: "25" },
    ],
    link: "https://leetcode.com/Ashutosh_8709/",
  },
//   {
//     title: "CodeForces",
//     image: "https://codeforces-readme-stats.vercel.app/api/card?username=Ashutosh8709&theme=tokyonight",
//     stats: [
//       { label: "Rank", value: "Pupil" },
//       { label: "Max Rating", value: "1247" },
//       { label: "Total Contests", value: "6" },
//     ],
//     link: "https://codeforces.com/profile/Ashutosh_CF_Handle",
//   },
//   {
//     title: "GeeksForGeeks",
//     image: "https://gfgstatscard.vercel.app/ashutosh2l2vo",
//     stats: [
//       { label: "Problems Solved", value: "250+" },
//       { label: "Coding Score", value: "867" },
//       { label: "Rank", value: "1000" },
//     ],
//     link: "https://auth.geeksforgeeks.org/user/AshutoshGFG",
//   },
];
    return(
        <section id="coding profiles" className="scroll-mt-[-61px] flex flex-col justify-center px-[7vw]">
            <hr className="border-t border-white w-full my-15 mb-25" />
            <div className="text-center mb-16">
                <h2 className='text-4xl md:text-5xl lg:text-6xl font-bold text-center bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text mb-4'>Coding Profiles</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {codingProfiles.map((profile, index) => (
            <div key={index} className="bg-gray-800/20 backdrop-blur-md border border-white shadow-[0_0_20px_rgba(168,85,247,0.5)] rounded-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <img src={profile.image} alt={profile.title} className="rounded-lg mb-4 w-full object-contain"/>
            <h3 className="text-2xl font-bold text-center text-gray-400 mb-2 underline underline-offset-4">
              {profile.title}
            </h3>

            <div className="w-full bg-gray-700/30 rounded-xl p-4 mt-2 mb-4">
              {profile.stats.map((stat, idx) => (
                <div
                  key={idx}
                  className="flex justify-between text-sm sm:text-base text-white py-1"
                >
                  <span>{stat.label}</span>
                  <span className="font-semibold">{stat.value}</span>
                </div>
              ))}
            </div>

            <a
              href={profile.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 mt-auto text-sm bg-gradient-to-r from-purple-500/80 to-pink-500/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-105 cursor-pointer border border-white/20 hover:from-purple-500 hover:to-pink-500 text-white font-medium px-4 py-2 rounded-full"
            >
              <span>View Profile</span>
              <FaExternalLinkAlt className="text-xs" />
            </a> 
          </div>
        ))}
        <div className="bg-gray-800/20 backdrop-blur-md border border-white shadow-[0_0_20px_rgba(168,85,247,0.5)] rounded-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <img src="https://codeforces-readme-stats.vercel.app/api/card?username=Ashutosh8709&theme=tokyonight" alt="gfg stats" className="rounded-lg mb-4 w-full object-contain"/>
            <h3 className="text-2xl font-bold text-center text-gray-400 mb-2 underline underline-offset-4 mt-4">
              CodeForces
            </h3>

            <div className="w-full bg-gray-700/30 rounded-xl p-4 mt-2 mb-4">
                <div className="flex justify-between text-sm sm:text-base text-white py-1">
                  <span>Rank:</span>
                  <span className="font-semibold">100+</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base text-white py-1">
                  <span>Max Rating:</span>
                  <span className="font-semibold">100+</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base text-white py-1">
                  <span>Total Contests:</span>
                  <span className="font-semibold">100+</span>
                </div>
            </div>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 mt-auto text-sm bg-gradient-to-r from-purple-500/80 to-pink-500/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-105 cursor-pointer border border-white/20 hover:from-purple-500 hover:to-pink-500 text-white font-medium px-4 py-2 rounded-full"
            >
              <span>View Profile</span>
              <FaExternalLinkAlt className="text-xs" />
            </a> 
          </div>

            <div className="bg-gray-800/20 backdrop-blur-md border border-white shadow-[0_0_20px_1px_rgba(168,85,247,0.5)] rounded-2xl p-6 flex flex-col items-center transition-transform duration-300 hover:scale-105">
            <img src="https://gfgstatscard.vercel.app/ashutosh2l2vo" alt="gfg stats" className="rounded-lg mb-4 w-full object-contain"/>
            <h3 className="text-2xl font-bold text-center text-gray-400 mb-2 underline underline-offset-4 mt-14">
              GeeksForGeeks
            </h3>

            <div className="w-full bg-gray-700/30 rounded-xl p-4 mt-2 mb-4">
                <div className="flex justify-between text-sm sm:text-base text-white py-1">
                  <span>Problems Solved:</span>
                  <span className="font-semibold">100+</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base text-white py-1">
                  <span>Coding Score:</span>
                  <span className="font-semibold">100+</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base text-white py-1">
                  <span>Rank:</span>
                  <span className="font-semibold">100+</span>
                </div>
            </div>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 mt-auto text-sm bg-gradient-to-r from-purple-500/80 to-pink-500/80 transition-all duration-300 hover:shadow-[0_0_15px_rgba(168,85,247,0.5)] hover:scale-105 cursor-pointer border border-white/20 hover:from-purple-500 hover:to-pink-500 text-white font-medium px-4 py-2 rounded-full"
            >
              <span>View Profile</span>
              <FaExternalLinkAlt className="text-xs" />
            </a> 
          </div>
      </div>
        </section>
    );
}