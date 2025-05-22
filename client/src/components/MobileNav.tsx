import { useState } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/lib/ThemeProvider";

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  
  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => setIsOpen(false);
  
  return (
    <div className="md:hidden">
      <Button 
        variant="ghost" 
        size="icon" 
        onClick={toggleMenu} 
        aria-label="Toggle mobile menu"
        className="text-foreground"
      >
        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
      </Button>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-background pt-16">
          <div className="container px-6 py-4">
            <div className="flex flex-col space-y-4">
              <a 
                href="#about" 
                className="font-medium hover:text-primary transition-colors py-2 border-b border-border"
                onClick={closeMenu}
              >
                About
              </a>
              <a 
                href="#experience" 
                className="font-medium hover:text-primary transition-colors py-2 border-b border-border"
                onClick={closeMenu}
              >
                Experience
              </a>
              <a 
                href="#projects" 
                className="font-medium hover:text-primary transition-colors py-2 border-b border-border"
                onClick={closeMenu}
              >
                Projects
              </a>
              <a 
                href="#skills" 
                className="font-medium hover:text-primary transition-colors py-2 border-b border-border"
                onClick={closeMenu}
              >
                Skills
              </a>
              <a 
                href="#awards" 
                className="font-medium hover:text-primary transition-colors py-2 border-b border-border"
                onClick={closeMenu}
              >
                Awards
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 bg-primary text-white rounded-md hover:bg-secondary transition-colors inline-block"
                onClick={closeMenu}
              >
                Contact
              </a>
              
              <div className="flex items-center justify-between pt-4">
                <span className="text-sm text-muted-foreground">
                  Switch to {theme === "light" ? "dark" : "light"} mode
                </span>
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
          </div>
        </div>
      )}
    </div>
  );
}
