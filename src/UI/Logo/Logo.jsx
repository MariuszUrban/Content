import React from "react";
import { Link } from "react-router-dom";
import Museum from "./utils/museum.svg";
import "./_logo.scss";

const Logo = () => {
  return (
    <div className="logo-container pulse">
      <Link to="/">
        <div className="logo-image">
          <img src={Museum} alt="" />
        </div>
        <div className="logo-name">
          <h1>Content</h1>
        </div>
      </Link>
    </div>
  );
};

export default Logo;
