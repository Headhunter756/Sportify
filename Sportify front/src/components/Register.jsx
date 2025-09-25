import { useState, useEffect } from 'react'
import Login from './Login'

const Register = () => {

    const [linktxt2, setlinktxt2] = useState("Don't Have an account ? Register Here")
    const [login, setlogin] = useState(false)

    useEffect(() => {
        if (login) {
            setlinktxt2("Don't Have an account ? Register Here")
        }
        else {
            setlinktxt2("Already Registered ? Let's login")
        }
    }, [login])

    function reg(e) {
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
    
        alert("Registration Successful (demo only)");
    }


    return (
        <>
            {login ? <Login /> :
                <div className='container' id="register-box">
                    <h2>Register</h2>
                    <form id="registerForm">
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" required />

                        <label htmlFor="middleName">Middle Name:</label>
                        <input type="text" id="middleName" name="middleName" />

                        <label htmlFor="surname">Surname:</label>
                        <input type="text" id="surname" name="surname" required />

                        <label htmlFor="flat">Flat No.:</label>
                        <input type="text" id="flat" name="flat" required />

                        <label htmlFor="building">Building:</label>
                        <input type="text" id="building" name="building" required />

                        <label htmlFor="area">Area:</label>
                        <input type="text" id="area" name="area" required />

                        <label htmlFor="state">State:</label>
                        <input type="text" id="state" name="state" required />

                        <label htmlFor="pincode">Pincode:</label>
                        <input type="text" id="pincode" name="pincode" pattern="^[1-9][0-9]{5}$" required />
                        <small>Enter a valid 6-digit pincode.</small>

                        <label htmlFor="phone">Phone No.:</label>
                        <input type="tel" id="phone" name="phone" pattern="^[6-9][0-9]{9}$" required />
                        <small>Enter a valid 10-digit Indian mobile number.</small>

                        <button type="button" onClick={reg}>Register</button>
                        <div className="toggle-link">
                            <a href='#' onClick={(e) => { setlogin(!login); e.preventDefault() }}>{linktxt2}</a>
                        </div>
                    </form>
                </div>
            }
        </>
    )
}

export default Register
