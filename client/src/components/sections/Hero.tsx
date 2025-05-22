import { Button } from "@/components/ui/button";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import ResumeDownload from "@/components/ResumeDownload";
import TypedHeadline from "@/components/TypedHeadline";
import { useState, useEffect } from "react";

export default function Hero() {
  const greetings = [
    { text: "Hi", language: "English" },
    { text: "Bonjour", language: "French" },
    { text: "Hola", language: "Spanish" },
    { text: "こんにちは", language: "Japanese" },
    { text: "안녕하세요", language: "Korean" },
    { text: "你好", language: "Chinese" },
    { text: "नमस्ते", language: "Hindi" },
    { text: "Привет", language: "Russian" },
    { text: "Olá", language: "Portuguese" },
    { text: "Ciao", language: "Italian" }
  ];
  
  const [currentGreetingIndex, setCurrentGreetingIndex] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentGreetingIndex((prevIndex) => (prevIndex + 1) % greetings.length);
    }, 3000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <section id="about" className="pt-16 md:pt-24 pb-16 bg-gradient-to-br from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-8 md:mb-0 md:pr-12 animate-fadeInUp">
            <h1 className="text-4xl md:text-5xl font-poppins font-bold mb-4">
              <span className="inline-flex items-center">
                <span className="min-w-[120px] transition-all duration-500 ease-in-out">
                  {greetings[currentGreetingIndex].text},
                </span>
                <span className="text-xs text-muted-foreground ml-1 opacity-70">
                  {greetings[currentGreetingIndex].language}
                </span>
              </span>
              {" "}I'm <span className="text-primary">Dorcas Ajayi</span>
            </h1>
            <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium mb-6">
              <TypedHeadline 
                baseText="Product Manager & " 
                typedPhrases={[
                  "Creator",
                  "AI Enthusiast",
                  "Tech Innovator",
                  "Community Builder",
                  "Strategist"
                ]}
                cursorColor="var(--color-primary)"
                typingSpeed={120}
                pauseDuration={3000}
              />
            </h2>
            <p className="text-lg mb-8">
              Looking for product/program management internships for summer 2025. I'm passionate about AI, startups, and building solutions that make a difference.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                asChild
                className="px-6 py-3 bg-primary text-white rounded-md hover:bg-secondary transition-colors font-semibold"
              >
                <a href="#contact">Get in Touch</a>
              </Button>
              <ResumeDownload />
            </div>
            <div className="flex mt-8 space-x-4">
              <a
                href="https://www.linkedin.com/in/dorcasajayi"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="h-6 w-6" />
              </a>
              <a
                href="https://github.com/Dorcas-Projects/code"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <FaGithub className="h-6 w-6" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram className="h-6 w-6" />
              </a>
              <a
                href="mailto:ajayidorcas761@gmail.com"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Email"
              >
                <FaEnvelope className="h-6 w-6" />
              </a>
            </div>
          </div>
          <div className="md:w-1/2 animate-fadeInUp relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg opacity-75 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="flex flex-col items-center relative">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="w-full rounded-lg overflow-hidden relative">
                  <img
                    src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=700&h=400"
                    alt="AI digital brain with neural connections"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/50 via-transparent to-secondary/50"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="px-8 py-4 bg-black/40 backdrop-blur-md rounded-lg border border-primary/30">
                      <h3 className="text-xl md:text-2xl font-mono text-white">
                        <span className="text-primary font-bold">class</span> <span className="text-accent">ProductInnovator</span> <span className="text-primary">{`{`}</span>
                      </h3>
                      <p className="text-white/80 ml-6 mt-2">
                        <span className="text-secondary">create</span>() ➔ AI + Strategy + Creativity
                      </p>
                      <p className="text-white/80 ml-6 mt-2">
                        <span className="text-secondary">lead</span>() ➔ Vision + Execution + Results
                      </p>
                      <h3 className="text-xl md:text-2xl font-mono text-white text-right">
                        <span className="text-primary">{`}`}</span>
                      </h3>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center justify-center bg-card/30 backdrop-blur-sm rounded-lg p-4 border border-primary/10 overflow-hidden">
                  <div className="relative transform hover:scale-102 transition-transform duration-300 group">
                    <img 
                      src="/assets/IMG_7976.jpeg" 
                      alt="Dorcas Ajayi portrait" 
                      className="rounded-lg object-cover z-10 relative" 
                      style={{ maxHeight: "300px" }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-transparent to-secondary/30 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-2 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex justify-center">
                      <span className="text-white text-sm font-medium">Dorcas Ajayi</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute bottom-4 left-4 right-4 p-4 bg-black/50 backdrop-blur-sm rounded text-white">
              <p className="text-sm font-mono">
                <span className="text-primary">{">"}</span> Exploring AI solutions for product innovation and development
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
