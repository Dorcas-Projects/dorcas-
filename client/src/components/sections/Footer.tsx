import { Link } from "wouter";
import { FaLinkedin, FaGithub, FaInstagram, FaEnvelope } from "react-icons/fa";
import ResumeDownload from "@/components/ResumeDownload";

export default function Footer() {
  return (
    <footer className="bg-dark text-white py-10">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-poppins font-bold">
              Dorcas<span className="text-accent">.</span>Ajayi
            </h3>
            <p className="mt-2 text-muted-foreground">Product Manager & Software Engineer</p>
          </div>
          
          <div className="flex space-x-6 mb-6 md:mb-0">
            <a 
              href="https://www.linkedin.com/in/dorcasajayi" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="h-5 w-5" />
            </a>
            <a 
              href="https://github.com/Dorcas-Projects/code" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="GitHub"
            >
              <FaGithub className="h-5 w-5" />
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram className="h-5 w-5" />
            </a>
            <a 
              href="mailto:ajayidorcas761@gmail.com" 
              className="text-white hover:text-primary transition-colors"
              aria-label="Email"
            >
              <FaEnvelope className="h-5 w-5" />
            </a>
          </div>
          
          <div>
            <ResumeDownload />
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-muted-foreground">&copy; {new Date().getFullYear()} Dorcas Ajayi. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
