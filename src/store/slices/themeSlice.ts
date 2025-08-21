import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { THEME_CONFIG, STORAGE_KEYS } from '../../constants';

interface ThemeState {
  isDarkMode: boolean;
}

// Check localStorage or default to dark mode
const getInitialTheme = (): boolean => {
  if (typeof window !== 'undefined') {
    const savedTheme = localStorage.getItem(STORAGE_KEYS.THEME);
    if (savedTheme) {
      return savedTheme === 'dark';
    }
    // Default to dark mode instead of system preference
    return THEME_CONFIG.DEFAULT_DARK;
  }
  return THEME_CONFIG.DEFAULT_DARK; // Default to dark mode
};

const initialState: ThemeState = {
  isDarkMode: getInitialTheme(),
};

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggleTheme: (state) => {
      state.isDarkMode = !state.isDarkMode;
      // Update localStorage and document class
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.THEME, state.isDarkMode ? 'dark' : 'light');
        if (state.isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    },
    setTheme: (state, action: PayloadAction<boolean>) => {
      state.isDarkMode = action.payload;
      // Update localStorage and document class
      if (typeof window !== 'undefined') {
        localStorage.setItem(STORAGE_KEYS.THEME, action.payload ? 'dark' : 'light');
        if (action.payload) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    },
    initializeTheme: (state) => {
      // Initialize theme from localStorage or system preference
      if (typeof window !== 'undefined') {
        if (state.isDarkMode) {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    },
  },
});

export const { toggleTheme, setTheme, initializeTheme } = themeSlice.actions;
export default themeSlice.reducer;
