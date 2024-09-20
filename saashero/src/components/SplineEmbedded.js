import React, { useEffect } from 'react';

const SplineEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.27/build/spline-viewer.js';
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ width: '100%', height: '500px' }}>
      <spline-viewer url="https://prod.spline.design/eUVateMOHrVgzFtL/scene.splinecode"></spline-viewer>
    </div>
  );
};

export default SplineEmbed;
