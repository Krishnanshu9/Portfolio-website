import { ArrowDown, Book, BookOpen, Goal, MapPin, User } from "lucide-react"

export const AboutSection = () => {
    return <section id="about" className="min-h-screen px-4 py-24 relative">

        <div className="container mx-auto max-w-5xl ">
            <h2 className="text-xl md:text-4xl font-bold mb-12 text-center animate-float">
                <span className="text-primary text-glow">About </span>
                <span className="text-foreground text-glow">Me</span>

            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center animate-float">
                <div>
                    <h3 className="text-2xl font-semibold p-3">
                        Aspiring Web & Software Developer
                    </h3>
                    <p className="text-sm p-3">
                        I have completed my Master's of Computer Application from
                        India's Top University i.e. Jawaharlal Nehru University (JNU), Delhi.
                    </p>
                    <p className="text-sm p-3">
                        I am passionate about learning new things and applying them to solve problems.
                        I like to be updated with the new technologies and try to integrate them into my currrent set of skills.
                        I am always ready to face new challenges and conquer them.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">

                        <a href="#contact" className="cosmic-button-transparent text-sm">
                            Contact Me
                        </a>
                        <a href="/resume.pdf" download="Krishnanshu_Resume" className="cosmic-button-transparent text-sm">
                            Download Resume
                        </a>
                    </div>

                </div>
                <div className="grid grid-cols-1 gap-3">
                    <div className="gradient-border p-2 card-hover rounded-3xl">
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-primary/10 p-3">
                                <User className="w-6 h-6 text-primary" />
                            </div>
                            <div className="container align-center">
                                <h4 className="text-xl font-semibold">Who I am ?</h4>
                                <p className="text-sm">
                                    Passionate Developer | Creative Thinker | Problem Solver
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-2 card-hover rounded-3xl">
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-primary/10 p-3">
                                <BookOpen className="w-6 h-6 text-primary" />
                            </div>
                            <div className="container align-center">
                                <h4 className="text-xl font-semibold">Education</h4>
                                <p className="text-sm">Masters in Computer Applications</p>
                                <p className="text-sm">Bachelors in Computer Applications</p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-2 card-hover rounded-3xl">
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-primary/10 p-3">
                                <Goal className="w-6 h-6 text-primary" />
                            </div>
                            <div className="container align-center">
                                <h4 className="text-xl font-semibold">Goals</h4>
                                <p className="text-sm">
                                    Learn & Grow | Build Projects | Contribute | Solving Problems
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="gradient-border p-2 card-hover rounded-3xl">
                        <div className="flex items-center gap-4">
                            <div className="rounded-full bg-primary/10 p-3">
                                <MapPin className="w-6 h-6 text-primary" />
                            </div>
                            <div className="container align-center">
                                <h4 className="text-xl font-semibold">Location</h4>
                                <p className="text-sm">Currently in Delhi, India. </p>
                                <p className="text-sm">Originally from Kanpur (U.P.), India.</p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm m-auto">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>
    </section>
}