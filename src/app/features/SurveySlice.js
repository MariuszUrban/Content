import { createSlice } from "@reduxjs/toolkit";

function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele !== value;
  });
}

export const surveySlice = createSlice({
  name: "survey",
  initialState: {
    showSection: "welcome",
    email: "",
    password: "",
    name: "",
    age: "",
    nationality: "",
    likes: "",
    colors: [
      "#b7680c",
      "#de5dd4",
      "#331212",
      "#186f2c",
      "#0337aa",
      "#813ad3",
      "#f89b1b",
      "#40c445",
      "#3d93c9",
      "#f4ec29",
      "#e53c3c",
    ],
    chosenColors: [],
    artworks: [
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
    chosenArtworks: [],
  },
  reducers: {
    setSection: (state, { payload }) => {
      state.showSection = payload;
    },
    setName: (state, { payload }) => {
      state.name = payload;
    },
    setAge: (state, { payload }) => {
      state.age = payload;
    },
    setNationality: (state, { payload }) => {
      state.nationality = payload;
    },
    setLikes: (state, { payload }) => {
      state.nationality = payload;
    },
    setColors: (state, { payload }) => {
      state.chosenColors.push(payload);
    },
    removeColors: (state, { payload }) => {
      state.chosenColors = arrayRemove(state.chosenColors, payload);
    },
    setArtworks: (state, { payload }) => {
      state.chosenArtworks.push(payload);
    },
    removeArtworks: (state, { payload }) => {
      state.chosenArtworks = arrayRemove(state.chosenArtworks, payload);
    },
  },
});

export const {
  setSection,
  setName,
  setAge,
  setNationality,
  setLikes,
  setColors,
  removeColors,
  setArtworks,
  removeArtworks,
} = surveySlice.actions;
export const profileSelector = (state) => state.survey;
export default surveySlice.reducer;
