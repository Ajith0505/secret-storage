import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import "./styles.css"
import Navbar from "../../components/Navbar/Navbar";




function Adgallerycat(props) {

  return (
  <div className="content-ads">
    <Navbar para={props.para}/>
  </div>);
}

export default Adgallerycat;
