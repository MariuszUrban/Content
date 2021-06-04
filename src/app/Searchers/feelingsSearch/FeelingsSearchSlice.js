import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selected_feelings: [],
  checked_items: {},
  count: 0,
  form_hidden: false,
};

const reducers = {
  saveFeelingsToArray: (state, { payload }) => {
    state.selected_feelings.push(payload);
  },
  removeFeelingsFromArray: (state, { payload }) => {
    for (let i = 0; i < state.selected_feelings.length; i++) {
      if (state.selected_feelings[i] === payload) {
        state.selected_feelings.splice(i, 1);
      }
    }
  },
  clearCheckedFeelings: ({ selected_feelings }, { payload }) => {
    selected_feelings.splice(0, selected_feelings.length);
  },
  clearCheckedItems: ({ checked_items }, { payload }) => {
    checked_items = Object.keys(checked_items).forEach(function (key) {
      delete checked_items[key];
    });
  },
  updateCheckedItems: (state, { payload }) => {
    state.checked_items = Object.assign({}, payload);
    state.count = Object.values(payload).filter((value) => value).length;
  },
  removeCheckedItems: (state, { payload }) => {
    delete state.checked_items[payload];
    state.count = Object.values(payload).filter((value) => value).length;
  },
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
  clearCheckedFeelings,
  clearCheckedItems,
} = feelingsSearchSlice.actions;
export default feelingsSearchSlice.reducer;
