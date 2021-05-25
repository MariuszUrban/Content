import { createSlice } from "@reduxjs/toolkit";

const reducers = {
  saveKeywords: (state, { payload }) => {
    state.keywords = payload;
  },
  showHideForm: (state, { payload }) => {
    state.form_hidden = payload;
  },
};

const textSearchSlice = createSlice({
  name: "textSearch",
  initialState: {
    form_hidden: false,
    keywords: [],
  },
  reducers,
  extraReducers: {},
});

export const selectState = (state) => state.text;
export const { saveKeywords, showHideForm } = textSearchSlice.actions;
export default textSearchSlice.reducer;
