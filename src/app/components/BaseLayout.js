import Link from "next/link";
import "./BaseLayout.css";

export default function BaseLayout({ children }) {
  return (
    <main className="page">


      {/* Center content */}
      <div className="center-content">{children}</div>

      {/* Top links */}
      <div className="top-edge">
        <Link href="/">Home</Link> / <Link href="/work">Work</Link> / <Link href="/play">Play</Link>
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
        <Link href="/story">Notes on Self</Link>
        {/*<h1>The ink's not dry yet</h1>*/}
      </div>

      {/* Left info */}
      <div className="left-edge">Made by Manasa</div>
    </main>
  );
}
