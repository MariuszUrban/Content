export const reducers = {
  saveKeywords: (state, { payload }) => {
    state.keywords = payload;
  },
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
  updateCheckedItems: (state, { payload }) => {
    state.checked_items = Object.assign({}, payload);
    state.count = Object.values(payload).filter((value) => value).length;
  },
  removeCheckedItems: (state, { payload }) => {
    delete state.checked_items[payload];
    state.count = Object.values(payload).filter((value) => value).length;
  },
  saveStylesToArray: (state, { payload }) => {
    console.log("🚀 ~ payload", payload);
    state.selected_styles = payload;
  },
  showHideForm: (state, { payload }) => {
    state.form_hidden = payload;
  },
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
};
