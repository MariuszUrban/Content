import React from "react";
import { useParams } from "react-router-dom";

import { Icon } from "rsuite";
import "./_recentActivity.scss";

const RecentActivity = () => {
  let { topicId } = useParams();

  return (
    <div className="recent-activity-container">
      <Icon icon="wrench" size="4x" />
      <span>Section is under construction</span>
      <span>{topicId}</span>
    </div>
  );
};

export default RecentActivity;
