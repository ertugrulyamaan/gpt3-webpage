import React from 'react'
import './cta.css'
const CTA = () => {
  return (
    <div className='app__cta section__padding section__margin'>
      <div className='app__cta-section'>
        <div className='app__cta-section_content'>
          <p>Request Early Acces to Get Started</p>
          <h2>Register today & start exploding the endless possibilities.</h2>
        </div>
        <div className='app__cta-section_button'>
          <button className='button__custom'>Get Started</button>
        </div>
      </div>
    </div>
  )
}

export default CTA