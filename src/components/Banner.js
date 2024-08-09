import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from '../images/logo_kasa.svg';
import bannerHome from '../images/banner_sea.jpg';

const Banner = () => {
  return (
    <header className="header">
        <nav className="navbar">
          <div className="navbar_logo">
            <img src={logo} alt="logo de kasa" />
          </div>
            <ul className="navbar_link">
              <li className="nav-item"><Link to="/">Accueil</Link></li>
              <li className="nav-item"><Link to="../About">A propos</Link></li>
            </ul>   
        </nav>
        <section className="section-hero">
          <div className="hero">
            <h1 className="hero_title">Chez vous, partout et ailleurs</h1>
            <img src={bannerHome} alt="image de la bannière de la page d'accueil" />
          </div>
      </section>
    </header>
  );
};

export default Banner;