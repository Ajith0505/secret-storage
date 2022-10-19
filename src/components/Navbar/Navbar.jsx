import React from "react";
import "./style.css";
import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";




const Navbar = (props) => {

    return (
        <div className="navbar" >
            <Breadcrumbs para={props.para}/>
        </div>
    )
}



export default Navbar;