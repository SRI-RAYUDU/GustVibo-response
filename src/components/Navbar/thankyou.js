import React from 'react';
import { useNavigate } from 'react-router-dom';
import './thankyou.css';

const ThankYou = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => {
    navigate('/'); 
  };

  return (
    <div className="thank-you">
      <h2>Thank you for your confirmation!</h2>
      <button onClick={handleBackToHome}>Back to Home</button>
    </div>
  );
};

export default ThankYou;
