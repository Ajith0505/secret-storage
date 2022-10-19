import React from "react";
import Profileimage from "./Profilepopup/Profileimage";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { handleProfileModal } from "../redux/reducers/users";
import { fetchProfileDetail } from "../api/useraction";

function Profileicons() {
    useEffect(() => {
        dispatch(fetchProfileDetail())
       
      }, [])

    const isIconClicked = useSelector(
        (state) => state.reducers.userprofile.isIconClicked
    );
    const profileDetails = useSelector(
        (state) => state.reducers.profileapi.userProfile);
    const dispatch = useDispatch()
    
    
    const openProfileModal = () => {
        dispatch(handleProfileModal(true))
    }

    let iconClasses = isIconClicked ? "profile-button-active" : "profile-button";

    return (
   <div  className="login-icons"> <img src="images/notification.svg" alt="not-img" /> <img src="images/notification-bell.svg" alt="notimg2" />
    <button  className={iconClasses} onClick={openProfileModal}><img className="profile-icon-small" src={profileDetails.profile_pic} alt="not3" /></button> 
    <Profileimage />
    </div>
  );
  }
  
  export default Profileicons;  
  