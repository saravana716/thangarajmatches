import React from 'react'
import "./Prem.css"
import lo1 from "../../Assets/DSC03613.JPG"
import lo3 from "../../Assets/g5.jpg"
import lo2 from "../../Assets/g2.jpg"
const Prem = () => {
  return (
    <div className='prem'>
        <div className='prem1'>
            <h1>Premium Matchbox Manufacturer & Global Supplier</h1>
            <div className='prem2'>
                <div className='prem3'>
                    <div className='premimg'>
                        <img src={lo1} alt="" />
                    </div>
                <h4>Cardboard Safety Matches
 </h4>
                </div>
                 <div className='prem3'>
                    <div className='premimg'>
                        <img src={lo2} alt="" />
                    </div>
                <h4>Veener Safety Matches   </h4>
                </div>
                 <div className='prem3'>
                    <div className='premimg'>
                        <img src={lo3} alt="" />
                    </div>
                <h4> King Size Safety Matches</h4>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Prem