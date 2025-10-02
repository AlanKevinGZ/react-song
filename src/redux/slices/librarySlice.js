import { createSlice } from "@reduxjs/toolkit";

const songSlice = createSlice({
  name: "songs",
  initialState: {
    songs: [],
  },

  reducers: {
    addSongs: (state, action) => {
      const exists = state.songs.find(
        (song) => song.name.id === action.payload.name.id
      );

      if (exists) {
        return; 
      }

      state.songs.push(action.payload);
    },

    removeSong: (state, action) => {
      state.songs = state.songs.filter(
        (song) => song.name.id !== action.payload
      );
    },
  },
});

export const { addSongs, removeSong } = songSlice.actions;

const { reducer:songReduce } =songSlice
export default songReduce;
