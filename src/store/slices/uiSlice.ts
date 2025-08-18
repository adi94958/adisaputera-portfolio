import { createSlice } from '@reduxjs/toolkit';

type ViewMode = 'home' | 'detailed';

interface UIState {
  viewMode: ViewMode;
  showDetailedSections: boolean;
}

const initialState: UIState = {
  viewMode: 'home',
  showDetailedSections: false,
};

const uiSlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    setViewMode: (state, action) => {
      state.viewMode = action.payload;
      state.showDetailedSections = action.payload === 'detailed';
    },
    goToDetailedView: (state) => {
      state.viewMode = 'detailed';
      state.showDetailedSections = true;
    },
    goToHomeView: (state) => {
      state.viewMode = 'home';
      state.showDetailedSections = false;
    },
    toggleDetailedSections: (state) => {
      state.showDetailedSections = !state.showDetailedSections;
    },
    showDetailedSections: (state) => {
      state.showDetailedSections = true;
    },
    hideDetailedSections: (state) => {
      state.showDetailedSections = false;
    },
  },
});

export const { 
  setViewMode, 
  goToDetailedView, 
  goToHomeView, 
  toggleDetailedSections, 
  showDetailedSections, 
  hideDetailedSections 
} = uiSlice.actions;
export default uiSlice.reducer;
