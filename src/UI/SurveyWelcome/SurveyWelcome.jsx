import React from "react";
import { useDispatch } from "react-redux";
import { setSection } from "../../app/features/SurveySlice";
import SurveyHeader from "../SurveyHeader/SurveyHeader";
import ButtonMain from "../ButtonMain/ButtonMain";
import "./_surveyWelcome.scss";

const SurveyWelcome = () => {
  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(setSection("create-profile"));
  };

  return (
    <div className="survey-container survey-container-second-wrapper">
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
          <ButtonMain text="Skip" classPrefix="skip-btn" />
          <ButtonMain text="Next" getValue={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SurveyWelcome;
