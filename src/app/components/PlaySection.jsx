'use client';
import React, { useState, useEffect } from 'react';

const PlaySection = ({ images, height = 500, delay = 0.1 }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, delay);
    return () => clearInterval(interval);
  }, [images, delay]);

  return (
    <div 
      style={{ 
        width: '80%', 
        height: `80%`, 
        position: 'relative', 
        overflow: 'hidden', 
        display: 'flex', 
        flexDirection: 'row', 
        justifyContent: 'flex-end', 
        alignItems: 'center' 
      }}>
      {images.map((src, i) => (
        <img
          key={i}
          src={src}
          alt={`slide-${i}`}
          style={{
            position: 'absolute',
            width: 'auto',
            height: '100%',
            objectFit: 'cover',
            opacity: i === index ? 1 : 0,
            transition: 'opacity 0.2s ease-in-out', // very quick, almost instant

          }}
        />
      ))}
    </div>
  );
};

export default PlaySection;
