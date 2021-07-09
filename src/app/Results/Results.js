import React, { useState, useEffect } from "react";
import { getRandom } from "../helpers/Random";
import ResultCard from "../../UI/ResultCard/ResultCard.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector } from "react-redux";
import { selectState } from "./ResultsSlice";
import { FlexboxGrid } from "rsuite";
import "./_results.scss";
import _ from "lodash";

const Results = () => {
  const state = useSelector(selectState);
  const { results, ready } = state;

  const areReady = Object.keys(ready).every((key) => ready[key]);

  const [availableArtworks, setAvailableArtworks] = useState("");
  const [artworksToRender, setArtworksToRender] = useState("");
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

  const fetchMoreData = () => {
    let newLoad = getRandom(artworksLeftToRender, 24);
    let diff = _.difference(artworksLeftToRender, newLoad);
    setArtworksToRender(artworksToRender.concat(newLoad));
    setArtworksLeftToRender(diff);
  };

  return (
    <section id="results">
      {areReady ? (
        <div className="show-grid">
          <InfiniteScroll
            dataLength={artworksToRender.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4>Loading...</h4>}
          >
            {_.chunk(artworksToRender, 4).map((array, index) => (
              <FlexboxGrid
                classPrefix="flex-box-grid-results"
                justify="space-around"
                key={`${index + 1}`}
              >
                {array.map(
                  (
                    { artist, title, image, description, id, medium },
                    index
                  ) => (
                    <FlexboxGrid.Item
                      classPrefix="flex-box-grid-item-result"
                      colspan={4}
                      key={id}
                    >
                      <ResultCard
                        artist={artist}
                        title={title}
                        image={image}
                        description={description}
                        medium={medium}
                      />
                    </FlexboxGrid.Item>
                  )
                )}
              </FlexboxGrid>
            ))}
          </InfiniteScroll>
        </div>
      ) : null}
    </section>
  );
};

export default Results;
