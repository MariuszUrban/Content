import React, { useState, useEffect } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { getRandom } from "../helpers/Random";
import { useParams } from "react-router-dom";
import ResultCard from "../../UI/ResultCard/ResultCard.jsx";
import InfiniteScroll from "react-infinite-scroll-component";
import { useSelector, useDispatch } from "react-redux";
import { selectState, clearState } from "./ResultsSlice";
import { FlexboxGrid } from "rsuite";
import ButtonMain from "../../UI/ButtonMain/ButtonMain";
import "./_results.scss";
import _ from "lodash";

const Results = () => {
  const state = useSelector(selectState);
  const { results, ready } = state;
  const { path } = useRouteMatch();
  let params = useParams();

  const areReady = Object.keys(ready).every((key) => ready[key]);
  const dispatch = useDispatch();
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

  const handleClearState = () => {
    dispatch(clearState());
  };

  return (
    <section id="results">
      <div className="back-to-search">
        <Link to={path}>
          <ButtonMain
            text="back to search"
            classPrefix="back-to-search-btn"
            getValue={handleClearState}
          />
        </Link>
      </div>
      {areReady ? (
        <div className="show-grid" id="scrollableDiv">
          <InfiniteScroll
            className="results-infinite-scroll"
            dataLength={artworksToRender.length}
            next={fetchMoreData}
            hasMore={true}
            loader={<h4 className="infinite-loader">Loading...</h4>}
            scrollableTarget="scrollableDiv"
          >
            {_.chunk(artworksToRender, 4).map((array, index) => (
              <FlexboxGrid
                classPrefix="flex-box-grid-results"
                justify="space-around"
                key={`${index}`}
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
                        id={id}
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
