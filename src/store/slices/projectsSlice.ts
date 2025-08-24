import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { staticData } from '../../data/staticData';
import type { Project } from '../../types';

interface ProjectsState {
  data: Project[];
  loading: boolean;
  error: string | null;
}

const initialState: ProjectsState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk for fetching projects data
export const fetchProjects = createAsyncThunk(
  'projects/fetchProjects',
  async () => {
    // Simulate API call with delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return staticData.projects;
  }
);

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {
    clearProjects: (state) => {
      state.data = [];
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProjects.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProjects.fulfilled, (state, action: PayloadAction<Project[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchProjects.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch projects data";
      });
  },
});

export const { clearProjects, clearError } = projectsSlice.actions;
export default projectsSlice.reducer;
