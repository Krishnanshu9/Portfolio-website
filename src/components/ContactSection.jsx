import { Github, Linkedin, Mail, Phone } from "lucide-react"

export const ContactSection = () => {
    return <section id="contact" className="pt-24 px-4 relative">
        <div className="container mx-auto max-w-5xl animate-float">
            <h2 className="font-bold text-xl md:text-4xl mb-6 text-center text-glow">
                <span className="text-primary">Contact </span>
                <span className="text-foreground">Me</span>
            </h2>
            <div className="flex justify-center">
                <p className="text-sm font-semibold text-foreground/90 mb-6 w-8/10">
                    Open to internship or full-time opportunities in web and software development.
                    I'm passionate about creating efficient, user-focused solutions and
                    continuously improving my craft.
                    <br />
                    <br />
                    If you're looking for a dedicated developer who enjoys solving problems
                    and writing clean, efficient code — I'd love to connect!
                </p>
            </div>
            <div className="grid grid-cols-1 gap-6 py-10">
                <div className="space-y-8">
                    <h3 className="text-glow text-2xl font-semibold">Contact Information</h3>
                    <div className="w-fit mx-auto">
                        <div className="flex justify-start items-center gap-1 m-5">
                            <div className=" bg-card rounded-full p-4">
                                <Mail className="text-primary" />
                            </div>
                            <div>
                                <p className="flex justify-start text-xl pl-2">Mail</p>
                                <a href="mailto:krishnanshuchaudhary@gmail.com" className="text-md pl-2">krishnanshuchaudhary@gmail.com</a>
                            </div>
                        </div>
                        <div className="flex justify-start items-center gap-1 m-5">
                            <div className="bg-card rounded-full p-4">
                                <Phone className="text-primary" />
                            </div>
                            <div>
                                <p className=" flex justify-start text-xl pl-2">Phone</p>
                                <a href="tel:+919936937034" className="text-sm pl-2"> +91 9936937034</a>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-glow pb-5 text-2xl font-semibold">
                            Social Media
                        </h4>
                        <div className="flex justify-center gap-2 ">
                            <a href="https://www.linkedin.com/in/krishnanshu-chaudhary/" className="rounded-3xl bg-card p-4 ">
                                <Linkedin />
                            </a>
                            <a href="https://github.com/Krishnanshu9" className="rounded-3xl bg-card p-4">
                                <Github />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
}