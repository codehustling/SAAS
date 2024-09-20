import React from 'react';
import '../styles/Header.css';

function Header() {
  return (
    <div className="header">
      <h1>Your Dashboard</h1>
      <div className="header-buttons">
        <button>Connect Instagram</button>
        <button>Add Credits</button>
      </div>
    </div>
  );
}

export default Header;
