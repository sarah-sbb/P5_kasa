import React from 'react';
import Banner from '../components/Banner';
import Accordion from '../components/Accordion';
import bannerAbout from '../images/banner_landscape.jpg';

const accordions = [
  {
    id: 'fiabilite',
    title: 'Fiabilité',
    content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    id: 'respect',
    title: 'Respect',
    content: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    id: 'service',
    title: 'Service',
    content: 'La qualité du service est au coeur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction, que ce soit avec nos hôtes ou nos locataires, soit empreints de respect et de bienveillance.',
  },
  {
    id: 'securite',
    title: 'Sécurité',
    content: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permettra à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers de sensibilisation pour nos hôtes.',
  }
];

const About = () => {
  return (
    <section className='section-about'>
      <Banner image={bannerAbout} />
      {accordions.map(({ id, title, content }) => (
        <Accordion key={id} id={id} title={title} content={content} />
      ))}
    </section>
  );
};

export default About;