import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveMET } from "../Results/ResultsSlice";

export const fetchMET = createAsyncThunk(
  "artworksFrom/MetropolitanMuseumOfArt",
  async (keyword, { dispatch }) => {
    return fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/search?&q=${keyword}`
    )
      .then((response) => {
        response.json();
      })
      .then((data) => {
        console.log("🚀 ~ .then ~ data", data);
        let ids = data.objectIDs;
        ids.map(async (id) => {
          return await fetch(
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
                  keyword,
                };
                dispatch(saveMET(singleWork));
              }
            );
        });
      })
      .catch((err) => console.log(err));
  }
);
