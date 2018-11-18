import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({changeViews}) => {

  const changeForm = e => {
    changeViews(e.target.id)
  }

  return <div className="navbar">
      <li onClick={changeForm} id="info">
        Camper Info
      </li>
      <li onClick={changeForm} id="health">
        Health Forms
      </li>
      <li onClick={changeForm} id="docs">
        Document Forms
      </li>
      <li>
        <Link to="/home">Cancel Application</Link>
      </li>
    </div>;
};

export default NavBar;