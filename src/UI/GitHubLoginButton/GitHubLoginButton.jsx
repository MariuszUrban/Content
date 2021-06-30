import React from "react";
import { Icon } from "rsuite";
import LoginGithub from "react-login-github";
import "./_gitHubLoginButton.scss";

export const GitHubLoginButton = ({ text }) => {
  const onSuccess = (response) => console.log(response);
  const onFailure = (response) => console.error(response);

  return (
    <div className="github-login-button-wrapper">
      <div className="github-login-button-container">
        <div className="github-icon-wrapper">
          <Icon icon="github" size="2x" />
        </div>

        <LoginGithub
          className="enter-with-github"
          clientId="1b862475a66a610003ea"
          onSuccess={onSuccess}
          onFailure={onFailure}
          buttonText={text}
        />
      </div>
    </div>
  );
};
