import React from "react";
import logo from "../../Assets/TMFLOGO.png";
import iso4 from "../../Assets/iso4.png";
import ins from "../../Assets/in.png";
import ins1 from "../../Assets/linkedin.png";
import ins2 from "../../Assets/face.png";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer1">
          <div className="footer2">
            <img src={logo} alt="" />
          </div>
          <div className="footer2">
            <h2>Quick Links</h2>
            <ul>
              <Link to="/">
                <li>Home</li>
              </Link>
              <Link to="/about">
                <li>About Us</li>
              </Link>
              <Link to="/product">
                <li>Our Products</li>
              </Link>
              <Link to="/factory">
                <li>Factory Process</li>
              </Link>
              <Link to="/gallery">
                <li>Gallery</li>
              </Link>
              <Link to="/certificate">
                <li>Certificate</li>
              </Link>
              <Link to="/gallery">
                <li>Contact Us</li>
              </Link>
            </ul>
          </div>
          <div className="footer2">
            <h2>Our Products</h2>
            <ul>
              <li>The Horse</li>
              <li>Vigul</li>
              <li>Reindeer</li>
            </ul>
          </div>
          <div className="footer2">
            <h2>SOCIAL LINKS</h2>
            <div className="footer21">
              <a href="https://www.instagram.com/thangarajmatches/">
                <div className="ins">
                  <img src={ins} alt="" className="op1" />
                </div>
              </a>
              <a href="https://www.linkedin.com/in/deepan-raj-99b97338/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in">
                <div className="ins">
                  <img src={ins1} alt="" className="op1" />
                </div>
              </a>
              <a
                href="
              https://www.facebook.com/thangarajmatches/
                 "
              >
                <div className="ins">
                  <img src={ins2} alt="" className="op1" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* <div className='foot'>
        <img src={iso4} alt="" />
    </div> */}
      <div className="foot1">
        <p>© Copyright - 2025 Thangaraj Match Factory . All rights reserved.</p>
        <p>Designed & Developed by Kaira Technologies</p>
      </div>
    </>
  );
};

export default Footer;
