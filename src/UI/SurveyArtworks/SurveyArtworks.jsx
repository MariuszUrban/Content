import React, { useMemo } from "react";
import SurveyHeader from "../SurveyHeader/SurveyHeader";
import ButtonMain from "../ButtonMain/ButtonMain";
import { Row } from "rsuite";
import { useSelector, useDispatch } from "react-redux";
import {
  profileSelector,
  setArtworks,
  removeArtworks,
  setSection,
} from "../../app/features/SurveySlice";
import { chunk } from "../../app/helpers/Chunk";
import { getRandom } from "../../app/helpers/Random";
import "./_surveyArtworks.scss";

const SurveyArtworks = () => {
  const state = useSelector(profileSelector);
  const { artworks, chosenArtworks } = state;

  const dispatch = useDispatch();
  const chunked = useMemo(() => chunk(getRandom(artworks, 12), 4), []);

  const handleSubmitArtwork = (e) => {
    if (chosenArtworks.includes(e.target.innerHTML)) {
      dispatch(removeArtworks(e.target.innerHTML));
    } else {
      dispatch(setArtworks(e.target.innerHTML));
    }
  };

  const goBack = () => {
    dispatch(setSection("colors-profile"));
  };

  const goNext = () => {
    dispatch(setSection("all-set"));
  };

  return (
    <div className="survey-container survey-container-second-wrapper">
      <div className="survey-header">
        <SurveyHeader
          text="If you would be an artwork, you would be:"
          className="survey-artworks"
        />
      </div>
      <div className="survey-content artworks-btns ">
        {chunked.map((arr, idx) => (
          <Row classPrefix="survey-artworks-row">
            {arr.map((el) => (
              <ButtonMain
                classPrefix={
                  chosenArtworks.includes(el)
                    ? "survey-artworks-btn btn-chosen"
                    : "survey-artworks-btn "
                }
                text={el}
                value={el}
                getValue={handleSubmitArtwork}
              />
            ))}
          </Row>
        ))}
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

export default SurveyArtworks;
