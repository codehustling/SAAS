import React from 'react';
import '../styles/ThirdHero.css'; // Make sure the correct file name is being imported

function ThirdHeroSection() {
  return (
    <div className="third-hero-container">
      <h2 className="third-hero-title">High-quality videos from text & images</h2>
      <div className="third-hero-grid">
        {/* Car Video */}
        <div className="third-hero-grid-item">
          <video autoPlay muted loop>
            <source src="/car.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="third-hero-item-caption">Car Video</div>
        </div>

        {/* Cat Image */}
        <div className="third-hero-grid-item">
          <img src="/cat-image-placeholder.jpg" alt="Cat" />
          <div className="third-hero-item-caption">Cat Image</div>
        </div>

        {/* Action Scene */}
        <div className="third-hero-grid-item">
          <video autoPlay muted loop>
            <source src="/hotbich.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="third-hero-item-caption">Action Scene</div>
        </div>

        {/* Iron Man */}
        <div className="third-hero-grid-item">
          <video autoPlay muted loop>
            <source src="/ironman.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="third-hero-item-caption">Iron Man</div>
        </div>

        {/* Rome Video */}
        <div className="third-hero-grid-item">
          <video autoPlay muted loop>
            <source src="/rome.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="third-hero-item-caption">Rome City</div>
        </div>

        {/* Nature Scene */}
        <div className="third-hero-grid-item">
          <video autoPlay muted loop>
            <source src="/trees.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="third-hero-item-caption">Nature Scene</div>
        </div>

        {/* Car Video (Duplicate, Consider Removing) */}
        <div className="third-hero-grid-item">
          <video autoPlay muted loop>
            <source src="/car.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="third-hero-item-caption">Car</div>
        </div>
        
      </div>
    </div>
  );
}

export default ThirdHeroSection;
