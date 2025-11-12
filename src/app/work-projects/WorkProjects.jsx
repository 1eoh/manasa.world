"use client";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Mousewheel, Keyboard } from "swiper/modules";
import "swiper/css";

const projects = [
  {
    id: "projA",
    title: "Project A",
    background: "/images/landing/student-bg-numberout.jpg",
    slidesLandscape: [
      "/images/work/numberout/student-numberout-title.png",
      "/images/work/numberout/student-numberout-desc.png",
      "/images/work/numberout/student-numberout-problem.png",
      "/images/work/numberout/student-numberout-brandboard.png",
      "/images/work/numberout/student-numberout-poster.png",
      "/images/work/numberout/student-numberout-poster-series.png",
      "/images/work/numberout/student-numberout-launch.png",
      "/images/work/numberout/student-numberout-launch-manager.png",
      "/images/work/numberout/student-numberout-execution.png",
    ],
    slidesPortrait: [
      "/images/work/numberout/portrait/student-numberout-01.png",
      "/images/work/numberout/portrait/student-numberout-02.png",
      "/images/work/numberout/portrait/student-numberout-03.png",
      "/images/work/numberout/portrait/student-numberout-04.png",
      "/images/work/numberout/portrait/student-numberout-05.png",
      "/images/work/numberout/portrait/student-numberout-06.png",
      "/images/work/numberout/portrait/student-numberout-07.png",
      "/images/work/numberout/portrait/student-numberout-08.png",
      "/images/work/numberout/portrait/student-numberout-poster-63.png",
      "/images/work/numberout/portrait/student-numberout-poster-64.png",
      "/images/work/numberout/portrait/student-numberout-poster-65.png",
      "/images/work/numberout/portrait/student-numberout-poster-66.png",
      "/images/work/numberout/portrait/student-numberout-11.png",
      "/images/work/numberout/portrait/student-numberout-12.png",
      "/images/work/numberout/portrait/student-numberout-13.png",
    ],
  },
  {
    id: "projB",
    title: "Project B",
    background: "/images/landing/student-bg-makeshape.jpg",
    slidesLandscape: [
      "/images/work/makeshape/student-makeshape-title.png",
      "/images/work/makeshape/student-makeshape-desc.png",
      "/images/work/makeshape/student-makeshape-problem.png",
      "/images/work/makeshape/student-makeshape-explorations.png",
      "/images/work/makeshape/student-makeshape-thumbnails.png",
      "/images/work/makeshape/student-makeshape-idea.png",
      "/images/work/makeshape/student-makeshape-cover-1.png",
      "/images/work/makeshape/student-makeshape-cover-2.png",
      "/images/work/makeshape/student-makeshape-shirt.png",
      "/images/work/makeshape/student-makeshape-execution.png"
    ],
    slidesPortrait: [
      "/images/work/makeshape/portrait/student-makeshape-title.png",
      "/images/work/makeshape/portrait/student-makeshape-desc.png",
      "/images/work/makeshape/portrait/student-makeshape-problem.png",
      "/images/work/makeshape/portrait/student-makeshape-exploration-1.png",
      "/images/work/makeshape/portrait/student-makeshape-exploration-2.png",
      "/images/work/makeshape/portrait/student-makeshape-thumbnails-1.png",
      "/images/work/makeshape/portrait/student-makeshape-thumbnails-2.png",
      "/images/work/makeshape/portrait/student-makeshape-idea.png",
      "/images/work/makeshape/portrait/student-makeshape-cover-1.png",
      "/images/work/makeshape/portrait/student-makeshape-stickers.png",
      "/images/work/makeshape/portrait/student-makeshape-cover-2.png",
      "/images/work/makeshape/portrait/student-makeshape-spotify.png",
      "/images/work/makeshape/portrait/student-makeshape-shirt.png",
      "/images/work/makeshape/portrait/student-makeshape-execution.png"
    ],
  },
  {
    id: "projC",
    title: "Project C",
    background: "/images/landing/student-bg-arcane.jpg",
    slidesLandscape: [
      "/images/work/arcane/student-arcane-title.png",
      "/images/work/arcane/student-arcane-desc.png",
      "/images/work/arcane/student-arcane-problem.png",
      "/images/work/arcane/student-arcane-statement.png",
      "/images/work/arcane/student-arcane-explorations.png",
      "/images/work/arcane/student-arcane-thumbnails.png",
      "/images/work/arcane/student-arcane-idea.png",
      "/images/work/arcane/student-arcane-trashcan.png",
      "/images/work/arcane/student-arcane-wallposter.png",
      "/images/work/arcane/student-arcane-website.png",
      "/images/work/arcane/student-arcane-product.png",
      "/images/work/arcane/student-arcane-execution.png"
    ],
    slidesPortrait: [
      "/images/work/arcane/portrait/student-arcane-title.png",
      "/images/work/arcane/portrait/student-arcane-desc.png",
      "/images/work/arcane/portrait/student-arcane-problem.png",
      "/images/work/arcane/portrait/student-arcane-statement.png",
      "/images/work/arcane/portrait/student-arcane-exploration-1.png",
      "/images/work/arcane/portrait/student-arcane-exploration-2.png",
      "/images/work/arcane/portrait/student-arcane-thumbnails.png",
      "/images/work/arcane/portrait/student-arcane-idea.png",
      "/images/work/arcane/portrait/student-arcane-package-1.png",
      "/images/work/arcane/portrait/student-arcane-trashcan.png",
      "/images/work/arcane/portrait/student-arcane-package-2.png",
      "/images/work/arcane/portrait/student-arcane-poster-1.png",
      "/images/work/arcane/portrait/student-arcane-poster-2.png",
      "/images/work/arcane/portrait/student-arcane-website.png",
      "/images/work/arcane/portrait/student-arcane-mobile.png",
      "/images/work/arcane/portrait/student-arcane-product.png",
      "/images/work/arcane/portrait/student-arcane-hat.png",
      "/images/work/arcane/portrait/student-arcane-execution.png"
    ],
  },
  {
    id: "projD",
    title: "Project D",
    background: "/images/landing/student-bg-japanway.jpg",
    slidesLandscape: [
      "/images/work/japanway/student-japanway-title.png",
      "/images/work/japanway/student-japanway-desc.png",
      "/images/work/japanway/student-japanway-problem.png",
      "/images/work/japanway/student-japanway-moodboard.png",
      "/images/work/japanway/student-japanway-idea.png",
      "/images/work/japanway/student-japanway-website-1.png",
      "/images/work/japanway/student-japanway-website-2.png",
      "/images/work/japanway/student-japanway-website-3.png",
      "/images/work/japanway/student-japanway-website-4.png",
      "/images/work/japanway/student-japanway-execution.png"
    ],
    slidesPortrait: [
      "/images/work/japanway/portrait/student-japanway-title.png",
      "/images/work/japanway/portrait/student-japanway-desc.png",
      "/images/work/japanway/portrait/student-japanway-problem.png",
      "/images/work/japanway/portrait/student-japanway-moodboard.png",
      "/images/work/japanway/portrait/student-japanway-idea.png",
      "/images/work/japanway/portrait/student-japanway-website-1.png",
      "/images/work/japanway/portrait/student-japanway-website-2.png",
      "/images/work/japanway/portrait/student-japanway-website-3.png",
      "/images/work/japanway/portrait/student-japanway-website-4.png",
      "/images/work/japanway/portrait/student-japanway-website-5.png",
      "/images/work/japanway/portrait/student-japanway-website-6.png",
      "/images/work/japanway/portrait/student-japanway-website-7.png",
      "/images/work/japanway/portrait/student-japanway-website-8.png",
      "/images/work/japanway/portrait/student-japanway-website-9.png",
      "/images/work/japanway/portrait/student-japanway-website-10.png",
      "/images/work/japanway/portrait/student-japanway-website-11.png",
      "/images/work/japanway/portrait/student-japanway-execution.png"
    ],
  },
  {
    id: "proj1",
    title: "Project 1",
    background: "/images/landing/personal-bg-kubera.jpg",
    slidesLandscape: [
      "/images/work/kubera/personal-kubera-title.png",
      "/images/work/kubera/personal-kubera-desc.png",
      "/images/work/kubera/personal-kubera-1.png",
      "/images/work/kubera/personal-kubera-2.png",
      "/images/work/kubera/personal-kubera-3.png",
    ],
    slidesPortrait: [
      "/images/work/kubera/portrait/personal-kubera-title.png",
      "/images/work/kubera/portrait/personal-kubera-desc.png",
      "/images/work/kubera/portrait/personal-kubera-1.png",
      "/images/work/kubera/portrait/personal-kubera-1-expl.png",
      "/images/work/kubera/portrait/personal-kubera-2.png",
      "/images/work/kubera/portrait/personal-kubera-2-expl.png",
      "/images/work/kubera/portrait/personal-kubera-3.png",
      "/images/work/kubera/portrait/personal-kubera-3-expl.png",
    ],
  },
  {
    id: "proj2",
    title: "Project 2",
    background: "/images/landing/personal-bg-observations.jpg",
    slidesLandscape: [
      "/images/work/artworks/personal-artwork-title.png",
      "/images/work/artworks/personal-artwork-desc.png",
      "/images/work/artworks/personal-artwork-redblue.png",
      "/images/work/artworks/personal-artwork-treasure.png",
      "/images/work/artworks/personal-artwork-permission.png",
      "/images/work/artworks/personal-artwork-demon.png",
    ],
    slidesPortrait: [
      "/images/work/artworks/portrait/personal-artwork-title.png",
      "/images/work/artworks/portrait/personal-artwork-desc.png",
      "/images/work/artworks/portrait/personal-artwork-redblue.png",
      "/images/work/artworks/portrait/personal-artwork-redblue-expl.png",
      "/images/work/artworks/portrait/personal-artwork-treasure.png",
      "/images/work/artworks/portrait/personal-artwork-treasure-expl.png",
      "/images/work/artworks/portrait/personal-artwork-permission.png",
      "/images/work/artworks/portrait/personal-artwork-permission-expl.png",
      "/images/work/artworks/portrait/personal-artwork-demon.png",
      "/images/work/artworks/portrait/personal-artwork-demon-expl.png",
    ],
  },
  {
    id: "proj3",
    title: "Project 3",
    background: "/images/landing/personal-bg-parallels.jpg",
    slidesLandscape: [
      "/images/work/parallels/personal-parallels-title-variant.png",
      "/images/work/parallels/personal-parallels-desc.png",
      "/images/work/parallels/personal-parallels-intro.png",
      "/images/work/parallels/personal-parallels-one.png",
      "/images/work/parallels/personal-parallels-redistribution.png",
      "/images/work/parallels/personal-parallels-cockfight.png",
      "/images/work/parallels/personal-parallels-painting.png",
      "/images/work/parallels/personal-parallels-ancestors.png",
      "/images/work/parallels/personal-parallels-nature.png",
      "/images/work/parallels/personal-parallels-sacrifice.png",
      "/images/work/parallels/personal-parallels-conclusion.png",

    ],
    slidesPortrait: [
      "/images/work/parallels/portrait/personal-parallels-title.png",
      "/images/work/parallels/portrait/personal-parallels-desc.png",
      "/images/work/parallels/portrait/personal-parallels-intro.png",
      "/images/work/parallels/portrait/personal-parallels-cover.png",
      "/images/work/parallels/portrait/personal-parallels-marriage.png",
      "/images/work/parallels/portrait/personal-parallels-redistribution.png",
      "/images/work/parallels/portrait/personal-parallels-redistribution-symbol.png",
      "/images/work/parallels/portrait/personal-parallels-cockfight.png",
      "/images/work/parallels/portrait/personal-parallels-cockfight-symbol.png",
      "/images/work/parallels/portrait/personal-parallels-painting.png",
      "/images/work/parallels/portrait/personal-parallels-ancestors.png",
      "/images/work/parallels/portrait/personal-parallels-ancestors-symbol.png",
      "/images/work/parallels/portrait/personal-parallels-nature.png",
      "/images/work/parallels/portrait/personal-parallels-nature-symbol.png",
      "/images/work/parallels/portrait/personal-parallels-sacrifice.png",
      "/images/work/parallels/portrait/personal-parallels-sacrifice-symbol.png",
      "/images/work/parallels/portrait/personal-parallels-conclusion.png",

    ],
  },
];

