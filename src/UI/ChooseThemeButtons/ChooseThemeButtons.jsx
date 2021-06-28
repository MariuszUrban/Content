import React from "react";
import ButtonMain from "../ButtonMain/ButtonMain";
import Draggable from "react-draggable";
import {
  removeThemesFromArray,
  saveThemesToArray,
  selectState,
} from "../../app/TrItOut/TryItOutSlice";
import { useDispatch, useSelector } from "react-redux";
import "./_chooseThemeButtons.scss";

const areEqual = (prevProps, nextProps) => true;

const ChooseThemeButtons = React.memo(({ random_themes }) => {
  const dispatch = useDispatch();
  const state = useSelector(selectState);
  const { selected_themes } = state;

  function arrayRemove(arr, value) {
    return arr.filter(function (ele) {
      return ele !== value;
    });
  }

  const handleToggleValue = (e) => {
    e.preventDefault();
    if (!selected_themes.includes(e.target.innerText)) {
      dispatch(saveThemesToArray(e.target.innerText));
    }
    if (selected_themes.includes(e.target.innerText)) {
      dispatch(
        removeThemesFromArray(arrayRemove(selected_themes, e.target.innerText))
      );
    }
  };

  return (
    <div className="choose-theme-buttons-container">
      {random_themes.map((theme, index) => {
        return (
          <Draggable
            defaultPosition={{
              x: Math.floor(Math.random() * 550) - 20,
              y: Math.floor(Math.random() * 350) - 20,
            }}
          >
            <div key={theme} className="theme-btn-wrapper">
              <ButtonMain
                text={theme}
                value={theme}
                classPrefix={
                  selected_themes.includes(theme)
                    ? "try-out-btn active_btn"
                    : " try-out-btn"
                }
                getValue={handleToggleValue}
                disabled={
                  !selected_themes.includes(theme) &&
                  selected_themes.length === 5
                }
              />
            </div>
          </Draggable>
        );
      })}
    </div>
  );
}, areEqual);

export default ChooseThemeButtons;
