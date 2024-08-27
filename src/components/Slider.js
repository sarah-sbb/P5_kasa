import React, { useState } from 'react';

const Slider = ({ pictures }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
    );
  };

  const handleNextClick = () => {
    setCurrentImageIndex(prevIndex => 
      prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="slider">
      <img
        src={pictures[currentImageIndex]}
        alt={`Slide ${currentImageIndex + 1}`}
        className="slider-image"
      />
      
      {pictures.length > 1 && (
        <>
          <button className="slider-angle left" onClick={handlePrevClick}>
            <i className="fa-solid fa-angle-left"></i>
          </button>
          <button className="slider-angle right" onClick={handleNextClick}>
            <i className="fa-solid fa-angle-right"></i>
          </button>
          {/* Pagination */}
          <div className="slider-pagination">
            {currentImageIndex + 1}/{pictures.length}
          </div>
        </>
      )}
    </div>
  );
};

export default Slider;