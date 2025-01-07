import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email.trim()) {
      alert('Email is required');
      setEmail('');
      setPassword('');
      return;
    }

    if (!email.endsWith('@gmail.com')) {
      alert('Email must end with @gmail.com');
      setEmail('');
      setPassword('');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(
      (u) => u.email === email && u.password === password
    );

    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
      setIsLoggedIn(true); 
      navigate('/'); 
    } else {
      alert('Invalid credentials');
      setEmail('');
      setPassword('');
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <a href="/Signup">Signup</a>
      </p>
    </div>
  );
};

export default Login;
