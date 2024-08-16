import React from 'react';
import '../App.css';

const Banner = ({ image, title }) => {
  return (
    <section className="section-hero">
      <div className="hero">
        {title && <h1 className="hero_title">{title}</h1>}
        <img src={image} alt="bannière" />
      </div>
    </section>
  );
};

export default Banner;
