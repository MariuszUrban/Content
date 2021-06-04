import "./App.scss";
import React from "react";
import ArtworkSearch from "./app/Searchers/textSearch/TextSearch";
import "rsuite/dist/styles/rsuite-default.css";
import FeelingsSearch from "./app/Searchers/feelingsSearch/FeelingsSearch";
import { useSelector, useDispatch } from "react-redux";
import { StyleSearch } from "./app/Searchers/styleSearch/StyleSearch";
import { Results } from "./app/Results/Results";
import ResultCard from "./UI/ResultCard/ResultCard";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { selected_feelings } = state.feelings;

  return (
    <div className="App">
      <ArtworkSearch />
      <FeelingsSearch
        dispatch={dispatch}
        selected_feelings={selected_feelings}
      />
      <StyleSearch />
      <Results />
    </div>
  );
}

export default App;
