import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../images/logo_kasa.svg';

const Header = () => {
  return (
    <header className="header">
        <nav className="navbar">
          <div className="navbar_logo">
            <a href="/">
              <img src={logo} alt="Kasa" />
            </a>
          </div>
            <ul className="navbar-link">
              <li className="nav-item"><Link to="/">Accueil</Link></li>
              <li className="nav-item"><Link to="../About">A propos</Link></li>
            </ul>   
        </nav>
    </header>
  );
};

export default Header;