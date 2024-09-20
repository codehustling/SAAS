import React, { useEffect } from 'react';
import '../styles/Hero.css';
import SecondHeroSection from './SecondHero'; 
import ThirdHeroSection from './ThirdHero'; 
import FourthHeroSection from './fourthHero'; 
import FifthHeroSection from './fifthHero'; 
import Footer from './Footer'; // Import the footer component

function HeroSection() {
  useEffect(() => {
    const carousel = document.querySelector('.carousel');
    const itemWidth = 700;
    let scrollAmount = 0;
    let scrollCount = 0;

    const scrollInterval = setInterval(() => {
      if (scrollCount < 2) {
        scrollAmount += itemWidth;
        scrollCount++;
      } else {
        scrollAmount = 0;
        scrollCount = 0;
      }

      carousel.scrollTo({
        left: scrollAmount,
        behavior: 'smooth',
      });
    }, 3000);

    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <div>
      {/* First Hero Section */}
      <div className="hero-section">
        <h1 className="centered-title">Story Motion</h1>
        <div className="nav-buttons">
          <button className="nav-button">Join Us</button>
          <button className="nav-button">API</button>
          <button className="cta-button">Try Now</button>
        </div>

        {/* Scrollable Video/Image Carousel */}
        <div className="carousel">
          <div className="carousel-item">
            <video className="media" autoPlay muted loop>
              <source src="/car.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <img className="media" src="/cat-image-placeholder.jpg" alt="Placeholder" />
          </div>
          <div className="carousel-item">
            <video className="media" autoPlay muted loop>
              <source src="/hotbich.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video className="media" autoPlay muted loop>
              <source src="/ironman.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video className="media" autoPlay muted loop>
              <source src="/rome.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="carousel-item">
            <video className="media" autoPlay muted loop>
              <source src="/trees.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-indicator">⬇</div>
      </div>

      {/* Second Hero Section */}
      <SecondHeroSection />

      {/* Third Hero Section */}
      <ThirdHeroSection />

      {/* Fourth Hero Section */}
      <FourthHeroSection />

      {/* Fifth Hero Section */}
      <FifthHeroSection /> {/* Add the fifth hero section here */}
      
      {/* Footer Section */}
      <Footer /> {/* Add the footer here */}
    </div>
  );
}

export default HeroSection;
