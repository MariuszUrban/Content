import React from "react";
import "./_buttonMain.scss";
const ButtonMain = ({ text, value, classPrefix, getValue, disabled }) => {
  return (
    <div className={`main-btn-container ${classPrefix}`}>
      <button onClick={getValue} disabled={disabled}>
        <span value={value}>{text}</span>
      </button>
    </div>
  );
};

export default ButtonMain;
