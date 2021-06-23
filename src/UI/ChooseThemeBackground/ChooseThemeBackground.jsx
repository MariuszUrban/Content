import React, { useState } from "react";
import "./_chooseThemeBackground.scss";

const ChooseThemeBackground = () => {
  const randomNumber = () => {
    return Math.floor(Math.random() * 71);
  };

  const [m_position_x, setPositionX] = useState(null);
  const [m_position_y, setPositionY] = useState(null);

  const setPositionValues = (e) => {
    e.preventDefault();
    setPositionX(e.clientX);
    setPositionY(e.clientY);
  };

  return (
    <div
      className="choose-theme-container"
      onMouseOverCapture={setPositionValues}
    >
      <div className="theme-word-wrapper choose">
        <span
          className="theme-word choose-postion"
          style={{
            top: randomNumber() + 10 + "%",
            left: randomNumber() + 10 + "%",
          }}
        >
          Choose
        </span>
      </div>
      <div className="theme-word-wrapper random">
        <span
          className="theme-word random-postion"
          style={{ top: randomNumber() + "%", left: randomNumber() + "%" }}
        >
          random
        </span>
      </div>
      <div className="theme-word-wrapper theme">
        <span
          className="theme-word theme-postion"
          style={{ top: randomNumber() + "%", left: randomNumber() + "%" }}
        >
          theme
        </span>
      </div>
    </div>
  );
};

export default ChooseThemeBackground;
