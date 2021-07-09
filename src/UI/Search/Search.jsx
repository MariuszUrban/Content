import React, { useState, useEffect } from "react";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import { selectState as resultsState } from "../../app/Results/ResultsSlice";
import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Results from "../../app/Results/Results";
import SearchControlBar from "./SearchControlBar/SearchControlBar";
import Section from "../Section/Section";

import "./_search.scss";

const Search = () => {
  let { path, url } = useRouteMatch();
  let { topicId } = useParams();
  console.log("🚀 ~ Search ~ topicId", topicId);
  console.log("🚀 ~ Search ~ path", path);
  console.log("🚀 ~ Search ~ url", url);

  const [isPending, setIsPending] = useState(false);
  const [areReady, setReady] = useState(false);
  const results_state = useSelector(resultsState);
  const { ready } = results_state;

  useEffect(() => {
    setReady(Object.keys(ready).every((key) => ready[key]));
  }, [ready]);

  const handlePending = () => {
    setIsPending(true);
  };

  let section;

  if (!isPending && !areReady) {
    section = (
      <>
        <div className="control-bar-wrapper">
          <SearchControlBar />
        </div>
        <div className="searcher-wrapper">
          <Switch>
            <Route exact path={path} children={<h1>ekstra</h1>} />
            <Route
              path={`${path}/:topicId`}
              children={<Section setPending={handlePending} />}
            />

            {/* <Route
              path={`${path}/by-keywords`}
              children={<TextSearch setPending={handlePending} />}
            />
            <Route
              exact
              path={`${path}/by-periods`}
              children={<StyleSearch />}
            />
            <Route
              exact
              path={`${path}/by-themes`}
              children={<FeelingsSearch />}
            /> */}
          </Switch>
        </div>
      </>
    );
  }
  if (isPending && !areReady) {
    section = (
      <>
        <div className="loading-wrapper">
          <Loader
            type="Grid"
            color="#204361"
            height={200}
            width={200}
            timeout={1000000}
          />
        </div>
      </>
    );
  }
  if (isPending && areReady) {
    setIsPending(false);
  } else if (!isPending && areReady) {
    section = <Results />;
  }
  return <div className="section-container">{section}</div>;
};

export default Search;
