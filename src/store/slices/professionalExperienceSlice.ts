import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { portfolioApi } from '../../services/portfolioApi';
import type { ProfessionalExperience } from '../../types';

interface ProfessionalExperienceState {
  data: ProfessionalExperience[];
  loading: boolean;
  error: string | null;
}

const initialState: ProfessionalExperienceState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk for fetching professional experience
export const fetchProfessionalExperience = createAsyncThunk(
  'professionalExperience/fetchProfessionalExperience',
  async (_, { rejectWithValue }) => {
    try {
      const data = await portfolioApi.getProfessionalExperience();
      return data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Failed to fetch professional experience'
      );
    }
  }
);

const professionalExperienceSlice = createSlice({
  name: 'professionalExperience',
  initialState,
  reducers: {
    clearProfessionalExperience: (state) => {
      state.data = [];
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProfessionalExperience.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProfessionalExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchProfessionalExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearProfessionalExperience, clearError } = professionalExperienceSlice.actions;
export default professionalExperienceSlice.reducer;