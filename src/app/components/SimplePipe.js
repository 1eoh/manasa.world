"use client";
import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function SimplePipe() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.z = 60;

    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true, // transparent
    });
    renderer.setSize(window.innerWidth, window.innerHeight);

    // lights
    const ambient = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambient);
    const dir = new THREE.DirectionalLight(0xffffff, 0.6);
    dir.position.set(30, 30, 50);
    scene.add(dir);

    // simple curve (like an SVG wave)
    const curve = new THREE.CatmullRomCurve3([
      new THREE.Vector3(-40, -10, 0),
      new THREE.Vector3(-20, 20, 0),
      new THREE.Vector3(0, 0, 0),
      new THREE.Vector3(20, 20, 0),
      new THREE.Vector3(40, -10, 0),
    ]);

    const geometry = new THREE.TubeGeometry(curve, 100, 1.5, 16, false);
    const material = new THREE.MeshStandardMaterial({
      color: 0x3399ff,
      metalness: 0.6,
      roughness: 0.3,
    });
    const tube = new THREE.Mesh(geometry, material);
    scene.add(tube);

    renderer.render(scene, camera);

    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.render(scene, camera);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ display: "block", width: "100%", height: "100%" }}
    />
  );
}
