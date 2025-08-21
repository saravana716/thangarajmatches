import React from "react";
import pk from "../../Assets/ex.jpg"
import pk1 from "../../Assets/iso1.png"
import pk2 from "../../Assets/iso2.png"
import pk3 from "../../Assets/iso3.png"
import "./Iso.css"

const Iso = () => {
  return (
    <div className="iso">
      <div className="iso1">
        <div className="isoimg">
          <img src={pk} alt="" />
        </div>
        <div className="isocontent">
          <h1>Trusted Safety Matches Manufacturer from Kovilpatti, India
</h1>
          <p>
            <span>THANGARAJ MATCH FACTORY</span>  ,based in Kovilpatti, is a leading manufacturer and exporter of safety matches with over 46 years of experience. We proudly serve customers across India and around the world with high-quality matches.

          </p>
          <p>
            We use safe, eco-friendly materials and follow strict quality checks. Our factory is ISO 9001:2015 certified and holds One Star Export House status.

          </p>
          <div className="grid">
            <div className="gridbox">
                <img src={pk1} alt="" />
                <p> ISO Certified for Quality (ISO 9001:2005)
</p>
            </div>
              <div className="gridbox">
                <img src={pk2} alt="" />
                <p>5-Level Quality Check
</p>
            </div>
              <div className="gridbox">
                <img src={pk3} alt="" />
                <p>Eco-Friendly Materials</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Iso;
