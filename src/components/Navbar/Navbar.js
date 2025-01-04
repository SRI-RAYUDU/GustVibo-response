import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { FaRegUserCircle } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../Images/logo.png'

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('user');
    setIsLoggedIn(false); 
    navigate('/'); 
  };

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/">
          <img src={logo} alt="app__logo" />
        </Link>
      </div>

      <ul className="app__navbar-links">
        <li className="p__opensans"><Link to="/">Home</Link></li>
        <li className="p__opensans"><Link to="/about">About</Link></li>
        <li className="p__opensans"><Link to="/menu">Menu</Link></li>
        <li className="p__opensans"><Link to="/awards">Awards</Link></li>
        <li className="p__opensans"><Link to="/contact">Contact</Link></li>
        {isLoggedIn && (
          <li className="p__opensans"><Link to="/BookTable">BookTable</Link></li>
        )}
      </ul>

      <div className="app__navbar-login">
        {isLoggedIn ? (
          <>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
            <FaRegUserCircle className="user-icon" fontSize={20} />
          </>
        ) : (
          <>
            <Link to="/login" className="p__opensans login-link">Login</Link>
            <Link to="/signup" className="p__opensans signup-link">Signup</Link>
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
              <li onClick={() => setToggleMenu(false)}><Link to="/">Home</Link></li>
              <li onClick={() => setToggleMenu(false)}><Link to="/about">About</Link></li>
              <li onClick={() => setToggleMenu(false)}><Link to="/menu">Menu</Link></li>
              <li onClick={() => setToggleMenu(false)}><Link to="/awards">Awards</Link></li>
              <li onClick={() => setToggleMenu(false)}><Link to="/contact">Contact</Link></li>
              {isLoggedIn && (
                <li onClick={() => setToggleMenu(false)}><Link to="/BookTable">BookTable</Link></li>
              )}
              {isLoggedIn ? (
                <li onClick={() => { setToggleMenu(false); handleLogout(); }}>Logout</li>
              ) : (
                <>
                  <li onClick={() => setToggleMenu(false)}><Link to="/login">Login</Link></li>
                  <li onClick={() => setToggleMenu(false)}><Link to="/signup">Signup</Link></li>
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
