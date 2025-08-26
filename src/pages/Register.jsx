import React, { useState } from 'react';
import axios from '../api/axios';
import '../styles/login.css'
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ userName: '', email: '', hashPassword: '', phone: '', dob: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/auth/registeruser', form);
      setMessage('Registered! Redirecting...');
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
        if (err.response && err.response.status === 400) {
            setMessage(err.response.data); // e.g., "User with this email already exists."
        } else {
            setMessage('Registration failed. Please try again.');
        }
    }
  };

  return (
    
    <div className="login-container">
      <div className='login-box'>
        <form onSubmit={handleSubmit}>
          <h2>Register</h2>
          <input placeholder="User Name" value={form.userName}
          onChange={(e) => setForm({ ...form, userName: e.target.value })} />
          <input placeholder="Email" value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })} />
          {/* <input type={showPassword ? "text" : "password"} placeholder="Password" value={form.password}
                  onChange={(e) => setForm({ ...form, password: e.target.value })} />
                  <span
                      className="toggle-password"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? "👁️" : "🙈"}
                  </span> */}
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
            />
            <span
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? "👁️" : "👁️"}
            </span>
          </div>

          <input
            type="tel"
            placeholder="0336-1234567"
            value={form.phone}
            onChange={(e) => {
              let value = e.target.value;

              // Only digits allow karo
              value = value.replace(/\D/g, "");

              // Max 13 digits tak hi allow karo
              if (value.length > 13) {
                value = value.slice(0, 13);
              }

              setForm({ ...form, phone: value });
            }}
          />
        
          <input type="date" value={form.dob}
          onChange={(e) => setForm({ ...form, dob: e.target.value })} />

          <button type="submit">Register</button>
          {message && <p style={{color: 'red'}}>{message}</p>}
          <p className='register-text'>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
            
      </div>
    </div>
  );
};

export default Register;
