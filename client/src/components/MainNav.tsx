import { Link } from "wouter";
import { useTheme } from "@/lib/ThemeProvider";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

export default function MainNav() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-poppins font-bold text-primary">
            Dorcas<span className="text-accent">.</span>
          </a>
        </Link>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-8">
          <a href="#about" className="font-medium hover:text-primary transition-colors">
            About
          </a>
          <a href="#experience" className="font-medium hover:text-primary transition-colors">
            Experience
          </a>
          <a href="#projects" className="font-medium hover:text-primary transition-colors">
            Projects
          </a>
          <a href="#skills" className="font-medium hover:text-primary transition-colors">
            Skills
          </a>
          <a href="#awards" className="font-medium hover:text-primary transition-colors">
            Awards
          </a>
          <a 
            href="#contact" 
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors"
          >
            Contact
          </a>
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
          >
            {theme === "light" ? <Moon className="h-5 w-5" /> : <Sun className="h-5 w-5" />}
          </Button>
        </div>
      </div>
    </nav>
  );
}
