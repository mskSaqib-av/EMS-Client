import React, { useState, useContext } from 'react';
import axios from '../api/axios';
import '../styles/login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);

  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('/auth/login', form);
      login(res.data.token);
      navigate('/dashboard');
    } catch (err) {
      setError('Invalid credentials');
    }
  };

  return (
    <div className="login-container">
      <div className='login-box'>
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
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
            <button type="submit">Login</button>
            {error && <p style={{color: 'red'}}>{error}</p>}
            <p className='register-text'>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
        </form>
        
      </div>
    </div>

  );
};

export default Login;
