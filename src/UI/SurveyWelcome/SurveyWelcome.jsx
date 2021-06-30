import React from "react";
import ButtonMain from "../ButtonMain/ButtonMain";
import SurveyHeader from "../SurveyHeader/SurveyHeader";
import "./_surveyWelcome.scss";

const SurveyWelcome = ({ button, button2 }) => {
  return (
    <div className="survey-container">
      <div className="survey-header">
        <SurveyHeader text="Welcome !" />
      </div>
      <div className="survey-content">
        <p className="survey-desc">
          We’re happy to have you! <br /> Before you start exploring, let’s get
          to know each other a bit!
        </p>
      </div>
      <div className="survey-footer">
        <div className="survey-button-wrapper">
          {button2 }
          {button}
        </div>
      </div>
    </div>
  );
};

export default SurveyWelcome;
