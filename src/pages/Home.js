import React from 'react';
import Banner from '../components/Banner';
import Cards from '../components/Cards';

import bannerSea from '../images/banner_sea.jpg';

const Home = () => {

  return (
    <div className="home">
      <Banner image={bannerSea} title="Chez vous, partout et ailleurs" />
        <div className="cards-container">
          <Cards/>
      </div>
    </div>
  );
};

export default Home;
