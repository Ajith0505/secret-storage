import React, { useEffect, useState } from "react";
import SignupArea from "../components/SignupArea";

import { useSelector, useDispatch } from "react-redux";
import { registerUsers } from "../redux/reducers/signupAreaSlice";

function Signup(props) {
  const inputs = useSelector((state) => state.signup.inputs);
  const dispatch = useDispatch();

  const signupSubmit = () => {
    dispatch(registerUsers(inputs));
  };

  const signupResponse = useSelector((state) => state.signup.signupResponse);
  const loading = useSelector((state) => state.signup.loading);
  const error = useSelector((state) => state.signup.error);
  const success = useSelector((state) => state.signup.success);


  if(success){
    props.signin();
  }

  return (
    <SignupArea
      signin={props.signin}
      handleSubmit={signupSubmit}
      signupError={error ? error : ""}
      signupMessage={signupResponse ? signupResponse : ""}
    />
  );
}

export default Signup;
