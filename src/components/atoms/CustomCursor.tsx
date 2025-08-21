import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";
import { ALT_TEXTS } from "../../constants";

interface CustomCursorProps {
  normalCursor?: string;
  pointerCursor?: string;
}

export const CustomCursor: React.FC<CustomCursorProps> = ({
  normalCursor,
  pointerCursor,
}) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const frameRef = useRef<number>(0);

  // Disable custom cursor on mobile untuk performa yang lebih baik
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768 || 'ontouchstart' in window);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Throttle mouse movement untuk performa yang lebih baik
  const throttledUpdatePosition = useCallback((e: MouseEvent) => {
    if (frameRef.current) {
      cancelAnimationFrame(frameRef.current);
    }
    
    frameRef.current = requestAnimationFrame(() => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    });
  }, []);

  // Optimasi detection untuk clickable elements  
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    
    // Simplified check untuk performa yang lebih baik
    const isClickable = !!(
      target.closest("button") ||
      target.closest("a") ||
      target.closest('[role="button"]') ||
      target.closest(".cursor-pointer") ||
      target.onclick !== null
    );

    setIsPointer(isClickable);
  }, []);

  useEffect(() => {
    // Skip setup jika mobile
    if (isMobile) return;

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    // Add event listeners dengan throttled function
    document.addEventListener("mousemove", throttledUpdatePosition, { passive: true });
    document.addEventListener("mouseover", handleMouseOver, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
      document.removeEventListener("mousemove", throttledUpdatePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [throttledUpdatePosition, handleMouseOver, isMobile]);

  // Skip rendering jika mobile atau tidak visible
  if (isMobile || !isVisible) return null;

  // SVG Fallback Cursors
  const NormalCursorSVG = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      className="drop-shadow-lg"
    >
      <path
        d="M5.65376 12.3673H5.46026L5.31717 12.4976L0.500002 16.8829L0.500002 1.19841L11.7841 12.3673H5.65376Z"
        fill="white"
        stroke="#374151"
        strokeWidth="1"
      />
    </svg>
  );

  const PointerCursorSVG = () => (
    <svg
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="none"
      className="drop-shadow-lg"
    >
      <path
        d="M8.21429 2.5L8.21429 9.07143H14.7857L8.21429 2.5Z"
        fill="white"
        stroke="#3B82F6"
        strokeWidth="1.5"
      />
      <circle cx="16" cy="16" r="6" fill="#3B82F6" className="animate-pulse" />
      <circle cx="16" cy="16" r="3" fill="white" />
    </svg>
  );

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[99999]"
      style={{
        x: mousePosition.x - 16, // Center the larger 32px cursor
        y: mousePosition.y - 16,
      }}
      animate={{
        scale: isPointer ? 1.2 : 1,
      }}
      transition={{
        type: "spring",
        stiffness: 500,
        damping: 28,
      }}
    >
      {normalCursor && pointerCursor ? (
        <motion.img
          src={isPointer ? pointerCursor : normalCursor}
          alt={ALT_TEXTS.CUSTOM_CURSOR}
          className="w-8 h-8 object-contain drop-shadow-lg"
          animate={{
            rotate: isPointer ? 15 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        />
      ) : (
        // Simplified SVG fallback
        <motion.div
          animate={{
            scale: isPointer ? 1.2 : 1,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 20,
          }}
        >
          {isPointer ? <PointerCursorSVG /> : <NormalCursorSVG />}
        </motion.div>
      )}
    </motion.div>
  );
};
