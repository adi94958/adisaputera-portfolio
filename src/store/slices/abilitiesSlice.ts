import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import portfolioApi from '../../services/portfolioApi';
import type { Abilities } from '../../types';

interface AbilitiesState {
  data: Abilities | null;
  loading: boolean;
  error: string | null;
}

const initialState: AbilitiesState = {
  data: null,
  loading: false,
  error: null,
};

// Async thunk for fetching abilities data
export const fetchAbilities = createAsyncThunk(
  'abilities/fetchAbilities',
  async (_, { rejectWithValue }) => {
    try {
      const data = await portfolioApi.getAbilities();
      return data;
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to fetch abilities';
      return rejectWithValue(errorMessage);
    }
  }
);

const abilitiesSlice = createSlice({
  name: 'abilities',
  initialState,
  reducers: {
    clearAbilities: (state) => {
      state.data = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAbilities.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAbilities.fulfilled, (state, action: PayloadAction<Abilities>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchAbilities.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { clearAbilities, clearError } = abilitiesSlice.actions;
export default abilitiesSlice.reducer;
