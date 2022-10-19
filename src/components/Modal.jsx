import React, { useState } from "react";
import Tab from "./Tab";
import Signup from "../containers/Signup";
import Loginarea from "./Loginarea";

const { forwardRef, useRef, useImperativeHandle } = React;

function Modal(props) {
  const [transition, setTransition] = useState("Login");

  const childRef = useRef();

  function handleSignin() {
    setTransition("Login");
    childRef.current.handleSign();
  }

  function handleLogin() {
    setTransition("Signup");
    childRef.current.handleLog();
  }

  function handleTransitionSignup() {
    setTransition("Signup");
  }

  function handleTransitionLogin() {
    setTransition("Login");
  }

  return (
    <div className="modal-background">
      <div className="modal">
        <Tab
          ref={childRef}
          closeSignup={props.closeSignup}
          transitSignup={handleTransitionSignup}
          transitLogin={handleTransitionLogin}
        />
        {transition == "Signup" ? (
          <Signup signin={handleSignin} />
        ) : (
          <Loginarea login={handleLogin} closeSignup={props.closeSignup}/>
        )}
      </div>
    </div>
  );
}

export default Modal;
