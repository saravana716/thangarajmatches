import React from 'react'
import gl1 from "../../Assets/g1.jpg"
import gl2 from "../../Assets/g2.jpg"
import gl3 from "../../Assets/g3.jpg"
import gl4 from "../../Assets/g4.jpg"
import "./Gallery.css"
import { Link } from 'react-router-dom'
const Gallery = () => {
  return (
    <div className='gallery'>
        <div className='gallery1'>
            <h1>Our Gallery</h1>
            <p>Below is a gallery showcasing our processes and state-of-the-art machinery.</p>
            <div className='gallery2'>
                <div className='gallery3'>
                    <img src={gl1} alt="" />
                </div>
                  <div className='gallery3'>
                    <img src={gl2} alt="" />
                </div>
                  <div className='gallery3'>
                    <img src={gl3} alt="" />
                </div>
                   <div className='gallery3'>
                    <img src={gl4} alt="" />
                </div>
            </div>
            <div className='btns'>
               <Link to="gallery">
                <button>VIEW MORE</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Gallery