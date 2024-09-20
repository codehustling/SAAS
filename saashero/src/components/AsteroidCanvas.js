import React, { useRef, useEffect } from 'react';

const StarCanvas = () => {
  const canvasRef = useRef(null);

  // Function to generate star points
  const generateStarShape = (radius, points = 5) => {
    const starCoords = [];
    const outerRadius = radius;
    const innerRadius = radius * 0.5;  // Inner points of the star

    for (let i = 0; i < points * 2; i++) {
      const angle = (Math.PI / points) * i;
      const radius = i % 2 === 0 ? outerRadius : innerRadius;  // Alternate between outer and inner radii
      const x = Math.cos(angle) * radius;
      const y = Math.sin(angle) * radius;
      starCoords.push({ x, y });
    }

    return starCoords;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');
    const stars = [];
    const numStars = 50;
    const mouse = { x: null, y: null, radius: 75 };  // Reduced mouse influence radius

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Generate stars with a fixed shape
    for (let i = 0; i < numStars; i++) {
      const star = {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        dx: (Math.random() - 0.5) * 2,
        dy: (Math.random() - 0.5) * 2,
        radius: Math.random() * 10 + 5,  // Radius for stars
        shape: generateStarShape(Math.random() * 10 + 5),  // Generate the star shape
      };
      stars.push(star);
    }

    // Function to draw stars with a fixed shape
    const drawStars = () => {
      context.clearRect(0, 0, canvas.width, canvas.height);  // Clear the canvas
      stars.forEach((star) => {
        context.save();  // Save the current context state
        context.translate(star.x, star.y);  // Move the origin to the star's position

        // Begin drawing the star shape
        context.beginPath();
        star.shape.forEach((point, index) => {
          if (index === 0) {
            context.moveTo(point.x, point.y);
          } else {
            context.lineTo(point.x, point.y);
          }
        });
        context.closePath();

        context.fillStyle = '#FFD700';  // Gold color for stars
        context.fill();

        // Add some texture with shadow
        context.shadowColor = 'rgba(255, 255, 255, 0.5)';
        context.shadowBlur = 15;

        context.restore();  // Restore the context state
      });
    };

    const updateStars = () => {
      stars.forEach((star) => {
        star.x += star.dx;
        star.y += star.dy;

        // Reverse direction when hitting canvas edges
        if (star.x + star.radius > canvas.width || star.x - star.radius < 0) {
          star.dx = -star.dx;
        }
        if (star.y + star.radius > canvas.height || star.y - star.radius < 0) {
          star.dy = -star.dy;
        }

        // Calculate distance between star and mouse
        const dx = star.x - mouse.x;
        const dy = star.y - mouse.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        // Deflect stars if within reduced mouse radius
        if (distance < mouse.radius + star.radius) {
          if (mouse.x < star.x && star.x < canvas.width - star.radius * 10) {
            star.x += 5;  // Reduced deflection amount
          } else if (mouse.x > star.x && star.x > star.radius * 10) {
            star.x -= 5;  // Reduced deflection amount
          }

          if (mouse.y < star.y && star.y < canvas.height - star.radius * 10) {
            star.y += 5;  // Reduced deflection amount
          } else if (mouse.y > star.y && star.y > star.radius * 10) {
            star.y -= 5;  // Reduced deflection amount
          }
        }
      });
    };

    const animate = () => {
      drawStars();
      updateStars();
      requestAnimationFrame(animate);
    };

    animate();  // Start the animation

    // Track mouse movement
    const handleMouseMove = (event) => {
      mouse.x = event.clientX;
      mouse.y = event.clientY;
    };

    // Resize canvas when window resizes
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0)',  // Transparent background
      }}
    />
  );
};

export default StarCanvas;
