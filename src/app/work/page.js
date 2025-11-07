'use client';

import BaseLayout from "../components/BaseLayout";
import { useState } from "react";
import { useRouter } from "next/navigation"; // if using Next.js
import './workpage.css';

const projectsGroup1 = [
  { name: "Project A", image: "/images/P-bg-1.jpg", id: "projA" },
  { name: "Project B", image: "/images/P-bg-2.jpg", id: "projB" },
  { name: "Project C", image: "/images/P-bg-1.jpg", id: "projC" },
];

const projectsGroup2 = [
  { name: "Project D", image: "/images/P-bg-2.jpg", id: "projD" },
  { name: "Project E", image: "/images/P-bg-1.jpg", id: "projE" },
];

export default function WorkPage() {
  const [bgImage, setBgImage] = useState("/images/default-bg.jpg");
  const router = useRouter();

  const handleClick = (id) => {
    router.push(`/work-projects?project=${id}`);
  };

  return (
    <BaseLayout>
          <div
            className="work-page"
            style={{
              backgroundImage: `url(${bgImage})`,
            }}
          >
            <div className="floating-menu">
              <div className="menu-group">
                <h3>Group One</h3>
                {projectsGroup1.map((p) => (
                  <div
                    key={p.id}
                    className="menu-item"
                    onMouseEnter={() => setBgImage(p.image)}
                    onClick={() => handleClick(p.id)}
                  >
                    {p.name}
                  </div>
                ))}
              </div>

              <div className="menu-group">
                <h3>Group Two</h3>
                {projectsGroup2.map((p) => (
                  <div
                    key={p.id}
                    className="menu-item"
                    onMouseEnter={() => setBgImage(p.image)}
                    onClick={() => handleClick(p.id)}
                  >
                    {p.name}
                  </div>
                ))}
              </div>
            </div>
          </div>
    </BaseLayout>
  );
}
