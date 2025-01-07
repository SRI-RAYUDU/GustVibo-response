import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [errorName, setErrorName] = useState('');
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorNumber, setErrorNumber] = useState('');
  const navigate = useNavigate();

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = (password) => {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return passwordRegex.test(password);
  };

  const validateNumber = (num) => {
    const numberRegex = /^[1-9][0-9]{9}$/;
    return numberRegex.test(num);
  };

  const validateName = (name) => {
    return name.length >= 5;
  };

  const handleSignup = () => {
    let valid = true;

    if (!name || !email || !password || !number) {
      valid = false;
      if (!name) setErrorName('Name is required.');
      if (!email) setErrorEmail('Email is required.');
      if (!password) setErrorPassword('Password is required.');
      if (!number) setErrorNumber('Number is required.');
    }

    if (name && !validateName(name)) {
      valid = false;
      setErrorName('Name must be at least 5 characters.');
    }

    if (email && !validateEmail(email)) {
      valid = false;
      setErrorEmail('Please enter a valid email.');
    }

    if (password && !validatePassword(password)) {
      valid = false;
      setErrorPassword(
        'Password must be at least 8 characters and contain both letters and numbers.'
      );
    }

    if (number) {
      if (!validateNumber(number)) {
        valid = false;
        setErrorNumber('Number must be exactly 10 digits and cannot have leading zeros.');
      } else if (number.length !== 10) {
        valid = false;
        setErrorNumber('Number must be exactly 10 digits.');
      }
    }

    if (valid) {
      const users = JSON.parse(localStorage.getItem('users')) || [];
      const newUser = { name, email, password, number };
      users.push(newUser);
      localStorage.setItem('users', JSON.stringify(users));

      navigate('/Login');
    }
  };

  return (
    <div className="signup-page">
      <h2>Signup</h2>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setErrorName('');
          }}
        />
        {errorName && <p className="error-message">{errorName}</p>}
      </div>
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
      <div>
        <input
          type="text"
          placeholder="Number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
            setErrorNumber('');
          }}
        />
        {errorNumber && <p className="error-message">{errorNumber}</p>}
      </div>
      <button onClick={handleSignup}>Signup</button>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
