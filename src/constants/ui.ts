// Theme Configuration
export const THEME_CONFIG = {
  STORAGE_KEY: "theme-preference",
  DEFAULT_DARK: false,
} as const;

// Navigation
export const NAVIGATION = {
  HOME_ITEMS: [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
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
    { href: "#hero", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#education", label: "Education" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ],
};

// Text Limits
export const TEXT_LIMITS = {
  TRUNCATE_LENGTH: 150,
} as const;

// Loading States
export const LOADING_MESSAGES = {
  DEFAULT: "Loading...",
  EXPERIENCE: "Loading experience...",
  EDUCATION: "Loading education...",
  TESTIMONIALS: "Loading testimonials...",
  CERTIFICATIONS: "Loading certifications...",
} as const;

// Error Messages
export const ERROR_MESSAGES = {
  TITLE: "Oops! Something went wrong",
  GENERIC: "Something went wrong. Please try again.",
  PORTFOLIO_LOAD_FAILED: "Failed to load portfolio data",
} as const;
