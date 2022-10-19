import React from "react";
import "./styles.css"
import Card from "./Adcard";


function createCard(advertIcon) {
    return (
      
      <Card
      key={advertIcon.id}
      catid={advertIcon.id}
      name={advertIcon.name}
      imgs={advertIcon.image_default}
      imgss={advertIcon.image_active}
      />
     
    );
  }

const Adcategory = (props) => {

    const sampleAdIcons=props.category
    return ( <div className="ad-category">{sampleAdIcons && sampleAdIcons.map(createCard)}</div> );
}
export default Adcategory
