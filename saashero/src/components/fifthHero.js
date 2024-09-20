import React from 'react';
import '../styles/fifthHero.css'; // Make sure you have this CSS file

function FifthHeroSection() {
  return (
    <div className="fifth-hero-container">
      {/* Motion Text on the Left */}
      <div className="motion-text">
        MOTION
      </div>
      
      {/* Video Grid Section */}
      <div className="fifth-hero-grid">
        <div className="fifth-hero-grid-item">
          <video autoPlay muted loop>
            <source src="/car.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="fifth-hero-item-caption">Car Scene</div>
        </div>
        <div className="fifth-hero-grid-item">
          <video autoPlay muted loop>
            <source src="/hotbich.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="fifth-hero-item-caption">Action Scene</div>
        </div>
        <div className="fifth-hero-grid-item">
          <video autoPlay muted loop>
            <source src="/ironman.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="fifth-hero-item-caption">Iron Man</div>
        </div>
      </div>

      {/* Text Section Below the Videos */}
      <div className="fifth-hero-text">
        <h2>Create <span className="action-text">action</span> packed shots</h2>
        <p>
          Story Motion generates 5-second shots with smooth motion and cinematic drama.
          Transform static images into dynamic scenes and create memorable stories.
        </p>
      </div>
    </div>
  );
}

export default FifthHeroSection;
