import React from "react";
import "./styles.css";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleProfilesideDrawer } from "../../redux/reducers/users";
import { handleEditsideDrawer } from "../../redux/reducers/users";
import { fetchProfileDetail } from "../../api/useraction";
import { handleResetPwdsideDrawer } from "../../redux/reducers/users";

const SlideDrawer = () => {

  useEffect(() => {
    dispatch(fetchProfileDetail())

  }, [])
  const isDrawerOPen = useSelector(
    (state) => state.reducers.userprofile.isDrawerOPen
  );
  const profileDetails = useSelector((state) => state.reducers.profileapi.userProfile);



  const dispatch = useDispatch()
  const handleCloseDrawer = () => {
    dispatch(handleProfilesideDrawer(false))
  }

  const handleOpenEdit = () => {
    dispatch(handleEditsideDrawer(true))
  }
  const handleresetpwd = () => {
    dispatch(handleResetPwdsideDrawer(true))
  }


  let drawerClasses = isDrawerOPen ? "side-drawer open" : "side-drawer";



  return (
    <div className={drawerClasses}>
      <div className="base-profile">
        <img className="drawer-background" src="images/background.svg" alt="profile-background" />
        <div className="sidedrawer-heading">
          Profile
        </div>
        <div className="sample-profile" onClick={handleCloseDrawer}>
          <img className="sample-pro-img" src="images/close-line.svg" alt="cross-image" />
        </div>
        <div className="profile-image3x">
          <img className="user-profile-pic" src={profileDetails.profile_pic} alt="profile-pic" />
        </div>
        <div className="profile-name-side">{profileDetails.name}</div>
        <div className="profile-gmail-side"><span>{profileDetails.email}</span></div>
        <div className=" profile-edit-buttons">
          <button className="reset-pwd-side" onClick={handleresetpwd}> <span className="reset-pwd-name">Reset password</span></button>
          <button className="edit-pro-side" onClick={handleOpenEdit}> <span className="edit-pro-name">Edit Profile</span> </button>
        </div>

        <div className="profile-area">
          <div className="profile-details">
            <div className="contact-number-profile">
              Contact Number
            </div>
            <div className="number-block">
              <p>{profileDetails.contact_number}</p>
            </div>
            <div className="address-profile">
              Address
            </div>
            <div className="address-block">
              <p>
                {profileDetails.address}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default SlideDrawer;
