import React from "react";
import Banner from "../components/banner/banner";
import Adcategory from "../components/Adcategory/Adcategory";
import { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { fetchAdcategory } from "../api/useraction";

function Main() {
  const adCategory = useSelector((state) => state.reducers.adcategory.adCategory);
  console.log("In the main function",adCategory)
  
  const advertIconss = adCategory.categories
  console.log("In the main function after",advertIconss)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchAdcategory())
  }, [])

  return (<main className="main-content"><div className="div-main"><Banner /><Adcategory category={advertIconss}/><div className="main-gallery"></div></div></main>);
}

export default Main;
