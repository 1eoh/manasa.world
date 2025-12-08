'use client';
import { useEffect, useState } from "react";

export default function GiftTextBlobs() {
  const [isPortrait, setIsPortrait] = useState(false);
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [sentenceIndex, setSentenceIndex] = useState(0);

  const pathLandscape = "M1175.98,167.4c0,14.95-4.3,28.98-11.83,41.09,7.53,12.12,11.83,26.15,11.83,41.1s-4.55,29.75-12.47,42.1c7.92,12.34,12.47,26.73,12.47,42.1s-4.33,29.07-11.9,41.21c7.57,12.14,11.9,26.22,11.9,41.22,0,15.76-4.78,30.49-13.08,43.05,7.27,11.96,11.42,25.74,11.42,40.42,0,45.84-40.42,83-90.29,83-16.49,0-31.94-4.06-45.24-11.15-13.3,7.09-28.75,11.15-45.23,11.15s-31.53-3.96-44.71-10.88c-13.19,6.92-28.45,10.88-44.72,10.88s-31.98-4.07-45.29-11.18c-13.31,7.11-28.78,11.18-45.29,11.18s-31.56-3.96-44.76-10.9c-13.49,7.37-29.24,11.61-46.07,11.61-15.41,0-29.92-3.55-42.61-9.81-13.87,7.97-30.25,12.58-47.81,12.58-16.56,0-32.08-4.1-45.42-11.26-12.8,6.39-27.46,10.02-43.04,10.02-16.93,0-32.77-4.29-46.31-11.74-13.54,7.45-29.38,11.74-46.31,11.74s-31.73-4.01-44.97-11.01c-13.24,7-28.6,11.01-44.98,11.01s-31.93-4.06-45.23-11.15c-13.3,7.09-28.75,11.15-45.23,11.15s-31.53-3.96-44.72-10.88c-13.18,6.92-28.44,10.88-44.71,10.88s-31.98-4.07-45.29-11.18c-13.32,7.11-28.79,11.18-45.29,11.18-49.87,0-90.3-37.16-90.3-83,0-15.76,4.78-30.5,13.08-43.05-7.27-11.96-11.42-25.75-11.42-40.42s4.33-29.08,11.9-41.22c-7.57-12.14-11.9-26.21-11.9-41.21s4.55-29.76,12.47-42.11c-7.92-12.34-12.47-26.73-12.47-42.1s4.3-28.97,11.83-41.09c-7.53-12.11-11.83-26.14-11.83-41.09s4.51-29.64,12.37-41.95c-7.86-12.31-12.37-26.64-12.37-41.95C2.16,39.9,42.59,2.74,92.46,2.74c16.5,0,31.97,4.07,45.29,11.18,13.31-7.11,28.78-11.18,45.29-11.18s31.53,3.95,44.71,10.88c13.19-6.93,28.45-10.88,44.72-10.88s31.93,4.06,45.23,11.15c13.3-7.09,28.75-11.15,45.23-11.15s31.73,4,44.98,11.01c13.24-7.01,28.59-11.01,44.97-11.01s32.26,4.15,45.66,11.38c13.31-7.11,28.79-11.19,45.3-11.19s32.49,4.21,45.96,11.55c13-6.67,27.97-10.47,43.91-10.47s30.11,3.6,42.87,9.94c13.88-8.01,30.3-12.64,47.9-12.64,16.17,0,31.35,3.92,44.48,10.76,13.45-7.31,29.14-11.51,45.9-11.51s32.06,4.1,45.4,11.25c13.37-7.19,28.93-11.31,45.53-11.31s31.53,3.96,44.71,10.88c13.19-6.92,28.45-10.88,44.72-10.88s31.93,4.06,45.23,11.15c13.3-7.09,28.75-11.15,45.23-11.15,49.87,0,90.3,37.16,90.3,83,0,15.31-4.51,29.64-12.37,41.95,7.86,12.31,12.37,26.65,12.37,41.95Z";
  const pathPortrait = "M948.66,680.53c17.01-28.8,26.79-62.38,26.79-98.25s-10.75-72.71-29.32-102.41c14.58-27.19,22.86-58.28,22.86-91.29,0-36.06-9.88-69.82-27.06-98.72,16.16-28.27,25.4-61,25.4-95.89C967.33,87.11,880.72.5,773.87.5c-34.96,0-67.76,9.28-96.06,25.5-28.3-16.22-61.1-25.5-96.06-25.5s-69.35,9.75-98.12,26.71C454.86,10.25,421.32.5,385.5.5s-67.53,9.22-95.77,25.34C261.49,9.72,228.8.5,193.96.5,87.11.5.5,87.11.5,193.96c0,36.06,9.88,69.82,27.06,98.72-16.16,28.26-25.4,61-25.4,95.89,0,37.61,10.75,72.71,29.32,102.41-14.58,27.2-22.86,58.28-22.86,91.29s9.02,66.81,24.81,94.83c-17.01,28.8-26.79,62.38-26.79,98.25s9.41,68.22,25.85,96.66c-17,28.79-26.77,62.36-26.77,98.22,0,106.84,86.61,193.46,193.46,193.46,34.84,0,67.53-9.22,95.77-25.34,28.24,16.12,60.93,25.34,95.77,25.34s69.35-9.75,98.12-26.71c28.77,16.97,62.31,26.71,98.12,26.71s67.76-9.28,96.06-25.5c28.3,16.22,61.1,25.5,96.06,25.5,106.84,0,193.46-86.61,193.46-193.46,0-35.21-9.41-68.22-25.85-96.66,17-28.79,26.77-62.36,26.77-98.22s-9.02-66.81-24.81-94.83Z"; 
  const pathD = isPortrait ? pathPortrait : pathLandscape;

  const viewBoxLandscape = "0 0 1176.48 586.67";
  const vBL1 = "1176.48";
  const vBL2 = "586.67";
  const viewBoxPortrait = "0 0 975.95 1164.19";
  const vBP1 = "975.95";
  const vBP2 = "1164.19";
  const viewBoxDimensions = isPortrait ? viewBoxPortrait : viewBoxLandscape;
  const vB1 = isPortrait ? vBP1 : vBL1;
  const vB2 = isPortrait ? vBP2 : vBL2;

    {/*"I began with logic — clean, sharp, certain.",
    "Then the world got louder, sense kept slipping away.",
    "What's left behind starts to look like design.",
    
    "between past and future, chaos and order —",
    "that's where i make,",
    "where i meet it,",
    "while the world rearranges itself.",*/}

  const sentences = [
    "With a background in computers, history, and the environment, ",
    "I bring a wide lens to branding ", 
    "and translate complex ideas into visual identities that are relatable & memorable."
  ];

  useEffect(() => {
    const check = () => setIsPortrait(window.innerHeight > window.innerWidth);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  useEffect(() => {
    const currentSentence = sentences[sentenceIndex];
    if (index < currentSentence.length) {
      const timeout = setTimeout(() => {
        setText(currentSentence.slice(0, index + 1)); // ✅ start at 0 properly
        setIndex((i) => i + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setIndex(0);
        setSentenceIndex((s) => (s + 1) % sentences.length); // loop sentences
        setText("");
      }, 400); // pause before next sentence
      return () => clearTimeout(timeout);
    }
  }, [index, sentenceIndex]);

  return (
    <div className={`stage ${isPortrait ? "portrait" : "landscape"}`}>
      <div className="center">
        {/*<img src={"images/subjects-story.png"} className="subjects" />*/}
        <svg
          className="blobSvg"
          viewBox={viewBoxDimensions}
          preserveAspectRatio="xMidYMid meet"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <path
              id="cloudBlob"
              d={pathD}
            />
            <clipPath id="blobClip">
              <use href="#cloudBlob" />
            </clipPath>
          </defs>

          <g className="gifWrap">
            <image
              href="/images/muppet-kermit-the-frog.gif"
              className="blobImage"
              clipPath="url(#blobClip)"
              preserveAspectRatio="xMidYMid slice"
              width="100%"
              height="100%"
              x="0"
              y="0"
            />
          </g>
        </svg>
      </div>

      <div 
      className="typewriter-blob"
      style={{
        backgroundImage: isPortrait ? "url('/images/typewriter-blob-portrait.png')" : "url('/images/typewriter-blob-landscape.png')",
        aspectRatio: isPortrait ? "306.61/184.73" : "1182.6/279.12"
      }}
      >
      <div className="typewriter">
        <p style={{
        display: "inline-block",
        whiteSpace: "pre-wrap",
        position: "relative",
        color: "black",
        fontSize: isPortrait ? "1rem" : "2rem"
        }}>
        {text}
        <span 
            style={{
            display: "inline-block",
            width: "2px",
            height: "1em",
            background: "black",
            animation: "blink 1s steps(1) infinite",
            verticalAlign: "bottom"
            }}
        />
        </p>
      </div>
      </div>

      <style jsx>{`
        .stage {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding-top: 0;
          background-image: url('/images/notes-on-self-bg.jpg');
          background-size: cover;
          background-position: center;
        }

        .center {
          width: 80vw;
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /*.subjects {
          width: 80vw;
          height: auto;
          position: absolute;
          z-index: 100;
        }*/

        .blobSvg {
          width: 80%;
          height: 80%;
          display: block;
        }

        .typewriter-blob {
          width: 50vw;
          max-width: 1200px;
          background-size: cover;
          background-position: center;
          /*mix-blend-mode: difference;*/
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .typewriter {
          width: 80%;
          margin-top: 2rem;
          font-family: "Courier New", monospace;
          font-weight: bold;
          color: #333;
          text-align: center;
        }

        @keyframes blink {
          0%, 50% { border-color: transparent; }
          50%, 100% { border-color: #333; }
        }
      `}</style>
    </div>
  );
}
