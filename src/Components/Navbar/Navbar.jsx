import React from "react";
import email from "../../Assets/Email.png";
import phone from "../../Assets/Phone.png";
import logo from "../../Assets/TMFLOGO.png";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import {useState} from "react"
const Navbar = () => {
  const [close,setclose]=useState(false)
  function opendiv(){
    setclose(!close)  
  }
  return (
    <div className="bb">
      <div className="Navbar">
        <div className="Navbarinner">
          <div className="icon">
          <MdEmail className="my12icon"/>
            <p>sales@thangarajmatches.com</p>
          </div>
          <div className="icon">
          <FaPhone className="my12icon"/>
            <p>+91 9489050505</p>
          </div>
        </div>
      </div>
      <div className="nav">
        <div className="nav1">
<Link to="/">
          <img src={logo} alt="" /></Link>
          <ul className={close? "list1":"list"}>
            <Link to="/">
              <li>HOME</li>
            </Link>
            <Link to="/about">
              <li>ABOUT US</li>
            </Link>
            <Link to="/product">
              <li>OUR PRODUCTS</li>
            </Link>
            <Link to="/factory">
              <li>FACTORY PROCESS</li>
            </Link>
            <Link to="/certificate">
              <li>CERTIFICATES</li>
            </Link>
             <Link to="/gallery">
              <li>GALLERY</li>
            </Link>
            <Link to="/contact">
              <li>CONTACT US</li>
            </Link>
          </ul>
          <GiHamburgerMenu  className="yt" onClick={opendiv}/>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
