import * as THREE from 'three';

export const createScene = (container: HTMLDivElement) => {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(25, container.offsetWidth / container.offsetHeight, 0.1, 100);

  camera.position.set(5.5, 2.8, 4);

  const updateCameraPosition = () => {
    if (window.innerWidth >= 768) {
      camera.position.set(4.5, 2, 3);
    } else if (window.innerWidth >= 381) {
      camera.position.set(5, 2.5, 3.5);
    } else {
      camera.position.set(5.5, 2.8, 4);
    }
  };

  updateCameraPosition();

  window.addEventListener('resize', updateCameraPosition);

  const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(container.offsetWidth, container.offsetHeight);
  renderer.setClearColor(0x000000, 0);
  container.appendChild(renderer.domElement);

  return { scene, camera, renderer };
};

export const addLighting = (scene: THREE.Scene) => {
  const sun = new THREE.DirectionalLight('#ffffff', 1.5);

  sun.position.set(10, 10, 10);
  scene.add(sun);
};

export const createGlobe = (scene: THREE.Scene) => {
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

  return { globe, clouds };
};
