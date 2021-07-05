import React from "react";
import { useSelector } from "react-redux";
import { profileSelector } from "../../app/features/SurveySlice";
import SurveyWelcome from "../SurveyWelcome/SurveyWelcome";
import SurveyProfile from "../SurveyProfile/SurveyProfile";
import "./_survey.scss";
import { SurveyColors } from "../SurveyColors/SurveyColors";

const Survey = () => {
  const state = useSelector(profileSelector);

  const { showSection } = state;

  return (
    <div className="survey-container">
      {showSection === "welcome" ? <SurveyWelcome text="welcome" /> : null}
      {showSection === "create-profile" ? <SurveyProfile /> : null}
      {showSection === "colors-profile" ? <SurveyColors /> : null}
    </div>
  );
};

export default Survey;
