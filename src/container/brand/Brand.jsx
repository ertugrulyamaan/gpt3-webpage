import React from 'react'
import './brand.css' 

import dropbox from '../../assets/dropbox.png'
import google from '../../assets/google.png'
import atlassian from '../../assets/atlassian.png'
import shopify from '../../assets/shopify.png'
import slack from '../../assets/slack.png'


const Brand = () => {
  return (
    <div className='app__brand section__padding'>
      <div>
        <img src={google} alt=""/>
      </div>
      <div>
        <img src={dropbox} alt=""/>
      </div>
      <div>
        <img src={atlassian} alt=""/>
      </div>
      <div>
        <img src={shopify} alt=""/>
      </div>
      <div>
        <img src={slack} alt=""/>
      </div>
      
    </div>
  )
}

export default Brand