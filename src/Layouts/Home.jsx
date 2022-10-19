import React, {useState} from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Signup from "../components/Signup";
import Main from "../containers/main";

function Home() {

    const [signupShown, setSignupShown] = useState(false);

    function handleSignup() {
      setSignupShown(!signupShown);
    }

  return(
  <div>
    <div className="header-wrap"><Header onSignup={handleSignup} /></div>
    {signupShown && <Signup closeSignup={handleSignup} />}
    <Main />
    <Footer />
  </div>
  );

}

export default Home;
