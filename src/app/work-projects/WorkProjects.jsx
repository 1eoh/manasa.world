"use client";
import { useEffect, useState } from "react";
import BaseLayout from "../components/BaseLayout";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";

const projects = [
  {
    id: "projA",
    title: "Project A",
    slides: [
      {
        imagePortrait: "/images/P-i-1.jpg",
        imageLandscape: "/images/P-i-2.jpg",
        background: "/images/P-bg-1.jpg",
      },
      {
        imagePortrait: "/images/P-i-1.jpg",
        imageLandscape: "/images/P-i-2.jpg",
        background: "/images/P-bg-2.jpg",
      },
    ],
  },
  {
    id: "projB",
    title: "Project B",
    slides: [
      {
        imagePortrait: "/images/play4.jpg",
        imageLandscape: "/images/play5.jpg",
        background: "/images/play3.jpg",
      },
    ],
  },
];

export default function WorkProjects({ initialProject }) {
  const [isPortrait, setIsPortrait] = useState(true);

  // Detect orientation change
  useEffect(() => {
    const mql = window.matchMedia("(orientation: portrait)");
    const handleChange = (e) => setIsPortrait(e.matches);
    setIsPortrait(mql.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  // Flatten all slides
  const allSlides = projects.flatMap((proj) =>
    proj.slides.map((s, i) => ({
      projectId: proj.id,
      title: proj.title,
      imagePortrait: s.imagePortrait,
      imageLandscape: s.imageLandscape,
      backgroundSrc: s.background,
      slideIndex: i,
    }))
  );

  const startIndex =
    allSlides.findIndex((s) => s.projectId === initialProject) || 0;

  return (
      <Swiper
        modules={[Mousewheel, Keyboard]}
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={0}
        speed={800}
        initialSlide={startIndex}
        mousewheel={{
          forceToAxis: false,
          sensitivity: 1,
          releaseOnEdges: false,
          invert: false,
        }}
      >
        {allSlides.map((slide) => (
          <SwiperSlide key={`${slide.projectId}-${slide.slideIndex}`}>
            <div
              style={{
                position: "relative",
                width: "100%",
                height: "100vh",
                overflow: "hidden",
                backgroundImage: slide.backgroundSrc
                  ? `url(${slide.backgroundSrc})`
                  : "none",
                backgroundSize: "cover",
                backgroundPosition: "center",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
              }}
            >
              <img
                src={
                  isPortrait
                    ? slide.imagePortrait
                    : slide.imageLandscape
                }
                alt={`${slide.title} - slide ${slide.slideIndex + 1}`}
                style={{
                  width: "80%",
                  height: "100%",
                  objectFit: "contain",
                  position: "relative",
                  zIndex: 2,
                }}
              />

              {slide.slideIndex === 0 && (
                <div
                  style={{
                    position: "absolute",
                    top: "2rem",
                    left: "2rem",
                    color: "#fff",
                    fontSize: "1.5rem",
                    textShadow: "0 0 10px rgba(0,0,0,0.5)",
                    zIndex: 3,
                  }}
                >
                  {slide.title}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
  );
}
