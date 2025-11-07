"use client";
import { useState, useCallback, useEffect } from "react";
import { useWheel, useDrag } from "@use-gesture/react";

const projects = [
  {
    id: "projA",
    title: "Project A",
    slides: ["/images/play1.jpg", "/images/play2.jpg", "/images/play3.jpg"],
  },
  {
    id: "projB",
    title: "Project B",
    slides: ["/images/play4.jpg", "/images/play5.jpg"],
  },
  {
    id: "projC",
    title: "Project C",
    slides: ["/images/Portfolio_MS.jpg", "/images/Portfolio_Spot.jpg"],
  },
];

// Flatten all slides into a single array for presentation mode
const allSlides = projects.flatMap((proj) =>
  proj.slides.map((img, i) => ({
    projectId: proj.id,
    title: proj.title,
    image: img,
    slideIndex: i,
  }))
);

export default function WorkProjects({ initialProject }) {
  // Determine starting slide
  const startIndex = allSlides.findIndex(
    (s) => s.projectId === initialProject
  );

  const [currentSlide, setCurrentSlide] = useState(
    startIndex >= 0 ? startIndex : 0
  );

  const clamp = (index) => Math.max(0, Math.min(index, allSlides.length - 1));

  // Wheel detection (desktop)
  useWheel(
    useCallback(
      ({ delta: [, dy], event }) => {
        event.preventDefault();
        if (dy > 0) setCurrentSlide((s) => clamp(s + 1));
        else if (dy < 0) setCurrentSlide((s) => clamp(s - 1));
      },
      []
    ),
    { target: typeof window !== "undefined" ? window : undefined }
  );

  // Drag/swipe detection (mobile)
  const bindDrag = useDrag(
    useCallback(
      ({ swipe: [, swipy] }) => {
        if (swipy < 0) setCurrentSlide((s) => clamp(s + 1));
        else if (swipy > 0) setCurrentSlide((s) => clamp(s - 1));
      },
      []
    ),
    { filterTaps: true }
  );

  // Keyboard support
  const handleKey = useCallback(
    (e) => {
      if (e.key === "ArrowDown") setCurrentSlide((s) => clamp(s + 1));
      else if (e.key === "ArrowUp") setCurrentSlide((s) => clamp(s - 1));
    },
    []
  );

  // Optional: scroll to initial slide on mount
  useEffect(() => {
    setCurrentSlide(startIndex >= 0 ? startIndex : 0);
  }, [startIndex]);

  return (
    <div
      {...bindDrag()}
      tabIndex={0}
      onKeyDown={handleKey}
      style={{
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {allSlides.map((slide, i) => (
        <div
          key={`${slide.projectId}-${i}`}
          style={{
            display: i === currentSlide ? "block" : "none",
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            backgroundImage: `url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Show project title only on first slide of project */}
          {(i === 0 || allSlides[i - 1].projectId !== slide.projectId) && (
            <div
              style={{
                position: "absolute",
                top: "2rem",
                left: "2rem",
                color: "#fff",
                fontSize: "1.5rem",
                textShadow: "0 0 10px rgba(0,0,0,0.5)",
              }}
            >
              {slide.title}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
