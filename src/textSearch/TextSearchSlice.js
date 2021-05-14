import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "../app/saveResults";

const textSearchSlice = createSlice({
  name: "textSearch",
  initialState: {
    form_hidden: false,
    keywords: [],
    results: [],
  },
  reducers,
  extraReducers: {},
});

export const selectState = (state) => state.text;
export const {
  saveKeywords,
  showHideForm,
  saveMET,
  saveArtInstituteChicago,
  saveCooperHewitt,
  saveRijksmuseum,
} = textSearchSlice.actions;
export default textSearchSlice.reducer;
