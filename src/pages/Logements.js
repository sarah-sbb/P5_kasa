import React from 'react';

const FicheLogement = () => {
    return (      
    <div className="logements">
      <div className="slider">
        <div className="slider-angle">
          <i class="fa-solid fa-angle-left"></i>
          <i class="fa-solid fa-angle-right"></i>  
        </div>      
        <img src="../images/banner_home.jpg" alt="slider" />
      </div>

      <section className="informations">
        <div className="info-header">
          <h1>Cozy loft on the Canal Saint-Martin</h1>
          <p className="ville">Paris, Île de France</p>
          <ul className="categories">
            <li>Cosy</li>
            <li>Canal</li>
            <li>Paris 10</li>
          </ul>
        </div>

        <div className="aside">
          <div className="identity">
            <p>Alexandre Dumas</p>
            <span className="circle"></span>
          </div>
          <ul className="star">
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
            <li><i class="fa-solid fa-star"></i></li>
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
          Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </div>
        </div>
        <div className="accordion-container">                
          <input type="checkbox" id="equipements" className="accordion-toggle"/>
          <label htmlFor="equipements" className="accordion-header">
          <p>Equipements</p>
          <i className="fa-solid fa-angle-up"></i>
          </label>
          <div className="accordion-content">
          Les annonces postées sur Kasa garantissent une fiabilité totale. 
          Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.
          </div>
        </div> 
      </section>

    </div>    
    );
  };
  
  export default FicheLogement;