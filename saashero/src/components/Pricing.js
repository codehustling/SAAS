import React from 'react';
import '../styles/Pricing.css';

function Pricing() {
  return (
    <div className="pricing-container">
      <h1 className="pricing-title">Subscription Pricing</h1>
      
      <div className="billing-options">
        <button className="billing-option active">Yearly Billing (20% off)</button>
        <button className="billing-option">Monthly Billing</button>
      </div>

      <div className="pricing-cards-container">
        <div className="pricing-card">
          <h2 className="pricing-card-title">FREE</h2>
          <p className="price">$0.00</p>
          <ul className="features-list">
            <li>30 Generations per month</li>
            <li>Standard priority</li>
            <li>Non-commercial use</li>
          </ul>
        </div>

        <div className="pricing-card">
          <h2 className="pricing-card-title">LITE</h2>
          <p className="price">$7.99</p>
          <ul className="features-list">
            <li>70 Generations per month</li>
            <li>High priority</li>
            <li>Non-commercial use</li>
          </ul>
        </div>

        <div className="pricing-card">
          <h2 className="pricing-card-title">STANDARD</h2>
          <p className="price">$23.99</p>
          <ul className="features-list">
            <li>150 Generations per month</li>
            <li>High priority</li>
            <li>Commercial use</li>
            <li>Remove watermark</li>
          </ul>
        </div>

        <div className="pricing-card">
          <h2 className="pricing-card-title">PLUS</h2>
          <p className="price">$51.99</p>
          <ul className="features-list">
            <li>310 Generations per month</li>
            <li>Highest priority</li>
            <li>Commercial use</li>
            <li>Remove watermark</li>
          </ul>
        </div>

        <div className="pricing-card">
          <h2 className="pricing-card-title">PRO</h2>
          <p className="price">$79.99</p>
          <ul className="features-list">
            <li>480 Generations per month</li>
            <li>Highest priority</li>
            <li>Commercial use</li>
            <li>Remove watermark</li>
          </ul>
        </div>

        <div className="pricing-card premium">
          <h2 className="pricing-card-title">PREMIER</h2>
          <p className="price">$399.99</p>
          <ul className="features-list">
            <li>2,430 Generations per month</li>
            <li>Highest priority</li>
            <li>Commercial use</li>
            <li>Remove watermark</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
