import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './signup.css';

const Signup = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setNumber] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();


  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  };


  const validateNumber = (num) => {
    const numberRegex = /^[1-9][0-9]{9}$/; 
    return numberRegex.test(num);
  };


  const validateName = (name) => {
    const nameRegex = /^[A-Za-z\s]+$/; 
    return nameRegex.test(name);
  };

  const handleSignup = () => {
    if (!name || !email || !password || !number) {
      setError('All fields are required.');
      return;
    }


    if (!validateName(name)) {
      setError('Name can only contain alphabets and spaces.');
      return;
    }

    if (!validateEmail(email)) {
      setError('Please enter a valid email.');
      return;
    }


    if (!validateNumber(number)) {
      setError('Number must be 10 digits and cannot start with 0.');
      return;
    }

    const users = JSON.parse(localStorage.getItem('users')) || [];
    const newUser = { name, email, password, number };
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Signup successful. You can now login.');
    navigate('/Login');
  };

  return (
    <div className="signup-page">
      <h2>Signup</h2>
      {error && <p className="error-message">{error}</p>}
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
          setError('');
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          setError('');
        }}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
          setError('');
        }}
      />
      <input
        type="text"
        placeholder="Number"
        value={number}
        onChange={(e) => {
          setNumber(e.target.value);
          setError('');
        }}
      />
      <button onClick={handleSignup}>Signup</button>
      <p>
        Already have an account? <a href="/login">Login</a>
      </p>
    </div>
  );
};

export default Signup;
