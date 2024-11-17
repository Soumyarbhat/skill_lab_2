import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/categories">Categories</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/about">About Us</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  </header>
);

export default Header;