import React from "react";

function Footer(props)
{
    return(
        <div className="footer">
            {props.footerimage ? <></>: <img src="images/download-section@3x.png" alt="footer-image" className="footer-download-section" />  }
            <div className="footer-dark-background" >

                <div className="footer-container" >
                    <div  className="company-details" >
                    <img src="images/seconds-logo-web-footer.svg" alt="logo" className="seconds-logo-footer" />
                        <p className="address-details">QBurst Technologies,<br className="br-hidden"/>9th Floor, <br/>
                        Lulu Cyber Tower, <br className="br-hidden"/>Infopark<br/>
                        Cochin - 682030</p>
                        <div className="footer-icon-container">
                            <img src="images/facebook.svg" alt="facebook-icon"/>
                            <img src="images/twitter.svg" alt="twitter-icon"/>
                            <img src="images/linkedin.svg" alt="linkedin-icon"/>
                            <img src="images/insta.svg" alt="instagram-icon"/> 
                        </div>
                    </div>

                    <div>
                        <ul className="footer-list">
                            <li><h3 className="footer-list-heading">Popular locations</h3></li>
                            <li>Kochi</li>
                            <li>Banglore</li>
                            <li>Mumbai</li>
                            <li>Chennai</li>
                            <li>Pune</li>     
                        </ul>               
                    </div>

                    <div>
                        <ul className="footer-list">
                            <li><h3 className="footer-list-heading">Trending locations</h3></li>
                            <li>Bhubaneshwar</li>
                            <li>Hyderabad</li>
                            <li>Chandigarh</li>
                            <li>Nashik</li>    
                        </ul>               
                    </div>

                    <div>
                        <ul className="footer-list">
                            <li><h3 className="footer-list-heading">About us</h3></li>
                            <li><a>About Seconds group</a></li>
                            <li><a>Contact us</a></li>
                            <li><a>Careers</a></li>    
                        </ul>               
                    </div>

                    <div>
                        <ul className="footer-list">
                            <li><h3 className="footer-list-heading">Seconds</h3></li>
                            <li><a>Help</a></li>
                            <li><a>Legal & Privacy</a></li>
                            <li><a>Blog</a></li>     
                        </ul>               
                    </div>

                    <div className="last-footer-column">
                        <ul className="footer-list">
                            <li><h3 className="footer-list-heading">Try the Seconds app</h3></li>
                            <li>Buy, sell and find the just about anything<br/>using the app on your mobile.</li>
                        </ul>
                        <div className="footer-icon-container  last-footer-icon">
                                <img src="images/app-store-badge-us-black.svg" alt="apple-icon" />
                                <img src="images/google-play-badge-us.svg" alt="play-store-icon" />
                        </div>               
                    </div>

                </div>
            </div>
            <div className="copyright-rectangle">
                <span className="copyright-section" >Copyright &#169; 2022 Seconds India Private Limited</span>
            </div>
        </div>
    );
}
export default Footer;
