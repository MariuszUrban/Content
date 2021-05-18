import { createSlice } from "@reduxjs/toolkit";
import { reducers } from "../../saveResults";

const initialState = {
  selected_feelings: [],
  checked_items: {},
  count: 0,
  form_hidden: false,
  results: [],
};

const feelingsSearchSlice = createSlice({
  name: "feelingsSearch",
  initialState,
  reducers: reducers,
});

export const selectState = (state) => state.feelings;
export const {
  saveFeelingsToArray,
  removeFeelingsFromArray,
  updateCheckedItems,
  removeCheckedItems,
  showHideForm,
  saveMET,
  saveArtInstituteChicago,
  saveCooperHewitt,
  saveRijksmuseum,
} = feelingsSearchSlice.actions;
export default feelingsSearchSlice.reducer;
