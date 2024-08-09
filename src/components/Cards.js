import React from 'react';
import '../App.css';

const Cards = ({ cardData }) => {
  return (
    <section className='section-cards'>
      <div className="cards">
        {cardData.map((card, index) => (
          <div key={index} className="card">
            <div className="card-content">
              <h3 className="card-title">{card.title}</h3>
              <p className="card-description">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;