import React from 'react'
import {Feature} from '../../components'
import './whatGPT3.css'
const WhatGpt3 = () => {
  return (
    <div className='app__whatGPT3 section__padding' id='whatGPT3'>
      <div className='app__whatGPT3-feature'>
        <Feature title="What is GPT-3" text="We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous."/>
      </div>
      <div className='app__whatGPT3-heading'>
        <h1 className='text__gradient'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore, sequi?</h1>
        <p>Explore The Library</p>
      </div>
      <div className='app__whatGPT3-container'>
        <Feature title="Javascript" text="JavaScript is a scripting language that enables you to create dynamically updating content, control multimedia, animate images, and pretty much everything else. (Okay, not everything, but it is amazing what you can achieve with a few lines of JavaScript code.)"/>
        <Feature title="React" text="	
React is a JavaScript library created by Facebook. React is a User Interface (UI) library. React is a tool for building UI components"/>
        <Feature title="CSS" text="CSS (Cascading Style Sheets) is used to style and layout web pages — for example, to alter the font, color, size, and spacing of your content, split it into multiple columns, or add animations and other decorative features"/>
      </div>
    </div>
  )
}

export default WhatGpt3