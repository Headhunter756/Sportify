import { useEffect, useState } from 'react'
import Login from './Login'
import Register from './Register'
import Turf from './Turf'
import './Form.css'

const Form = () => {

    const [login, setLogin] = useState(true)
    const [champReg, setChampReg] = useState(false)
    const [turfReg, setTurfReg] = useState(false)
    const [linktxt, setlinktxt] = useState("Don't Have an account ? Register Here")
    const [linktxt2, setlinktxt2] = useState("Register Turf for champions ? Lets register")

    useEffect(() => {
        if (!turfReg) {
            setlinktxt2("Turf not registered for champions ? Lets register")
        }
        else {
            setlinktxt2("Turf Already Registered ? Let's login")
        }
    }, [turfReg])

    useEffect(() => {
        if (champReg) {
            setlinktxt("Champ Already Registered ? Let's login")
        }
        else {
            setlinktxt("Champion not registered yet ? Register Here")
        }
    }, [champReg])

    return (
        <>
            <div className="forms">
                {login && <Login />}
                {champReg && <Register />}
                {turfReg && <Turf />}
                <div className="toggle-link">
                    {!login && <><a href='#' onClick={(e) => { setChampReg(false); e.preventDefault(); setLogin(true); setTurfReg(false); }}>Already Registered ? Let's login</a><br /></>}
                    {!champReg && <><a href='#' onClick={(e) => { setChampReg(true); e.preventDefault(); setLogin(false); setTurfReg(false); }}>Champion not registered yet ? Register Here</a><br /></>}
                    {!turfReg && <><a href='#' onClick={(e) => { setTurfReg(true); e.preventDefault(); setLogin(false); setChampReg(false); }}>Turf not registered for champions ? Lets register</a></>}
                </div>
            </div>
        </>
    )
}

export default Form
