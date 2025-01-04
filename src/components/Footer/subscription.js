import React from 'react';
import { Link } from 'react-router-dom';
import './subscription.css';

const SubscriptionThankYou = () => {
  return (
    <div className="subscription-thank-you">
      <h2>Subscription Successful!</h2>
      <p>
        Thank you for subscribing! You'll receive notifications with our latest
        updates.
      </p>
      <Link to="/" className="back-home-button">
        Back to Home
      </Link>
    </div>
  );
};

export default SubscriptionThankYou;
