import { AboutSection } from "../components/AboutSection";
import { ContactSection } from "../components/ContactSection";
import { HeroSection } from "../components/HeroSection";
import { Navbar } from "../components/Navbar";
import { ProjectSection } from "../components/ProjectSection";
import { SkillsSections } from "../components/SkillsSection";
import { StarBackground } from "../components/StarBackground";

export const Home = ()=>{
    return (
    <div className="min-h-screen bg-backgroundtxt text-foreground overflow-x-hidden">
        <StarBackground/>
        <Navbar/>
        <main>
            <HeroSection/>
            <AboutSection/>
            <SkillsSections/>
            <ProjectSection/>
            <ContactSection/>
        </main>
    </div>
    )
};