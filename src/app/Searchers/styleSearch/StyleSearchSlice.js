import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected_styles: [],
  count: 0,
  form_hidden: false,
};

const reducers = {
  saveStylesToArray: (state, { payload }) => {
    state.selected_styles = payload;
  },
  clearCheckedFeelings: ({ selected_feelings }, { payload }) => {
    selected_feelings.splice(0, selected_feelings.length);
  },
  clearCheckedItems: ({ checked_items }, { payload }) => {
    checked_items = Object.keys(checked_items).forEach(function (key) {
      delete checked_items[key];
    });
  },
};

const styleSearchSlice = createSlice({
  name: "styleSearch",
  initialState,
  reducers: reducers,
});

export const selectState = (state) => state.style;
export const {
  saveStylesToArray,
  showHideForm,
  saveMET,
  saveArtInstituteChicago,
  saveCooperHewitt,
  saveRijksmuseum,
} = styleSearchSlice.actions;
export default styleSearchSlice.reducer;
