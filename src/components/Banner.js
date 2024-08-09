import React from 'react';
import '../App.css';
import bannerHome from '../images/banner_sea.jpg';

const Banner = () => {
  return (
    <section className="section-hero">
      <div className="hero">
        <h1 className="hero_title">Chez vous, partout et ailleurs</h1>
        <img src={bannerHome} alt="image de la bannière de la page d'accueil" />
      </div>
    </section>
  );
};

export default Banner;