import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
    <header id="header" className="fixed-top d-flex align-items-center">
    <div className="container d-flex align-items-center justify-content-between">

      <div className="logo">
        <h1 className="text-dark">Learn & Earn</h1>        
      </div>

      <nav id="navbar" className="navbar">
        <ul>
          <li><NavLink className="p-2" to="/">Home</NavLink></li>
          <li><NavLink className="p-2" to="/about-us">About Us</NavLink></li>
          <li><NavLink className="p-2" to="/team">Team</NavLink></li>
          <li><NavLink className="p-2" to="/services">Services</NavLink></li>
          <li><NavLink className="p-2" to="/pricing">Pricing</NavLink></li>
          <li><NavLink className="p-2" to="/portfolio">Portfolio</NavLink></li>
          <li><NavLink className="p-2" to="/blog">Blog</NavLink></li>
          <li><NavLink className="p-2" to="/contact-us">Contact Us</NavLink></li>
        </ul>
        <i className="bi bi-list mobile-nav-toggle"></i>
      </nav>

    </div>
  </header>
    </>
  )
}

export default Header;