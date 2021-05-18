import "./App.scss";
import React from "react";
import ArtworkSearch from "./app/Searchers/textSearch/TextSearch";
import "rsuite/dist/styles/rsuite-default.css";
import ArtworkCard from "./UI/ArtworkCard/ArtworkCard";
import FeelingsSearch from "./app/Searchers/feelingsSearch/FeelingsSearch";
import { useSelector, useDispatch } from "react-redux";
import { StyleSearch } from "./app/Searchers/styleSearch/StyleSearch";

function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  const { results } = state.text;
  const { selected_feelings } = state.feelings;

  const showResults = () => {
    if (results.length > 0) {
      return (
        <section id="results">
          <ul>
            {results.map((result) => (
              <ArtworkCard
                image={result.image}
                artist={result.artist}
                title={result.title}
                medium={result.medium}
                dimensions={result.dimensions}
                uniqueKey={result.id}
                id={result.id}
              />
            ))}
          </ul>
        </section>
      );
    }
  };

  return (
    <div className="App">
      <ArtworkSearch />
      <FeelingsSearch
        dispatch={dispatch}
        selected_feelings={selected_feelings}
      />
      <StyleSearch />
      {showResults()}
    </div>
  );
}

export default App;
