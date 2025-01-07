import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = () => {
    let valid = true;

 
    setErrorEmail('');
    setErrorPassword('');

    if (!email.trim()) {
      setErrorEmail('Email is required.');
      valid = false;
    } else if (!email.endsWith('@gmail.com')) {
      setErrorEmail('Email must end with @gmail.com.');
      valid = false;
    }

    if (!password.trim()) {
      setErrorPassword('Password is required.');
      valid = false;
    }

    if (valid) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const user = users.find(
        (u) => u.email === email && u.password === password
      );

      if (user) {
        localStorage.setItem('user', JSON.stringify(user));
        setIsLoggedIn(true);
        navigate('/');
      } else {
        setErrorEmail('Invalid email or password.');
        setErrorPassword('Invalid email or password.');
      }
    }
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <div>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setErrorEmail('');
          }}
        />
        {errorEmail && <p className="error-message">{errorEmail}</p>}
      </div>
      <div>
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            setErrorPassword('');
          }}
        />
        {errorPassword && <p className="error-message">{errorPassword}</p>}
      </div>
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <a href="/Signup">Signup</a>
      </p>
    </div>
  );
};

export default Login;
