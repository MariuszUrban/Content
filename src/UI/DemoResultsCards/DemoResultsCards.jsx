import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectState as resultsState } from "../../app/Results/ResultsSlice";
import { getRandom } from "../../app/helpers/Random";
import _ from "lodash";
import "./_demoResultsCards.scss";

const DemoResultsCards = () => {
  const state = useSelector(resultsState);
  const { ready, results } = state;
  const areReady = Object.keys(ready).every((key) => ready[key]);

  const [availableArtworks, setAvailableArtworks] = useState("");
  const [artworksToRender, setArtworksToRender] = useState("");
  console.log("🚀 ~ DemoResultsCards ~ artworksToRender", artworksToRender);
  const [artworksLeftToRender, setArtworksLeftToRender] = useState("");

  useEffect(() => {
    setAvailableArtworks([].concat.apply([], Object.values(results)));
  }, [areReady]);

  useEffect(() => {
    if (availableArtworks.length > 0) {
      let random = getRandom(availableArtworks, 24);
      let diff = _.difference(availableArtworks, random);
      setArtworksToRender(random);
      setArtworksLeftToRender(diff);
    }
  }, [availableArtworks]);

  let available = [].concat.apply([], Object.values(results));
  let random = getRandom(available, 20);

  let idx = 0;
  let section;

  if (areReady) {
    for (idx; idx < random.length; idx++) {
      return (
        <section className="demo-cards">
          <div className="prev"></div>
          <div className="card-wrapper">
            {" "}
            <div
              className="card-container"
              style={{ backgroundImage: `url(${random[idx].image})` }}
            ></div>
          </div>
          <div className="next"></div>
        </section>
      );
    }
  }
};

export default DemoResultsCards;
