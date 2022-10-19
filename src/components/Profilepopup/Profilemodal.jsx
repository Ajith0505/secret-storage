import React from "react";
import "./styles.css";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleProfileModal } from "../../redux/reducers/users";
import { handleProfilesideDrawer } from "../../redux/reducers/users";
import { handleEditsideDrawer } from "../../redux/reducers/users";
import { fetchProfileDetail } from "../../api/useraction";
import { useNavigate } from "react-router-dom";

function Profilemodal() {
  useEffect(() => {
    dispatch(fetchProfileDetail())
  }, [])
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isIconClicked = useSelector(
    (state) => state.reducers.userprofile.isIconClicked
  );
  const isDrawerOPen = useSelector(
    (state) => state.reducers.userprofile.isDrawerOPen
  );
  const profileDetails = useSelector(
    (state) => state.reducers.profileapi.userProfile);



  const handleOpenDrawerButton = () => {
    dispatch(handleProfilesideDrawer(true))


  }

  const handleEditprofile = () => {
    dispatch(handleEditsideDrawer(true))
  }

 


  let menuRef = useRef();


  useEffect(() => {
    let handler = (event) => {
      if (!menuRef.current.contains(event.target)) {
        dispatch(handleProfileModal(false));
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

const setLogout = () => {
  localStorage.clear()
  // navigate("/")
  window.location.reload(false);
}

  return (
    <div className="profile-modal" ref={menuRef}>
      <div className="profile-image-div"><img className="profile-image-icon" src={profileDetails.profile_pic} alt="profile-image" /></div>
      <div className="profile-image"><span className="profile-name">{profileDetails.name}</span></div>
      <div className="profile-image"><span className="profile-gmail">{profileDetails.email}</span></div>
      <div className="profile-btn"><button className="button-editprofile" onClick={handleEditprofile}><span className="edit-profile">Edit Profile</span></button></div>
      <div className="profile-category profile-hov" onClick={handleOpenDrawerButton}><div><img src="images/user-6-line.svg" alt="user-6" /></div>
        <div className="profile-name-div"><p className="profile-cat-name">My profile</p></div></div>

      {/* <button onClick={handleOpenDrawerButton}>My Profile</button> */}

      <div className="profile-category profile-hov"><div><img src="images/layout-cards.svg" alt="user-6" /></div>
        <div className="profile-name-div"><p className="profile-cat-name">My advertisements</p></div></div>
      <div className="profile-category profile-hov"><div><img src="images/heart-line.svg" alt="user-6" /></div>
        <div className="profile-name-div"><p className="profile-cat-name">My favorites</p></div></div>
      <div className="profile-category profile-hov"><div><img src="images/logout-box-r-line.svg" alt="user-6" /></div>
        <div className="profile-name-div" onClick={setLogout}><p className="profile-cat-name">Logout</p></div></div>
    </div>
  );
}

export default Profilemodal;
