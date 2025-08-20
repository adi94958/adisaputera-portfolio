import { configureStore } from '@reduxjs/toolkit';
import profileReducer from './slices/profileSlice';
import contactReducer from './slices/contactSlice';
import abilitiesReducer from './slices/abilitiesSlice';
import projectsReducer from './slices/projectsSlice';
import educationReducer from './slices/educationSlice';
import certificationsReducer from './slices/certificationsSlice';
import testimonialsReducer from './slices/testimonialsSlice';
import organizationExperienceReducer from './slices/organizationExperienceSlice';
import workExperienceReducer from './slices/workExperienceSlice';
import themeReducer from './slices/themeSlice';
import uiReducer from './slices/uiSlice';

export const store = configureStore({
  reducer: {
    profile: profileReducer,
    contact: contactReducer,
    abilities: abilitiesReducer,
    projects: projectsReducer,
    education: educationReducer,
    certifications: certificationsReducer,
    testimonials: testimonialsReducer,
    organizationExperience: organizationExperienceReducer,
    workExperience: workExperienceReducer,
    theme: themeReducer,
    ui: uiReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ['persist/PERSIST'],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
