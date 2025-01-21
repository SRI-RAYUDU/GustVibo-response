import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './userDetails.css';

const UserDetails = () => {
  const { tableId } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isBooked, setIsBooked] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (phone.length !== 10) {
      setError('Phone number must be 10 digits.');
      return;
    }

    const userDetails = {
      tableId,
      name,
      email,
      phone,
      status: 'confirmed',
      bookedAt: new Date().toISOString(),
    };


    localStorage.setItem('successfullyBooked', true);


    localStorage.setItem(`user_table_${tableId}`, JSON.stringify(userDetails));

    setIsBooked(true);
    setError('');
    setName('');
    setEmail('');
    setPhone('');

    setTimeout(() => {
      navigate('/');
    }, 4000);
  };

  return (
    <div className="userdetails">
      {isBooked ? (
        <div className="confirmation-message">
          <span className="checkmark">&#10003;</span>
          <h2>Table {tableId} Successfully Booked!</h2>
          <p>Your reservation is confirmed. Our team will contact you soon.</p>
        </div>
      ) : (
        <div>
          <h2>Enter Your Details for Table {tableId}</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <label>Name:</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            <div className="input-group">
              <label>Phone:</label>
              <input
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                maxLength="10"
                required
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="submit-button">Confirm Booking</button>
          </form>
        </div>
      )}
    </div>
  );
};

export default UserDetails;
