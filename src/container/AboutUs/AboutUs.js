import React, { useState } from 'react';
import { images } from '../../constants';
import './AboutUs.css';

const AboutUs = () => {
  const [showAboutDetails, setShowAboutDetails] = useState(false);
  const [showHistoryDetails, setShowHistoryDetails] = useState(false);

  const toggleAboutDetails = () => setShowAboutDetails(!showAboutDetails);
  const toggleHistoryDetails = () => setShowHistoryDetails(!showHistoryDetails);

  return (
    <div className="app__aboutus app__bg flex__center section__padding" id="about">
      <div className="app__aboutus-content flex__center">
     
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Celebrating flavors that define GustVibo, each dish is a harmonious blend of taste, crafted with locally sourced, premium ingredients and a dedication to cherished recipes.
          </p>
          <button type="button" className="custom__button" onClick={toggleAboutDetails}>
            Learn More
          </button>
          {showAboutDetails && (
            <div className="about__details">
              <p className="p__opensans">
                Our chefs blend traditional techniques with innovative flair to create a menu that surprises and delights. From artisanal cocktails to exclusive chef specials, GustVibo offers a multi-sensory dining experience like no other. Join us and savor moments that transform dining into artistry.
              </p>
            </div>
          )}
        </div>

        
        <div className="app__aboutus-content_gustviblogo2 flex__center">
          <img src={images.gustviblogo2} alt="gust" />
        </div>


        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="about_spoon" className="spoon__img" />
          <p className="p__opensans">
            Established in 2024, GustVibo has swiftly become a cherished part of the community, renowned for its dedication to genuine culinary experiences and welcoming atmosphere.
          </p>
          <button type="button" className="custom__button" onClick={toggleHistoryDetails}>
            Learn More
          </button>
          {showHistoryDetails && (
            <div className="history__details">
              <p className="p__opensans">
                From our humble beginnings to becoming a destination for food connoisseurs, GustVibo embodies passion and precision. Our journey is filled with stories of loyal guests, inspiring chefs, and a relentless pursuit of excellence that continues to define who we are.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
