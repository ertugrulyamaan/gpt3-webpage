import {useState} from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import {AiOutlineMenuFold, AiOutlineMenuUnfold} from 'react-icons/ai'
const Navbar = () => {
  const [toggle,setToggle] = useState(false)
  return (
    <nav className='app__nav'>
      <div className='app__nav-links'>
        <div className='app__nav-links_logo'>
          <img src={logo} alt="logo"/>
        </div>
        <div className='app__nav-links-container'>
          <a href="#home">Home</a>
          <a href='#whatGPT3'>What is GPT3 ?</a>
          <a href='#possibility'>Open AI</a>
          <a href='#features'>Case Studies</a>
          <a href='#blog'>Library</a>
      </div>
      </div>
      <div className='app__nav-sign'>
        <p>Sign In</p>
        <button className='button__custom' type='button'>Sign Up</button>
      </div>

      <div className='app__nav-menu'>
        
        {toggle 
        ? <AiOutlineMenuFold color='#fff' size={40} onClick={()=>setToggle(false)}/>
        : <AiOutlineMenuUnfold color='#fff' size={40} onClick={()=> setToggle(true)}/> }
        {toggle && (
          <div className='app__nav-menu_container'>
            <a href="#home">Home</a>
            <a href='#whatGPT3'>What is GPT3 ?</a>
            <a href='#possibility'>Open AI</a>
            <a href='#features'>Case Studies</a>
            <a href='#blog'>Library</a>
            <div className='app__nav-menu_sign'>
              <p>Sign In</p>
              <button className='button__custom' type='button'>Sign Up</button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar