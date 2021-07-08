import React from "react";
import { useParams } from "react-router-dom";

import "./_search.scss";

const Search = () => {
  let { topicId } = useParams();
  console.log("🚀 ~ Search ~ topicId", topicId);
  return <div className="search-container">tu idą searche{topicId}</div>;
};

export default Search;
