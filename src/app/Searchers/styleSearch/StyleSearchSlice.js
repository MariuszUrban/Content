import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "../../saveResults";

const initialState = {
  selected_styles: [],
  count: 0,
  form_hidden: false,
  results: [],
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
