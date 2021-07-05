import React from "react";
import SurveyHeader from "../SurveyHeader/SurveyHeader";
import ButtonMain from "../ButtonMain/ButtonMain";
import SurveyColorsButton from "../SurveyColorsButton/SurveyColorsButton";
import { useSelector, useDispatch } from "react-redux";
import {
  profileSelector,
  setColors,
  removeColors,
} from "../../app/features/SurveySlice";
import _ from "lodash";
import "./_surveyColors.scss";

export const SurveyColors = () => {
  const state = useSelector(profileSelector);
  const { colors, chosenColors } = state;
  const dispatch = useDispatch();

  const chooseColor = (e) => {
    if (chosenColors.includes(e.target.value)) {
      dispatch(removeColors(e.target.value));
    } else {
      dispatch(setColors(e.target.value));
    }
  };

  return (
    <div className="survey-container">
      <div className="survey-header">
        <SurveyHeader text="Choose your fav colors" />
      </div>
      <div className="survey-content">
        {colors.map((color) => {
          return (
            <SurveyColorsButton color={color} onClick={chooseColor} style />
          );
        })}
      </div>
      <div className="survey-footer">
        <div className="survey-button-wrapper">
          <ButtonMain text="Back" />
          <ButtonMain text="Next" />
        </div>
      </div>
    </div>
  );
};
