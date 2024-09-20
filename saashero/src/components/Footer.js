import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="footer-links">
        <div className="footer-column">
          <ul>
            <li><Link to="/pricing">Pricing</Link></li> {/* Update to Link */}
            <li><a href="#">API</a></li>
            <li><a href="#">Luma Inner Circle</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Discord Community</a></li>
          </ul>
        </div>
        <div className="footer-column">
          <ul>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Genie</a></li>
            <li><a href="#">Capture</a></li>
            <li><a href="#">Terms of Service</a></li>
            <li><a href="#">API Terms of Service</a></li>
            <li><a href="#">Privacy Policy</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
