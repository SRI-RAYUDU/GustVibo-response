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
          <p className="menu-description">A refreshing mix of tequila, lime juice, and triple sec, served with a salted rim.</p>
          <p className="menu-price">₹750</p>
        </div>
        <div className="menu-item">
          <img src={images.image2} alt="Pina Colada" />
          <p className="menu-name">Pina Colada</p>
          <p className="menu-description">A tropical blend of rum, coconut cream, and pineapple juice, served chilled.</p>
          <p className="menu-price">₹900</p>
        </div>
        <div className="menu-item">
          <img src={images.image3} alt="Cosmopolitan" />
          <p className="menu-name">Cosmopolitan</p>
          <p className="menu-description">A stylish cocktail with vodka, cranberry juice, lime juice, and triple sec.</p>
          <p className="menu-price">₹3300</p>
        </div>
        <div className="menu-item">
          <img src={images.image4} alt="Martini" />
          <p className="menu-name">Martini</p>
          <p className="menu-description">A classic mix of gin and dry vermouth, garnished with an olive or a lemon twist.</p>
          <p className="menu-price">₹6200</p>
        </div>
        <div className="menu-item">
          <img src={images.image5} alt="Old Fashioned" />
          <p className="menu-name">Old Fashioned</p>
          <p className="menu-description">A timeless cocktail with whiskey, bitters, sugar, and a twist of orange.</p>
          <p className="menu-price">₹1500</p>
        </div>
        <div className="menu-item">
          <img src={images.image7} alt="Mai Tai" />
          <p className="menu-name">Mai Tai</p>
          <p className="menu-description">A fruity cocktail made with rum, lime juice, orgeat syrup, and curacao.</p>
          <p className="menu-price">₹2400</p>
        </div>
        <div className="menu-item">
          <img src={images.image8} alt="Bloody Mary" />
          <p className="menu-name">Bloody Mary</p>
          <p className="menu-description">A savory cocktail with vodka, tomato juice, and various spices and flavorings.</p>
          <p className="menu-price">₹1600</p>
        </div>
        <div className="menu-item">
          <img src={images.image9} alt="Long Island Iced Tea" />
          <p className="menu-name">Long Island Iced Tea</p>
          <p className="menu-description">A cocktail that combines vodka, rum, gin, tequila, and triple sec with lemon juice and cola.</p>
          <p className="menu-price">₹3300</p>
        </div>
        <div className="menu-item">
          <img src={images.image10} alt="Sazerac" />
          <p className="menu-name">Sazerac</p>
          <p className="menu-description">A classic New Orleans cocktail made with rye whiskey, absinthe, and Peychaud's bitters.</p>
          <p className="menu-price">₹825</p>
        </div>
        <div className="menu-item">
          <img src={images.image11} alt="Negroni" />
          <p className="menu-name">Negroni</p>
          <p className="menu-description">A bittersweet blend of gin, vermouth rosso, and Campari, garnished with an orange peel.</p>
          <p className="menu-price">₹1275</p>
        </div>   
      </div>
    </div>
  );
};

export default MenuPage;
