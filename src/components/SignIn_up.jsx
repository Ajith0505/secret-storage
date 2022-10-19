import React from "react";

function Signin_up(props) {
  return (

    <button className="button-signup constant-width info" onClick={ props.onSignup }><span className="sign-insign-up">
        Sign in/Sign up
      </span></button>
);
}

export default Signin_up;  
