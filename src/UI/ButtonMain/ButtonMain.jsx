import React from "react";
import "./_buttonMain.scss";
const ButtonMain = ({ text }) => {
  return (
    <div className="main-btn-container">
      <button>
        <span>{text}</span>
      </button>
    </div>
  );
};

export default ButtonMain;
