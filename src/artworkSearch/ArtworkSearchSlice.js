import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
} from "@reduxjs/toolkit";

export const fetchMET = createAsyncThunk(
  "artworks/MET",
  async (keyword, { dispatch }) => {
    dispatch(showHideForm(true));
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

export const fetchArtInstituteChicago = createAsyncThunk(
  "artworks/ArtInstituteChicago",
  async (keyword, { dispatch }) => {
    return fetch(
      `https://api.artic.edu/api/v1/artworks?/search?q=${keyword}&is_public_domain=true&limit=100&fields=id,title,image_id,artist_display,description,dimensions,medium_display,`
    )
      .then((response) => response.json())
      .then((value) => {
        console.log("🚀 ~ .then ~ value", value);
        const arr = value.data;
        arr.forEach(
          ({
            artist_display,
            title,
            dimensions,
            medium_display,
            image_id,
            id,
          }) => {
            const singleWork = {
              artist: artist_display,
              title,
              dimensions,
              medium: medium_display,
              image: `https://www.artic.edu/iiif/2/${image_id}/full/600,/0/default.jpg`,
              id,
            };
            if (image_id != null) {
              dispatch(saveArtInstituteChicago(singleWork));
            }
          }
        );
      })
      .catch((error) => console.log(error));
  }
);

const artworkSearchSlice = createSlice({
  name: "artworks",
  initialState: {
    form_hidden: false,
    keywords: [],
    results: [],
  },
  reducers: {
    saveKeywords: (state, action) => {
      state.keywords = action.payload;
    },
    showHideForm: (state, action) => {
      state.form_hidden = action.payload;
    },
    saveMET: (state, action) => {
      state.results.push(action.payload);
    },
    saveArtInstituteChicago: (state, action) => {
      state.results.push(action.payload);
    },
  },
  extraReducers: {},
});

export const selectState = (state) => state.artworks;
export const {
  saveKeywords,
  showHideForm,
  saveMET,
  saveArtInstituteChicago,
} = artworkSearchSlice.actions;
export default artworkSearchSlice.reducer;
