import React from "react";
import "./_controlPanelButton.scss";

const ControlPanelButton = ({ icon, text, value, onClick }) => {
  return (
    <div key={value} className="control-panel-btn-container">
      <button value={value} className="control-panel-btn" onClick={onClick}>
        <div className="control-panel-icon-wrapper">{icon}</div>
        <div className="control-panel-text-wrapper">
          <span>{text}</span>
        </div>
      </button>
    </div>
  );
};

export default ControlPanelButton;
