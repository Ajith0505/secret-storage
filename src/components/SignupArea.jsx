import React, {useEffect} from "react";

import { MESSAGE_SIGNUP_SUCCESS } from "../config/constants";

//For form validation
import { useFormik } from "formik";
import * as Yup from "yup";

//To send validated inputs to container
import { useSelector, useDispatch } from "react-redux";
import { handleChangeInputs } from "../redux/reducers/signupAreaSlice";

function SignupArea(props) {

const signupResponse = useSelector((state) => state.signup.signupResponse);
const loading = useSelector((state) => state.signup.loading);
const error = useSelector((state) => state.signup.error);

  //Formik Validation Starts
  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
      confirm: "",
    },

    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address*").required("Required*"),
      username: Yup.string()
        .max(20, "Must be 20 characters or less*")
        .required("Required*"),
      password: Yup.string()
        .min(8, "Password must be atleast 8 characters long*")
        .required("Required*")
        .matches(/[0-9]/, "Password requires a number")
        .matches(/[a-z]/, "Password requires a lowercase letter")
        .matches(/[A-Z]/, "Password requires an uppercase letter")
        .matches(/[^\w]/, "Password requires a symbol"),
      confirm: Yup.string()
        .oneOf([Yup.ref("password"), ""], "Passwords must match*")
        .required("Required*"),
    }),

    onSubmit: (values) => {
      props.handleSubmit();
    },
  });
  //Formik Validation Ends

  const inputs = useSelector((state) => state.signup.inputs);
  const dispatch = useDispatch();
  dispatch(handleChangeInputs(formik.values));

  return (
    <div className="signup-area">
      <form className="signup-form" onSubmit={formik.handleSubmit}>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email id"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        {formik.touched.email && formik.errors.email ? (
          <p>{formik.errors.email}</p>
        ) : null}

        <input
          type="text"
          onChange={formik.handleChange}
          id="username"
          name="username"
          placeholder="Username"
          onBlur={formik.handleBlur}
          value={formik.values.username}
        />

        {formik.touched.username && formik.errors.username ? (
          <p>{formik.errors.username}</p>
        ) : null}

        <input
          type="password"
          id="password"
          name="password"
          placeholder="Password"
          value={formik.values.password}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />

        {formik.touched.password && formik.errors.password ? (
          <p>{formik.errors.password}</p>
        ) : null}

        <input
          type="password"
          id="confirm"
          name="confirm"
          placeholder="Confirm password"
          value={formik.values.confirm}
          onBlur={formik.handleBlur}
          onChange={formik.handleChange}
        />

        {formik.touched.confirm && formik.errors.confirm ? (
          <p>{formik.errors.confirm}</p>
        ) : null}

        {props.signupError?<p className="message message-error">{props.signupError}!</p>:null}
        
        {props.signupMessage===MESSAGE_SIGNUP_SUCCESS
        ?<p className="message message-success">{props.signupMessage}</p>
        :<p className="message message-error">{props.signupMessage}</p>}

        <input type="submit" value="Sign Up" id="submit-button"  />

      </form>

      <p className="question">
        Already have an account? <a onClick={props.signin}>Sign in</a>
      </p>
      
    </div>
  );
}

export default SignupArea;
