import { configureStore } from "@reduxjs/toolkit";
import textSearchReducer from "./Searchers/textSearch/TextSearchSlice";
import feelingsSearchReducer from "./Searchers/feelingsSearch/FeelingsSearchSlice";
import styleSearchReducer from "./Searchers/styleSearch/StyleSearchSlice";
import resultsSlice from "./Results/ResultsSlice";

export default configureStore({
  reducer: {
    text: textSearchReducer,
    feelings: feelingsSearchReducer,
    style: styleSearchReducer,
    results: resultsSlice,
  },
});
