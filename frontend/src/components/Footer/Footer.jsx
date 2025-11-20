import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section">
          <h2 className="footer-logo">OZ'S Virtual Study Platform</h2>
          <p className="footer-desc">
            A collaborative learning hub connecting students and teachers through free study resources and smart digital tools.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/Help">About</Link></li>
            <li><Link to="/Help">Help</Link></li>
            <li><Link to="/Help">Contact</Link></li>
          </ul>
        </div>

        <div className="footer-section">
          <h3>Contact</h3>
          <p>Email: support@vsp.com</p>
          <p>Phone: +880 1234 567890</p>
          <p>© {new Date().getFullYear()} Virtual Study Platform</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

