import { createAsyncThunk } from "@reduxjs/toolkit";

import { saveArtInstituteChicago } from "../artworkSearch/ArtworkSearchSlice";

export const fetchArtInstituteChicago = createAsyncThunk(
  "artworks/ArtInstituteChicago",
  async (keyword, { dispatch }) => {
    return fetch(
      // to correct
      `https://api.artic.edu/api/v1/artworks?/search?q=${keyword}&is_public_domain=true&limit=100&fields=id,title,image_id,artist_display,description,dimensions,medium_display,`
    )
      .then((response) => response.json())
      .then((value) => {
        console.log("🚀 ~ .then ~ value", value);
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
