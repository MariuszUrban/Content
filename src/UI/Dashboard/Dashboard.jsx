import React from "react";
import RecentActivity from "../RecentActivity/RecentActivity";
import ControlPanel from "../ControlPanel/ControlPanel";
import Search from "../Search/Search";
import Favorites from "../Favorites/Favorites";
import Upload from "../Upload/Upload";
import ThreeDView from "../ThreeDView/ThreeDView";
import { Switch, Route, useRouteMatch, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { controlPanelSelector } from "../../app/features/ControlPanelSlice";

import "./_dashboard.scss";
import Lists from "../Lists/Lists";
import Notes from "../Notes/Notes";

const Dashboard = () => {
  const state = useSelector(controlPanelSelector);
  let { path } = useRouteMatch();
  let { topicId } = useParams();
  console.log("🚀 ~ Dashboard ~ topicId", topicId);

  return (
    <div className="dashboard-container">
      <div className="control-panel-wrapper">
        <ControlPanel />
      </div>
      <div className="dashboard-sections-wrapper">
        <Switch>
          <Route
            exact
            path={`${path}/control-activity`}
            children={<RecentActivity />}
          />
          <Route path={`${path}/control-search`} children={<Search />} />
          <Route path={`${path}/control-fav`} children={<Favorites />} />
          <Route path={`${path}/control-lists`} children={<Lists />} />
          <Route path={`${path}/control-notes`} children={<Notes />} />
          <Route path={`${path}/control-upload`} children={<Upload />} />
          <Route path={`${path}/control-3d`} children={<ThreeDView />} />
        </Switch>
      </div>
    </div>
  );
};
export default Dashboard;
