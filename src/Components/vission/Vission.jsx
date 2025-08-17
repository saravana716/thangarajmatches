import React from "react";
import lo from "../../Assets/loi.png";
import lo1 from "../../Assets/banner.JPG";
import lo2 from "../../Assets/g14.jpg";
import "./Vission.css"
const Vission = () => {
  return (
    <>
      {" "}
      <div className="vission">
        <div className="vission1">
          <div className="vissionimg">
            {/* <h1>VISION</h1>
            <h1> & </h1>
            <h1>MISSION</h1> */}
          </div>
          <div className="vissioncon">
            <div className="vissioncon1">
              <h1>VISION</h1>
              <p>
                Our vision is to become a global leader in the safety matches
                industry by continuously innovating and delivering exceptional
                quality products. We aim to set the standard for safety and
                reliability, making India is the household name in match
                manufacturing.
              </p>
            </div>
            <div className="vissioncon1">
              <h1>MISSION</h1>
              <p>
                Our mission is to provide high-quality, customized safety
                matches that cater to the needs of our customers while
                maintaining the highest safety standards. We are committed to
                excellence in every aspect of our manufacturing process,
                ensuring that our matchboxes consistently exceed expectations
                and have long-lasting partnerships.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="logo">
        <div className="logo1">
          <h1>What We Do</h1>
          <div className="logo2">
            <img src={lo} alt="" />
          </div>
        </div>
      </div>
      <div className="cut">
        <dicv className="cut1">
          <div className="cut2">
            <h3>Our Infrastructure</h3>
            <p>
           At Thangaraj Matches, we have modern manufacturing facilities with the latest machines and technology. From preparing raw materials to packaging, every step is carefully managed to maintain quality and consistency.
Our strong infrastructure helps us produce safe, reliable, and high-quality matches that meet customer needs every time.

            </p>
          </div>
          <img src={lo1} alt="" />
        </dicv>
        <div className="cut1">
            <img src={lo2} alt="" />
          <div className="cut2">
            <h3>Our Team</h3>
            <p>
              
At Thangaraj Matches, our dedicated team works with care and skill to ensure every match is made with quality and safety in mind. Their hard work and teamwork help us deliver the best to our customers.
            </p>
          </div>
        
        </div>
      </div>
    </>
  );
};

export default Vission;
