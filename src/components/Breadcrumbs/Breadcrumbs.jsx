import React from "react";
import "./styles.css";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";


const Breadcrumbs = (props) => {
    const adCategory = useSelector((state) => state.reducers.adcategory.adCategory);
    const advertIconss = adCategory.categories
    console.log("inside breadcrumbs***********",advertIconss);
    const [category,setCategory] = useState(null)
    useEffect(() => {
        // console.log("inside breadcrumbs inside of useeffect",advertIconss[(props.para-1)].id)
        if (advertIconss[(props.para-1)].id){

            setCategory(advertIconss[(props.para-1)].name)
        }
      }, [])
    return (
        <div className="breadcrumb-container" >
            <ul className="breadcrumbs">
                <li className="breadcrumbs-items">
                    Home
                </li>
                {true ? <li className="breadcrumbs-items">
                    {category}
                </li> : null}
            </ul>
        </div>);
}

export default Breadcrumbs;