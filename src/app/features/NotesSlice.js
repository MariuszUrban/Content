import { createSlice } from "@reduxjs/toolkit";

export const notesSlice = createSlice({
  name: "notes",
  initialState: {
    notes: [],
  },
  reducers: {
    loadNotes: (state, { payload }) => {
      state.notes = payload;
    },
    saveNote: (state, { payload }) => {
      console.log("🚀 ~ payload", payload);
      state.notes.unshift(payload);
    },
    deleteNote: (state, { payload }) => {
      state.notes = payload;
    },
  },
});

export const { saveNote, deleteNote, loadNotes } = notesSlice.actions;
export const noteSelector = (state) => state.notes;
export default notesSlice.reducer;
