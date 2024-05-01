import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { TbMessageChatbot } from "react-icons/tb";

import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, loginWithRedirect, isAuthenticated, logout } = useAuth0();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    
    <nav className="navbar">
      <div className="navbar-logo">Neuro-VR</div>
      {/* <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
        <Link to="/" onClick={toggleMenu}>Home</Link>
        <Link to="/about" onClick={toggleMenu}>About</Link>
        <Link to="/services" onClick={toggleMenu}>Services</Link>
        <Link to="/contact" onClick={toggleMenu}>Contact</Link>
      </div> */}
      <div className="navbar-links">
        {/* <Link to="/" onClick={toggleMenu}>Home</Link>
      <Link to="/About" onClick={toggleMenu}>About</Link>
      <Link to="/Services" onClick={toggleMenu}>Services</Link>
      <Link to="/Contact" onClick={toggleMenu}>Contact</Link> */}
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
        <li>
          <a href="/services">Services</a>
        </li>
        <li>
          <a href="/contact">Contact Us</a>
        </li>

        {isAuthenticated && (
          <li>
            <p> Welcome {user.name}</p>
          </li>
        )}
        {isAuthenticated ? (
          <li>
            <button
              className="signup"
              onClick={() =>
                logout({ logoutParams: { returnTo: window.location.origin } })
              }
            >
              Log Out
            </button>
          </li>
        ) : (
          <li>
            <button className="signup" onClick={() => loginWithRedirect()}>
              Log In
            </button>
          </li>
        )}
      </div>
      <div className="navbar-toggle" onClick={toggleMenu}>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
        <div className={`bar ${isOpen ? "open" : ""}`}></div>
      </div>





      
    </nav>
    
    
    
  );
};

export default Navbar;
