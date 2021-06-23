import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  exampleThemes: [
    "Looted Sculpture",
    "Pollock's Drips",
    "NFT",
    "Dutch Still Life",
    "Art Meme",
    "Zombie Formalist Painting",
    "Gesamtkunstwerk",
    "Presidential Portrait",
    "Artist is Present",
    "Britney's flowers",
    "Cave painting",
    "Minimalist Sculpture",
    "Anthropocene",
    "Baroque Fresco",
    "Flipping artworks",
    "Private Museums",
    "Art of Performance",
    "Playground Canal Street",
    "Xenofeminism",
    "Patriarchy",
    "Hierarchy",
    "Egalitarism",
    "Art Market",
    "White Cube",
    "International Art English",
    "Art School Industry",
    "Plagiarism",
    "Transparency",
  ],
  choseArtworksFromResults: 10,
  selected_themes: [],
  height: 0,
  is_pending: false,
};

const reducers = {
  saveThemesToArray: (state, { payload }) => {
    state.selected_themes.push(payload);
  },
  removeThemesFromArray: (state, { payload }) => {
    state.selected_themes = payload;
  },
  setPendingStatus: (state, { payload }) => {
    state.is_pending = payload;
  },
};

const tryItOutSlice = createSlice({
  name: "tryItOut",
  initialState,
  reducers: reducers,
});

export const selectState = (state) => state.tryItOut;
export const { saveThemesToArray, removeThemesFromArray, setPendingStatus } =
  tryItOutSlice.actions;
export default tryItOutSlice.reducer;
