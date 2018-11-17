import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = props => {
  return <div className="navbar">
      <li>
        Camper Info
      </li>
      <li>
        Health Forms
      </li>
      <li>
        Document Forms
      </li>
      <li>
        <Link to="/home">Cancel Application</Link>
      </li>
    </div>;
};

export default NavBar;