export default function WorkProjects({ initialProject }) {
  const [isPortrait, setIsPortrait] = useState(true);

  // Detect screen orientation
  useEffect(() => {
    const mql = window.matchMedia("(orientation: portrait)");
    const handleChange = (e) => setIsPortrait(e.matches);
    setIsPortrait(mql.matches);
    mql.addEventListener("change", handleChange);
    return () => mql.removeEventListener("change", handleChange);
  }, []);

  // Select current project
  const currentProject =
    projects.find((p) => p.id === initialProject) || projects[0];
  const slides = isPortrait
    ? currentProject.slidesPortrait
    : currentProject.slidesLandscape;

  return (
    <div
      style={{
        position: "relative",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      {/* 🔹 Static background layer */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${currentProject.background})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          zIndex: 0,
        }}
      />

      {/* 🔹 Swiper slides (on top of bg) */}
      <Swiper
        modules={[Mousewheel, Keyboard]}
        direction="horizontal"
        slidesPerView={1}
        spaceBetween={0}
        speed={800}
        mousewheel
        keyboard
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          height: "100%",
        }}
      >
        {slides.map((imgSrc, i) => (
          <SwiperSlide key={`${currentProject.id}-${i}`}>
            <div
              style={{
                width: "100%",
                height: "100%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={imgSrc}
                alt={`${currentProject.title} - slide ${i + 1}`}
                style={{
                  width: "80%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
              {i === 0 && (
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
                  {/*{currentProject.title}*/}
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
