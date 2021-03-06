import React from "react";
import ButtonMain from "../ButtonMain/ButtonMain";
import RandomWords from "../RandomWords/RandomWords";
import { Link } from "react-router-dom";
import "./_welcome.scss";

const Welcome = () => {
  return (
    <div className="welcome-container">
      <RandomWords />
      <Link to="/try-it">
        <ButtonMain text="Try it out !" />
      </Link>
    </div>
  );
};

export default Welcome;
