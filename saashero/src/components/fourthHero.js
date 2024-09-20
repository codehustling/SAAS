import React from 'react';
import '../styles/fourthHero.css';

function FourthHeroSection() {
  return (
    <div className="fourth-hero-container">
      <div className="fourth-hero-content">
        <div className="fourth-hero-video">
          <video autoPlay muted loop>
            <source src="/fourth_hero.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="fourth-hero-text">
          <h2>Iterate at the speed of <span className="italic-word">thought</span></h2>
          <p>
            Story Motion is an incredibly fast video generator! 120 frames in 120 seconds. 
            Iterate faster, explore more ideas, and dream bigger!
          </p>
        </div>
      </div>
      <div className="speed-text">
        SPEED
      </div>
    </div>
  );
}

export default FourthHeroSection;
