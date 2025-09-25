import { useState, useEffect } from 'react'
import './Login.css'
import Register from './Register'

const Login = () => {

    const [register, setRegister] = useState(false)
    const [linktxt, setlinktxt] = useState("Don't Have an account ? Register Here")

    useEffect(() => {
        if (register) {
            setlinktxt("Already Registered ? Let's login")
        }
        else {
            setlinktxt("Don't Have an account ? Register Here")
        }
    }, [register])

    function log(e) {
        e.preventDefault();
        alert("Login Successful (demo only)");
    }

    return (
        <>
            {register ? <Register /> :
                <div id="login-box">
                    <h2>Login</h2>
                    <form id="loginForm">
                        <label htmlFor="loginEmail">E-mail ID:</label>
                        <input type="email" id="loginEmail" name="loginEmail" required /><br />
                        <label htmlFor="loginPassword">Password:</label>
                        <input type="password" id="loginPassword" name="loginPassword" minLength="6" required /><br />
                        <small>Password must be at least 6 characters.</small><br />
                        <input type="button" value="Login" onClick={log} /><br />
                        <div className="toggle-link">
                            <a href='#' onClick={(e) => { setRegister(!register); e.preventDefault() }}>{linktxt}</a>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}

export default Login
