import React, { useRef, useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  alpha: number;
  pulseSpeed: number;
  pulsePhase: number;
}

interface ParticleBackgroundProps {
  particleCount?: number;
  className?: string;
}

export const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  particleCount = 60,
  className = ""
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationFrameRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: 0, y: 0, isActive: false });
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isMobile, setIsMobile] = useState(false);
  
  const { isDarkMode } = useAppSelector(state => state.theme);

  // Colors for particles based on theme
  const lightModeColors = ['#0284c7', '#0369a1', '#c026d3', '#a21caf', '#64748b'];
  const darkModeColors = ['#38bdf8', '#7dd3fc', '#e879f9', '#f0abfc', '#94a3b8'];
  
  const colors = isDarkMode ? darkModeColors : lightModeColors;
  
  // Adjust particle count based on device
  const adjustedParticleCount = isMobile ? Math.floor(particleCount * 0.4) : particleCount;

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
      // Check if mobile device
      setIsMobile(window.innerWidth < 768);
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || dimensions.width === 0) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = dimensions.width;
    canvas.height = dimensions.height;

    // Initialize particles
    const initializeParticles = () => {
      particlesRef.current = [];
      for (let i = 0; i < adjustedParticleCount; i++) {
        particlesRef.current.push({
          x: Math.random() * dimensions.width,
          y: Math.random() * dimensions.height,
          vx: (Math.random() - 0.5) * 1.5, // Increase initial velocity
          vy: (Math.random() - 0.5) * 1.5,
          radius: Math.random() * 2 + 1,
          color: colors[Math.floor(Math.random() * colors.length)],
          alpha: Math.random() * 0.6 + 0.3, // Make particles more visible
          pulseSpeed: Math.random() * 0.02 + 0.01,
          pulsePhase: Math.random() * Math.PI * 2
        });
      }
    };

    initializeParticles();

    // Mouse move handler - track from window to avoid pointer-events issues
    const handleMouseMove = (event: MouseEvent) => {
      mouseRef.current = {
        x: event.clientX,
        y: event.clientY,
        isActive: true
      };
    };

    const handleMouseLeave = () => {
      mouseRef.current.isActive = false;
    };

    // Use window for mouse tracking to avoid pointer-events issues
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const animate = () => {
      if (!ctx) return;
      
      ctx.clearRect(0, 0, dimensions.width, dimensions.height);

      particlesRef.current.forEach((particle, index) => {
        // Update particle position
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Bounce off walls with some damping
        if (particle.x <= particle.radius || particle.x >= dimensions.width - particle.radius) {
          particle.vx *= -0.8;
          particle.x = Math.max(particle.radius, Math.min(dimensions.width - particle.radius, particle.x));
        }
        if (particle.y <= particle.radius || particle.y >= dimensions.height - particle.radius) {
          particle.vy *= -0.8;
          particle.y = Math.max(particle.radius, Math.min(dimensions.height - particle.radius, particle.y));
        }

        // Mouse interaction - only when mouse is active
        if (mouseRef.current.isActive) {
          const dx = mouseRef.current.x - particle.x;
          const dy = mouseRef.current.y - particle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 200; // Increase interaction range

          if (distance < maxDistance && distance > 0) {
            const force = (maxDistance - distance) / maxDistance;
            const angle = Math.atan2(dy, dx);
            
            // Repel particles from mouse with stronger force
            particle.vx -= Math.cos(angle) * force * 1.2;
            particle.vy -= Math.sin(angle) * force * 1.2;
          }
        }

        // Add some random movement to keep particles moving
        particle.vx += (Math.random() - 0.5) * 0.02;
        particle.vy += (Math.random() - 0.5) * 0.02;

        // Limit velocity to prevent particles from moving too fast
        const maxVelocity = 3; // Increase max velocity
        particle.vx = Math.max(-maxVelocity, Math.min(maxVelocity, particle.vx));
        particle.vy = Math.max(-maxVelocity, Math.min(maxVelocity, particle.vy));

        // Apply gentle friction
        particle.vx *= 0.992; // Reduce friction slightly
        particle.vy *= 0.992;

        // Pulsing effect
        particle.pulsePhase += particle.pulseSpeed;
        const pulseAlpha = particle.alpha + Math.sin(particle.pulsePhase) * 0.15;

        // Draw particle
        ctx.save();
        ctx.globalAlpha = Math.max(0, Math.min(1, pulseAlpha));
        ctx.fillStyle = particle.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = particle.color;
        
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Draw connections
        particlesRef.current.slice(index + 1).forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxConnectionDistance = 120;

          if (distance < maxConnectionDistance) {
            const opacity = (1 - distance / maxConnectionDistance) * 0.3;
            
            ctx.save();
            ctx.globalAlpha = opacity;
            ctx.strokeStyle = isDarkMode ? '#64748b' : '#94a3b8';
            ctx.lineWidth = 0.5;
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
            ctx.restore();
          }
        });
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
        animationFrameRef.current = null;
      }
    };
  }, [dimensions, adjustedParticleCount, colors, isDarkMode]);

  // Re-initialize particles when theme changes
  useEffect(() => {
    particlesRef.current.forEach(particle => {
      particle.color = colors[Math.floor(Math.random() * colors.length)];
    });
  }, [isDarkMode, colors]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 pointer-events-none z-[1] ${className}`}
      style={{
        background: isDarkMode 
          ? 'radial-gradient(ellipse at center, rgba(30, 41, 59, 0.3) 0%, rgba(15, 23, 42, 0.8) 100%)'
          : 'radial-gradient(ellipse at center, rgba(248, 250, 252, 0.3) 0%, rgba(255, 255, 255, 0.8) 100%)'
      }}
    />
  );
};
