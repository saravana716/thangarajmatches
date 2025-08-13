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
          We have a responsive management team, Our Products are available in
          various size and designed in a very innovative and smart style.
        </p>
        <div className="box">
          <div className="box1">
            <img src={im1} alt="" />
            <h3>Superior Quality Manufacturing
</h3>
            <p>
      At Thangaraj Match Works, we use premium raw materials and proven production techniques to manufacture high-grade safety matches. Our commitment to quality ensures every matchstick meets strict industry standards for safety and performance.

            </p>
          </div>
          <div className="box1">
            <img src={im2} alt="" />
            <h3>Reliable Customer Assistance
</h3>
            <p>
            Our customer support system is designed to offer timely, efficient service. Whether you're a local distributor or an international client, we’re committed to providing prompt responses and dedicated support at every step.

            </p>
          </div>
          <div className="box1">
            <img src={im3} alt="" />
            <h3>Proven Export Legacy
</h3>
            <p>
            With decades of expertise, Thangaraj Match Works has earned a strong reputation in both domestic and global markets. Our wide-reaching export network ensures timely delivery and unmatched quality for customers worldwide.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Choose;
