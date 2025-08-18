import { useInView } from 'framer-motion';
import { useRef } from 'react';

export const useScrollAnimation = (amount = 0.1, once = true) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    amount,
    once,
    margin: "0px 0px -100px 0px" // Trigger slightly before element is fully visible
  });

  return { ref, isInView };
};

// Animation variants for scroll-triggered animations
export const scrollAnimationVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6
    }
  }
};

export const staggerContainerVariants = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

export const slideInFromLeft = {
  hidden: {
    opacity: 0,
    x: -50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const slideInFromRight = {
  hidden: {
    opacity: 0,
    x: 50
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6
    }
  }
};

export const fadeInUp = {
  hidden: {
    opacity: 0,
    y: 30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
