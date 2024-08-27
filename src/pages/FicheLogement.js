import React, { useState, useEffect } from 'react';
import Slider from '../components/Slider';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../logements.json';

const FicheLogement = () => {
  const { id } = useParams(); // Utilisation de l'ID au lieu du titre
  const navigate = useNavigate();
  
  // Trouver le logement correspondant à l'ID
  const logement = logements.find(logement => logement.id === id);

  useEffect(() => {
    if (!logement) {
      // Redirection vers la page 404 si le logement n'est pas trouvé
      navigate('/404');
    }
  }, [logement, navigate]);

  if (!logement) {
    return null; // ou un loader si vous préférez
  }

  return (
    <div className="logements">
      <Slider pictures={logement.pictures} />

      <section className="informations">
        <div className="info-header">
          <h1>{logement.title}</h1>
          <p className="ville">{logement.location}</p>
          <ul className="categories">
            {logement.tags.map((tag, index) => (
              <li key={index}>{tag}</li>
            ))}
          </ul>
        </div>

        <div className="aside">
          <div className="identity">
            <div className="name">
              {logement.host.name.split(' ').map((namePart, index) => (
                <p key={index}>{namePart}</p>
              ))}
            </div>
            <span className="circle"><img src={logement.host.picture} alt={logement.host.name} /></span>
          </div>
          <ul className="star">
            {Array.from({ length: 5 }, (_, index) => (
              <li key={index}>
                <i 
                  className="fa-solid fa-star" 
                  style={{ color: index < logement.rating ? '#ff6060' : '#C4C4C4' }}
                ></i>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="accordion">
        <div className="accordion-container">                
          <input type="checkbox" id="description" className="accordion-toggle"/>
          <label htmlFor="description" className="accordion-header">
            <p>Description</p>
            <i className="fa-solid fa-angle-up"></i>
          </label>
          <div className="accordion-content">
            {logement.description}
          </div>
        </div>
        <div className="accordion-container">                
          <input type="checkbox" id="equipements" className="accordion-toggle"/>
          <label htmlFor="equipements" className="accordion-header">
            <p>Equipements</p>
            <i className="fa-solid fa-angle-up"></i>
          </label>
          <div className="accordion-content">
            <ul>
              {logement.equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          </div>
        </div> 
      </section>
    </div>    
  );
};

export default FicheLogement;