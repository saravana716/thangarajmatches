import React from "react";
import "./Abcontent.css"
import io from "../../Assets/ex1.jpg"
const Abcontent = () => {
  return (
    <div className="abcontent">
      <div className="abcontent1">
        <h1>
          The Rise of Thangaraj in Matchstick Exports - From Local to Global
        </h1>
        <h3>Lighting Lives Since 1979 </h3>
        <p>
          Founded with a mission to bring employment and ignite progress in
          rural Tamil Nadu, Thangaraj Match Factory stands today as one of the
          most respected names in the safety match industry.
        </p>
        <p>
          Our journey began in 1979, when Shri M.T.M. Thangaraj established Ravi
          Match Industries in the quiet village of Erachi. At a time when
          agriculture was the only livelihood, this humble factory brought
          meaningful employment and hope to the people of the region. His
          commitment to quality and community laid the foundation for a legacy.
        </p>
        <ul>
          <p>With relentless dedication, Shri Thangaraj expanded operations.</p>
          <img src={io} alt="" />
          </ul>
        <p>
          These units operated entirely through handmade and manpower-driven
          methods and at their peak, our group had outsourced production to over
          25 small-scale units in and around Kovilpatti, making us one of the
          leading safety match manufacturers in the region.
        </p>
        <p>
          Our flagship brand, <span>"THE HORSE"</span> , became a household name
          across North India, known for its consistency, quality and striking
          reliability.
        </p>
        <div className="op">
          <h3>🚀 Transition to Automation</h3>
          <p>
            As the industry evolved and labor shortages emerged, we embraced
            modernization without losing our commitment to quality. In 2006, We
            launched our first semi-automatic unit – The Ratham Match Industries
            .
          </p>
          <p>
            In 2016, we reached a new milestone with the establishment of our
            fully automated manufacturing unit – Thangaraj Match Factory .{" "}
          </p>
          <p>
            Spread across 5 acres with a built-up area of 32,000 sq. ft., this
            factory has been designed for scalability and future growth,
            integrating state-of-the-art machinery and safety systems.
          </p>
        </div>
        <div className="op">
          <h3>🌍 Global Reach. Lasting Impact.</h3>
          <p>
            Today, we proudly manufacture 25 million matchboxes every month,
            serving both domestic and international markets, with exports
            reaching several African countries. We use the finest quality raw
            materials, modern equipment, and a dedicated team of skilled
            laborers to ensure every matchbox upholds our legacy of excellence.
          </p>
         
        </div>
        <div className="op">
             <h3>🔸 From Handmade to High-Tech</h3>
          <p>
            Thangaraj Match Factory remains rooted in tradition while forging
            ahead with innovation—continuing to light lives, homes, and hearts
            with every single spark.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Abcontent;
