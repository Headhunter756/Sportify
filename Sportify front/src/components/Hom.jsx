import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Hom.css'

const Hom = () => {

    const navigate = useNavigate();

    return (
        <>
            <div className="body">
                <header>
                    <img src="" alt="Logo" />
                    <div className="loc">
                        <label htmlFor="location">Location:</label>
                        <input type="search" id="location" />
                        <button onClick={() => navigate("/login")}>Login</button>
                    </div>
                </header>
                <div className="box">
                    <div className="about">
                        <h3>About Us</h3>
                        <p>
                            At our core, we believe playing should be easy and fun. That's why we created a smart platform that takes the stress out of turf booking. In just a few taps, you can secure your ground, invite your friends, or even find new teammates to join your match. More than just a booking tool, our software builds a community of players who love the game as much as you do. Whether casual or competitive, we bring convenience, connection, and passion for sports together.
                        </p>
                    </div>
                    <div className="forms">
                        <button onClick={() => navigate("/form")}>Join Turf</button>
                        <button onClick={() => navigate("/dashboard")}>Book Turf</button>
                        <button onClick={() => navigate("/turf")}>Register Turf</button>
                    </div>
                </div>
                <footer>
                    <p>
                        &copy; Copyright Hackops
                    </p>
                </footer>
            </div>
        </>
    )
}

export default Hom
