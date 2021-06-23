import React from "react";
import { Icon, Button } from "rsuite";
import { useDispatch, useSelector } from "react-redux";
import "./_chooseThemeSearch.scss";
import { selectState } from "../../app/TrItOut/TryItOutSlice";
import Draggable from "react-draggable";
import { setPendingStatus } from "../../app/TrItOut/TryItOutSlice";
import { createArrayForKeyword } from "../../app/Results/ResultsSlice";
import {
  fetchRijksmuseum,
  fetchMET,
  fetchCooperHewitt,
  fetchArtInstituteChicago,
} from "../../app/Museums/index.js";

const ChooseThemeSearch = () => {
  const state = useSelector(selectState);

  const { selected_themes } = state;

  const dispatch = useDispatch();

  const handleClick = () => {
    if (selected_themes.length !== 0 && selected_themes.length <= 5) {
      dispatch(setPendingStatus(true));
      selected_themes.forEach((theme) => {
        dispatch(createArrayForKeyword(theme));
        dispatch(fetchArtInstituteChicago(theme));
        dispatch(fetchCooperHewitt(theme));
        dispatch(fetchRijksmuseum(theme));
        dispatch(fetchMET(theme));
      });
    }
  };

  return (
    <div className="choose-theme-search-container">
      <Draggable>
        <div className="theme-search-wrapper">
          <Button
            classPrefix="btn-looking-glass"
            disabled={selected_themes.length <= 0}
            onClick={handleClick}
          >
            <Icon icon="search" size="4x" />
          </Button>
          <p className="search-desc"> search</p>
        </div>
      </Draggable>
    </div>
  );
};

export default ChooseThemeSearch;
