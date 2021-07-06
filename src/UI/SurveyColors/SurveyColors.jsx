import React from "react";
import SurveyHeader from "../SurveyHeader/SurveyHeader";
import ButtonMain from "../ButtonMain/ButtonMain";
import SurveyColorsButton from "../SurveyColorsButton/SurveyColorsButton";
import { useSelector, useDispatch } from "react-redux";
import {
  profileSelector,
  setColors,
  removeColors,
  setSection,
} from "../../app/features/SurveySlice";
import "./_surveyColors.scss";

export const SurveyColors = () => {
  const state = useSelector(profileSelector);
  const { colors, chosenColors } = state;
  const dispatch = useDispatch();

  const goBack = () => {
    dispatch(setSection("colors-profile"));
  };

  const goNext = () => {
    dispatch(setSection("artworks-profile"));
  };

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
        <SurveyHeader text="Choose your fav colors" className="artworks" />
      </div>
      <div className="survey-content">
        {colors.map((color) => {
          return (
            <SurveyColorsButton color={color} onClick={chooseColor}  />
          );
        })}
      </div>
      <div className="survey-footer">
        <div className="survey-button-wrapper">
          <ButtonMain text="Back" getValue={goBack} />
          <ButtonMain text="Next" getValue={goNext} />
        </div>
      </div>
    </div>
  );
};
