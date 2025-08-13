import React from 'react'
import logo from "../../Assets/prop.png"
import "./prop.css"
const prop = (props) => {
  return (
    <div className='props'>
        <img src={props.img} alt="" />
        <div className='props1'>
            <h1>{props.title}</h1>
            <h5>{props.des}</h5>
        </div>
    </div>
  )
}

export default prop