// UI Configuration
export const UI_CONFIG = {
  BREAKPOINTS: {
    SM: 640,
    MD: 768,
    LG: 1024,
    XL: 1280,
    '2XL': 1536,
  },
  SECTION_PADDING: 'py-16 md:py-24',
  CONTAINER_PADDING: 'px-4 sm:px-6 lg:px-8',
  MAX_WIDTH: 'max-w-7xl',
} as const;

// Theme Configuration
export const THEME_CONFIG = {
  STORAGE_KEY: 'theme-preference',
  DEFAULT_DARK: false,
  TRANSITION_DURATION: '200ms',
} as const;

// Navigation
export const NAVIGATION = {
  HOME_ITEMS: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  DETAILED_ITEMS: [
    { label: "Skills & Expertise", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Work Experience", href: "#experience" },
    { label: "Organization Experience", href: "#organization" },
    { label: "Certifications", href: "#certifications" },
  ],
  ALL_ITEMS: [
    { href: '#hero', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#skills', label: 'Skills' },
    { href: '#experience', label: 'Experience' },
    { href: '#education', label: 'Education' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ],
};

// Text Limits
export const TEXT_LIMITS = {
  TRUNCATE_LENGTH: 150,
  EXCERPT_LENGTH: 200,
  TITLE_LENGTH: 60,
  DESCRIPTION_LENGTH: 300,
} as const;

// Loading States
export const LOADING_MESSAGES = {
  DEFAULT: 'Loading...',
  PROFILE: 'Loading profile...',
  PROJECTS: 'Loading projects...',
  EXPERIENCE: 'Loading experience...',
  EDUCATION: 'Loading education...',
  CONTACT: 'Loading contact information...',
  ABILITIES: 'Loading skills and abilities...',
  TESTIMONIALS: 'Loading testimonials...',
  CERTIFICATIONS: 'Loading certifications...',
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  TITLE: "Oops! Something went wrong",
  GENERIC: 'Something went wrong. Please try again.',
  NETWORK: 'Network error. Please check your connection.',
  NOT_FOUND: 'The requested resource was not found.',
  UNAUTHORIZED: 'You are not authorized to access this resource.',
  SERVER_ERROR: 'Server error. Please try again later.',
  VALIDATION: 'Please check your input and try again.',
  PORTFOLIO_LOAD_FAILED: 'Failed to load portfolio data',
} as const;
