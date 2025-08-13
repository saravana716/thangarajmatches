import React from 'react'
import "./Brand.css"
import lo from "../../Assets/mockup.jpg"
import lo1 from "../../Assets/mockup2.jpg"
import lo2 from "../../Assets/mockup3.jpg"
const Brand = () => {
  return (
    <div className='brand'>
        <div className='brand1'>
            <h1>Our Brands</h1>
            <h3>Our Brands
Trusted Brands, Exceptional Quality</h3>
<div className='gridimg'>
    <div className='grimg'>
        <img src={lo} alt="" />
    </div>
      <div className='grimg'>
        <img src={lo1} alt="" />
    </div>
      <div className='grimg'>
        <img src={lo2} alt="" />
    </div>
</div>
        </div>
    </div>
  )
}

export default Brand