import React from 'react';
import { useNavigate } from 'react-router-dom';
import logements from '../logements.json';

const Cards = () => {
  const navigate = useNavigate();

  const handleClick = (id) => { // Changer le paramètre de title à id
    navigate(`/logement/${id}`); // Utilisation de l'ID dans la navigation
  };

  return (
    <section className='section-cards'>
      <div className="cards">
        {logements.map((logement, index) => (
          <div key={index} className="card" onClick={() => handleClick(logement.id)}>              
              <img src={logement.cover} alt={logement.title} className="card-image" /> 
              <h3 className="card-title">{logement.title}</h3> 
          </div>
        ))}
      </div>
    </section>
  );
};

export default Cards;