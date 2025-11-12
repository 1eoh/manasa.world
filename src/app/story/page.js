import BaseLayout from "../components/BaseLayout";
import GiftTextBlobs from "./GifTextblobs";
import "./story.css";


export default function StoryPage() {
  return (
    <BaseLayout>
      {/*<h1>Story & Skills</h1>
      <p>Biography and skills will appear here.</p>*/}

      {/*<img src="/images/typing-lines.png" 
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}/>*/}
      <GiftTextBlobs />
    </BaseLayout>
  );
}
