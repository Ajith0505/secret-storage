import React from "react";
import Profilemodal from "./Profilemodal";
import { useSelector } from "react-redux";
import SlideDrawer from "../Profileslidedrawer/Slidedrawer";
import Backdrop from "../Profileslidedrawer/Backdrop";
import EditSlideDrawer from "../Edit Profile/Editpsidedrawer";
import Backdropedit from "../Edit Profile/Backdrop";
import ResetPwdDrawer from "../ResetPassword/Resetpassword";

function Profileimage(props) {
  const isIconClicked = useSelector(
    (state) => state.reducers.userprofile.isIconClicked
  );
  const isDrawerOPen = useSelector(
    (state) => state.reducers.userprofile.isDrawerOPen
  );

  const isEditDrawerOPen = useSelector(
    (state) => state.reducers.userprofile.isEditDrawerOPen
  );

  const isPwdDrawerOpen = useSelector(
    (state) => state.reducers.userprofile.isPwdDrawerOpen
  );

  return (
    <div>

      {isIconClicked && (<Profilemodal />)}

      {isDrawerOPen && <SlideDrawer />}
      {isDrawerOPen && <Backdrop />}

      {isEditDrawerOPen && <EditSlideDrawer />}
      {isEditDrawerOPen && <Backdropedit />}


      {isPwdDrawerOpen && <ResetPwdDrawer />}
      {isPwdDrawerOpen && <Backdrop />}
    </div>
  );
}

export default Profileimage;
