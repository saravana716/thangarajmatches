import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Props from "../../Components/prop/Props";
import Contacts from '../../Components/Contacts/Contacts';
import Footer from '../../Components/Footer/Footer';
import "./Certificate.css"
import l1 from "../../Assets/i1.jpg"
import l2 from "../../Assets/i2.png"
// import l3 from "../../Assets/i3.png"
import l4 from "../../Assets/l10.jpg"
import l5 from "../../Assets/5.jpg"
const Certificate = () => {
  return (
    <>
    <Navbar/>
          <Props img={l5} />
          <div className='certificates'>
            <div className='certificates1'>
                <h1>Globally Recognized Certified Matchsticks Exporter</h1>
                <div className='certificates2'>
                    <img src={l1} alt="" />
                    <img src={l2} alt="" />
                </div>
                <div className='certificates3'>
                    <img src={l4} alt=""  />

                </div>
                
            </div>
          </div>
          <Contacts/>
          <Footer/>
    </>
  )
}

export default Certificate