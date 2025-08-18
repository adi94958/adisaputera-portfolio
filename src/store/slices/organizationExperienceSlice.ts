import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { portfolioApi } from '../../services/portfolioApi';
import type { OrganizationExperience } from '../../types';

interface OrganizationExperienceState {
  data: OrganizationExperience[];
  loading: boolean;
  error: string | null;
}

const initialState: OrganizationExperienceState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk for fetching organization experience
export const fetchOrganizationExperience = createAsyncThunk(
  'organizationExperience/fetchOrganizationExperience',
  async (_, { rejectWithValue }) => {
    try {
      const data = await portfolioApi.getOrganizationExperience();
      return data;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : 'Failed to fetch organization experience'
      );
    }
  }
);

const organizationExperienceSlice = createSlice({
  name: 'organizationExperience',
  initialState,
  reducers: {
    clearOrganizationExperience: (state) => {
      state.data = [];
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchOrganizationExperience.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchOrganizationExperience.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchOrganizationExperience.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearOrganizationExperience, clearError } = organizationExperienceSlice.actions;
export default organizationExperienceSlice.reducer;
