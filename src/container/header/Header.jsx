import React from 'react'
import './header.css'
import ai from '../../assets/ai.png'
const Header = () => {
  return (
    <div className='app__header section__padding' id='home'>
      <div className='app__header-img'>
        <img src={ai} alt="ai"/>
      </div>

      <div className='app__header-content'>
        <h1 className='text__gradient'>Lets Build Something amazing with GPT-3 OpenAI</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta hic voluptates quia. Doloremque pariatur quas numquam voluptatum esse iure quaerat!</p>
        <div className='app__header-content_input'>
          <input type="text" placeholder='Your e-mail adress' />
          <button type='button'>Let's Start</button>
        </div>
      </div>
    </div>
  )
}

export default Header