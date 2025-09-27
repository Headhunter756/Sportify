import { useState, useEffect } from 'react'
import './Login.css'
import { useNavigate } from "react-router-dom";

const Login = () => {

    const navigate = useNavigate();
    async function log(e) {
        e.preventDefault();
        const email = document.getElementById("loginEmail").value;
        const password = document.getElementById("loginPassword").value;
        const details = {email,password}
        const response = await fetch("http://localhost:8080/auth/login", {
            method: "POST",
            body: JSON.stringify(details)
        })
        if (response.ok) {
            const data = await response.json();
            const token = await data.body.token;
            sessionStorage.setItem("token",token)
            navigate("/dashboard")
        }
    }

    return (
        <>
            <div id="login-box">
                <h2>Login</h2>
                <form id="loginForm">
                    <label htmlFor="loginEmail">E-mail ID:</label>
                    <input type="email" id="loginEmail" required /><br />
                    <label htmlFor="loginPassword">Password:</label>
                    <input type="password" id="loginPassword" minLength="6" required /><br />
                    <small>Password must be at least 6 characters.</small><br />
                    <input type="button" value="Login" onClick={log} /><br />

                </form>
            </div>
        </>
    )
}

export default Login
