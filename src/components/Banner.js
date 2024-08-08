import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import Home from '../pages/Home';
import About from '../pages/About';

const Banner = () => {
  return (
    <header className="header">
        <nav className="navbar">
          <div className="navbar_logo">
            <img src="../images/logo_kasa.svg" alt="logo de kasa" />
          </div>
            <ul className="navbar_link">
              <li className="nav-item"><Link to="../pages/Home">Accueil</Link></li>
              <li className="nav-item"><Link to="../pages/About">A propos</Link></li>
            </ul>   
        </nav>
    </header>
  );
};

export default Banner;
