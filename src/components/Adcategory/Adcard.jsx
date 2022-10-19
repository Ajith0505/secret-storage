import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";







function Card(props) {
    const isLoggedin  = useSelector(
        (state) => state.reducers.login.isloggedin)
    const [isHovering, setIsHovering] = useState(false)
    const navigate = useNavigate();

    const handleMouseEnter = () => {
        setIsHovering(true)
    }

    const handleMouseLeave = () => {
        setIsHovering(false)
    }

    const changeRoute = () => {
        ( navigate(`/${props.catid}`))
       

    }

    return (
        <div className="ad-card" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} onClick={changeRoute} >
            <img className="category-icon" src={isHovering?props.imgss:props.imgs} alt="image-mobile" />
            <div className="category-name"><span className="category-text">{props.name}</span></div>
        </div>
    );
}

export default Card;
