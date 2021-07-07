import React, { useState } from "react";
import { Icon } from "rsuite";
import ControlPanelButton from "../ControlPanelButton/ControlPanelButton";
import "./_controlPanel.scss";

const ControlPanel = () => {
  const [isOpen, toggleOpenClose] = useState(false);

  const handleOpenClose = () => {
    if (isOpen) {
      toggleOpenClose(false);
    } else {
      toggleOpenClose(true);
    }
  };

  let showHidePanel;

  if (!isOpen) {
    showHidePanel = (
      <ControlPanelButton
        value="control-search"
        text="Close"
        icon={<Icon icon="bars" size="2x" />}
        onClick={handleOpenClose}
      />
    );
  }
  if (isOpen) {
    showHidePanel = (
      <>
        <ControlPanelButton
          value="control-search"
          text="Close"
          icon={<Icon icon="close" size="2x" />}
          onClick={handleOpenClose}
        />
        <ControlPanelButton
          value="control-activity"
          text="Activity"
          icon={<Icon icon="dashboard" size="2x" />}
          onClick
        />
        <ControlPanelButton
          value="control-fav"
          text="Favorites"
          icon={<Icon icon="heart-o" size="2x" />}
          onClick
        />
        <ControlPanelButton
          value="control-list"
          text="Lists"
          icon={<Icon icon="list" size="2x" />}
          onClick
        />
        <ControlPanelButton
          value="control-notes"
          text="Notes"
          icon={<Icon icon="sticky-note-o" size="2x" />}
          onClick
        />
        <ControlPanelButton
          value="control-upload"
          text="Upload"
          icon={<Icon icon="cloud-upload" size="2x" />}
          onClick
        />
        <ControlPanelButton
          value="control-3d"
          text="3D View"
          icon={<Icon icon="cubes" size="2x" />}
          onClick
        />
      </>
    );
  }

  return <div className="control-panel-container">{showHidePanel}</div>;
};

export default ControlPanel;
