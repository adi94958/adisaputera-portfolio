import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { staticData } from '../../data/staticData';
import type { Education } from '../../types';

interface EducationState {
  data: Education[];
  loading: boolean;
  error: string | null;
}

const initialState: EducationState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk for fetching education data
export const fetchEducation = createAsyncThunk(
  'education/fetchEducation',
  async () => {
    // Simulate API call with delay
    await new Promise((resolve) => setTimeout(resolve, 800));
    return staticData.education;
  }
);

const educationSlice = createSlice({
  name: 'education',
  initialState,
  reducers: {
    clearEducation: (state) => {
      state.data = [];
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchEducation.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchEducation.fulfilled, (state, action: PayloadAction<Education[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchEducation.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch education data";
      });
  },
});

export const { clearEducation, clearError } = educationSlice.actions;
export default educationSlice.reducer;
