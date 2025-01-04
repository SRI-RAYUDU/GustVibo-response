import React from 'react';
import { images } from '../../constants';
import "./MenuPage.css";

const MenuPage = () => {
  return (
    <div className="menu-page">
      <h1>Cocktails</h1>
      <div className="menu-items">
        <div className="menu-item">
          <img src={images.image1} alt="Margarita" />
          <p className="menu-name">Margarita</p>
          <p className="menu-price">₹750</p>
        </div>
        <div className="menu-item">
          <img src={images.image2} alt="Pina Colada" />
          <p className="menu-name">Pina Colada</p>
          <p className="menu-price">₹900</p>
        </div>
        <div className="menu-item">
          <img src={images.image3} alt="Cosmopolitan" />
          <p className="menu-name">Cosmopolitan</p>
          <p className="menu-price">₹3300</p>
        </div>
        <div className="menu-item">
          <img src={images.image4} alt="Martini" />
          <p className="menu-name">Martini</p>
          <p className="menu-price">₹6200</p>
        </div>
        <div className="menu-item">
          <img src={images.image5} alt="Old Fashioned" />
          <p className="menu-name">Old Fashioned</p>
          <p className="menu-price">₹1500</p>
        </div>
        <div className="menu-item">
          <img src={images.image6} alt="Whiskey Sour" />
          <p className="menu-name">Whiskey Sour</p>
          <p className="menu-price">₹1650</p>
        </div>
        <div className="menu-item">
          <img src={images.image7} alt="Mai Tai" />
          <p className="menu-name">Mai Tai</p>
          <p className="menu-price">₹2400</p>
        </div>
        <div className="menu-item">
          <img src={images.image8} alt="Bloody Mary" />
          <p className="menu-name">Bloody Mary</p>
          <p className="menu-price">₹1600</p>
        </div>
        <div className="menu-item">
          <img src={images.image9} alt="Long Island Iced Tea" />
          <p className="menu-name">Long Island Iced Tea</p>
          <p className="menu-price">₹3300</p>
        </div>
        <div className="menu-item">
          <img src={images.image10} alt="Sazerac" />
          <p className="menu-name">Sazerac</p>
          <p className="menu-price">₹825</p>
        </div>
        <div className="menu-item">
          <img src={images.image11} alt="Negroni" />
          <p className="menu-name">Negroni</p>
          <p className="menu-price">₹1275</p>
        </div>
        <div className="menu-item">
          <img src={images.image12} alt="Tequila Sunrise" />
          <p className="menu-name">Tequila Sunrise</p>
          <p className="menu-price">₹1350</p>
        </div>   
      </div>
    </div>
  );
};

export default MenuPage;
