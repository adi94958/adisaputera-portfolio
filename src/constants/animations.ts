// Animation Configuration
export const ANIMATION_CONFIG = {
  DURATION: {
    FAST: 0.2,
    NORMAL: 0.3,
    SLOW: 0.6,
    VERY_SLOW: 1.0,
  },
  DELAY: {
    NONE: 0,
    SHORT: 0.1,
    MEDIUM: 0.2,
    LONG: 0.5,
  },
  EASING: {
    EASE_OUT: [0.4, 0, 0.2, 1],
    EASE_IN_OUT: [0.4, 0, 0.6, 1],
    BOUNCE: [0.68, -0.55, 0.265, 1.55],
  },
} as const;

// Common Animation Variants
export const FADE_VARIANTS = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
} as const;

export const SLIDE_UP_VARIANTS = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
} as const;

// Viewport Configuration for Framer Motion
export const VIEWPORT_CONFIG = {
  once: true,
  amount: 0.1,
} as const;
