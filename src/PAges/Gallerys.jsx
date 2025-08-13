import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Choose from '../Components/Choose/Choose'
import Contacts from '../Components/Contacts/Contacts'
import Footer from '../Components/Footer/Footer'
import Props from '../Components/prop/Props'
import Mypro from '../Components/MyPro/Mypro'
import gl4 from "../Assets/6.jpg"

const Gallerys = () => {
  return (
    <>
    <Navbar/>
     <Props
     img={gl4}
     />
     <Mypro/>
     <Contacts/>
     <Footer/>
    </>
  )
}

export default Gallerys