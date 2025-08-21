import React from 'react'
import logo from "../../../Assets/fire.png"
import logo1 from "../../../Assets/ALL.jpg"
import { Link } from 'react-router-dom'
// import logo2 from "../../../Assets/1979[1]..jpg"
import "./History.css"
const History = () => {
  return (
    <div className='history'>
        <img src={logo} className='mylogo' alt="" />
        <div className='history1'>
        <div className='hisimg'>
            <img src={logo1} alt="" />
            {/* <div className='mybox'>
              <img src={logo1} alt="" />
            </div> */}
        </div>
        <div className='hiscontent'>
            <h1><span>THANGARAJ </span>MATCH FACTORY</h1>
            <p><span>Since 1979</span>, we have been manufacturing and distributing safety matches in the Indian market, 
making us the industry's innovators. Our facility is based in <span>KOVILPATTI</span>, Tamilnadu,</p>
<p><span>Thangaraj Match Factory</span> is one of the leading matchbox companies in India that has focused on 
offering the greatest safety match products to customers all over the world. 
We have a broad background in the safety match sector and are imparting that expertise through 
our products to global markets.</p>
<p>With our expertise in logistics, we select the quickest route at the most reasonable price to provide 
the fastest transit times in the industry. In addition, our business has <span>ISO 9001:2015 certification</span>.</p>
<div style={{width:"100%",display:"flex",alignItems:"center",justifyContent:"space-between",gap:20}}>
  <p style={{width:"100%",padding:"15px",backgroundColor:"#fd0203",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><span style={{fontSize:"20px",color:"white"}}>Trademark Registration</span>
  <span style={{color:"white",fontSize:"30px",marginTop:"10px"}}>1279521</span></p>
    <p style={{width:"100%",padding:"15px",backgroundColor:"#3fbf40",borderRadius:"10px",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column"}}><span style={{fontSize:"20px",color:"white"}}>Copyrights</span>
  <span style={{color:"white",fontSize:"30px",marginTop:"10px"}}>A-136921/2021</span></p>
</div>

<Link to="/about">
<button>VIEW MORE</button>

</Link>        </div>
        </div>
    </div>
  )
}

export default History