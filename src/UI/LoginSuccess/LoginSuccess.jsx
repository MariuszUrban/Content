import React from "react";
import ButtonMain from "../../UI/ButtonMain/ButtonMain";
import { Link } from "react-router-dom";
import "./_loginSuccess.scss";

const LoginSuccess = () => {
  return (
    <div className="success-container">
      <div className="success-icon-wrapper">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="52"
          height="64"
          viewBox="0 0 52 64"
        >
          <title>Alien</title>
          <g>
            <g
              id="Page-1"
              stroke="none"
              stroke-width="1"
              fill="none"
              fill-rule="evenodd"
            >
              <g id="Alien" transform="translate(1 1)" stroke="#6B6C6E">
                <path
                  d="M50 22.5C50 41.8 29 62 25 62S0 40.7 0 22.5C0 10.7 11.2 0 25 0s25 10.7 25 22.5z"
                  id="Shape"
                  stroke-width="2"
                ></path>
                <ellipse
                  id="Oval"
                  stroke-width="2"
                  transform="rotate(-45.008 37.015 28.27)"
                  cx="37.015"
                  cy="28.471"
                  rx="6.5"
                  ry="2.7"
                ></ellipse>
                <ellipse
                  id="Oval"
                  stroke-width="2"
                  transform="rotate(45.008 13.718 28.912)"
                  cx="13.518"
                  cy="29.112"
                  rx="6.3"
                  ry="2.7"
                ></ellipse>
              </g>
            </g>
          </g>
        </svg>
      </div>
      <div className="success-message-wrapper">
        <h1 className="success-message">
          Account has been successfully created!
        </h1>
      </div>
      <div className="success-button-wrapper">
        <Link to="/survey">
          <ButtonMain text="enter" />
        </Link>
      </div>
    </div>
  );
};

export default LoginSuccess;
