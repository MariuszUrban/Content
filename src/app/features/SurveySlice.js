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
} = surveySlice.actions;
export const profileSelector = (state) => state.survey;
export default surveySlice.reducer;
