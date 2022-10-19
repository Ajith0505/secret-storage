import React,{useState} from "react";
import "./styles.css";

function FavouriteButton(props){
    const[select,setSelect] = useState(false);
    return(
        <div className="favourites-box" onClick={()=>setSelect(!select)}>
            {select?<img src="./images/heart-fill.svg" className="hearts" alt="heart"/>:<img src="./images/heart-line.svg" className="hearts" alt="heart" />}
        </div>
    );
}
export default FavouriteButton;
