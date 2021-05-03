import { configureStore } from "@reduxjs/toolkit";
import artworkSearchReducer from "../artworkSearch/ArtworkSearchSlice";

export default configureStore({
  reducer: {
    artworks: artworkSearchReducer,
  },
});
