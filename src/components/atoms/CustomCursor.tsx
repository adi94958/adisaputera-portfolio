import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

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
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseEnter = () => setIsVisible(true);
    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;

      // Check if the element or its parents have cursor pointer styles
      const isClickable = !!(
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.onclick !== null ||
        target.classList.contains("cursor-pointer") ||
        target.getAttribute("role") === "button" ||
        target.closest("button") ||
        target.closest("a") ||
        target.closest('[role="button"]') ||
        target.closest(".cursor-pointer") ||
        // Check for interactive elements
        target.closest("input") ||
        target.closest("textarea") ||
        target.closest("select")
      );

      setIsPointer(isClickable);
    };

    // Add event listeners
    document.addEventListener("mousemove", updateMousePosition);
    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", updateMousePosition);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  // Check if images are available
  useEffect(() => {
    if (normalCursor && pointerCursor) {
      Promise.all([
        new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = normalCursor;
        }),
        new Promise((resolve) => {
          const img = new Image();
          img.onload = resolve;
          img.onerror = resolve;
          img.src = pointerCursor;
        }),
      ]).then(() => {
        setImagesLoaded(true);
      });
    }
  }, [normalCursor, pointerCursor]);

  if (!isVisible) return null;

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
      className="fixed top-0 left-0 pointer-events-none z-[9999]"
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
      {imagesLoaded && normalCursor && pointerCursor ? (
        <motion.img
          src={isPointer ? pointerCursor : normalCursor}
          alt="Custom Cursor"
          className="w-8 h-8 object-contain drop-shadow-lg"
          animate={{
            rotate: isPointer ? 15 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        />
      ) : (
        <motion.div
          animate={{
            rotate: isPointer ? 15 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 400,
            damping: 25,
          }}
        >
          {isPointer ? <PointerCursorSVG /> : <NormalCursorSVG />}
        </motion.div>
      )}
    </motion.div>
  );
};
