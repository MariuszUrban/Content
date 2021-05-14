import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "../app/saveResults";


const initialState = {
  selected_feelings: [],
  form_hidden: false,
  results: [],
};


const feelingsSearchSlice = createSlice({
  name: "feelingsSearch",
  initialState,
  reducers,
});

export const selectState = (state) => state.feelings;
export const {
  saveFeelings,
  showHideForm,
  saveMET,
  saveArtInstituteChicago,
  saveCooperHewitt,
  saveRijksmuseum,
} = feelingsSearchSlice.actions;
export default feelingsSearchSlice.reducer;
