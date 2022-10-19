import React, { useState } from "react";

const { forwardRef, useRef, useImperativeHandle } = React;

const Tab = forwardRef((props, ref) => {
  const [active, setActive] = useState("Login");

  function handleLogin() {
    setActive("Login");
    props.transitLogin();
  }

  function handleSignup() {
    setActive("Signup");
    props.transitSignup();
  }

  useImperativeHandle(ref, () => ({
    handleSign() {
      handleLogin();
    },
    handleLog(){
      handleSignup();
    },
  }));

  function handleSignup() {
    setActive("Signup");
    props.transitSignup();
  }

  return (
    <div className="tab-outer-box">
      {active == "Login" ? (
        <button className="tab-button tab-button-active" onClick={handleLogin}>
          Login
        </button>
      ) : (
        <button className="tab-button" onClick={handleLogin}>
          Login
        </button>
      )}
      {active == "Signup" ? (
        <button className="tab-button tab-button-active" onClick={handleSignup}>
          Sign Up
        </button>
      ) : (
        <button className="tab-button" onClick={handleSignup}>
          Sign Up
        </button>
      )}
      <button className="tab-close" onClick={props.closeSignup}>
        <img src="images/cross.svg" className="tab-close-img" />
      </button>
    </div>
  );
});

export default Tab;
