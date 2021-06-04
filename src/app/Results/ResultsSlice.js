import { createSlice, isAllOf, isFulfilled } from "@reduxjs/toolkit";
import {
  fetchArtInstituteChicago,
  fetchCooperHewitt,
  fetchMET,
  fetchRijksmuseum,
} from "../Museums/index";

const areFulfilled = isFulfilled(
  fetchArtInstituteChicago,
  fetchCooperHewitt,
  fetchMET,
  fetchRijksmuseum
);

const initialState = {
  results: {},
  ready: {
    MetropolitanMuseumOfArt: false,
    ArtInstituteChicago: false,
    CooperHewitt: false,
    Rijksmuseum: false,
  },
  per_render: 24,
};

const resultsSlice = createSlice({
  name: "results",
  initialState,
  reducers: {
    createArrayForKeyword: (state, action) => {
      state.results[action.payload] = [];
    },
    saveMET: (state, action) => {
      state.results[action.payload.keyword].push(action.payload);
    },
    saveArtInstituteChicago: (state, { payload }) => {
      state.results[payload.keyword].push(payload);
    },
    saveCooperHewitt: (state, { payload }) => {
      state.results[payload.keyword].push(payload);
    },
    saveRijksmuseum: (state, { payload }) => {
      state.results[payload.keyword].push(payload);
    },
  },
  extraReducers: (builder) => {
    builder.addMatcher(
      (action) => action.type.endsWith("/fulfilled"),
      (state, action) => {
        switch (action.type) {
          case "artworksFrom/ArtInstituteChicago/fulfilled":
            state.ready.ArtInstituteChicago = true;
            break;
          case "artworksFrom/CooperHewitt/fulfilled":
            state.ready.CooperHewitt = true;
            break;
          case "artworksFrom/MetropolitanMuseumOfArt/fulfilled":
            state.ready.MetropolitanMuseumOfArt = true;
            break;
          case "artworksFrom/Rijksmuseum/fulfilled":
            state.ready.Rijksmuseum = true;
            break;
          default:
        }
      }
    );
  },
});

export const selectState = (state) => state.results;
export const {
  createArrayForKeyword,
  saveMET,
  saveArtInstituteChicago,
  saveCooperHewitt,
  saveRijksmuseum,
} = resultsSlice.actions;
export default resultsSlice.reducer;
