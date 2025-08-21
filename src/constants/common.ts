// Date & Time Configuration
export const DATE_FORMATS = {
  FULL: 'MMMM dd, yyyy',
  SHORT: 'MMM yyyy',
  YEAR_ONLY: 'yyyy',
  ISO: 'yyyy-MM-dd',
} as const;

// File Configuration
export const FILE_CONFIG = {
  MAX_SIZE: 5 * 1024 * 1024, // 5MB
  ALLOWED_TYPES: {
    IMAGE: ['image/jpeg', 'image/png', 'image/gif', 'image/webp'],
    DOCUMENT: ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'],
  },
} as const;

// Form Validation
export const VALIDATION_RULES = {
  EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  PHONE: /^[+]?[1-9][\d]{0,15}$/,
  URL: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
  PASSWORD: {
    MIN_LENGTH: 8,
    PATTERN: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d@$!%*?&]{8,}$/,
  },
} as const;

// Local Storage Keys
export const STORAGE_KEYS = {
  THEME: 'theme-preference',
  AUTH_TOKEN: 'auth_token',
  USER_PREFERENCES: 'user_preferences',
  LAST_VISIT: 'last_visit',
} as const;

// Environment
export const ENV = {
  DEV: 'development',
  PROD: 'production',
  TEST: 'test',
} as const;
