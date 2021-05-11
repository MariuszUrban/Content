import { createAsyncThunk } from "@reduxjs/toolkit";

import { saveArtInstituteChicago } from "../textSearch/TextSearchSlice";

export const fetchArtInstituteChicago = createAsyncThunk(
  "artworks/ArtInstituteChicago",
  async (keyword, { dispatch }) => {
    return fetch(
      // to correct
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
