import React from "react";
import { Form, ButtonToolbar, Button } from "rsuite";
import { useForm } from "react-hook-form";
import { useSelector, useDispatch } from "react-redux";
import {
  userSelector,
  registerUser,
  setSuccess,
} from "../../app/SignIn/SignInSlice";

import GoogleLoginButton from "../GoogleLoginButton/GoogleLogin";
import { GitHubLoginButton } from "../GitHubLoginButton/GitHubLoginButton";
import { FacebookLoginButton } from "../FacebookLoginButton/FacebookLoginButton";
import "./_signInForm.scss";

function CheckForm() {
  const dispatch = useDispatch();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    dispatch(registerUser(data));
    setTimeout(() => {
      dispatch(setSuccess());
    }, 4000);
  };

  return (
    <>
      <Form
        classPrefix="register-form"
        onSubmit={handleSubmit(onSubmit)}
        method="POST"
      >
        <div className="inputs-container">
          <div className="register-input-container">
            <label for="email" className="register-input-label">
              Your email address
            </label>
            <div className="register-input-wrapp">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                {...register("email", {
                  pattern: /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/i,
                })}
                className="register-input"
              />
            </div>
          </div>
          <div className="register-input-container">
            <label for="email" className="register-input-label">
              Password
            </label>
            <div className="register-input-wrapp">
              <input
                id="password"
                name="password"
                type="password"
                className="register-input"
                autocomplete="current-password"
                {...register("password", { required: true })}
              />
            </div>
          </div>
        </div>

        <ButtonToolbar classPrefix="form-input form-btn">
          <Button appearance="primary" type="submit">
            Register
          </Button>
        </ButtonToolbar>
      </Form>
    </>
  );
}

function SocialForm() {
  return (
    <Form classPrefix="enter-with-social-buttons">
      <FacebookLoginButton text="Sign in  " />
      <GoogleLoginButton text="Sign in  " />
      <GitHubLoginButton text="Sign in" />
    </Form>
  );
}

const SignInForm = () => {
  return (
    <div className="login-form-container">
      <div className="greeting-wrapper">
        <h1 className="enter-greeting">Feel yourself</h1>
      </div>
      <CheckForm />
      <div className="enter-or-wrapper">
        <h1 className="enter-or">or</h1>
      </div>
      <SocialForm />
    </div>
  );
};

export default SignInForm;
