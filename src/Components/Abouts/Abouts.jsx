import React from 'react'
import "../../Components/Navbar/History/History.css"
import logo from "../../Assets/fire.png"
import logo1 from "../../Assets/ALL.jpg"
const Abouts = () => {
  return (
    <>
      <div className='history'>
            <img src={logo} className='mylogo' alt="" />
            <div className='history1'>
            <div className='hisimg'>
                <img src={logo1} alt="" />
            </div>
            <div className='hiscontent'>
                <h1><span>THANGARAJ </span>MATCH FACTORY</h1>
                <p><span>Since 1979</span>, we have been manufacturing and distributing safety matches in the Indian market, 
    making us the industry's innovators. Our facility is based in <span>KOVILPATTI</span>, Tamilnadu,</p>
    <p><span>Thangaraj Match Factory</span> is one the leading matchbox Companies in India that has focused on 
    offering the greatest safety match products possible to customers all over the world. 
    We have a broad background in the safety match sector and are imparting that expertise through 
    our products to global markets.</p>
    <p>With our expertise in logistics, we select the quickest route at the most reasonable price to provide 
    the fastest transit times in the industry. In addition, our business has <span>ISO 9001:2015 certification</span>.</p>
    <div className='npbox'>
      <div className='npbox1'>
        <h1>46<h6>+</h6></h1>
        <h5>Years Of Experience</h5>
      </div>
        <div className='npbox2'>
        <h1>1</h1>
        <h5>Million Mathces PerDay Production</h5>
      </div>
    </div>
    {/* <button>VIEW MORE ...</button> */}
            </div>
            </div>
        </div>
    </>
  )
}

export default Abouts