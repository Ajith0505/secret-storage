import React from "react";
import "./styles.css";
import FavouriteButton from "../FavouriteButton/FavouriteButton";
import FeaturedTag from "../FeaturedTag/FeaturedTag";

function AdBrief(props){
    return(
        <div className="ad-box">
            <div className="img-box">
            {props.featured?<FeaturedTag />:null}
                <img src={props.img} className="ad-image" alt="ad" />
                <FavouriteButton />
            </div>
            <div className="detail-box">
                <h2>{props.title}</h2>
                <br/>
                <p className="ad-location">{props.location}</p>
                <span className="ad-money">&#x20B9; {props.price}</span>
            </div>
        </div>
    );
}
export default AdBrief;
