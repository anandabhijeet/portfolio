import React from "react";
import {FaGithub, FaTwitter, FaLinkedinIn} from 'react-icons/fa';
import "./App.css";

function App() {
  return (
    <div id="home">
      <div className="container-fluid homepage">
        <div className="container-fluid headingBar">
          <div className="container">
            <h1>Abhijeet Anand</h1>
          </div>
          <div className="header-options">
            <h5>About</h5>
            <h5>Work</h5>
            
            <h5>Projects</h5>
            <h5>Contact</h5>
          </div>
        </div>
        <div className="row">
          <div className="col col-lg-1 container-fluid social-media">
          <a href="https://github.com/anandabhijeet">
            <div className="social-media-connect">
              
               
               <FaGithub/>
               
            </div>
            </a> 
            <a  href="https://www.linkedin.com/in/abhijeet-anand-5b7922214/">
            <div className="social-media-connect" >
              <FaLinkedinIn/>
            </div>
            </a>
            <a href="https://twitter.com/abhijeet28d">
            <div className="social-media-connect">
              <FaTwitter/>
            </div> 
            </a>
          </div>
          <div className="col col-lg-10 container-fluid profile-pic">

          </div>
          {/* <div className="col col-lg-6 container-fluid profile-content"></div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
