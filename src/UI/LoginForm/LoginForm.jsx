import React from "react";
import {
  Form,
  FormControl,
  FormGroup,
  ControlLabel,
  ButtonToolbar,
  Button,
  Schema,
} from "rsuite";
import GoogleLoginButton from "../GoogleLoginButton/GoogleLogin";
import { GitHubLoginButton } from "../GitHubLoginButton/GitHubLoginButton";
import { FacebookLoginButton } from "../FacebookLoginButton/FacebookLoginButton";
import "./_loginForm.scss";

const { StringType, NumberType } = Schema.Types;

const model = Schema.Model({
  name: StringType().isRequired("This field is required."),
  email: StringType()
    .isEmail("Please enter a valid email address.")
    .isRequired("This field is required."),
  password: StringType().isRequired("This field is required."),
  verifyPassword: StringType()
    .addRule((value, data) => {
      console.log(data);

      if (value !== data.password) {
        return false;
      }

      return true;
    }, "The two passwords do not match")
    .isRequired("This field is required."),
});

function TextField(props) {
  const { name, label, accepter, classPrefix, ...rest } = props;
  return (
    <FormGroup classPrefix={classPrefix}>
      <ControlLabel>{label} </ControlLabel>
      <FormControl
        classPrefix="enter"
        name={name}
        accepter={accepter}
        {...rest}
      />
    </FormGroup>
  );
}

function CheckForm() {
  return (
    <Form model={model} classPrefix="login-form">
      <TextField classPrefix="form-input" name="email" label="Your e-mail" />
      <TextField
        classPrefix="form-input"
        name="password"
        label="Password"
        type="password"
      />
      <ButtonToolbar classPrefix="form-input form-btn">
        <Button appearance="primary" type="submit">
          Enter
        </Button>
      </ButtonToolbar>
    </Form>
  );
}

function SocialForm() {
  return (
    <Form>
      <FacebookLoginButton text="Login" />
      <GoogleLoginButton text="Login" />
      <GitHubLoginButton text="Login" />
    </Form>
  );
}

const LoginForm = () => {
  return (
    <div className="login-form-container">
      <div className="enter-greeting-wrapper">
        <h1 className="enter-greeting">Hi again!</h1>
      </div>

      <CheckForm />
      <div className="enter-or-wrapper">
        <h1 className="enter-or">or</h1>
      </div>

      <SocialForm />
    </div>
  );
};

export default LoginForm;
