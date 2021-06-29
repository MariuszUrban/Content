import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  clearResults,
  setUnready,
  selectState as resultsState,
} from "../../app/Results/ResultsSlice";
import { removeThemesFromArray } from "../../app/TrItOut/TryItOutSlice";
import { getRandom } from "../../app/helpers/Random";
import { Button, Icon } from "rsuite";
import _ from "lodash";
import ButtonMain from "../ButtonMain/ButtonMain";
import "./_demoResultsCards.scss";

const DemoResultsCards = ({ setReady }) => {
  const state = useSelector(resultsState);
  const dispatch = useDispatch();
  const { results } = state;

  const [availableArtworks, setAvailableArtworks] = useState("");
  const [artworksToRender, setArtworksToRender] = useState("");
  const [artworksLeftToRender, setArtworksLeftToRender] = useState("");
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    setAvailableArtworks([].concat.apply([], Object.values(results)));
  }, []);

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

  const showPrev = () => {
    if (pageNumber === 0) {
      setPageNumber(19);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };

  const showNext = () => {
    if (pageNumber === 19) {
      setPageNumber(0);
    } else {
      setPageNumber(pageNumber + 1);
    }
  };

  const fetchMoreData = () => {
    let newLoad = getRandom(artworksLeftToRender, 24);
    let diff = _.difference(artworksLeftToRender, newLoad);
    setArtworksToRender(artworksToRender.concat(newLoad));
    setArtworksLeftToRender(diff);
  };

  return (
    <>
      <section className="demo-cards">
        <div className="left-side">
          <div className="prev card-control ">
            <Button classPrefix="card-control-prev" onClick={showPrev}>
              <Icon icon="angle-left" />
            </Button>
          </div>
          <div className="card-wrapper">
            <div
              className="card-container"
              style={{ backgroundImage: `url(${random[pageNumber].image})` }}
            ></div>

            <div className="card-desc">
              <h1 className="card-desc-title" maxLength="20">
                {random[pageNumber].title}
              </h1>
              <h2 className="card-desc-artist" maxLength="20">
                {random[pageNumber].artist}
              </h2>
            </div>
          </div>
          <div className="next card-control">
            <Button classPrefix="card-control-next" onClick={showNext}>
              <Icon icon="angle-right" />
            </Button>
          </div>
        </div>
        <div className="right-side">
          <div className="results-amount-wrapper">
            <p className="results-amount">{`Found ${
              availableArtworks.length
            } results for ${Object.keys(results)}`}</p>
          </div>
          <div className="results-amount-btns-wrapper">
            <ButtonMain
              text="Back to search"
              classPrefix="btn-back-to-search"
              getValue={() => {
                setReady(false);
                dispatch(removeThemesFromArray([]));
                dispatch(clearResults({}));
                dispatch(setUnready(false));
              }}
            />
            <ButtonMain
              text="Reload results"
              classPrefix="btn-reload"
              getValue={fetchMoreData}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DemoResultsCards;
