import React from "react";
import "./_surveyColorButton.scss";
import { useSelector } from "react-redux";
import { profileSelector } from "../../app/features/SurveySlice";

const SurveyColorsButton = ({ color, onClick }) => {
  const state = useSelector(profileSelector);

  const { chosenColors } = state;

  return (
    <div key={color} className="survey-color-btn-wrapper">
      <div
        className={
          chosenColors.includes(color)
            ? `survey-color-btn-frame chosen-color`
            : `survey-color-btn-frame`
        }
      >
        <button
          className="survey-color-btn-content"
          style={{ backgroundColor: color }}
          value={color}
          onClick={onClick}
        />
      </div>
    </div>
  );
};

export default SurveyColorsButton;
