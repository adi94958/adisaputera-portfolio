import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { staticData } from '../../data/staticData';
import type { Contact } from '../../types';

interface ContactState {
  data: Contact | null;
  loading: boolean;
  error: string | null;
}

const initialState: ContactState = {
  data: null,
  loading: false,
  error: null,
};

// Async thunk for fetching contact data
export const fetchContact = createAsyncThunk(
  'contact/fetchContact',
  async () => {
    // Simulate API call with delay
    await new Promise((resolve) => setTimeout(resolve, 400));
    return staticData.contact;
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    clearContact: (state) => {
      state.data = null;
      state.error = null;
    },
    clearError: (state) => {
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchContact.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContact.fulfilled, (state, action: PayloadAction<Contact>) => {
        state.loading = false;
        state.data = action.payload;
        state.error = null;
      })
      .addCase(fetchContact.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Failed to fetch contact data";
      });
  },
});

export const { clearContact, clearError } = contactSlice.actions;
export default contactSlice.reducer;
