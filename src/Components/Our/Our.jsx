import React from 'react'
import "./Our.css"
import logo from "../../Assets/male.png"
import logo1 from "../../Assets/qo.png"
import logo2 from "../../Assets/5.png"
import logo3 from "../../Assets/4.png"
const Our = () => {
  return (
    <div className='our'>
        <div className='our1'>
            <h1>Client Reviews About Our Safety Matchbox</h1>
            <div className='our2'>
                <div className='our3'>
                    <span><img src={logo1} className='lg1' alt="" /></span>
        <img src={logo} alt="" />
        <h3>SURESH</h3>
        <p>Good Quality,Happy 
with the product</p>
<img src={logo2} alt="" className='img1'/>
                </div>
                 <div className='our3'>
                    <span><img src={logo1} className='lg1' alt="" /></span>
        <img src={logo} alt="" />
        <h3>RAM</h3>
        <p>Very good quality and 
convey regards to everyone</p>
<img src={logo3} alt="" />

                </div>
                 <div className='our3'>
                    <span><img src={logo1} className='lg1' alt="" /></span>
        <img src={logo} alt="" />
        <h3>DEEPAK</h3>
        <p>Excellent quality</p>
<img src={logo2} alt="" className='img1' />

                </div>
            </div>
        </div>
    </div>
  )
}

export default Our