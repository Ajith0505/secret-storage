import React, {useEffect} from "react";
import Modal from "./Modal";



function Signup(props) {
 
  return <Modal closeSignup={props.closeSignup} />;
  
}

export default Signup;
