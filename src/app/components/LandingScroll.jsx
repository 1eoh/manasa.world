'use client';

import { useEffect, useRef, useState } from 'react';
import { useRouter } from "next/navigation"; // if using Next.js
import styles from './LandingWorkScroll.module.css';

export default function LandingWorkScroll({ studentImages, personalImages }) {
  const trackRef = useRef(null);
  const scrollAmountRef = useRef(0);
  const mousePos = useRef({ x: 0, y: 0 });
  const [bgImage, setBgImage] = useState(null);

  // Combine sections and duplicate for seamless scroll
  const sections = [
    { type: 'student', images: studentImages },
    { type: 'personal', images: personalImages },
  ];
  const duplicatedSections = [...sections, ...sections]; // duplicate for infinite scroll

  // Track global mouse position
  useEffect(() => {
    const handleMouseMove = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Infinite scroll + hover detection
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const speed = 2; // pixels per frame

    const animate = () => {
      // Move scroll
      scrollAmountRef.current += speed;
      if (scrollAmountRef.current >= track.scrollHeight / 2) scrollAmountRef.current = 0;
      track.style.transform = `translateY(-${scrollAmountRef.current}px)`;

      // Check hover under cursor
      const images = track.querySelectorAll('img');
      let hoveredImage = null;
      images.forEach((img) => {
        const rect = img.getBoundingClientRect();
        const { x, y } = mousePos.current;
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          hoveredImage = img;
        }
      });

      if (hoveredImage) {
        setBgImage(hoveredImage.getAttribute('data-bg'));
      } else {
        setBgImage(null);
      }

      requestAnimationFrame(animate);
    };

    requestAnimationFrame(animate);
  }, []);

  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/work-projects?project=${encodeURIComponent(id)}`);
  };

  return (
    <>
      {/* Full-page background */}
      <div
        className={styles.background}
        style={{
          backgroundImage: bgImage ? `url(${bgImage})` : 'none',
        }}
      />

      {/* Scroll container */}
      <div className={styles.landingWork}>
        <div className={styles.scrollTrack} ref={trackRef}>
          {duplicatedSections.map((section, sIdx) => (
            <div className={styles.landingWorkSection} key={sIdx}>
              {section.images.map((img, idx) => (
                <div 
                className={styles.imgWrapper}     
                style={{
                    backgroundImage: (bgImage === img.bg) ? `url(/images/grey-cloud.png)` : 'none',
                    gridArea: img.gridArea
                  }}             
                key={idx}>
                <img
                  src={img.src}
                  alt={img.alt}
                  data-bg={img.bg} // used for hover detection
                  className={styles.gridImage}
                  //style={{ gridArea: img.gridArea }}
                  //onClick={() => handleClick(img.link)}
                />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
