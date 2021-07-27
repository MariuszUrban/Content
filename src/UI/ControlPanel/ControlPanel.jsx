import React from "react";
import {
  toggleOpenClose,
  controlPanelSelector,
} from "../../app/features/ControlPanelSlice";
import { Link, useRouteMatch } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { Icon } from "rsuite";
import ControlPanelButton from "../ControlPanelButton/ControlPanelButton";
import "./_controlPanel.scss";

const ControlPanel = () => {
  let { url } = useRouteMatch();
  const state = useSelector(controlPanelSelector);
  const { isPanelOpen } = state;

  const dispatch = useDispatch();

  const handleOpenClose = () => {
    if (isPanelOpen) {
      dispatch(toggleOpenClose(false));
    } else {
      dispatch(toggleOpenClose(true));
    }
  };

  let showHidePanel;

  if (!isPanelOpen) {
    showHidePanel = (
      <ControlPanelButton
        text="Open"
        icon={<Icon icon="bars" size="2x" />}
        onClick={handleOpenClose}
      />
    );
  }
  if (isPanelOpen) {
    showHidePanel = (
      <div className="control-panel-btns-open">
        <div className="close-btn-wrapper">
          <ControlPanelButton
            text="Close"
            icon={<Icon icon="close" size="2x" />}
            onClick={handleOpenClose}
          />
        </div>

        <ul>
          <li>
            <Link to={`${url}/search`}>
              <ControlPanelButton
                value="search"
                text="Search"
                icon={<Icon icon="search" size="2x" />}
                onClick={handleOpenClose}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/activity`}>
              <ControlPanelButton
                value="activity"
                text="Activity"
                icon={<Icon icon="dashboard" size="2x" />}
                onClick={handleOpenClose}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/fav`}>
              <ControlPanelButton
                value="fav"
                text="Favorites"
                icon={<Icon icon="heart-o" size="2x" />}
                onClick={handleOpenClose}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/lists`}>
              <ControlPanelButton
                value="lists"
                text="Lists"
                icon={<Icon icon="list" size="2x" />}
                onClick={handleOpenClose}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/notes`}>
              <ControlPanelButton
                value="notes"
                text="Notes"
                icon={<Icon icon="sticky-note-o" size="2x" />}
                onClick={handleOpenClose}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/upload`}>
              <ControlPanelButton
                value="upload"
                text="Upload"
                icon={<Icon icon="cloud-upload" size="2x" />}
                onClick={handleOpenClose}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/3d`}>
              <ControlPanelButton
                value="3d"
                text="VR View"
                icon={<Icon icon="cubes" size="2x" />}
                onClick={handleOpenClose}
              />
            </Link>
          </li>
        </ul>
      </div>
    );
  }

  return <div className="control-panel-container">{showHidePanel}</div>;
};

export default ControlPanel;
