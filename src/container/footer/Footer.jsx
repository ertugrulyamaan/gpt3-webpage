import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <div className='app__footer section__padding'>
      <div className='app__footer-heading'>
          <h1>Do you want to step in to the future before others.</h1>
          <button>Request Early Access</button>
      </div>
      <div className='app__footer-links'>
        <div>
          <h3>GPT-3</h3>
          <p>lorem ipsum dolor sit amet, All Right Reserved</p>
        </div>     
        <ul>
          <p>Links</p>
          <div className='line'/>
          <li>Overons</li>
          <li>Social Media</li>
          <li>Counters</li>  
          <li>Contact</li>  
        </ul>     
        <div>
          <p>Company</p>
          <div className='line'/>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </div>     
        <div>
          <p>Get in touch</p>
          <div className='line'/>
          <li>New York</li>
          <li>02-256-65-69</li>
          <li>example@example.com</li>
        </div>     
      </div>     
        <h2 className='app__footer-end'> © 2022 GPT3 All right reserved.</h2>
    </div>
  )
}

export default Footer