import React from "react";
import { useState } from "react";
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { useFormik } from "formik"
import * as Yup from "yup"
import { useDispatch, useSelector } from 'react-redux'
import { userLogin } from "../api/useraction"
import { useEffect } from "react";


function Loginarea(props) {
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);
    const userToken = useSelector(
        (state) => state.reducers.login.userToken
    );
    const userInfo = useSelector(
        (state) => state.reducers.login.userInfo
    );
    const error = useSelector(
        (state) => state.reducers.login.error
    );
    const success = useSelector(
        (state) => state.reducers.login.success
    );
    // let token=userInfo.data.access_token
    // localStorage.setItem("userToken",token)
    const username = useSelector((state) => state.signup.inputs.username);
    const signupResponse = useSelector((state) => state.signup.signupResponse);
    const [loginError, setloginError] = useState(null);
    const [isLoginSubmit, setisLoginSubmit] = useState(false);
    const [isSignupRes,setIsSignupRes] = useState(signupResponse)
    const dispatch = useDispatch()

    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        }, validationSchema: Yup.object({
            username: Yup.string().required('Username is required *'),
            password: Yup.string().required('Password is required *'),

        })
        , onSubmit: (values) => {
            //api.then
            dispatch(userLogin(values))
            setisLoginSubmit(true)


        },

    },
    )

    // console.log(formik.values);

    useEffect(() => {
       
        console.log("sucess before", success);
        console.log("error before", error);
        if (isSignupRes){
            setTimeout(() => {
                setIsSignupRes(null);
              }, 2000);

        }

        if (success) {
            console.log("login sucess");
            console.log(userInfo.data.access_token);
            localStorage.setItem("userToken",userInfo.data.access_token)
            localStorage.setItem("refreshToken",userInfo.data.refresh_token)

        }
        if (error) {
            console.log("just error", error);
            console.log("just error after parsing",error.error.message);
            setloginError(error.error.message);
            setTimeout(() => {
                setloginError(null);
              }, 2000);

        }
        console.log("login error state", isLoginSubmit);
        console.log("error****", error);
        if ((isLoginSubmit && success)) {
            props.closeSignup()
        }

    }, [userToken, userInfo, success, error]);

    const handleToggle = () => {
        if (type === 'password') {
            setIcon(eye);
            setType('text');
        }
        else {
            setIcon(eyeOff);
            setType('password');
        }
    }

   


    // const setCookie = () => {
    //     var user = formik.values.username;
    //     var pwd = formik.values.password;
    //     localStorage.setItem("myusrname", user);
    //     localStorage.setItem("mypswd", pwd);

    // }

    // const getCookieData = () => {

    //     var users=localStorage.getItem('myusrname');
    //     var pswrd=localStorage.getItem('mypswd ');
    //     formik.values.username = users;
    //     formik.values.password = pswrd;
       

    // }

    // const getCookie = (cname) => {
    //     var name = cname + "=";
    //     var decodedCookie = decodeURIComponent(document.cookie);
    //     var ca = decodedCookie.split(';');
    //     for (var i = 0; i < ca.length; i++) {
    //         var c = ca[i];
    //         while (c.charAt(0) == ' ') {
    //             c = c.substring(1);
    //         }
    //         if (c.indexOf(name) == 0) {
    //             return c.substring(name.length, c.length);
    //         }
    //     }
    //     return "";
    // }
    return (<div className="login-form " >
        <form onSubmit={formik.handleSubmit}>
            <input type="text" id="username" name="username" placeholder="Username" className="username" autoComplete="on" onChange={formik.handleChange} value={formik.values.username} /><br />
            {formik.touched.username ? (formik.errors.username ? <p className="pwd-yup">{formik.errors.username}</p> : null) : null}
            <div className="username"><input type={type} id="password" name="password" placeholder="Password" autoComplete="on" className="password-area" onChange={formik.handleChange} value={formik.values.password} /><span onClick={handleToggle} style={{ color: '#00c0f5' }}><Icon icon={icon} size={20} /></span></div><br />
            {formik.touched.password ? (formik.errors.password ? <p className="pwd-yup">{formik.errors.password}</p> : null) : null}
            
            {loginError ? <div className="login-submit-error"><p className="login-error"> {loginError}</p></div> :
            <button type="submit" name="field_name" value="submitted_value" className="login-submit" >Sign In</button>}
            <div><p></p></div>

        </form>

        {isSignupRes ? 
        <div className="message-login-div"><p className="message-login">{signupResponse}!</p></div>
        : 
        <div className="rem-for-pwd">
            <div className="remember">
                <input type="checkbox" id="remember" name="remember-me" value="" />
                <span className="remember-me" >Remember me</span>
            </div>
            <div className="Forgot-password">Forgot password?</div>
        </div>}
        <div className="or-login-with">
            <p>or login with</p>
        </div>

        <div className="logos">
            <div className="facebook">
                <img src="images/f-logo-rgb-blue-1024.svg" alt="fb-img" />
            </div>
            <div className="google">
                <img src="images/google.svg" alt="google-img" />
            </div>
            <div className="facebook">
                <img src="images/twitter-login.svg" alt="twit-img" />
            </div>
        </div>

        <div className="acco-para" > <p>Don’t you have an account? <span className="Forgot-password " onClick={props.login}>Sign Up</span></p></div>
    </div>);
}

export default Loginarea;
