import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchSongs = createAsyncThunk(
  "search/fetchSongs",
  async (url, { rejectWithValue }) => {
    try {
      const response = await axios.get(url);
      return response.data.album || [];
    } catch (error) {
      return rejectWithValue(error.message || "Error desconocido");
    }
  }
);

const initialState = {
  results: [],
  loading: false,
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    resetResults: (state) => {
      state.results = [];
      state.loading = false;
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSongs.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchSongs.fulfilled, (state, action) => {
        state.loading = false;
        state.results = action.payload;
      })
      .addCase(fetchSongs.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});


export const { resetResults } = searchSlice.actions;

const { reducer:searchReduce } =searchSlice
export default searchReduce;
