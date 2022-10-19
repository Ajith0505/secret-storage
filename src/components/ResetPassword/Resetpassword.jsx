import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleProfilesideDrawer } from "../../redux/reducers/users";
import { handleEditsideDrawer } from "../../redux/reducers/users";
import { useFormik } from "formik";
import { Formik } from 'formik';
import * as Yup from "yup";
import { useState } from "react";
import { handleResetPwdsideDrawer } from "../../redux/reducers/users";
import { useEffect } from "react";
import { useRef } from "react";
import { resetPasswordAction } from "../../api/useraction";
import { clearStateResetPwd } from "../../redux/reducers/users";



const ResetPwdDrawer = () => {
    const isPwdDrawerOpen = useSelector(
        (state) => state.reducers.userprofile.isPwdDrawerOpen
    );

    const isResetPwdDone = useSelector(
        (state) => state.reducers.resetpassword.isResetPwdDone
    );
    const error = useSelector(
        (state) => state.reducers.resetpassword.error
    );
    const success = useSelector(
        (state) => state.reducers.resetpassword.success
    );
    const dispatch = useDispatch()
    const closeEditDrawer = () => {
        dispatch(handleResetPwdsideDrawer(false))
        dispatch(clearStateResetPwd())
    }
    const [fieldNamecCurrent, setFieldNameCurrent] = useState(false);
    const [fieldNameNew, setFieldNameNew] = useState(false);
    const [fieldNamecConfirm, setFieldNameConfirm] = useState(false);
    const [resetMessage, setresetMessage] = useState(null);
    const [colorMessage, setcolorMessage] = useState(false);



    const handleGotoProfile = () => {
        dispatch(handleResetPwdsideDrawer(false));
        dispatch(handleProfilesideDrawer(true));
        dispatch(clearStateResetPwd())

    }

    const changePlaceholderCurrent = () => {
        setFieldNameCurrent(true);
    }
    const changePlaceholderNew = () => {
        setFieldNameNew(true);
    }
    const changePlaceholderConfirm = () => {
        setFieldNameConfirm(true);
    }


    useEffect(() => {
     
      
        if (success) {

            setresetMessage(isResetPwdDone)
            setcolorMessage(true)
            setTimeout(() => {
                setresetMessage(null);
    
            }, 2000);

        }
        if (error) {

            setresetMessage(error);
            setcolorMessage(false);
            setTimeout(() => {
                setresetMessage(null);
            }, 2000);
            console.log(resetMessage);
        }
    }, [success, error]);


    // const setResetResponse = () => {
    //     if (success) {

    //         setresetMessage(isResetPwdDone)
    //         setcolorMessage(true)
    //         setTimeout(() => {
    //             setresetMessage(null)
    //         }, 2000);

    //     }
    //     if (error) {

    //         setresetMessage(error)
    //         setcolorMessage(false)
    //         setTimeout(() => {
    //             setresetMessage(null)
    //         }, 2000);
    //         console.log(resetMessage);
    //     }
    // }






    const formik = useFormik({
        initialValues: {
            passwordcurrent: "",
            passwordnew: "",
            passwordconfirm: "",
        }, validationSchema: Yup.object({
            passwordcurrent: Yup.string().required('User password is required *'),
            passwordnew: Yup.string()
                .min(8, "Password must be atleast 8 characters long*")
                .required("Required*")
                .matches(/[0-9]/, "Password requires a number")
                .matches(/[a-z]/, "Password requires a lowercase letter")
                .matches(/[A-Z]/, "Password requires an uppercase letter")
                .matches(/[^\w]/, "Password requires a symbol")
                .required('new password is required*'),
            passwordconfirm: Yup.string()
                .oneOf([Yup.ref("passwordnew"), ""], "Passwords must match*")
                .required("Confirmation should be filled *"),

        }),
        onSubmit: (values) => {
            dispatch(resetPasswordAction(values));
            // setResetResponse()
        },

    },
    )




    let drawerClasses = isPwdDrawerOpen ? "side-reset-drawer open" : "side-reset-drawer";

    return (
        <div className={drawerClasses}>
            {resetMessage ? 
            (<div className={colorMessage ? "updated-password" : "updated-password-red"}>
                <div>{resetMessage}</div>
                {colorMessage ? 
                <div className="check-image">
                    <img src="images/check-4.svg" alt="check-image" />
                </div> 
                : <div className="check-image">
                    <img src="images/close-line.svg" alt="check-image" />
                </div>}
                </div>) :
                (<div className="resetpwd-header">
                    <div className="reset-pwd-arrow-back">
                        <button className="arrow-resetpwd" onClick={handleGotoProfile}>
                            <img src="images\arrow-left-s-line.svg" alt="arrow-button" />
                        </button>
                    </div>
                    <div className="reset-password-term">
                        <span className="reset-password-span">
                            Reset Password
                        </span>
                    </div>
                    <div className="reset-pwd-cross-button">
                        <button className="cross-resetpwd" onClick={closeEditDrawer}>
                            <img src="images\close-line.svg" alt="close-line" />
                        </button>
                    </div>
                </div>)}
            <div className="edit-reset-form">

                <form onSubmit={formik.handleSubmit}>
                    <div className="reset-pwd-formfield" >
                        <fieldset className={formik.touched.passwordcurrent ?(formik.errors.passwordcurrent?"reset-pwd-fields-error":"reset-pwd-fields"):"reset-pwd-fields"} onClick={changePlaceholderCurrent}>
                            {fieldNamecCurrent ? <legend className={formik.touched.passwordcurrent ?(formik.errors.passwordcurrent?"legend-terms-error":"legend-terms"):"legend-terms"}>Current password</legend> : <></>}
                            <input
                                type="password"
                                id="passwordcurrent"
                                name="passwordcurrent"
                                className={formik.touched.passwordcurrent ?(formik.errors.passwordcurrent?"input-fields-form-reset-error":"input-fields-form-reset"):"input-fields-form-reset"}
                                placeholder={fieldNamecCurrent ? "" : "Current password"}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.passwordcurrent}

                            />
                        </fieldset>
                        {formik.touched.passwordcurrent ? (formik.errors.passwordcurrent ? <p className="pwdnew-yup-reset">{formik.errors.passwordcurrent}</p> : null) : null}

                        <fieldset className={formik.touched.passwordnew ?(formik.errors.passwordnew?"reset-pwd-fields-error":"reset-pwd-fields"):"reset-pwd-fields"} onClick={changePlaceholderNew}>
                            {fieldNameNew ? <legend className={formik.touched.passwordnew ?(formik.errors.passwordnew?"legend-terms-error":"legend-terms"):"legend-terms"}>New password</legend> : <></>}

                            <input
                                type="password"
                                id="passwordnew"
                                name="passwordnew"
                                className={formik.touched.passwordnew ?(formik.errors.passwordnew?"input-fields-form-reset-error":"input-fields-form-reset"):"input-fields-form-reset"}
                                placeholder={fieldNameNew ? "" : "New password"}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.passwordnew}

                            />
                        </fieldset>
                        {formik.touched.passwordnew ? (formik.errors.passwordnew ? <p className="pwdnew-yup-reset">{formik.errors.passwordnew}</p> : null) : null}


                        <fieldset className={formik.touched.passwordconfirm ? (formik.errors.passwordconfirm?"reset-pwd-fields-error":"reset-pwd-fields"):"reset-pwd-fields"} onClick={changePlaceholderConfirm}>
                            {fieldNamecConfirm ? <legend className={formik.touched.passwordconfirm ? (formik.errors.passwordconfirm?"legend-terms-error":"legend-terms"):"legend-terms"}>Confirm password</legend> : <></>}
                            <input
                                type="password"
                                id="passwordconfirm"
                                name="passwordconfirm"
                                className={formik.touched.passwordconfirm ? (formik.errors.passwordconfirm?"input-fields-form-reset-error":"input-fields-form-reset"):"input-fields-form-reset"}
                                placeholder={fieldNamecConfirm ? "" : "Confirm password"}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                value={formik.values.passwordconfirm}

                            />
                        </fieldset>
                        {formik.touched.passwordconfirm ? (formik.errors.passwordconfirm ? <p className="pwdnew-yup-reset">{formik.errors.passwordconfirm}</p> : null) : null}



                        <div className="reset-drawer-bottom">
                            <button className="cancel-edit-profile" onClick={handleGotoProfile} > 
                                <span className="cancel-reset" >Cancel</span>
                            </button>
                            <button type="submit" className="reset-profile-password" >
                                <span className="reset-pro-pwd">
                                    Reset
                                </span>
                            </button>
                        </div>
                    </div>
                </form>

            </div>

        </div>
    );
};

export default ResetPwdDrawer;