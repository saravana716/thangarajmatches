import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Props from '../Components/prop/Props'
import Choose from '../Components/Choose/Choose'
import Contacts from '../Components/Contacts/Contacts'
import Brand from '../Components/Product/Brand'
import table from "../Assets/ty.jpg"
import ww from "../Assets/op1.jpg"
import l1 from "../Assets/3.jpg"
const Product = () => {
  return (
    <>
    <Navbar/>
    <Props
    img={l1}
    
     />
     <Brand/>
     <div className='table'>
        <div className='table1'>
            <h1>Products Specification</h1>
            <div className='table'>
               <img src={table} alt="" />
            </div>
        </div>
     </div>
     <div className='pack'>
        <div className='pack1'>
            <img src={ww} alt="" />
            <div className='pack2'>
                <h1>Product Packaging</h1>
                <ul>
                    <li>The Horse Safety Matches – Trusted Spark, Timeless Quality</li>
                    <li>The Horse Safety Matches are renowned for their reliability, long-lasting tradition, and superior quality. </li>
                    <li>Each matchstick is crafted with precision using high-grade materials that ensure a consistent flame and safe ignition. </li>
                    <li>Encased in a sturdy, classic box featuring the iconic horse logo, these matches are a staple in households and 
businesses across India and beyond.</li>
<li>Safe & Reliable: Strikes smoothly with minimal effort.</li>
<li>Long Burning: Provides a strong, steady flame ideal for lighting candles, stoves, or incense.</li>
<li>Moisture Resistant: Designed to work even in humid environments.</li>
<li>Eco-Friendly: Made from responsibly sourced wood and safe chemical components.</li>
                </ul>
            </div>
        </div>
     </div>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default Product