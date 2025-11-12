'use client';

import BaseLayout from "./components/BaseLayout";
import LandingScroll from './components/LandingScroll';
import ThreeLetterScene from "./components/ThreeLetterScene";

const studentImages = [
  { src: '/images/landing/student-img-numberout.png', bg: '/images/landing/student-bg-numberout.jpg', alt: 'Proj 1', link: 'projA', gridArea: '1 / 1 / 2 / 2' },
  { src: '/images/landing/student-img-makeshape.png', bg: '/images/landing/student-bg-makeshape.jpg', alt: 'Proj 2', link: 'projB', gridArea: '1 / 2 / 2 / 3' },
  { src: '/images/landing/student-img-arcane.png', bg: '/images/landing/student-bg-arcane.jpg', alt: 'Proj 3', link: 'projC', gridArea: '2 / 1 / 3 / 2' },
  { src: '/images/landing/student-img-japanway.png', bg: '/images/landing/student-bg-japanway.jpg', alt: 'Proj 5', link: 'projD', gridArea: '3 / 2 / 4 / 3' },
];

const personalImages = [
  { src: '/images/landing/personal-img-observations.png', bg: '/images/landing/personal-bg-observations.jpg', alt: 'Proj 2', link: 'proj2', gridArea: '1 / 2 / 2 / 3' },
  { src: '/images/landing/personal-img-kubera.png', bg: '/images/landing/personal-bg-kubera-variant.jpg', alt: 'Proj 1', link: 'proj1', gridArea: '1 / 3 / 2 / 4' },
  { src: '/images/landing/personal-img-parallels.png', bg: '/images/landing/personal-bg-parallels.jpg', alt: 'Proj 3', link: 'proj3', gridArea: '2 / 1 / 3 / 2' },
];

/*
const [isPortrait, setIsPortrait] = useState(true);

// Detect orientation change
useEffect(() => {
  const mql = window.matchMedia("(orientation: portrait)");
  const handleChange = (e) => setIsPortrait(e.matches);
  setIsPortrait(mql.matches);
  mql.addEventListener("change", handleChange);
  return () => mql.removeEventListener("change", handleChange);
}, []);
*/


export default function HomePage() {
  return (
    <BaseLayout>
      <ThreeLetterScene modelPath="/models/within-reason.gltf" />
      <LandingScroll studentImages={studentImages} personalImages={personalImages} />
    </BaseLayout>
  );
}
