import { configureStore } from "@reduxjs/toolkit";
import textSearchReducer from "../textSearch/TextSearchSlice";
import feelingsSearchReducer from "../feelingsSearch/FeelingsSearchSlice";

export default configureStore({
  reducer: {
    text: textSearchReducer,
    feelings: feelingsSearchReducer,
  },
});
