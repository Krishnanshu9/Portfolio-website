import { ArrowRight, Github, GithubIcon } from "lucide-react"

const projects = [
    {
        id: 1,
        title: "Awards Website",
        description: "A Web Series Awrds Website made using vanilla HTML CSS and JavaScript.",
        image: "/projects/web-series-awards.png",
        GitHubURL: "https://github.com/Krishnanshu9/Web-series-awards.git"
    },
    {
        id: 2,
        title: "Vehicle Fitness Certificate Renewal",
        description: "A website made for users to apply for vehicle fitness certificate renewal. It was made using Java Spring Boot, HTML, CSS, JavaScript.",
        image: "/projects/vehicle-fitness.png",
        GitHubURL: "https://github.com/Krishnanshu9/Vehicle-fitness.git"
    },
    {
        id: 3,
        title: "Portfolio website",
        description: "A Portfolio website made using React + Vite, TailwindCSS telling about myself.",
        image: "/projects/portfolio.png",
        GitHubURL: "#"
    },
    {
        id: 4,
        title: "Tetris Game",
        description: "A very fun and popular classic game Tetris which I made using Python and the pygame library.",
        image: "/projects/tetris.png",
        GitHubURL: "https://github.com/Krishnanshu9/Tetris-game.git"
    },
    {
        id: 5,
        title: "Mini Project - Tic-Tac-Toe",
        description: "A fun classic game made using vanilla HTML, CSS and JavaScript. I made in Practice.",
        image: "/projects/tic-tac-toe.png",
        GitHubURL: "https://github.com/Krishnanshu9/Tic-Tac-Toe.git"
    },
    {
        id: 6,
        title: "Mini Project - Rock-Paper-Scissors",
        description: "A fun classic game made using vanilla HTML, CSS and JavaScript. I made in Practice.",
        image: "/projects/rock-paper-scissors.png",
        GitHubURL: "https://github.com/Krishnanshu9/Rock-Paper-Scissors.git"
    },

]
export const ProjectSection = () => {
    return <section id="projects" className="relative min-h-screen px-4 py-24">
        <div className="container mx-auto max-w-5xl animate-float">
            <h2 className="font-bold text-xl md:text-4xl mb-6 text-center text-glow">
                <span className="text-primary">Featured </span>
                <span className="text-foreground">Projects</span>
            </h2>
            <div className="flex justify-center">
                <p className="text-sm font-semibold text-foreground/90 mb-6 w-8/10">
                    Here are some of my projects that I have done over time. I did all these projects in
                    order to implement my learnings, practice and improve my logic building and development skills.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project, key) => (
                    <div key={key} className="relative group bg-card rounded-lg overflow-hidden shadow-xs card-hover ">
                        <div className="h-48 overflow-hidden">
                            <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <h3 className="text-xl font-bold mt-2 mb-2">
                            {project.title}
                        </h3>
                        <p className="text-sm mb-10">
                            {project.description}
                        </p>
                        <div className="absolute bottom-1 left-1/15 flex item-center -translate-x-1/2">
                            <a href={project.GitHubURL} className="text-primary">
                                <Github />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center mt-4">
                <a href="https://github.com/Krishnanshu9" className="cosmic-button flex items-center w-fit">Check my GitHub <ArrowRight /></a>
            </div>
        </div>
    </section>
}