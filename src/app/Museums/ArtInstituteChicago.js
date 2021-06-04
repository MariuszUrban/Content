import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveArtInstituteChicago } from "../Results/ResultsSlice";

export const fetchArtInstituteChicago = createAsyncThunk(
  "artworksFrom/ArtInstituteChicago",
  async (keyword, thunkAPI) => {
    return fetch(
      `https://api.artic.edu/api/v1/artworks?/search?q=${keyword}&limit=100`
    )
      .then((response) => response.json())
      .then((value) => {
        const resultsArr = value.data;
        resultsArr.forEach(
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
              keyword,
            };
            if (image_id != null) {
              thunkAPI.dispatch(saveArtInstituteChicago(singleWork));
            }
          }
        );
      })
      .catch((error) => console.log(error));
  }
);
