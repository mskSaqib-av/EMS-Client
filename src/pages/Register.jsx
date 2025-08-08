import React, { useState } from 'react';
import axios from '../api/axios';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const [form, setForm] = useState({ userName: '', email: '', hashPassword: '', phone: '', dob: '' });
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

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
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>
      <input placeholder="User Name" value={form.userName}
             onChange={(e) => setForm({ ...form, userName: e.target.value })} />
      <input placeholder="Email" value={form.email}
             onChange={(e) => setForm({ ...form, email: e.target.value })} />
      <input type="password" placeholder="Password" value={form.password}
             onChange={(e) => setForm({ ...form, hashPassword: e.target.value })} />
      <input placeholder="Phone" value={form.phone}
             onChange={(e) => setForm({ ...form, phone: e.target.value })} />
      <input type="date" value={form.dob}
             onChange={(e) => setForm({ ...form, dob: e.target.value })} />
      <button type="submit">Register</button>
      {message && <p style={{ color: message.includes('Registered') ? 'green' : 'red' }}>{message}</p>}

    </form>
  );
};

export default Register;
