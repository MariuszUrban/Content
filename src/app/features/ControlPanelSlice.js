import { createSlice } from "@reduxjs/toolkit";

export const controlPanelSlice = createSlice({
  name: "controlPanel",
  initialState: {
    isPanelOpen: false,
    showSection: "control-activity",
  },
  reducers: {
    toggleOpenClose: (state, { payload }) => {
      state.isPanelOpen = payload;
    },
    setSection: (state, { payload }) => {
      state.showSection = payload;
    },
  },
});

export const { setSection, toggleOpenClose } = controlPanelSlice.actions;
export const controlPanelSelector = (state) => state.controlPanel;
export default controlPanelSlice.reducer;
