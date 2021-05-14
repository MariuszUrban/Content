import { configureStore } from "@reduxjs/toolkit";
import textSearchReducer from "./Searchers/textSearch/TextSearchSlice";
import feelingsSearchReducer from "./Searchers/feelingsSearch/FeelingsSearchSlice";

export default configureStore({
  reducer: {
    text: textSearchReducer,
    feelings: feelingsSearchReducer,
  },
});
