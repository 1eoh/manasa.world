'use client';
import React, { useState, useEffect } from 'react';

const PlayPage = ({ images = [], backgrounds = [], delay = 3000 }) => {
  const [index, setIndex] = useState(0);
  const [isPortrait, setIsPortrait] = useState(false);

  useEffect(() => {
    if (!images.length) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, [images.length, delay]);
  

  // Orientation detection
  useEffect(() => {
    const handleResize = () => {
      setIsPortrait(window.innerHeight > window.innerWidth);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: isPortrait ? 'center' : 'flex-end',
        alignItems: 'center',
        zIndex: 1,
      }}
    >
      {/* 🔹 Background layer */}
      {backgrounds && backgrounds.length > 0 && (
        <div
          style={{
            position: 'absolute',
            inset: 0,
            backgroundImage: `url(${backgrounds[index]})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            transition: 'background-image 0.3s ease-in-out',
          }}
        />
      )}

      {/* 🔹 Foreground images */}
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`slide-${i}`}
          style={{
            position: 'absolute',
            width: isPortrait ? '80%' : 'auto',
            height: isPortrait ? 'auto' : '80%',
            objectFit: 'contain',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 0.3s ease-in-out',
            zIndex: 2,
            marginRight: isPortrait ? '0' : '10%',
          }}
        />
      ))}
    </div>
  );
};

export default PlayPage;
