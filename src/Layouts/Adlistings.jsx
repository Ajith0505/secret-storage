import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Adgallerycat from "../containers/Adnavbar/Adgallerycat";
import { useParams } from "react-router-dom";
import Adlist from "../containers/AdList/Adlist";

function Adlisting(){

    let {id}= useParams();
    return (
    <div>
        <Header />
        <Adgallerycat para={id}  />
        <Adlist />
        <Footer footerimage={true}/>
    </div>
    );
}

export default Adlisting;
