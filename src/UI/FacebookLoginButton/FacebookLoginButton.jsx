import React from "react";
import FacebookLogin from "react-facebook-login";
import "./_facebookLoginButton.scss";
export const FacebookLoginButton = ({ text }) => {
  const responseFacebook = (response) => {
    console.log(response);
  };

  return (
    <div className="facebook-login-button-wrapper">
      <FacebookLogin
        appId="1088597931155576"
        autoLoad={false}
        textButton={text}
        fields="name,email,picture"
        callback={responseFacebook}
        cssClass="enter-with-facebook"
        icon="fa-facebook"
      />
    </div>
  );
};
