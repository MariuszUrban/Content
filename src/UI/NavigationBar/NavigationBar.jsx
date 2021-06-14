import React from "react";
import "./_navigationBar.scss";
import { Link } from "react-router-dom";
import Logo from "../Logo/Logo";

const NavigationBar = () => {
  return (
    <section className="nav-bar-container">
      <Logo />
      <div className="nav-btn-group">
        <ul>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign-in</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default NavigationBar;
