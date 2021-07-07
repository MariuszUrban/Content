import { createSlice } from "@reduxjs/toolkit";

export const controlPanelSlice = createSlice({
  name: "controlPanel",
  initialState: {
    showSection: "",
  },
  reducers: {
    setSection: (state, { payload }) => {
      state.showSection = payload;
    },
  },
});
