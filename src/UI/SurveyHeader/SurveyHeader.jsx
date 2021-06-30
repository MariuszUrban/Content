import React from "react";

const SurveyHeader = ({ text }) => {
  return (
    <div className="survey-header-container">
      <h1 className="survey-header-title">{text}</h1>
    </div>
  );
};

export default SurveyHeader;
