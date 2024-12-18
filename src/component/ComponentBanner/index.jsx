import React, { useState } from 'react';

const Banner = () => {
  const images = [
    'http://localhost:3001/images/bannerImage2.jpg',
    'https://via.placeholder.com/1200x400/33CFFF/FFFFFF?text=Promoción+2',
    'https://via.placeholder.com/1200x400/FFC300/FFFFFF?text=Promoción+3'
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const styles = {
    container: {
      width: '100%',
      height: '50%', 
      overflow: 'hidden',
      position: 'relative',
    },
    slider: {
      display: 'flex',
      transition: 'transform 0.3s ease-in-out',
      transform: `translateX(-${currentIndex * 100}%)`,
    },
    slide: {
      minWidth: '100%',
    //   height: '70%', 
      objectFit: 'contain',
    },
    button: {
      position: 'absolute',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
      color: 'white',
      border: 'none',
      padding: '10px',
      cursor: 'pointer',
      zIndex: 10,
    },
    prevButton: {
      left: '10px',
    },
    nextButton: {
      right: '10px',
    }
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div style={styles.container}>
      <div style={styles.slider}>
        {images.map((img, index) => (
          <img key={index} src={img} alt={`Promoción ${index + 1}`} style={styles.slide} />
        ))}
      </div>
      <button style={{ ...styles.button, ...styles.prevButton }} onClick={goToPrev}>
        &#10094;
      </button>
      <button style={{ ...styles.button, ...styles.nextButton }} onClick={goToNext}>
        &#10095;
      </button>
    </div>
  );
};

export default Banner;