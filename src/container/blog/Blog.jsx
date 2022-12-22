import React from 'react'
import './blog.css'
import {Article} from '../../components'

import blog01 from '../../assets/blog01.png'
import blog02 from '../../assets/blog02.png'
import blog03 from '../../assets/blog03.png'
import blog04 from '../../assets/blog04.png'
import blog05 from '../../assets/blog05.png'


const Blog = () => {
  return (
    <div className='app__blog section__padding ' id='blog'>
      <div className='app__blog-heading'>
        <h3>A lot is happening, We are blogging about it.</h3>
      </div>
      <div className='app__blog-container'>
        <div className='app__blog-container_A'>
          <Article img={blog01} title="GPT-3 and Open AI is the future. Let us explore how it is?" date="22.12.2022"/>
        </div>
        <div className='app__blog-container_B'>
          <Article img={blog02} title="GPT-3 and Open AI is the future. Let us explore how it is?" date="22.12.2022"/>
          <Article img={blog03} title="GPT-3 and Open AI is the future. Let us explore how it is?" date="22.12.2022"/>
          <Article img={blog04} title="GPT-3 and Open AI is the future. Let us explore how it is?" date="22.12.2022"/>
          <Article img={blog05} title="GPT-3 and Open AI is the future. Let us explore how it is?" date="22.12.2022"/>
        </div>
      </div>

    </div>
  )
}

export default Blog