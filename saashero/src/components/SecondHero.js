import React from 'react';
import '../styles/SecondHero.css'; // Add a separate CSS file for styling this component

function SecondHero() {
  return (
    <div className="second-hero-container">
      <div className="second-hero-content">
        <h1 className="second-hero-title">New freedoms of <span className="imagination-word">imagination</span></h1>
        <p className="second-hero-text">
          Story Motion is a revolutionary AI model that generates stunning videos fast from text and images. 
          It is highly scalable and makes the process of creating visually accurate, physically consistent, 
          and immersive shots easier than ever. Our first step toward a universal imagination engine, 
          Story Motion is available to everyone now!
        </p>
        <button className="second-hero-button">Try Now ➔</button>
      </div>
    </div>
  );
}

export default SecondHero;
