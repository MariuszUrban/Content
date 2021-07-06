import React from "react";

const SurveyHeader = ({ text, className }) => {
  return (
    <div className="survey-header-container">
      <h1 className={`survey-header-title ${className}`}>{text}</h1>
    </div>
  );
};

export default SurveyHeader;
