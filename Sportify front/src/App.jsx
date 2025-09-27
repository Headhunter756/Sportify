import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './components/Login'
import Form from './components/Form'
import Dashboard from "./components/Dashboard"

function App() {

  const [fourm, setFourm] = useState(false);
  const [btntxt, setBtntxt] = useState("Login")

  useEffect(() => {
    if (fourm) {
      setBtntxt("Home")
    }
    else {
      setBtntxt("Login")
    }
  }, [fourm])

  return (
    <>
      <header>
        <h3>Logo</h3>
        {/* <img src={navimg} alt="nav" id='navimg'/> */}
        <button id="login" onClick={() => setFourm(!fourm)}>{btntxt}</button>
      </header>
      <div className="content">
        {fourm ? <Form /> : <Home />}  
      </div>
      <footer>
        &copy;Copyright HackOPS <br />
        Contact: **********
      </footer>
    </>
  )
}

export default App
