export const reducers = {
  saveKeywords: (state, { payload }) => {
    state.keywords = payload;
  },
  saveFeelings: (state, { payload }) => {
    state.selected_feelings.push(payload);
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
