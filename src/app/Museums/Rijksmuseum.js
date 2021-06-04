import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveRijksmuseum } from "../Results/ResultsSlice";

export const fetchRijksmuseum = createAsyncThunk(
  "artworksFrom/Rijksmuseum",
  async (keyword, { dispatch }) => {
    return fetch(
      `https://www.rijksmuseum.nl/api/nl/collection?key=X5STnRUC&ps=100&q=${keyword}`
    )
      .then((response) => response.json())
      .then((results) => {
        const resultsArr = results.artObjects;

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
              keyword
            };

            dispatch(saveRijksmuseum(singleWork));
          }
        });
      })
      .catch((err) => console.log(err));
  }
);
