import React from "react";
import GoogleLogin from "react-google-login";
import "./_googleLogin.scss";

const GoogleLoginButton = ({ text }) => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <div className="google-login-button-wrapper">
      <GoogleLogin
        className="enter-with-google"
        clientId="912106877940-5gen5gklu28rflds407geasholg61v7e.apps.googleusercontent.com"
        buttonText={text}
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={"single_host_origin"}
        style={{ borederRadius: "30px" }}
      />
    </div>
  );
};

export default GoogleLoginButton;
