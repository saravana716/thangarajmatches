import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import MySwipers from '../Components/Navbar/MySwipers'
import History from '../Components/Navbar/History/History'
import Choose from '../Components/Choose/Choose'
import Prem from '../Components/Prem/Prem'
import Iso from '../Components/iso/Iso'
import Gallery from '../Components/Gallery/Gallery'
import Our from '../Components/Our/Our'
import Contacts from '../Components/Contacts/Contacts'
import Footer from '../Components/Footer/Footer'
import Videos from './Videos'

const Home = () => {
  return (
    <>
    <Navbar/>
    <MySwipers/>
   <History/> 
   <Choose/>
   <Prem/>
   <Iso/>
   <Videos/>
   <Gallery/>
   <Our/>
   <Contacts/>
   <Footer/>
    </>
  )
}

export default Home