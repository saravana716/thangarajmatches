import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Props from "../Components/prop/Props";
import Contacts from "../Components/Contacts/Contacts";
import Footer from "../Components/Footer/Footer";
import logo from "../Assets/g6.jpg";
import logo122 from "../Assets/g10.webp";
import logo11 from "../Assets/s2.webp";
import logo22 from "../Assets/s3.webp";
import logo1 from "../Assets/DSC04142.JPG";
import logo2 from "../Assets/DSC04150.JPG";
import logo9 from "../Assets/DSC03745.JPG";
import logo3 from "../Assets/g4.jpg";
import logo4 from "../Assets/DSC03751.JPG";
import logo5 from "../Assets/DSC03763.JPG";
import logo6 from "../Assets/DSC03768.JPG";
import Gridbox from "../Components/Gridbox/Gridbox";
import l1 from "../Assets/4.jpg"

const Factory = () => {
  return (
    <>
      <Navbar />
      <Props img={l1} />
      <div className="match">
        <div className="match1">
          <div className="match2">
            <div className="match3">
              <h1>
              Why is Thangaraj Matches Known for Its Quality Safety Matches Manufacturing?

              </h1>
              <p>
              Located in Kovilpatti, Tamil Nadu, Thangaraj Matches has been a trusted name in safety match manufacturing and export for over 46 years. Renowned for our commitment to quality, safety, and compliance, we have built a solid reputation in both domestic and international markets.
              </p>
              <p>
With a robust daily production capacity of over 1 million matchboxes, we continuously scale to meet growing consumer demand. Our decades of industry expertise allow us to quickly understand market trends and customer needs, ensuring competitive pricing and faster sales cycles.
</p>
<p>By blending traditional values with modern production techniques, Thangaraj Match remains a preferred partner for clients seeking reliable, high-quality safety matches at market-friendly prices.</p>
            </div>
            <img src={logo} alt="" />
          </div>
          {/* <div className="match2">
            <img src={logo1} alt="" />

            <div className="match3">
              <h1>
                Why is Quenker Matches known for its quality Safety Matches
                Manufacturing?
              </h1>
              <p>
                Based in Kovilpatti, Tamil Nadu, India, Thangaraj Matches has
                been manufacturing and exporting safety matches for four
                decades. We are a well-known company in the industry, and we
                have a flawless record regarding safety and compliance. Our
                daily production rate of 1 million match boxes is increasing to
                keep up with consumer demand. Due to our extensive experience in
                this industry, we can identify the client’s needs more quickly
                and match the market product price, which aids the customer in
                selling the product quickly and profitably.
              </p>
            </div>
          </div> */}
        </div>
      </div>
      <div className="fac">
        <div className="fac1">
          <div className="facs">
            <img src={logo2} alt="" />
          </div>
          <div className="facs">
            <img src={logo9} alt="" />
          </div>
          <div className="facs">
            <img src={logo4} alt="" />
          </div>
          <div className="facs">
            <img src={logo5} alt="" />
          </div>
          <div className="facs">
            <img src={logo1} alt="" />
          </div>
          <div className="facs">
            <img src={logo3} alt="" />
          </div>
        </div>
      </div>
      <div className="spin">
        <div className="spin1">
          <div className="spin2">
            <h1>Splints We Offer</h1>
            <p>
           At Thangaraj Matches, we provide a premium selection of match splints, crafted to ensure smooth ignition and optimal performance. Whether you need carbonized or non-carbonized splints, our range is designed to meet global standards and customer-specific requirements.

            </p>
           <div className="sp">
             <ul>
              <li> Material: Carbonized / Non-Carbonized
</li>
              <li>Sizes Available: 40 mm, 42 mm
</li>
              <li>
Types: Popular, Malabarica, Aspirin
</li>
            </ul>
            <div className="spimg">
              <img src={logo122} alt="" />
            </div>
           </div>
          </div>
          <div className="spin2">
            <h1>Match Head Colors
</h1>
            <p>
            We offer a variety of match head colors to suit your brand identity and customer preferences. Each color is formulated for vibrant appearance and consistent ignition, adding both functionality and visual appeal to your matchboxes.
     </p>
           <div className="sp">
             <ul>
              <li>Black</li>
              <li>Brown</li>
              <li>Red</li>
              <li>Green</li>
            </ul>
            <div className="spimg">
              <img src={logo11} alt="" />
            </div>
           </div>
          </div>
          <div className="spin2">
            <h1>Side Friction</h1>
            <p>
     Our striking surfaces are engineered for consistent ignition and enhanced safety. Using high-quality friction material, we ensure reliable performance while preventing unintentional ignition.

            </p>
           <div className="sp">
             <ul>
              <li>Dotted with Border</li>
              <li> Fully Tilted with Border</li>
            </ul>
            <div className="spimg">
              <img src={logo22} alt="" />
            </div>
           </div>
          </div>
        </div>
      </div>
      <Gridbox/>
      <Contacts />
      <Footer />
    </>
  );
};

export default Factory;
