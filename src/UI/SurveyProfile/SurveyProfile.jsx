import React, { useMemo } from "react";
import { Form } from "rsuite";
import { useDispatch } from "react-redux";
import {
  setSection,
  setName,
  setAge,
  setNationality,
  setLikes,
} from "../../app/features/SurveySlice";
import Select from "react-select";
import countryList from "react-select-country-list";
import ButtonMain from "../ButtonMain/ButtonMain";
import SurveyHeader from "../SurveyHeader/SurveyHeader";
import "./_surveyProfile.scss";

const SurveyProfile = () => {
  const options = useMemo(() => countryList().getData(), []);
  const dispatch = useDispatch();

  const nameHandler = (e) => {
    dispatch(setName(e.target.value));
  };

  const ageHandler = (e) => {
    dispatch(setAge(e.target.value));
  };

  const selectHandler = (e) => {
    dispatch(setNationality(e.label));
  };

  const likeHandler = (e) => {
    dispatch(setLikes(e.target.value));
  };

  const goBack = () => {
    dispatch(setSection("welcome"));
  };

  const goNext = () => {
    dispatch(setSection("colors-profile"));
  };

  return (
    <div className="survey-container">
      <div className="survey-header">
        <SurveyHeader text="Create profile" />
      </div>
      <div className="survey-content">
        <div className="survey-form-wrapper">
          <Form classPrefix="survey-form-profile">
            <div className="survey-input-wrapper">
              <input
                type="text"
                className="survey-input"
                placeholder="Your name"
                onChange={nameHandler}
              />
            </div>
            <div className="survey-input-wrapper">
              <input
                type="number"
                className="survey-input"
                min="10"
                placeholder="Age"
                onChange={ageHandler}
              />
            </div>
            <div className="survey-input-wrapper">
              <Select
                className="survey-select"
                options={options}
                onChange={selectHandler}
                placeholder="Nationality"
                defaultValue="nationality"
              />
            </div>

            <div className="survey-input-wrapper">
              <input
                type
                className="survey-input"
                placeholder="Thing you enjoy the most"
                onChange={likeHandler}
              />
            </div>
          </Form>
        </div>
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

export default SurveyProfile;
