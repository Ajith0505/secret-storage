import React from "react";
import "./styles.css"
import AdBrief from "../../components/AdBrief/AdBrief";
import ads from "../../components/adcards";

const Adlist = () => {
    return(
        <div className="adlist-main-container">
             <div className="ads-container">
      
                    {ads && ads.map(
                        (ad)=>{
                        return(
                            <AdBrief
                            key={ad.id}
                            title={ad.title}
                            img={ad.img}
                            location={ad.location}
                            price={ad.price}
                            featured={ad.featured}
                            />  
                        );
                        }
                    )}
      
            </div>


        </div>
    )
}

export default Adlist;