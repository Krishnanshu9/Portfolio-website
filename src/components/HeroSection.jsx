import { ArrowBigDown, ArrowBigDownDash, ArrowDown, ArrowDown01, ArrowRight, LucideAArrowDown } from "lucide-react"

export const HeroSection = () => {
    return <secton id="hero" className="relative min-h-screen flex flex-col justify-center px-4 py-24">

        <div className="container max-w-4xl mx-auto text-center z-10 text-glow animate-float">
            <div>
                <h1 className="fixed inset-0 flex item-center justify-center text-4xl md:text-6xl font-bold text-primary opacity-0 animate-fade-in-out">
                    Welcome.
                </h1>
            </div>
            <div className="space-y-6">
                <h1 className="text-4xl md:text-6xl font-bold tracking-tight ">
                    <span className="opacity-0 animate-fade-in-delay-1">Hi, I'm </span>
                    <span className="text-primary opacity-0 animate-fade-in-delay-2">Krishnanshu </span>
                    <span className="text-foreground opacity-0 animate-fade-in-delay-3">Chaudhary</span>
                </h1>
                <p className="text-lg md:text-xl text-foreground mx-auto opacity-0 animate-fade-in-delay-4 tracking-tight ">
                    I’m an aspiring Web Developer/Software Developer passionate about building
                    impactful and user-friendly digital experiences. I love solving problems
                    through code and continuously exploring new technologies to sharpen my skills.</p>
            </div>
            <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex justify-center">
                <a href="#projects" className="cosmic-button flex item-center w-fit">
                    View Projects
                    <ArrowRight/>
                </a>
            </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
            <span className="text-sm m-auto">Scroll</span>
            <ArrowDown className="h-5 w-5 text-primary"/>
        </div>

    </secton>
}