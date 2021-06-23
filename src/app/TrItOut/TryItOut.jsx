import React from "react";
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
  const { ready } = results_state;
  const dispatch = useDispatch();

  const { exampleThemes, selected_themes, is_pending } = state;
  const random = getRandom(exampleThemes, 12);

  const areReady = Object.keys(ready).every((key) => ready[key]);

  let section;

  if (areReady) {
    dispatch(setPendingStatus(false));
  }
  if (!is_pending && !areReady) {
    section = (
      <>
        {" "}
        <ChooseThemeButtons random_themes={random} />
        <ChooseThemeSearch />
        <ChooseThemeBackground />
      </>
    );
  } else if (is_pending && !areReady) {
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
  } else if (!is_pending && areReady) {
    section = <DemoResultsCards />;
  }

  return <div className="try-it-out-container">{section}</div>;
};

export default TryItOut;
