import React, { useState } from 'react';
import resimage1 from '../../Images/resimage1.jpeg'; 
import resimage2 from '../../Images/resimage2.jpeg';
import resimage3 from '../../Images/resimage3.jpeg';
import resimage4 from '../../Images/resimage4.jpeg';
import SubHeading from '../../components/SubHeading/SubHeading';
import './Header.css';
import { images } from '../../constants';

const Header = () => {
  const [showGallery, setShowGallery] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const menuImages = [
    resimage1,
    resimage2,
    resimage3,
    resimage4,
  ];

  const handleExploreClick = () => {
    setShowGallery(true);
    setTimeout(() => {
      setIsEnlarged(true);
    }, 0); 

    setTimeout(() => {
      setIsEnlarged(false); 
      setShowGallery(false); 
    }, 1000); 
  };

  return (
    <div className="app__header app__wrapper section__padding" id="home">
      <div className="app__wrapper_info">
        <SubHeading title="Chase the new flavour" />
        <h1 className="app__header-h1">The key to Fine Dining</h1>
        <p className="p__opensans" style={{ margin: '2rem 0' }}>
          Let our culinary artisans guide you through a gastronomic journey that transcends the ordinary, unlocking the key to unparalleled sophistication in every bite.
        </p>
        
        <button type="button" className="custom__button" onClick={handleExploreClick}>
          Explore
        </button>
      </div>
      <div className="app__wrapper_img">
        <img src={images.welcomepng} alt="welcome" />
      </div>

      {showGallery && (
        <div className="menu__gallery">
          <div className="menu__gallery-content">
            <h2 className="gallery__heading">Our Hotel</h2>
            <div className="gallery__images">
              {menuImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Menu ${index + 1}`}
                  className={isEnlarged ? 'enlarged-image' : ''} 
                />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
