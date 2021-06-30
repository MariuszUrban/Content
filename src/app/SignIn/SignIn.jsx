import React from "react";
import SignInForm from "../../UI/SignInForm/SignInForm";
import { useSelector } from "react-redux";
import { userSelector } from "./SignInSlice";
import { useHistory } from "react-router-dom";
import Loader from "react-loader-spinner";
import LoginSuccess from "../../UI/LoginSuccess/LoginSuccess";
import "../Login/_login.scss";

export const SignIn = () => {
  const { isFetching, isSuccess, isError, errorMessage } =
    useSelector(userSelector);

  return (
    <div className="enter-container">
      {!isFetching && !isSuccess ? <SignInForm /> : null}
      {isFetching && !isSuccess ? <Loader color="#204361" /> : null}
      {!isFetching && isSuccess ? <LoginSuccess /> : null}
    </div>
  );
};
