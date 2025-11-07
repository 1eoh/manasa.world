"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";

export default function ThreeLetterScene({ modelPath = "/models/youre_early.gltf" }) {
  const mountRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    const scene = new THREE.Scene();

    // CAMERA
    const camera = new THREE.PerspectiveCamera(
      50,
      mount.clientWidth / mount.clientHeight,
      0.1,
      100
    );
    camera.position.set(0, 0, 5);

    // RENDERER
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(mount.clientWidth, mount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // LIGHTS
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 1.2);
    scene.add(hemiLight);
    const pointLight = new THREE.PointLight(0xffffff, 1.5);
    pointLight.position.set(3, 3, 3);
    scene.add(pointLight);

    // ENVIRONMENT MAP for reflections
    const envMap = new THREE.CubeTextureLoader()
      .setPath("/hdr/")
      .load(["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]);
    scene.environment = envMap;

    // MATERIAL with glass + noise effect
    const material = new THREE.MeshPhysicalMaterial({
      color: 0x000000,
      roughness: 0.1,
      metalness: 0,
      transmission: 0.7,   // glassy
      thickness: 0.5,
      clearcoat: 1,
      clearcoatRoughness: 0.05,
      envMap: envMap,
    });

    //Procedural subtle noise using vertex displacement (optional)
    //const noise = new THREE.TextureLoader().load("/noise.png"); // small grayscale noise texture
    //noise.wrapS = noise.wrapT = THREE.RepeatWrapping;
    //material.alphaMap = noise;
    //material.transparent = true;

    // LOAD MODEL
    const ext = modelPath.split(".").pop().toLowerCase();
    const loader = ext === "obj" ? new OBJLoader() : new GLTFLoader();

    let loadedModel = null;

    loader.load(
      modelPath,
      (object) => {
        const model = ext === "obj" ? object : object.scene;

        model.traverse((child) => {
          if (child.isMesh) {
            child.material = material;
            child.geometry.computeVertexNormals();
          }
        });

        // FIT MODEL TO VIEW
        
          const box = new THREE.Box3().setFromObject(model);
          const size = new THREE.Vector3();
          box.getSize(size);
          //const scaleFactor = 4 / Math.max(size.x, size.y, size.z);
          const scaleFactor = (mount.clientWidth / mount.clientHeight) * 4 / Math.max(size.x, size.y, size.z);
          model.scale.setScalar(scaleFactor);

          // CENTER MODEL
          box.getCenter(size);
          model.position.sub(size);
        

        scene.add(model);

        // RENDER LOOP (static letters, no rotation)
        const animate = () => {
          requestAnimationFrame(animate);
          renderer.render(scene, camera);
        };
        animate();
      },
      undefined,
      (error) => console.error("Error loading model:", error)
    );

    // HANDLE RESIZE
    const handleResize = () => {
      camera.aspect = mount.clientWidth / mount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(mount.clientWidth, mount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      mount.removeChild(renderer.domElement);
      renderer.dispose();
      window.removeEventListener("resize", handleResize);
    };
  }, [modelPath]);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh", zIndex: 2, mixBlendMode: 'hard-light'}} />;
}
