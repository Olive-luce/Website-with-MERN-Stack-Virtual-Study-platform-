import React, { useState } from 'react'
import './SignIn.css'
import { Link, useNavigate } from 'react-router-dom'

const SignIn = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [role, setRole] = useState('student') // default role
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulate authentication — replace this later with your backend logic
    alert(`Signed in as ${role} (${email})`)

    // Navigate based on role
    if (role === 'student') {
      navigate('/student-dashboard')
    } else if (role === 'teacher') {
      navigate('/teacher-dashboard')
    }
  }

  return (
    <div className="signin-page">
      <div className="signin-card">
        <h2>Sign In</h2>

        {/* 👇 Role selection */}
        <div className="role-select">
          <label>
            <input
              type="radio"
              name="role"
              value="student"
              checked={role === 'student'}
              onChange={(e) => setRole(e.target.value)}
            />
            Student
          </label>

          <label>
            <input
              type="radio"
              name="role"
              value="teacher"
              checked={role === 'teacher'}
              onChange={(e) => setRole(e.target.value)}
            />
            Teacher
          </label>
        </div>

        {/* 👇 Sign-in form */}
        <form onSubmit={handleSubmit} className="signin-form">
          <label>
            Email
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </label>

          <label>
            Password
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </label>

          <button type="submit" className="signin-btn">Sign In</button>
        </form>

        <div style={{ marginTop: 12 }}>
          Don’t have an account? 
          <Link 
            to="/register" 
            style={{
            color: "white",
            backgroundColor: "#ff6347",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none"
                            }}
            >
              Register now
          </Link>
        </div>

        <div style={{ marginTop: 8 }}>
          <Link to="/forgot-password"
          style={{
            color: "white",
            background: "#ff6347",
            padding: "5px 10px",
            borderRadius: "5px",
            textDecoration: "none"
                            }}
            >
              Forgot Password?
          </Link>
        </div>
      </div>
    </div>
  )
}

export default SignIn
