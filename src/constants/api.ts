// API Configuration Constants
export const API_CONFIG = {
  BASE_URL: 'http://localhost:3000',
  TIMEOUT: 10000,
  HEADERS: {
    'Content-Type': 'application/json',
  },
} as const;

// API Endpoints
export const API_ENDPOINTS = {
  USER: '/user',
  PROFILE: '/profile',
  CONTACT: '/contact',
  ABILITIES: '/abilities',
  WORK_EXPERIENCE: '/work_experience',
  ORGANIZATION_EXPERIENCE: '/organization_experience',
  EDUCATION: '/education',
  PROJECTS: '/projects',
  CERTIFICATIONS: '/certifications',
  TESTIMONIALS: '/testimonials',
} as const;

// Authentication
export const AUTH_CONFIG = {
  TOKEN_KEY: 'auth_token',
  LOGIN_REDIRECT: '/login',
} as const;

// HTTP Status Codes
export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  INTERNAL_SERVER_ERROR: 500,
} as const;
