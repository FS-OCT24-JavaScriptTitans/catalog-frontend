import React, { useEffect, useRef } from 'react';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

import s from './EarthScene.module.scss';

import { addLighting, createGlobe, createScene } from '@/utils/scene/earth';

const EarthScene: React.FC = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;

    if (!container) return;

    const { scene, camera, renderer } = createScene(container);
    const controls = new OrbitControls(camera, renderer.domElement);

    controls.enableDamping = true;
    controls.enableZoom = false;
    controls.enablePan = false;

    addLighting(scene);
    const { globe, clouds } = createGlobe(scene);

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
      container.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      className={s.container}
      ref={containerRef}
    />
  );
};

export default EarthScene;
