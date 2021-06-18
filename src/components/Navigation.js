import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <div className="navbar_wrapper">
    <div className="logo">
      Math
      <span> Magicians</span>
    </div>
    <ul className="nav_list">
      <li className="nav_item"><Link to="/" className="nav_link">Home</Link></li>
      <li className="nav_item"><Link to="/Quote" className="nav_link">Quote</Link></li>
      <li className="nav_item"><Link to="/Calculator" className="nav_link">Calculator</Link></li>
    </ul>
  </div>
);

export default Navigation;
