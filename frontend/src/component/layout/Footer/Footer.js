import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
//import { Link } from "react-router-dom";
//import logo from "../../../images/logo.png";

const Footer = () => {
    return (
      <footer id="footer">
        <div className="leftFooter">
          <h4>DOWNLOAD OUR APP</h4>
          <p>Download App for Android and IOS mobile phone</p>
          <img src={playStore} alt="playstore" />
          <img src={appStore} alt="Appstore" />
        </div>
  
        <div className="midFooter">
         
          <h1>ECOMMERCE.</h1>
          
          <p>High Quality is our first priority</p>
  
          <p>Copyrights 2023 &copy; Abhishek</p>
        </div>
  
        <div className="rightFooter">
          <h4>Follow Us</h4>
          <a href="https://github.com/ShanksCodes/IndoMartMERN">Instagram</a>
          <a href="https://github.com/ShanksCodes/IndoMartMERN">Youtube</a>
          <a href="https://github.com/ShanksCodes/IndoMartMERN">Facebook</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;