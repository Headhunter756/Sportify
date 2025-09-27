import { useState, useEffect } from 'react'

const Register = () => {

    const [message, setMessage] = useState()
    
    async function reg(e) {
        e.preventDefault();
        let pincode = document.getElementById("pincode");
        let phone = document.getElementById("phone");
        
        if (!pincode.checkValidity()) {
            alert("Invalid Pincode. It should be 6 digits.");
            return;
        }
        if (!phone.checkValidity()) {
            alert("Invalid Phone Number. It should be 10 digits starting with 6-9.");
            return;
        }        
        const flat = document.getElementById("flat").value;
        const building = document.getElementById("building").value;
        const area = document.getElementById("area").value;
        const state = document.getElementById("state").value;
        const code = pincode.value;
        const address = flat + ", " + building + ", " + area + ", " + state + ", " + code + ".";
        const name = document.getElementById("firstName").value + " " + document.getElementById("middleName").value + " " + document.getElementById("surname").value;
    
        const details = { name, address, phone, email, password }
        
        const response = await fetch("http://localhost:3306/sportify/auth/playerReg", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(details)
        })
        const data = await response.text();
        setMessage(data);
        document.getElementById("registerForm").reset();

    }


    return (
        <>
            <div className='container' id="register-box">
                <div className="messageBox">{message}</div>
                <h2>Register Champion</h2>
                <form id="registerForm">
                    <label htmlFor="firstName">First Name:</label>
                    <input type="text" id="firstName" required />

                    <label htmlFor="middleName">Middle Name:</label>
                    <input type="text" id="middleName" />

                    <label htmlFor="surname">Surname:</label>
                    <input type="text" id="surname" required />

                    <label htmlFor="flat">Flat No.:</label>
                    <input type="text" id="flat" required />

                    <label htmlFor="building">Building:</label>
                    <input type="text" id="building" required />

                    <label htmlFor="area">Area:</label>
                    <input type="text" id="area" required />

                    <label htmlFor="state">State:</label>
                    <input type="text" id="state" required />

                    <label htmlFor="pincode">Pincode:</label>
                    <input type="text" id="pincode" pattern="^[1-9][0-9]{5}$" required />
                    <small>Enter a valid 6-digit pincode.</small>

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" required />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" required />

                    <label htmlFor="phone">Phone No.:</label>
                    <input type="tel" id="phone" pattern="^[6-9][0-9]{9}$" required />
                    <small>Enter a valid 10-digit Indian mobile number.</small>

                    <button type="button" onClick={reg}>Register</button>
                </form>
            </div>
        </>
    )
}

export default Register
