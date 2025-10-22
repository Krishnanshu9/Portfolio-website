import { useState } from "react";

const skills = [
    //languages
    { name: "C", level: 75, category: "languages" },
    { name: "C++", level: 85, category: "languages" },
    { name: "Python", level: 70, category: "languages" },
    { name: "Java", level: 75, category: "languages" },

    //frontend
    { name: "HTML/CSS", level: 85, category: "frontend" },
    { name: "JavaScript", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 70, category: "frontend" },
    { name: "React", level: 70, category: "frontend" },

    //backend
    { name: "NodeJS", level: 70, category: "backend" },
    { name: "Express", level: 60, category: "backend" },
    { name: "MySQL", level: 70, category: "backend" },
    { name: "MongoDB", level: 60, category: "backend" },

    //tool
    { name: "Git/GitHub", level: 70, category: "tools" },
    { name: "VS Code", level: 90, category: "tools" },
    
    //AI/Efficency
    {name: "ChatGPT", level:95, category:"AI Assistance"},
    {name: "Gemini", level:90, category:"AI Assistance"},
    {name: "DeepSeek", level:85, category:"AI Assistance"},

    //
];
const categories = ["all", "languages", "frontend", "backend","tools","AI Assistance"];

export const SkillsSections = () => {

    const [activeCategory, setActiveCategory] = useState("all");
    const filteredSkills = skills.filter((skill) =>
        activeCategory === "all" || skill.category === activeCategory );

    return <section id="skills" className="relative min-h-screen px-4 py-24">

        <div className="container mx-auto max-w-5xl animate-float">
            <h2 className="font-bold text-xl md:text-4xl mb-6 text-center text-glow">
                <span className="text-primary ">Professional </span>
                <span className="text-foreground ">Skills</span>
            </h2>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
                {categories.map((category, key) => (
                    <button
                        key={key} onClick={() => setActiveCategory(category)}
                        className={` capitalize 
                        ${activeCategory === category ? " cosmic-button " : "cosmic-button-transparent"}`}
                    >
                        {category}
                    </button>
                ))}
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredSkills.map((skill, key) => (
                    <div key={key} className="relative bg-card p-6 pt-10 rounded-2xl shadow-xs card-hover " >
                        <h3 className="absolute top-2">{skill.name}</h3>
                        <div className="rounded-full bg-primary h-2 " style={{width:skill.level+"%"}}/>
                        <div className="absolute " style={{left:skill.level+"%", transform:"translateX(-100%)"}}>{skill.level}% </div>
                    </div>
                    
                ))}
            </div>
        </div>

    </section>
}