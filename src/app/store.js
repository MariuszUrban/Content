import { configureStore } from "@reduxjs/toolkit";
import textSearchReducer from "./Searchers/textSearch/TextSearchSlice";
import feelingsSearchReducer from "./Searchers/feelingsSearch/FeelingsSearchSlice";
import styleSearchReducer from "./Searchers/styleSearch/StyleSearchSlice";
import resultsSlice from "./Results/ResultsSlice";
import tryItOutSlice from "./TrItOut/TryItOutSlice";
import SignInSlice from "./SignIn/SignInSlice";
import SurveySlice from "./features/SurveySlice";
import ControlPanelSlice from "./features/ControlPanelSlice";
import NotesSlice from "./features/NotesSlice";

export default configureStore({
  reducer: {
    text: textSearchReducer,
    feelings: feelingsSearchReducer,
    style: styleSearchReducer,
    results: resultsSlice,
    tryItOut: tryItOutSlice,
    user: SignInSlice,
    survey: SurveySlice,
    controlPanel: ControlPanelSlice,
    notes: NotesSlice,
  },
});
