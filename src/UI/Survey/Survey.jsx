import React, { useState } from "react";
import SurveyWelcome from "../SurveyWelcome/SurveyWelcome";
import SurveyProfile from "../SurveyProfile/SurveyProfile";
import ButtonMain from "../ButtonMain/ButtonMain";
import "./_survey.scss";

const Survey = () => {
  const [isShown, setIsShown] = useState("welcome");
  console.log("🚀 ~ Survey ~ isShown", isShown);

  let section;

  // if (isShown === "welcome") {
  //   section = <SurveyWelcome onClick={setIsShown("create-profile")} />;
  // }
  // if (isShown === "create-profile") {
  //   section = <SurveyProfile onClick={setIsShown("create-colors")} />;
  // }

  return (
    <div className="survey-container">
      {isShown === "welcome" ? (
        <SurveyWelcome
          text="welcome"
          button={<ButtonMain text="Next" />}
          button2={<ButtonMain text="Skip" classPrefix="skip-btn" />}
        />
      ) : null}
    </div>
  );
};

export default Survey;
