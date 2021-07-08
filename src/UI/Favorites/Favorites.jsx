import React from "react";
import { useParams } from "react-router-dom";

import "./_favorites.scss";

const Favorites = () => {
  let { topicId } = useParams();

  return (
    <div className="favorites-container">tutaj idą ulubione {topicId}</div>
  );
};

export default Favorites;
