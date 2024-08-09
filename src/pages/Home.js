import React from 'react';
import Cards from '../components/Cards';

const Home = () => {
  const cardData = [
    { title: 'Titre de la location', image: '/path/to/image1.jpg' },
    { title: 'Titre de la location', image: '/path/to/image2.jpg' },
    { title: 'Titre de la location', image: '/path/to/image3.jpg' },
    { title: 'Titre de la location', image: '/path/to/image4.jpg' },
    { title: 'Titre de la location', image: '/path/to/image5.jpg' },
    { title: 'Titre de la location', image: '/path/to/image6.jpg' },
  ];

  return (
    <div className="home">
      <div className="cards-container">
        <Cards cardData={cardData} />
      </div>
    </div>
  );
};

export default Home;
