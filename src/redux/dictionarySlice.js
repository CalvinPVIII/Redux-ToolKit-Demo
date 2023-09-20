import { createSlice } from "@reduxjs/toolkit";

const dictionarySlice = createSlice({
  name: "dictionary",
  initialState: [],
  reducers: {
    addWord: (state, action) => {
      return [...state, action.payload];
    },
    removeWord: (state, action) => {
      return state.filter((w) => w.word !== action.payload.word);
    },
  },
});

export default dictionarySlice.reducer;

export const { addWord, removeWord } = dictionarySlice.actions;
