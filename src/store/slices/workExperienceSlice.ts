import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { portfolioApi } from '../../services/portfolioApi';
import type { WorkExperience } from '../../types';

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
  async (_, { rejectWithValue }) => {
    try {
      const data = await portfolioApi.getWorkExperience();
      return data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Failed to fetch work experience'
      );
    }
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
        state.error = action.payload as string;
      });
  },
});

export const { clearWorkExperience, clearError } = workExperienceSlice.actions;
export default workExperienceSlice.reducer;