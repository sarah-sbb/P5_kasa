import React from 'react';
import Cards from '../components/Cards';

const Home = () => {
  const cardData = [
    { title: 'Location 1', image: '/path/to/image1.jpg' },
    { title: 'Location 2', image: '/path/to/image2.jpg' },
    { title: 'Location 3', image: '/path/to/image3.jpg' },
    { title: 'Location 4', image: '/path/to/image4.jpg' },
    { title: 'Location 5', image: '/path/to/image5.jpg' },
    { title: 'Location 6', image: '/path/to/image6.jpg' },
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
