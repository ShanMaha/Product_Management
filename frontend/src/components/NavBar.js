import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // For custom styles (optional)

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/add">Opticals</Link>
        </li>
        <li>
          <Link to="/optical-details">Optical Details</Link>
        </li>
        <li>
          <Link to="/contact-us">Contact Us</Link>
        </li>
        <li>
          <Link to="/list">Products</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
