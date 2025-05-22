import { useState, useEffect } from 'react';

interface TypedHeadlineProps {
  baseText?: string;
  typedPhrases: string[];
  className?: string;
  cursorColor?: string;
  typingSpeed?: number;
  pauseDuration?: number;
}

export default function TypedHeadline({
  baseText = "",
  typedPhrases,
  className = "",
  cursorColor = "var(--color-primary)",
  typingSpeed = 70,
  pauseDuration = 1500
}: TypedHeadlineProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [charIndex, setCharIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  // Blinking cursor effect
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 530);
    
    return () => clearInterval(cursorInterval);
  }, []);
  
  // Typing effect
  useEffect(() => {
    const currentPhrase = typedPhrases[phraseIndex];
    
    if (isTyping) {
      // Still typing the phrase
      if (charIndex < currentPhrase.length) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, charIndex + 1));
          setCharIndex(charIndex + 1);
        }, typingSpeed);
        
        return () => clearTimeout(timeout);
      } else {
        // Finished typing, pause before deleting
        setIsTyping(false);
        const timeout = setTimeout(() => {
          setIsTyping(false);
          setCharIndex(currentPhrase.length);
        }, pauseDuration);
        
        return () => clearTimeout(timeout);
      }
    } else {
      // Deleting the phrase
      if (charIndex > 0) {
        const timeout = setTimeout(() => {
          setDisplayedText(currentPhrase.substring(0, charIndex - 1));
          setCharIndex(charIndex - 1);
        }, typingSpeed / 2); // Delete faster than typing
        
        return () => clearTimeout(timeout);
      } else {
        // Move to next phrase after deleting
        setIsTyping(true);
        setPhraseIndex((phraseIndex + 1) % typedPhrases.length);
        
        return undefined;
      }
    }
  }, [charIndex, isTyping, phraseIndex, typedPhrases, typingSpeed, pauseDuration]);
  
  return (
    <span className={className}>
      {baseText}
      <span>{displayedText}</span>
      <span 
        className="transition-opacity duration-100"
        style={{ 
          borderRight: showCursor ? `2px solid ${cursorColor}` : 'transparent',
          marginLeft: '1px',
          paddingLeft: '2px'
        }}
      >&nbsp;</span>
    </span>
  );
}