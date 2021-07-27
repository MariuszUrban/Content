import React from "react";
import RecentActivity from "../RecentActivity/RecentActivity";
import ControlPanel from "../ControlPanel/ControlPanel";
import Search from "../Search/Search";
import Favorites from "../Favorites/Favorites";
import Upload from "../Upload/Upload";
import ThreeDView from "../ThreeDView/ThreeDView";
import { Switch, Route, useRouteMatch } from "react-router-dom";

import "./_dashboard.scss";
import Lists from "../Lists/Lists";
import Notes from "../Notes/Notes";

const Dashboard = () => {
  let { path } = useRouteMatch();

  return (
    <div className="dashboard-container">
      <div className="control-panel-wrapper">
        <ControlPanel />
      </div>
      <div className="dashboard-sections-wrapper">
        <Switch>
          <Route
            exact
            path={`${path}/activity`}
            children={<RecentActivity />}
          />
          <Route path={`${path}/search`} children={<Search />} />
          <Route path={`${path}/fav`} children={<Favorites />} />
          <Route path={`${path}/lists`} children={<Lists />} />
          <Route path={`${path}/notes`} children={<Notes />} />
          <Route path={`${path}/upload`} children={<Upload />} />
          <Route path={`${path}/3d`} children={<ThreeDView />} />
        </Switch>
      </div>
    </div>
  );
};
export default Dashboard;
