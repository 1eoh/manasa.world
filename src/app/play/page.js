import BaseLayout from "../components/BaseLayout";
import PlaySection  from "../components/PlaySection";



const images = [
  '/images/play/play-01.png',
  '/images/play/play-02.png',
  '/images/play/play-03.png',
  '/images/play/play-04.png',
  '/images/play/play-05.png'
];

export default function PlayPage() {
  return (
    <BaseLayout>
        <PlaySection images={images} delay={800} zoomScale={1.05} />
    </BaseLayout>
  );
}
