import React from 'react';
import Banner from '../components/Banner';

const Home = () => {
  const cardData = [
    { title: 'Location 1', description: 'Description 1', image: '/path/to/image1.jpg' },
    { title: 'Location 2', description: 'Description 2', image: '/path/to/image2.jpg' },
    // Ajoutez d'autres données de cartes ici
  ];

  return (
    <div className="home">
      <Banner/>
    </div>
  );
};

export default Home;