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
  Made with the best materials and strict standards for safe and reliable matches.

       </p>
          </div>
          <div className="box1">
            <img src={im2} alt="" />
            <h3>Friendly Support
</h3>
            <p>
      Quick and helpful service for both local and international customers.

            </p>
          </div>
          <div className="box1">
            <img src={im3} alt="" />
            <h3>
Trusted for Years 
</h3>
            <p>
          With long experience, we deliver on time and keep our quality always high.
   </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
