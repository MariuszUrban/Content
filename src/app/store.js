import { configureStore } from "@reduxjs/toolkit";
import artworkSearchReducer from "../textSearch/TextSearchSlice";

export default configureStore({
  reducer: {
    artworks: artworkSearchReducer,
  },
});
