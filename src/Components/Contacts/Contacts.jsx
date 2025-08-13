import React from 'react'
import "./Contacts.css"
import ph from "../../Assets/Phone.png"
import ph1 from "../../Assets/Email.png"
import ph2 from "../../Assets/Location.png"
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
const Contacts = () => {
  return (
    <div className='con'>
         <div className='con1'>
            <div className='con2'>
                     <FaPhone className="my12icon1"/>
           
                <h2>Call Us Now (10am-5pm)</h2>
                <h3>+91 94890 50505</h3>
            </div>
             <div className='con2'>
                 <MdEmail className="my12icon1"/>
       
                <h2>Email Us</h2>
                <h3>sales@thangarajmatches.com</h3>
            </div>
             <div className='con2'>
               <FaLocationDot className="my12icon1"/>
                <h2>Location</h2>
                <h3>Kovilpatti</h3>
            </div>
         </div>
    </div>
  )
}

export default Contacts