import { useState, useEffect } from 'react'
import './App.css'
import Home from './components/Home'
import navimg from './components/Images/nav.png'
import Login from './components/Login'

function App() {

  const [login, setLogin] = useState(false);
  const [btntxt, setBtntxt] = useState("Login")

  useEffect(() => {
    if (login) {
      setBtntxt("Home")
    }
    else{
      setBtntxt("Login")
    }
  }, [login])

  return (
    <>
      <header>
        <h3>Logo</h3>
        {/* <img src={navimg} alt="nav" id='navimg'/> */}
        <button id="login" onClick={() =>setLogin(!login)}>{btntxt}</button>
      </header>
      <div className="content">
        {login ? <Login/>:<Home />}
      </div>
      <footer>
        &copy;Copyright HackOPS <br />
        Contact: **********
      </footer>
    </>
  )
}

export default App
