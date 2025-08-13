import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import Props from '../Components/prop/Props'
import Abouts from '../Components/Abouts/Abouts'
import Abcontent from '../Components/abcontent/Abcontent'
import Choose from '../Components/Choose/Choose'
import Contacts from '../Components/Contacts/Contacts'
import Vission from '../Components/vission/Vission'
import backimg from "../Assets/2.jpg"
const About = () => {
  return (
    <>
    <Navbar/>
     <Props
     img={backimg}
  
     />
    <Abouts/>
    <Abcontent/>
    <Choose/>

    <Vission/>
    <Contacts/>
    <Footer/>
    </>
  )
}

export default About