import { createAsyncThunk } from "@reduxjs/toolkit";

import { saveRijksmuseum } from "../textSearch/TextSearchSlice";

export const fetchRijksmuseum = createAsyncThunk(
  "artworks/Rijksmuseum",
  async (keyword, { dispatch }) => {
    return fetch(
      `https://www.rijksmuseum.nl/api/nl/collection?key=X5STnRUC&ps=100&q=${keyword}`
    )
      .then((response) => response.json())
      .then((results) => {
        const resultsArr = results.artObjects;
        console.log("🚀 ~ .then ~ resultsArr", resultsArr);

        resultsArr.forEach((element) => {
          const { hasImage, id, principalOrFirstMake, title, webImage } =
            element;

          if (hasImage) {
            const singleWork = {
              artist: principalOrFirstMake,
              title,
              dimensions: "No dimensions provided",
              medium: "No medium provided",
              image: webImage.url,
              id,
            };

            dispatch(saveRijksmuseum(singleWork));
          }
        });
      })
      .catch((err) => console.log(err));
  }
);
