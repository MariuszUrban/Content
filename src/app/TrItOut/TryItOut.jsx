import React, { useState, useEffect } from "react";
import { getRandom } from "../../app/helpers/Random";
import ChooseThemeBackground from "../../UI/ChooseThemeBackground/ChooseThemeBackground";
import ChooseThemeButtons from "../../UI/ChooseThemeButtons/ChooseThemeButtons";
import ChooseThemeSearch from "../../UI/ChooseThemeSearch/ChooseThemeSearch";
import DemoResultsCards from "../../UI/DemoResultsCards/DemoResultsCards";
import { selectState, setPendingStatus } from "./TryItOutSlice";
import { selectState as resultsState } from "../Results/ResultsSlice";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import "./_tryItOut.scss";

const TryItOut = () => {
  const state = useSelector(selectState);
  const results_state = useSelector(resultsState);
  const dispatch = useDispatch();
  const { ready } = results_state;
  const { exampleThemes, is_pending } = state;
  const [areReady, setReady] = useState(false);

  useEffect(() => {
    setReady(Object.keys(ready).every((key) => ready[key]));
  }, [ready]);

  const random = getRandom(exampleThemes, 12);

  let section;

  if (!is_pending && !areReady) {
    section = (
      <>
        <ChooseThemeButtons random_themes={random} />
        <ChooseThemeSearch />
        <ChooseThemeBackground />
      </>
    );
  }
  if (is_pending && !areReady) {
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
  if (is_pending && areReady) {
    dispatch(setPendingStatus(false));
  } else if (!is_pending && areReady) {
    section = <DemoResultsCards setReady={setReady}/>;
  }

  return <div className="try-it-out-container">{section}</div>;
};

export default TryItOut;
