import { createSlice } from "@reduxjs/toolkit";

const artworkSearchSlice = createSlice({
  name: "artworks",
  initialState: {
    form_hidden: false,
    keywords: [],
    results: [],
  },
  reducers: {
    saveKeywords: (state, action) => {
      state.keywords = action.payload;
    },
    showHideForm: (state, action) => {
      state.form_hidden = action.payload;
    },
    saveMET: (state, action) => {
      state.results.push(action.payload);
    },
    saveArtInstituteChicago: (state, action) => {
      state.results.push(action.payload);
    },
    saveCooperHewitt: (state, action) => {
      state.results.push(action.payload);
    },
    saveRijksmuseum: (state, action) => {
      state.results.push(action.payload);
    },
  },
  extraReducers: {},
});

export const selectState = (state) => state.artworks;
export const {
  saveKeywords,
  showHideForm,
  saveMET,
  saveArtInstituteChicago,
  saveCooperHewitt,
  saveRijksmuseum,
} = artworkSearchSlice.actions;
export default artworkSearchSlice.reducer;
