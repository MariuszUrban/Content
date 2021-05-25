import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    results: [],
  };

const reducers = {
    saveMET: (state, { payload }) => {
        state.results.push(payload);
      },
      saveArtInstituteChicago: (state, { payload }) => {
        state.results.push(payload);
      },
      saveCooperHewitt: (state, { payload }) => {
        state.results.push(payload);
      },
      saveRijksmuseum: (state, { payload }) => {
        state.results.push(payload);
      },
}


const resultsSlice = createSlice({
    name: "results",
    initialState,
    reducers: reducers,
  });

  export const selectState = (state) => state.results;
  export const {
    saveMET,
    saveArtInstituteChicago,
    saveCooperHewitt,
    saveRijksmuseum,
  } = resultsSlice.actions;
  export default resultsSlice.reducer;
  