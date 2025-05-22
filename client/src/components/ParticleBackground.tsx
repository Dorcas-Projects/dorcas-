import { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  size: number;
  speedX: number;
  speedY: number;
  color: string;
  opacity: number;
  glowing: boolean;
}

export default function ParticleBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isInteracting, setIsInteracting] = useState(false);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Set canvas size to match window
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    window.addEventListener('resize', handleResize);
    handleResize();
    
    // Mouse interaction handlers
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    const handleMouseDown = () => {
      setIsInteracting(true);
    };
    
    const handleMouseUp = () => {
      setIsInteracting(false);
    };
    
    // Add mouse event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);
    
    // Create particles
    const particleCount = 80;
    const particles: Particle[] = [];
    
    // Tech-themed colors with more vibrant options
    const colors = [
      'rgba(0, 255, 255, 0.8)', // Cyan
      'rgba(191, 85, 255, 0.8)', // Purple
      'rgba(255, 64, 191, 0.8)', // Pink
      'rgba(64, 196, 255, 0.8)', // Light blue
      'rgba(0, 255, 213, 0.8)',  // Teal
      'rgba(255, 215, 0, 0.8)',  // Gold
      'rgba(0, 255, 0, 0.8)',    // Green
    ];
    
    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 5 + 1,
        speedX: (Math.random() - 0.5) * 2,
        speedY: (Math.random() - 0.5) * 2,
        color: colors[Math.floor(Math.random() * colors.length)],
        opacity: Math.random() * 0.5 + 0.3,
        glowing: Math.random() > 0.7
      });
    }
    
    // Create connection lines between particles
    const connectParticles = (particles: Particle[], mousePos: {x: number, y: number}, isInteracting: boolean) => {
      // Connect to mouse position when interacting
      if (isInteracting) {
        particles.forEach(particle => {
          const dx = particle.x - mousePos.x;
          const dy = particle.y - mousePos.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 250) {
            const opacity = 1 - (distance / 250);
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.6})`;
            ctx.lineWidth = 2;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(mousePos.x, mousePos.y);
            ctx.stroke();
            
            // Add pulse effect to connected particles
            particle.glowing = true;
          }
        });
      }
      
      // Connect particles to each other
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          
          if (distance < 200) {
            const opacity = 1 - (distance / 200);
            ctx.beginPath();
            
            // Different connection styles based on particle types
            if (particles[a].glowing && particles[b].glowing) {
              // Create gradient line for glowing particles
              const gradient = ctx.createLinearGradient(
                particles[a].x, particles[a].y, 
                particles[b].x, particles[b].y
              );
              gradient.addColorStop(0, particles[a].color);
              gradient.addColorStop(1, particles[b].color);
              ctx.strokeStyle = gradient;
              ctx.lineWidth = 1.5;
            } else {
              ctx.strokeStyle = `rgba(255, 255, 255, ${opacity * 0.2})`;
              ctx.lineWidth = 1;
            }
            
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };
    
    // Mouse proximity effect
    const applyMouseProximityEffect = (particles: Particle[], mousePos: {x: number, y: number}) => {
      particles.forEach(particle => {
        const dx = particle.x - mousePos.x;
        const dy = particle.y - mousePos.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        // Repel particles when mouse is nearby
        if (distance < 150) {
          const force = (150 - distance) / 500;
          particle.speedX += dx * force;
          particle.speedY += dy * force;
          
          // Speed limit
          const maxSpeed = 3;
          const currentSpeed = Math.sqrt(particle.speedX * particle.speedX + particle.speedY * particle.speedY);
          if (currentSpeed > maxSpeed) {
            particle.speedX = (particle.speedX / currentSpeed) * maxSpeed;
            particle.speedY = (particle.speedY / currentSpeed) * maxSpeed;
          }
        }
      });
    };
    
    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Apply mouse effects
      applyMouseProximityEffect(particles, mousePosition);
      
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // Gradual slowdown
        particle.speedX *= 0.99;
        particle.speedY *= 0.99;
        
        // Bounce off edges
        if (particle.x < 0 || particle.x > canvas.width) {
          particle.speedX *= -1;
        }
        
        if (particle.y < 0 || particle.y > canvas.height) {
          particle.speedY *= -1;
        }
        
        // Gradually reset glowing state
        if (particle.glowing && Math.random() > 0.97) {
          particle.glowing = false;
        }
        
        // Draw particle with glow effect
        if (particle.glowing) {
          // Add glow
          ctx.shadowBlur = 15;
          ctx.shadowColor = particle.color;
        } else {
          ctx.shadowBlur = 0;
        }
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = particle.glowing 
          ? particle.color.replace(/[\d.]+\)$/, `${particle.opacity + 0.2})`) 
          : particle.color.replace(/[\d.]+\)$/, `${particle.opacity})`) ;
        ctx.fill();
        
        // Reset shadow
        ctx.shadowBlur = 0;
      });
      
      connectParticles(particles, mousePosition, isInteracting);
    };
    
    animate();
    
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mousePosition, isInteracting]);
  
  return (
    <canvas 
      ref={canvasRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 bg-transparent"
    />
  );
}