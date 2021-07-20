import React from "react";
import { Link } from "react-router-dom";
import SurveyHeader from "../SurveyHeader/SurveyHeader";
import ButtonMain from "../ButtonMain/ButtonMain";
import "./_surveyGoodToGo.scss";

export const SurveyGoodToGo = () => {
  return (
    <div className="survey-container  survey-container-second-wrapper">
      <div className="survey-header">
        <SurveyHeader />
      </div>
      <div className="survey-content survey-set"> Great! We’re all set!</div>
      <div className="survey-footer">
        <div className="survey-button-wrapper all-set">
          <Link to="/dashboard">
            <ButtonMain text="Explore" />
          </Link>
        </div>
      </div>
    </div>
  );
};
