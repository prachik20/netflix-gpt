import { createSlice } from "@reduxjs/toolkit";

const configSlice = createSlice({
  name: "config",
  initialState: {
    lang: "en",
  },
  reducers: {
    selectedLang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { selectedLang } = configSlice.actions;

export default configSlice.reducer;
