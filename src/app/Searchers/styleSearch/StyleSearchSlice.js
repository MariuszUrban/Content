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
