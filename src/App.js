import './App.css';

import { Navbar } from './components';
import {Header, Features, Brand, Possibility, Blog, CTA, Footer, WhatGpt3 } from './container'

function App() {
  return (
    <div>
      <div className='bg__gradient'>
        <Navbar/>
        <Header/>
      </div>
        <WhatGpt3/>
        <Brand/>
        <Possibility/>
        <Features/>
        <Blog/>
        <CTA/> 
        <Footer/>
    </div>
  );
}

export default App;
