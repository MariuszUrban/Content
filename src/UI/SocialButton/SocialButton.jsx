import React from "react";
import { Icon } from "rsuite";
import SocialLogin from "react-social-login";
import "./_socialButton.scss";

const SocialButton = ({ provider, triggerLogin, entry, ...props }) => {
  return (
    <div className="social-login-container">
      <button className={`enter-with-social`} onClick={triggerLogin} {...props}>
        <span>{`${entry} with ${provider}`}</span>
        <Icon icon={provider} />
      </button>
    </div>
  );
};

export default SocialButton;
