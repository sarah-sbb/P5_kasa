import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import logements from '../logements.json';

const FicheLogement = () => {
  const { title } = useParams();
  const navigate = useNavigate();
  
  // Décoder le titre de l'URL
  const decodedTitle = decodeURIComponent(title);
  
  // Trouver le logement correspondant au titre
  const logement = logements.find(logement => logement.title === decodedTitle);

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    if (!logement) {
      // Redirection vers la page 404 si le logement n'est pas trouvé
      navigate('/404');
    }
  }, [logement, navigate]);

  if (!logement) {
    return null; // ou un loader si vous préférez
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