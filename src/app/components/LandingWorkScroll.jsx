'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './LandingWorkScroll.module.css';

export default function LandingWorkScroll({ studentImages, personalImages }) {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [scrollPaused, setScrollPaused] = useState(false);
  const [bgImage, setBgImage] = useState(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Duplicate content for seamless infinite scroll
    track.innerHTML += track.innerHTML;

    let scrollAmount = 0;
    const speed = 0.5; // adjust scroll speed

    const animate = () => {
      if (!scrollPaused) {
        scrollAmount += speed;
        if (scrollAmount >= track.scrollHeight / 2) scrollAmount = 0;
        track.style.transform = `translateY(-${scrollAmount}px)`;
      }
      requestAnimationFrame(animate);
    };

    animate();
  }, [scrollPaused]);

  // Hover handlers for images
  //const handleHover = (imgUrl) => setBgImage(imgUrl);
  const handleHover = (imgUrl) => {
    console.log('Hover image URL:', imgUrl);
    setBgImage(imgUrl);
  }
  
  console.log('Current bgImage:', bgImage);

  
  const handleLeave = () => setBgImage(null);

  

  return (
    <>
      {/* Full-page background */}
      <div
        className={styles.background}
        style={{
          backgroundImage: 
          // 'url(/images/play1.jpg)'
          bgImage ? `url(${bgImage})` : 'none',
        }}
      />

      {/* Scroll container */}
       <div className={styles.landingWork} ref={containerRef}>
        <div className={styles.scrollTrack} ref={trackRef}>
          {/* Student Section */}
          <div className={styles.landingWorkSection}>
            {studentImages.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className={styles.gridImage}
                style={{ gridArea: img.gridArea, mixBlendMode: img.blend || 'normal' }}
                onMouseEnter={() => { setScrollPaused(true); handleHover(img.bg); }}
                onMouseLeave={() => { setScrollPaused(false); handleLeave(); }}
                onClick={() => window.location.href = img.link}
              />
            ))}
          </div>

          {/* Personal Section */}
          <div className={styles.landingWorkSection}>
            {personalImages.map((img, idx) => (
              <img
                key={idx}
                src={img.src}
                alt={img.alt}
                className={styles.gridImage}
                style={{ gridArea: img.gridArea, mixBlendMode: img.blend || 'normal' }}
                onMouseEnter={() => { setScrollPaused(true); handleHover(img.bg); }}
                onMouseLeave={() => { setScrollPaused(false); handleLeave(); }}
                onClick={() => window.location.href = img.link}
              />
            ))}
          </div>
        </div>
      </div>*/

    </>
  );
}
