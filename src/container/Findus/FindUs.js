import React, { useState } from 'react';
import SubHeading from '../../components/SubHeading/SubHeading';
import { images } from '../../constants';
import './FindUs.css';

const FindUs = () => {
  const [message, setMessage] = useState("");

  const handleVisitUsClick = () => {

    setMessage("Please log in to book your table!");
    setTimeout(() => setMessage(""), 1000); 
  };

  return (
    <div className='app__bg app__wrapper section__padding' id="contact">
      <div className='app__wrapper_info'>
        <SubHeading title="Contact" />
        <h1 className='headtext__cormorant' style={{ marginBottom: "3rem" }}>Find Us</h1>
        <div className='app__wrapper-content'>
          <p className='p__opensans'>London, 79w</p>
          <p className='p__cormorant' style={{ color: "#DCCA87", margin: "2rem 0" }}>Opening Hours</p>
          <p className='p__opensans'>Mon - Fri: 10:00 AM - 02:00 AM</p>
          <p className='p__opensans'>Sat - Sun: 10:00 PM - 03:00 AM</p>
        </div>
        
        <button className='custom__button' style={{ marginTop: "2rem" }} onClick={handleVisitUsClick}>
          Visit Us
        </button>
      </div>
      
  
      {message && (
        <div className="message-overlay">
          <div className="message-container">
            <p className="message">{message}</p>
          </div>
        </div>
      )}

      <div className='app__wrapper_img'>
        <img src={images.FindUs} alt="Find Us" />
      </div>
    </div>
  );
};

export default FindUs;
