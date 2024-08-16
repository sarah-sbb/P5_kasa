import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import logements from '../logements.json';

const FicheLogement = () => {
  const { id } = useParams();
  const logement = logements.find(logement => logement.id === id);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  if (!logement) {
    return <div>Logement non trouvé</div>;
  }

  const handlePrevClick = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? logement.pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === logement.pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="logements">
      <div className="slider">
        <img src={logement.pictures[currentImageIndex]} alt={`Slide ${currentImageIndex + 1}`} className="slider-image" />
        {logement.pictures.length > 1 && (
          <>
            <button className="slider-angle left" onClick={handlePrevClick}>
              <i className="fa-solid fa-angle-left"></i>
            </button>
            <button className="slider-angle right" onClick={handleNextClick}>
              <i className="fa-solid fa-angle-right"></i>
            </button>
          </>
        )}
      </div>

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
            <p>{logement.host.name}</p>
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