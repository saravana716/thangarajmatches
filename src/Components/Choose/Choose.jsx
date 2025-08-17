import React from "react";
import "./Choose.css";
import im1 from "../../Assets/im1.png";
import im2 from "../../Assets/im2.png";
import im3 from "../../Assets/im3.png";
import im4 from "../../Assets/yyy.png";
const Choose = () => {
  return (
    <div className="choose">
        <img src={im4} className="im4" alt="" />
      <div className="choose1">
        <h1>Why Choose Thangaraj Match for Reliable Safety Matches?</h1>
        <p>
       We make reliable safety matches in different sizes, with modern and smart designs.


        </p>
        <div className="box">
          <div className="box1">
            <img src={im1} alt="" />
            <h3>High Quality
</h3>
            <p>
      We use the best materials and follow strict standards to make safe, high-grade matches.
       </p>
          </div>
          <div className="box1">
            <img src={im2} alt="" />
            <h3>Friendly Support
</h3>
            <p>
            Our team responds quickly and helps you every step of the way, whether you are local or international.

            </p>
          </div>
          <div className="box1">
            <img src={im3} alt="" />
            <h3>
Trusted for Years 
</h3>
            <p>
           With decades of experience, we deliver on time and maintain top quality for customers worldwide.   </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
