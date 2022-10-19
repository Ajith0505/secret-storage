import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { handleProfilesideDrawer } from "../../../src/redux/reducers/users";
import { handleEditsideDrawer } from "../../../src/redux/reducers/users";
import { useFormik } from "formik";
import { Formik } from 'formik';
import * as Yup from "yup";
import { useState } from "react";
import { useRef } from "react";
import { editProfile } from "../../api/useraction";
import { clearStateEditProfile } from "../../../src/redux/reducers/users";

const EditSlideDrawer = () => {
  const isEditDrawerOPen = useSelector(
    (state) => state.reducers.userprofile.isEditDrawerOPen
  );
  const profileDetails = useSelector(
    (state) => state.reducers.profileapi.userProfile);

  const editProfileMessage = useSelector(
    (state) => state.reducers.editprofile.editProfiles
  );

  const success = useSelector(
    (state) => state.reducers.editprofile.success
  );

  const error = useSelector(
    (state) => state.reducers.editprofile.error
  );


  console.log("before use effect happens", editProfileMessage);

  const fileref = useRef(null)
  const dispatch = useDispatch()
  const closeEditDrawer = () => {
    dispatch(handleEditsideDrawer(false))
    dispatch(clearStateEditProfile())
  }
  const [editMessage, resetEditMessage] = useState(null)
  const [editColorMessage, setEditColorMessage] = useState(false)
  const [file, setFile] = useState(null);
  const [imgUrl, setimgUrl] = useState(null)
  const handleChange = (e) => {
    setFile(URL.createObjectURL(e.target.files[0]));
    setimgUrl(e.target.files[0])
  }


  useEffect(() => {
    if (success) {

      resetEditMessage(editProfileMessage)
      console.log("this is in the useeffect of edit profile ***********+++++++++++ ",editMessage);
      setEditColorMessage(true);
      setTimeout(() => {
        resetEditMessage(null);
        dispatch(clearStateEditProfile());
        dispatch(handleEditsideDrawer(false));
      }, 1000);

    }
    if (error) {

      resetEditMessage(error);
      setEditColorMessage(false);
      setTimeout(() => {
        resetEditMessage(null);
      }, 2000);
    }
  }, [success, error]);





  const formik = useFormik({
    initialValues: {
      name: profileDetails.name,
      email: profileDetails.email,
      number: profileDetails.contact_number,
      address: profileDetails.address,
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(20, "Must be 20 characters or less*")
        .required("Required*"),
      email: Yup.string().email("Invalid email address*").required("Required*"),
      number: Yup.number()
        .min(10, "Contact number should be a 10 digit*")
        .required("Required*"),

      address: Yup.string()
        .required("Required*"),
    })
    , onSubmit: (values, e) => {
      dispatch(editProfile({ ...values, pic: imgUrl }));
   
      // closeEditDrawer();
    
    },

  },
  )



  console.log("outside of the useeffect of edit profile ",editMessage);
  let drawerClasses = isEditDrawerOPen ? "side-edit-drawer open" : "side-edit-drawer";

  return (
    <div className={drawerClasses}>
      <div>
        <img className="drawer-background" src="images/background.svg" alt="profile-background" />

        {editMessage ?
          (<div className={editColorMessage ? "edit-profile-toaster" : "edit-profile-toaster-red"}>
            <div>
              {editMessage}
            </div>
            {editColorMessage ?
              <div className="check-image-edit">
                <img src="images/check-4.svg" alt="check-image" />
              </div>
              :
              <div className="check-image-edit">
                <img src="images/close-line.svg" alt="check-image" />
              </div>}
          </div>)
          :
          <div className="edit-profile-header">
            <div className="sidedrawer-heading">
              Edit Profile
            </div>
            <div className="sample-edit-profile" onClick={closeEditDrawer}>
              <img className="sample-pro-img" src="images/close-line.svg" alt="cross-image" />
            </div>
          </div>}



        <div className="profile-image-edit">
          <input hidden ref={fileref} type="file" onChange={handleChange} />
          <img src={file ? file : profileDetails.profile_pic} className="edit-image" />
          <button onClick={() => { fileref.current.click() }} className="image-button">
            <img className="add-image" src="images/add-icon.svg" alt="image-submit" />
          </button>
        </div>





        <div className="edit-form">

          <form onSubmit={formik.handleSubmit}>
            <div className="edit-form-fields">
              <fieldset className={formik.touched.name ?(formik.errors.name?"edit-profile-fields-error":"edit-profile-fields"):"edit-profile-fields"}>
                <legend className={formik.touched.name ?(formik.errors.name?"legend-terms-error":"legend-terms"):"legend-terms"}>Name</legend>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className={formik.touched.name ?(formik.errors.name?"input-fields-form-error":"input-fields-form"):"input-fields-form"}
                  onChange={formik.handleChange}
                  value={formik.values.name}
                />
              </fieldset>
              {formik.touched.name ? (formik.errors.name ? <p className="edit-profile-yup">{formik.errors.name}</p> : null) : null}
              <fieldset className={formik.touched.email ?(formik.errors.email?"edit-profile-fields-error":"edit-profile-fields"):"edit-profile-fields"}>
                <legend className={formik.touched.email ?(formik.errors.email?"legend-terms-error":"legend-terms"):"legend-terms"}>Email</legend>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className={formik.touched.email ?(formik.errors.email?"input-fields-form-error":"input-fields-form"):"input-fields-form"}
                  onChange={formik.handleChange}
                  value={formik.values.email} />

              </fieldset>
              {formik.touched.email ? (formik.errors.email ? <p className="edit-profile-yup">{formik.errors.email}</p> : null) : null}
              <fieldset className={formik.touched.number ?(formik.errors.number?"edit-profile-fields-error":"edit-profile-fields"):"edit-profile-fields"}>
                <legend className={formik.touched.number ?(formik.errors.number?"legend-terms-error":"legend-terms"):"legend-terms"}>Contact number</legend>
                <input
                  type="number"
                  id="number"
                  name="number"
                  className={formik.touched.number ?(formik.errors.number?"input-fields-form-error":"input-fields-form"):"input-fields-form"}
                  autoComplete="off"
                  onChange={formik.handleChange}
                  value={formik.values.number} />

              </fieldset>
              {formik.touched.number ? (formik.errors.number ? <p className="edit-profile-yup">{formik.errors.number}</p> : null) : null}
              <fieldset className={formik.touched.address ?(formik.errors.address?"field-input-area-error":"field-input-area"):"field-input-area"}>
                <legend className={formik.touched.address ?(formik.errors.address?"legend-terms-error":"legend-terms"):"legend-terms"}>Address</legend>
                <textarea
                  type="text"
                  id="address"
                  name="address"
                  className={formik.touched.address ?(formik.errors.address?"input-field-form-address-error":"input-field-form-address"):"input-field-form-address"}
                  onChange={formik.handleChange}
                  value={formik.values.address} />

              </fieldset>
              {formik.touched.address ? (formik.errors.address ? <p className="edit-profile-yup">{formik.errors.address}</p> : null) : null}
              <div className="sidedrawer-bottom">
                <button className="cancel-edit-profile" onClick={closeEditDrawer}>
                  <span className="cancel-edit" >
                    Cancel
                  </span>
                </button>
                <button type="submit" className="save-edit-profile" >
                  <span className="edit-pro-save">
                    Save
                  </span>
                </button>
              </div>
            </div>
          </form>

        </div>

      </div>
    </div>
  );
};

export default EditSlideDrawer;
