import React from "react";
import RecentActivity from "../RecentActivity/RecentActivity";
import ControlPanel from "../ControlPanel/ControlPanel";
import "./_dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="control-panel-wrapper">
        <ControlPanel />
      </div>
      <div className="dashboard-sections-wrapper">
        <RecentActivity />
      </div>
    </div>
  );
};
export default Dashboard;
