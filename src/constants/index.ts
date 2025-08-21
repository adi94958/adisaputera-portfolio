// Export all constants from a centralized location
export * from './api';
export * from './animations';
export * from './ui';
export * from './common';
export * from './content';

// Re-export commonly used constants for convenience
export { API_CONFIG, API_ENDPOINTS } from './api';
export { ANIMATION_CONFIG, FADE_VARIANTS, SLIDE_UP_VARIANTS } from './animations';
export { THEME_CONFIG, NAVIGATION, ERROR_MESSAGES, LOADING_MESSAGES, TEXT_LIMITS } from './ui';
export { STORAGE_KEYS } from './common';
export { SECTION_TITLES, SECTION_DESCRIPTIONS, BUTTON_LABELS, CONTACT_LABELS, FORM_PLACEHOLDERS, ALT_TEXTS, ARIA_LABELS } from './content';
