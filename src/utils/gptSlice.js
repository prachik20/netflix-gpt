import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearch: false,
    tmdbResults: null,
    gptMovieSearched: null,
  },
  reducers: {
    toggleGptSearchView: (state, action) => {
      state.showGptSearch = !state.showGptSearch;
    },
    addTmdbMovies: (state, action) => {
      const { gptMovieSearched, tmdbResults } = action.payload;
      state.gptMovieSearched = gptMovieSearched;
      state.tmdbResults = tmdbResults;
    },
  },
});

export const { toggleGptSearchView, addTmdbMovies } = gptSlice.actions;
export default gptSlice.reducer;
