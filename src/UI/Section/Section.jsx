import React from "react";
import { useParams } from "react-router-dom";
import TextSearch from "../../app/Searchers/textSearch/TextSearch";
import StyleSearch from "../../app/Searchers//styleSearch/StyleSearch";
import FeelingsSearch from "../../app/Searchers/feelingsSearch/FeelingsSearch";
import "./_section.scss";

const Section = ({ setPending }) => {
  let { topicId } = useParams();

  let section;

  if (topicId === "by-keywords") {
    section = <TextSearch setPending={setPending} />;
  }
  if (topicId === "by-periods") {
    section = <StyleSearch setPending={setPending} />;
  }
  if (topicId === "by-themes") {
    section = <FeelingsSearch setPending={setPending} />;
  }

  return <div className="search-section-wrapper">{section}</div>;
};

export default Section;
