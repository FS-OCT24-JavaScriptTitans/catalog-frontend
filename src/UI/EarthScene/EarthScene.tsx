import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const EarthScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    renderer.setClearColor(0x000000, 0);
    container.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(25, container.offsetWidth / container.offsetHeight, 0.1, 100);

    camera.position.set(4.5, 2, 3);

    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;

    const sun = new THREE.DirectionalLight('#ffffff', 1.5);

    sun.position.set(10, 10, 10);
    scene.add(sun);

    const textureLoader = new THREE.TextureLoader();
    const dayTexture = textureLoader.load('./textures/earth_day_4096.jpg');
    const nightTexture = textureLoader.load('./textures/earth_night_4096.jpg');
    const cloudsTexture = textureLoader.load('./textures/earth_bump_roughness_clouds_4096.jpg');

    const globeMaterial = new THREE.ShaderMaterial({
      uniforms: {
        dayTexture: { value: dayTexture },
        nightTexture: { value: nightTexture },
        lightDirection: { value: new THREE.Vector3(10, 10, 10).normalize() },
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform sampler2D dayTexture;
        uniform sampler2D nightTexture;
        uniform vec3 lightDirection;

        varying vec2 vUv;
        varying vec3 vNormal;

        void main() {
          vec3 lightDir = normalize(lightDirection);
          float intensity = dot(normalize(vNormal), lightDir);
          intensity = clamp(intensity, 0.0, 1.0);

          vec4 dayColor = texture2D(dayTexture, vUv);
          vec4 nightColor = texture2D(nightTexture, vUv);

          vec4 finalColor = mix(nightColor, dayColor, intensity);

          gl_FragColor = finalColor;
        }
      `,
    });

    const globeGeometry = new THREE.SphereGeometry(1, 64, 64);
    const globe = new THREE.Mesh(globeGeometry, globeMaterial);

    scene.add(globe);

    const cloudsMaterial = new THREE.MeshPhongMaterial({
      map: cloudsTexture,
      transparent: true,
      opacity: 0.4,
    });
    const clouds = new THREE.Mesh(globeGeometry, cloudsMaterial);

    clouds.scale.set(1.01, 1.01, 1.01);
    scene.add(clouds);

    const onResize = () => {
      camera.aspect = container.offsetWidth / container.offsetHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.offsetWidth, container.offsetHeight);
    };

    window.addEventListener('resize', onResize);

    const animate = () => {
      globe.rotation.y += 0.001;
      clouds.rotation.y += 0.0005;
      controls.update();
      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', onResize);
      if (container) container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      style={{
        width: '100%',
        height: '50vh',
        backgroundColor: 'transparent',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
      }}
    />
  );
};

export default EarthScene;
