import MainNav from "@/components/MainNav";
import MobileNav from "@/components/MobileNav";
import Hero from "@/components/sections/Hero";
import Education from "@/components/sections/Education";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Awards from "@/components/sections/Awards";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import { Helmet } from "react-helmet";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dorcas Ajayi | Product Manager & Software Engineer</title>
        <meta name="description" content="Dorcas Ajayi's professional portfolio showcasing product management and software engineering experience, projects, and skills." />
      </Helmet>
      
      <div className="flex flex-col min-h-screen">
        <header className="sticky top-0 z-50 bg-background shadow-md">
          <div className="container mx-auto px-6 py-3 flex justify-between items-center">
            <a href="#" className="text-2xl font-poppins font-bold text-primary">
              Dorcas<span className="text-accent">.</span>
            </a>
            
            <div className="flex items-center">
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center space-x-8">
                <a href="#about" className="font-medium hover:text-primary transition-colors">About</a>
                <a href="#experience" className="font-medium hover:text-primary transition-colors">Experience</a>
                <a href="#projects" className="font-medium hover:text-primary transition-colors">Projects</a>
                <a href="#skills" className="font-medium hover:text-primary transition-colors">Skills</a>
                <a href="#awards" className="font-medium hover:text-primary transition-colors">Awards</a>
                <a href="#contact" className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors">Contact</a>
              </div>
              
              {/* Mobile Navigation */}
              <MobileNav />
            </div>
          </div>
        </header>
        
        <main>
          <Hero />
          <Education />
          <Experience />
          <Projects />
          <Skills />
          <Awards />
          <Contact />
        </main>
        
        <Footer />
      </div>
    </>
  );
}
