import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import About from "../components/about";
import AboutMe from "../components/AboutMe/AboutMe";
import Skills from "../components/Skills/Skills";
import Footer from "../components/Footer";
import Education from "../components/Education/Education";
import CodingProfiles from "../components/CodingProfiles";
import Contact from "../components/Contact";
import Project from "../assets/Project/Project";

export default function Home(){
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            {/* Theme Toggle */}
                <ThemeToggle/>
            {/* Background Effects */}
                <StarBackground/>

            {/* Navbar */}
                <Navbar/>
            {/* Main Section */}
                <About/>
                <AboutMe/>
                <Skills/>
                <CodingProfiles/>
                <Project/>
                <Education/>
                <Contact/>


            {/* Footer */}
                <Footer/>
        </div>
    );
}