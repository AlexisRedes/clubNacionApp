import React, { useState } from 'react';
import Card from '../ComponentCard';


const styles = {
  carouselContainer: {
    position: 'relative',
    width: '80%',
    height: '70%',
    margin: '0 auto',
    padding: '10px',
    overflow: 'hidden',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  carouselWrapper: {
    display: 'flex',
    justifyContent:"center",
    height: '90%',
    width: '100%',
    transition: 'transform 0.5s ease-in-out',
  },
  carouselContent: {
    display: 'flex',
    width: '90%',
    justifyContent:"space-between",
  },
  carouselButton: {
    backgroundColor: "transparent", 
    color: "black", 
    border: "none", 
    width: "40px", 
    height: "100px", 
    display: "flex", 
    justifyContent: "center", 
    alignItems: "center", 
    fontSize: "50px", 
    fontWeight: "bold", 
    cursor: "pointer", 
    outline: "none", 
  },
  carouselButtonLeft: {
    left: '10px',
  },
  carouselButtonRight: {
    right: '10px',
  },
};


const ProductCarousel = ({ products, type} ) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + products.length) % products.length);
  };

  return (
    <div style={styles.carouselContainer}>
      <button style={{...styles.carouselButton, ...styles.carouselButtonLeft}} onClick={handlePrev}>&lt;</button>
      <div style={styles.carouselWrapper}>
        <div style={{...styles.carouselContent, transform: `translateX(-${currentIndex * 130}%)` }}>
          
          {(Array.isArray(products) ? products : []).map((product) => (
              <Card {...product} type={type} />
          ))}

        </div>
      </div>
      <button style={{...styles.carouselButton, ...styles.carouselButtonRight}} onClick={handleNext}>&gt;</button>
    </div>
  );
};

export default ProductCarousel;
