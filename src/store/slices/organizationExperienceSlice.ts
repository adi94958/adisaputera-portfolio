import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { staticData } from '../../data/staticData';
import type { OrganizationExperience } from "../../types";

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
  async () => {
    // Simulate API call with delay
    await new Promise((resolve) => setTimeout(resolve, 600));
    return staticData.organization_experience;
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
        state.error = action.error.message || "Failed to fetch organization experience data";
      });
  },
});

export const { clearOrganizationExperience, clearError } = organizationExperienceSlice.actions;
export default organizationExperienceSlice.reducer;
