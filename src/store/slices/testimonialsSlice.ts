import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import portfolioApi from '../../services/portfolioApi';
import type { Testimonial } from '../../types';

interface TestimonialsState {
  data: Testimonial[];
  loading: boolean;
  error: string | null;
}

const initialState: TestimonialsState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk for fetching testimonials data
export const fetchTestimonials = createAsyncThunk(
  'testimonials/fetchTestimonials',
  async (_, { rejectWithValue }) => {
    try {
      const data = await portfolioApi.getTestimonials();
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch testimonials';
      return rejectWithValue(errorMessage);
    }
  }
);

const testimonialsSlice = createSlice({
  name: 'testimonials',
  initialState,
  reducers: {
    clearTestimonials: (state) => {
      state.data = [];
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTestimonials.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTestimonials.fulfilled, (state, action: PayloadAction<Testimonial[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchTestimonials.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearTestimonials, clearError } = testimonialsSlice.actions;
export default testimonialsSlice.reducer;
