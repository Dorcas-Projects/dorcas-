import { useState, useEffect } from 'react';

interface ScrollProgressBarProps {
  height?: number;
  color?: string;
  backgroundColor?: string;
  position?: 'top' | 'bottom';
  zIndex?: number;
}

export default function ScrollProgressBar({
  height = 3,
  color = 'var(--color-primary)',
  backgroundColor = 'transparent',
  position = 'top',
  zIndex = 50
}: ScrollProgressBarProps) {
  const [progress, setProgress] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      // Calculate scroll progress
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const maxScroll = documentHeight - windowHeight;
      
      if (maxScroll > 0) {
        // Calculate percentage (0 to 1)
        const currentProgress = scrollY / maxScroll;
        setProgress(currentProgress);
      }
      
      // Show progress bar only after scrolling down a bit (100px)
      if (scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once to initialize
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <div
      className="fixed left-0 w-full transition-opacity duration-300"
      style={{
        top: position === 'top' ? 0 : 'auto',
        bottom: position === 'bottom' ? 0 : 'auto',
        height,
        backgroundColor,
        zIndex,
        opacity: isVisible ? 1 : 0
      }}
    >
      <div
        className="h-full transition-transform duration-200"
        style={{
          background: `linear-gradient(to right, ${color}, ${color}CC)`,
          width: '100%',
          transformOrigin: 'left',
          transform: `scaleX(${progress})`,
          boxShadow: `0 0 10px ${color}80`
        }}
      />
    </div>
  );
}