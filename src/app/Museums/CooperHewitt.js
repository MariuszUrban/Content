import { createAsyncThunk } from "@reduxjs/toolkit";
import { saveCooperHewitt } from "../Results/ResultsSlice";

export const fetchCooperHewitt = createAsyncThunk(
  "artworksFrom/CooperHewitt",
  async (keyword, { dispatch }) => {
    return fetch(
      `https://api.collection.cooperhewitt.org/rest/select=images/?method=cooperhewitt.search.collection&access_token=4cb7a6299962713e8499f9cac04862fe&query=${keyword}&page=10&per_page=100`
    )
      .then((response) => response.json())
      .then((results) => {
        const resultsArr = results.objects;

        resultsArr.forEach(
          ({ participants, title, dimensions, medium, images, id }) => {
            const checkParticipants = (array) => {
              if (undefined !== array && array.length) {
                return array[0].person_name.toString();
              } else {
                return "No name found";
              }
            };

            const checkImages = (array) => {
              if (undefined !== array && array.length) {
                return images[0].z.url;
              } else {
                return "No images found ";
              }
            };

            const singleWork = {
              artist: checkParticipants(participants),
              title,
              dimensions,
              medium,
              image: checkImages(images),
              id,
              keyword,
            };

            if (
              singleWork.image !== "No images found" &&
              singleWork.artist !== "No name found"
            ) {
              dispatch(saveCooperHewitt(singleWork));
            }
          }
        );
      })
      .catch((err) => console.log(err));
  }
);
