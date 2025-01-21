import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Images/logo.png';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false);
    navigate('/');
  };

  const handleLinkClick = () => {

    window.scrollTo(0, 0);
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/" onClick={handleLinkClick}>
          <img src={logo} alt="app__logo" />
        </Link>
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li className="p__opensans"><Link to="/about" onClick={handleLinkClick}>About</Link></li>
        <li className="p__opensans"><Link to="/menu" onClick={handleLinkClick}>Menu</Link></li>
        <li className="p__opensans"><Link to="/awards" onClick={handleLinkClick}>Awards</Link></li>
        <li className="p__opensans"><Link to="/contact" onClick={handleLinkClick}>Contact</Link></li>
        {isLoggedIn && (
          <li className="p__opensans"><Link to="/BookTable" onClick={handleLinkClick}>BookTable</Link></li>
        )}
      </ul>

      <div className="app__navbar-login">
        {isLoggedIn ? (
          <>
            <FaRegUserCircle className="user-icon" fontSize={20} style={{ color: 'white', marginRight: '10px' }} />
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          </>
        ) : (
          <>
            <Link to="/login" className="p__opensans login-link" onClick={handleLinkClick}>Login</Link>
            <Link to="/signup" className="p__opensans signup-link" onClick={handleLinkClick}>Signup</Link>
          </>
        )}
      </div>

      <div className="app__navbar-smallscreen">
        <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)} />
        {toggleMenu && (
          <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
            <MdOutlineRestaurantMenu
              fontSize={27}
              className="overlay__close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="app__navbar-smallscreen_links">
              <li onClick={() => { setToggleMenu(false); handleLinkClick(); }}><Link to="/">Home</Link></li>
              <li onClick={() => { setToggleMenu(false); handleLinkClick(); }}><Link to="/about">About</Link></li>
              <li onClick={() => { setToggleMenu(false); handleLinkClick(); }}><Link to="/menu">Menu</Link></li>
              <li onClick={() => { setToggleMenu(false); handleLinkClick(); }}><Link to="/awards">Awards</Link></li>
              <li onClick={() => { setToggleMenu(false); handleLinkClick(); }}><Link to="/contact">Contact</Link></li>
              {isLoggedIn && (
                <li onClick={() => { setToggleMenu(false); handleLinkClick(); }}><Link to="/BookTable">BookTable</Link></li>
              )}
              {isLoggedIn ? (
                <li onClick={() => { setToggleMenu(false); handleLogout(); }}>Logout</li>
              ) : (
                <>
                  <li onClick={() => { setToggleMenu(false); handleLinkClick(); }}><Link to="/login">Login</Link></li>
                  <li onClick={() => { setToggleMenu(false); handleLinkClick(); }}><Link to="/signup">Signup</Link></li>
                </>
              )}
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
