import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubscribe = () => {
    if (email.endsWith('@gmail.com')) {
      setError('');
      window.scrollTo({ top: 0, behavior: 'smooth' }); 
      navigate('/subscription-thank-you'); 
    } else {
      setError('Please use a valid Gmail address to subscribe.');
    }
  };

  return (
    <div className="app__newsletter">
      <div className="app__newsletter-heading">
        <SubHeading title="Newsletter" />
        <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
        <p className="p__opensans">And never miss the latest updates!</p>
      </div>
      <div className="app__newsletter-input flex__center">
        <input
          type="email"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            setError('');
          }}
          required
          className={error ? 'error-input' : ''}
        />
        <button type="button" className="custom__button" onClick={handleSubscribe}>
          Subscribe
        </button>
      </div>
      {error && <p className="error-message">{error}</p>}
    </div>
  );
};

export default Newsletter;
