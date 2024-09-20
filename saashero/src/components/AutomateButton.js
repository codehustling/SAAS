import React, { useState } from 'react';
import '../styles/AutomateButton.css';

function AutomateButton() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Automation completed!');
    }, 3000);
  };

  return (
    <button className="automate-button" onClick={handleClick} disabled={loading}>
      {loading ? 'Processing...' : 'Automate Now'}
    </button>
  );
}

export default AutomateButton;
