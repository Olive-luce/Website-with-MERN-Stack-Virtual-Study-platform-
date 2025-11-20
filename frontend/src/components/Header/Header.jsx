import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <div className="header-content">
                <h2>Welcome to a new academic experience!</h2>
                <p>
                    Imagine a world where every student and teacher can connect, share materials,
                    and take exams — all within one smart, secure platform. That’s exactly what
                    the <strong>OZ'S Virtual Study Platform</strong> delivers.
                </p>
                <Link to="/register"><button>Register Now</button></Link>
            </div>  
        </div>
        
    )
}

export default Header
