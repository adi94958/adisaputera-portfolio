import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { staticData } from '../../data/staticData';
import type { WorkExperience } from "../../types";

interface WorkExperienceState {
  data: WorkExperience[];
  loading: boolean;
  error: string | null;
}

const initialState: WorkExperienceState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk for fetching work experience
export const fetchWorkExperience = createAsyncThunk(
  'workExperience/fetchWorkExperience',
  async () => {
    // Simulate API call with delay
    await new Promise((resolve) => setTimeout(resolve, 700));
    return staticData.work_experience;
  }
);

const workExperienceSlice = createSlice({
  name: 'workExperience',
  initialState,
  reducers: {
    clearWorkExperience: (state) => {
      state.data = [];
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchWorkExperience.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchWorkExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchWorkExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch work experience data";
      });
  },
});

export const { clearWorkExperience, clearError } = workExperienceSlice.actions;
export default workExperienceSlice.reducer;