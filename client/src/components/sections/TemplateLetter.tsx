import { useState } from 'react';
import { motion } from 'framer-motion';

interface TemplateLetterProps {
  letter: string;
  size?: 'sm' | 'md' | 'lg';
  colors?: {
    primary: string;
    secondary: string;
    accent: string;
  };
}

export default function TemplateLetter({ 
  letter, 
  size = 'md', 
  colors = {
    primary: '#00ffff',
    secondary: '#bf55ff',
    accent: '#ff40bf'
  }
}: TemplateLetterProps) {
  const [isHovered, setIsHovered] = useState(false);

  // Size mapping
  const sizeClass = {
    sm: 'w-32 h-32',
    md: 'w-48 h-48',
    lg: 'w-64 h-64'
  };

  const fontSizeClass = {
    sm: 'text-5xl',
    md: 'text-7xl',
    lg: 'text-9xl'
  };

  return (
    <div 
      className={`relative ${sizeClass[size]} mx-auto`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Outer spinning ring */}
      <motion.div 
        className="absolute inset-0 rounded-full opacity-70"
        style={{
          background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary}, ${colors.accent}, ${colors.primary})`,
          backgroundSize: '300% 300%'
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
          rotate: 360
        }}
        transition={{
          backgroundPosition: {
            duration: 5,
            repeat: Infinity,
            ease: 'linear'
          },
          rotate: {
            duration: 8,
            repeat: Infinity,
            ease: 'linear'
          }
        }}
      />

      {/* Inner circle */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-card rounded-full flex items-center justify-center z-10"
        style={{
          width: 'calc(100% - 16px)',
          height: 'calc(100% - 16px)'
        }}
      >
        {/* Letter */}
        <div 
          className={`font-mono ${fontSizeClass[size]} font-bold z-20 transition-all duration-300`}
          style={{
            background: `linear-gradient(45deg, ${colors.primary}, ${colors.secondary})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: isHovered ? 'drop-shadow(0 0 5px rgba(0, 255, 255, 0.5))' : 'none'
          }}
        >
          {letter}
        </div>

        {/* Concentric circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div 
            className={`absolute border-2 border-primary/30 rounded-full`}
            style={{ width: '75%', height: '75%' }}
            animate={{ scale: isHovered ? [1, 1.1, 1] : 1 }}
            transition={{ duration: 2, repeat: isHovered ? Infinity : 0, ease: 'easeInOut' }}
          />
          <motion.div 
            className="absolute border border-secondary/20 rounded-full"
            style={{ width: '85%', height: '85%' }}
            animate={{ 
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.8, 0.5]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity, 
              ease: 'easeInOut',
              delay: 0.5
            }}
          />
          <motion.div 
            className="absolute border border-accent/20 rounded-full"
            style={{ width: '65%', height: '65%' }}
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              duration: 3.5, 
              repeat: Infinity, 
              ease: 'easeInOut',
              delay: 1
            }}
          />
        </div>
      </div>

      {/* Tech circuit decorations */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" viewBox="0 0 100 100">
        <circle cx="50" cy="3" r="1.5" fill={colors.primary} />
        <circle cx="50" cy="97" r="1.5" fill={colors.secondary} />
        <circle cx="3" cy="50" r="1.5" fill={colors.accent} />
        <circle cx="97" cy="50" r="1.5" fill={colors.primary} />
        
        {/* Tech lines */}
        <path 
          d="M50,3 L50,15" 
          stroke={colors.primary} 
          strokeWidth="0.5" 
          fill="none"
        />
        <path 
          d="M50,97 L50,85" 
          stroke={colors.secondary} 
          strokeWidth="0.5" 
          fill="none"
        />
        <path 
          d="M3,50 L15,50" 
          stroke={colors.accent} 
          strokeWidth="0.5" 
          fill="none"
        />
        <path 
          d="M97,50 L85,50" 
          stroke={colors.primary} 
          strokeWidth="0.5" 
          fill="none"
        />
      </svg>
    </div>
  );
}