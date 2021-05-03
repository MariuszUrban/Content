import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

export const fetchMET = createAsyncThunk(
  "artworks/MET",
  async (keyword, { dispatch }) => {
    return fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?medium=Paintings&q=${keyword}`
    )
      .then((response) => response.json())
      .then((objects) => {
        let ids = objects.objectIDs;
        ids.map(async (id) => {
          await fetch(
            `https://collectionapi.metmuseum.org/public/collection/v1/objects/${id}`
          )
            .then((response) => {
              console.log(response);
              return response.json();
            })
            .then(
              ({
                artistDisplayName,
                title,
                dimensions,
                medium,
                primaryImageSmall,
                objectID,
              }) => {
                const singleWork = {
                  artist: artistDisplayName,
                  title: title,
                  dimensions: dimensions,
                  medium: medium,
                  image: primaryImageSmall,
                  id: objectID,
                };
                dispatch(saveMET(singleWork));
              }
            );
        });
      })
      .catch((err) => console.log(err));
  }
);

const artworkSearchSlice = createSlice({
  name: "artworks",
  initialState: {
    keywords: [],
    results: [],
  },
  reducers: {
    saveKeywords: (state, action) => {
      state.keywords = action.payload;
    },
    saveMET: (state, action) => {
      state.results.push(action.payload);
    },
  },
  extraReducers: {},
});

export const selectState = (state) => state.artworks;
export const { saveKeywords, saveMET } = artworkSearchSlice.actions;
export default artworkSearchSlice.reducer;