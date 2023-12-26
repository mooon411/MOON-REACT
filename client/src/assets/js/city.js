import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import * as THREE from "three";

const ThreeJsComponent = () => {
  const city = useRef();
  // const smoke = useRef();
  // const town = useRef();

  useEffect(() => {
    // BASIC parameters (주요 매개변수)
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    if (window.innerWidth > 800) {
      renderer.shadowMap.enabled = true;
      renderer.shadowMap.type = THREE.PCFSoftShadowMap;
      renderer.shadowMap.needsUpdate = true;
    }
    document.getElementById("threeJs").appendChild(renderer.domElement);

    window.addEventListener("resize", onWindowResize, false);

    const camera = new THREE.PerspectiveCamera(
      20,
      window.innerWidth / window.innerHeight,
      1,
      500
    );
    camera.position.set(0, 8, 10);

    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffbbdc);
    scene.fog = new THREE.Fog(0xffbbdc, 10, 16);

    // ... 나머지 코드 ...

    // START functions
    // generateLines();
    // init();
    // animate();

    return () => {
      // Clean up if needed
      window.removeEventListener("resize", onWindowResize);
      // Dispose resources properly to avoid memory leaks
      renderer.dispose();
    };
  }, []);

  const onWindowResize = () => {
    const camera = city.current;
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    // renderer.setSize(window.innerWidth, window.innerHeight);
  };

  // ... 나머지 코드 ...

  return (
    <div id="threeJs">
      <Canvas>
        {/* Three.js 장면을 렌더링할 컴포넌트들 */}
        {/* 필요한 경우 컴포넌트들을 추가하세요 */}
      </Canvas>
    </div>
  );
};

export default ThreeJsComponent;
