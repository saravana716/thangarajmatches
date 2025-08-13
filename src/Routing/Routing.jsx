import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../PAges/Home'
import About from '../PAges/About'
import Product from '../PAges/Product'
import Factory from '../PAges/Factory'
import Certificate from '../Components/Certificate/Certificate'
import Gallerys from '../PAges/Gallerys'
import FinalContact from '../PAges/Finalcontact/FinalContact'

const Routing = () => {
  return (
    <>
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/factory' element={<Factory/>}/>
        <Route path='/certificate' element={<Certificate/>}/>
        <Route path='/gallery' element={<Gallerys/>}/>
        <Route path='/contact' element={<FinalContact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default Routing