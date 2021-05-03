import "./App.scss";
import ArtworkSearch from "./artworkSearch/ArtworkSearch";
import "rsuite/dist/styles/rsuite-default.css";
import { Loader } from "rsuite";
import ArtworkCard from "./UI/ArtworkCard/ArtworkCard";
import { useSelector } from "react-redux";

function App() {
  const state = useSelector((state) => state.artworks);
  const { form_hidden, results } = state;

  const showHideForm = () => {
    if (form_hidden) {
      return (
        <section id="loader">
          <div id="loaderInverseWrapper" style={{ height: 200 }}>
            <Loader inverse center content="loading..." />
          </div>
        </section>
      );
    } else {
      return (
        <section id="form">
          <ArtworkSearch />
        </section>
      );
    }
  };

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
    } else {
      return (
        <div className="pending-results-bar">
          <h1>Expecting to see some art</h1>
        </div>
      );
    }
  };

  return (
    <div className="App">
      {showHideForm()}
      {showResults()}
    </div>
  );
}

export default App;
