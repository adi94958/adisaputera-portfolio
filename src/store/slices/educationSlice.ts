import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import portfolioApi from '../../services/portfolioApi';
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
  async (_, { rejectWithValue }) => {
    try {
      const data = await portfolioApi.getEducation();
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch education';
      return rejectWithValue(errorMessage);
    }
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
        state.error = action.payload as string;
      });
  },
});

export const { clearEducation, clearError } = educationSlice.actions;
export default educationSlice.reducer;
