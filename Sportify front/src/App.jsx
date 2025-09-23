import { useState } from 'react'
import './App.css'
import Home from './components/Home'
import navimg from './components/Images/nav.png'

function App() {
  

  return (
    <>
      <header>
        <h3>Logo</h3>
        <img src={navimg} alt="nav" id='navimg'/>
      </header>
      <div className="content">
        <Home />
      </div>
      <footer>
        &copy;Copyright HackOPS <br />
        Contact: **********
      </footer>
    </>
  )
}

export default App
