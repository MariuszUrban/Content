import React, { useState } from "react";
import ButtonMain from "../../ButtonMain/ButtonMain";
import { Link, useRouteMatch } from "react-router-dom";

import "./_searchControlBar.scss";

const SearchControlBar = () => {
  const [isActive, setActive] = useState("");
  let { url } = useRouteMatch();

  const handleActiveClass = (name) => {
    if (isActive === name) {
      return "search-control-bar-btn active";
    } else {
      return '"search-control-bar-btn"';
    }
  };

  const handleState = (e) => {
    setActive(e.target.innerHTML);
  };

  return (
    <div className="search-control-bar-container">
      <div className="search-control-bar-header">
        <h1 className="search-control-bar-title">Search by</h1>
      </div>
      <div className="search-control-bar-btns">
        <ul>
          <li>
            <Link to={`${url}/by-keywords`}>
              <ButtonMain
                classPrefix={handleActiveClass("Keywords")}
                text="Keywords"
                value="keywords"
                getValue={handleState}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/by-periods`}>
              <ButtonMain
                classPrefix={handleActiveClass("Period")}
                text="Period"
                value="periods"
                getValue={handleState}
              />
            </Link>
          </li>
          <li>
            <Link to={`${url}/by-themes`}>
              <ButtonMain
                classPrefix={handleActiveClass("Themes")}
                text="Themes"
                value="themes"
                getValue={handleState}
              />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SearchControlBar;
