import React from "react";
import ArtworkCard from "../../UI/ArtworkCard/ArtworkCard.jsx";
import { useSelector } from "react-redux";
import { selectState } from "./ResultsSlice";

export const Results = () => {
  const state = useSelector(selectState);
  const { results } = state;
  console.log("🚀 ~ Results ~ results", results);

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
};
