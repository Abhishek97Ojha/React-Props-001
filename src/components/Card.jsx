import React from 'react'
import './Card.css'
const Card = (props) => {
  return (
    <div className='card'>
        <div className="bgColor" style={{backgroundColor : props.code}}></div>
        <div className="colorName">
            <h3>{props.code}</h3>
            <p style={{color : props.code}}>{props.name}</p>
        </div>
    </div>
  )
}

export default Card