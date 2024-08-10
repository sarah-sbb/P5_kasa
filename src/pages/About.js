import React from 'react';
import Banner from '../components/Banner';

const About = () => {
  return (
    <section className='section-about'>
      <Banner />
      <div className="accordion-container">
        
        <input type="checkbox" id="fiabilite" className="accordion-toggle"/>
        <label htmlFor="fiabilite" className="accordion-header">
          <p>Fiabilité</p>
          <i className="fa-solid fa-angle-up"></i>
        </label>
        <div className="accordion-content">
          Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
        </div>
        
        <input type="checkbox" id="respect" className="accordion-toggle"/>
        <label htmlFor="respect" className="accordion-header">
          <p>Respect</p>
          <i className="fa-solid fa-angle-up"></i>
        </label>
        <div className="accordion-content">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </div>
        
        <input type="checkbox" id="service" className="accordion-toggle"/>
        <label htmlFor="service" className="accordion-header">
          <p>Service</p>
          <i className="fa-solid fa-angle-up"></i>
        </label>
        <div className="accordion-content">
          La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
        </div>
        
        <input type="checkbox" id="securite" className="accordion-toggle"/>
        <label htmlFor="securite" className="accordion-header">
          <p>Sécurité</p>
          <i className="fa-solid fa-angle-up"></i>
        </label>
        <div className="accordion-content">
          La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. 
          En laissant une note aussi bien à l'hôte qu'au locataire, cela permettra à nos équipes de vérifier que les standards sont bien respectés. 
          Nous organisons également des ateliers de sensibilisation pour nos hôtes.
        </div>
      </div>    
    </section>
  );
};

export default About;