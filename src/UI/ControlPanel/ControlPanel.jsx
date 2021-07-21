import React from "react";
import {
  setSection,
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
            <Link to={`${url}/control-search`}>
              <ControlPanelButton
                value="control-search"
                text="Search"
                icon={<Icon icon="search" size="2x" />}
                onClick={handleOpenClose}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/control-activity`}>
              <ControlPanelButton
                value="control-activity"
                text="Activity"
                icon={<Icon icon="dashboard" size="2x" />}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/control-fav`}>
              <ControlPanelButton
                value="control-fav"
                text="Favorites"
                icon={<Icon icon="heart-o" size="2x" />}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/control-lists`}>
              <ControlPanelButton
                value="control-list"
                text="Lists"
                icon={<Icon icon="list" size="2x" />}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/control-notes`}>
              <ControlPanelButton
                value="control-notes"
                text="Notes"
                icon={<Icon icon="sticky-note-o" size="2x" />}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/control-upload`}>
              <ControlPanelButton
                value="control-upload"
                text="Upload"
                icon={<Icon icon="cloud-upload" size="2x" />}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/control-3d`}>
              <ControlPanelButton
                value="control-3d"
                text="AR View"
                icon={<Icon icon="cubes" size="2x" />}
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
