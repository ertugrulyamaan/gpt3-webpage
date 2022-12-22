import React from 'react'
import './feature.css'
const Feature = ({title,text}) => {
  return (
    <div className='app__feature'>
      <div className='app__feature-title'>
        <h3>{title}</h3>
        <div className='line'/>      
      </div>
      <div className='app__feature-text'>
        <p>{text}</p>
      </div>
    </div>
  )
}

export default Feature