import React from "react";
import Navbar from "../../Components/Navbar/Navbar";
import Contacts from "../../Components/Contacts/Contacts";
import Footer from "../../Components/Footer/Footer";
import Props from "../../Components/prop/Props";
import "./Finalcontact.css";
import logo from "../../Assets/kl.png";
import ph3 from "../../Assets/7.jpg";

const FinalContact = () => {
  return (
    <>
      <Navbar />
      <Props img={ph3} />

      <div className="message">
        <div className="message1">
          <h1>Let's Makes Business Together</h1>
          <p>
            Please don’t hesitate to contact us if you have any questions,
            Comments or messages. we’ll try to respond to everything.
          </p>
          <div className="mes1">
            <div className="mes1img">
              <img src={logo} alt="" />
            </div>
            <div className="mes1con">
              <h1>Enquiry for High Quality Safety Matches</h1>
              <div className="mes2">
                <input type="text" placeholder="NAME" />
                <input type="text" placeholder="EMAIL" />
              </div>
              <div className="mes2">
                <input type="text" placeholder="PHONE" />
                <input type="text" placeholder="LOCATION" />
              </div>
              <div className="mes2">
                <input type="text" placeholder="PRODUCTS" />
                <input type="text" placeholder="QUALITY" />
              </div>
              <div className="mes3">
                <textarea
                  name=""
                  id=""
                  placeholder="Write your message here"
                ></textarea>
              </div>
              <button>SEND MESSAGE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="map">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.125191994988!2d77.90174467449994!3d9.143164287192496!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b06adb6a3c50363%3A0xd1c3fcb94c63481!2sTHANGARAJ%20MATCH%20FACTORY!5e0!3m2!1sen!2sin!4v1755438065367!5m2!1sen!2sin"   allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
       
      </div>
      <Contacts />
      <Footer />
    </>
  );
};

export default FinalContact;
