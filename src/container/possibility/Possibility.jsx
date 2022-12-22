import React from 'react'
import './possibility.css'
import possibility from '../../assets/possibility.png'
import {BsFillArrowUpRightCircleFill} from 'react-icons/bs'
const Possibility = () => {
  return (
    <div className='app__possibility section__padding' id='possibility'>
      <div className='app__possibility-container'>
        <p>Request Early Access to Get Started</p>
        <h3>The possibilities are beyond your imagination...</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus placeat, voluptas cum maiores libero aspernatur nesciunt officia rerum commodi fugiat.</p>
        <a href="#home">For More Information <BsFillArrowUpRightCircleFill color='#81AFDD' size={25}/> </a>
      </div>

      <div className='app__possibility-img'>
        <img src={possibility} alt="possibility" />
      </div>
    </div>
  )
}

export default Possibility