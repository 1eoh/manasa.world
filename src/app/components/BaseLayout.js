import Link from "next/link";
import "./BaseLayout.css";

export default function BaseLayout({ children }) {
  return (
    <main className="page">
      {/* SVG filter definition */}
      <svg xmlns="http://www.w3.org/2000/svg" style={{ display: "none" }}>
        <filter id="grain">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.7"
            numOctaves="4"
            stitchTiles="stitch"
          >
            <animate
              attributeName="baseFrequency"
              dur="4s"
              values="0.8;0.9;0.8"
              repeatCount="indefinite"
            />
          </feTurbulence>
          <feColorMatrix type="saturate" values="0" />
        </filter>
      </svg>

      {/* Overlay layer */}
      <div className="grain-overlay" />

      {/* Center content */}
      <div className="center-content">{children}</div>

      {/* Top links */}
      <div className="top-edge">
        {/*<Link href="/work">Work</Link> / <Link href="/play">Play</Link>*/}
      </div>

      {/* Right info */}
      <div className="right-edge">
        {/*
        Recently: Read <a href="https://en.wikipedia.org/wiki/Camera_Lucida_(book)" target="_blank" rel="noopener noreferrer">Camera Lucida</a>
        */}
        Graphic Design
      </div>

      {/* Bottom link */}
      <div className="bottom-edge">
        {/*<Link href="/story">Story & Skills</Link>*/}
        <h1>The ink's not dry yet</h1>
      </div>

      {/* Left info */}
      <div className="left-edge">Made by Manasa</div>
    </main>
  );
}
