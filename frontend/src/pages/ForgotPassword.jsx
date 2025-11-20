import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './ForgotPassword.css'

export default function ForgotPassword(){
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    // placeholder - integrate with backend later
    setSent(true)
  }

  return (
    <div className="forgot-page">
      <div className="forgot-card">
        <h2>Forgot Password</h2>
        {!sent ? (
          <form onSubmit={handleSubmit} className="forgot-form">
            <label>
              Enter your account email
              <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required />
            </label>
            <button type="submit" className="forgot-btn">Send reset link</button>
          </form>
        ) : (
          <div className="forgot-sent">
            <p>If an account with <strong>{email}</strong> exists, a password reset link has been sent.</p>
            <p><Link to="/signin">Return to Sign In</Link></p>
          </div>
        )}
      </div>
    </div>
  )
}
