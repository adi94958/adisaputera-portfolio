import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import portfolioApi from '../../services/portfolioApi';
import type { Certification } from '../../types';

interface CertificationsState {
  data: Certification[];
  loading: boolean;
  error: string | null;
}

const initialState: CertificationsState = {
  data: [],
  loading: false,
  error: null,
};

// Async thunk for fetching certifications data
export const fetchCertifications = createAsyncThunk(
  'certifications/fetchCertifications',
  async (_, { rejectWithValue }) => {
    try {
      const data = await portfolioApi.getCertifications();
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch certifications';
      return rejectWithValue(errorMessage);
    }
  }
);

const certificationsSlice = createSlice({
  name: 'certifications',
  initialState,
  reducers: {
    clearCertifications: (state) => {
      state.data = [];
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchCertifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCertifications.fulfilled, (state, action: PayloadAction<Certification[]>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchCertifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearCertifications, clearError } = certificationsSlice.actions;
export default certificationsSlice.reducer;
