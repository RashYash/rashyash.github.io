import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
//import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

function ProjectsBackground() {
  const mountRef = useRef();

  useEffect(() => {
    const container = mountRef.current;
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      container.clientWidth / container.clientHeight,
      0.1,
      1000,
    );
    camera.position.set(0, 0.4, 8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
    });

    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(container.clientWidth, container.clientHeight);
    container.appendChild(renderer.domElement);

    //const controls = new OrbitControls(camera, renderer.domElement);
    //controls.enableDamping = true;

    const ambientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);

    const pointLight = new THREE.PointLight(0xffffff, 10);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    let model;

    const loader = new GLTFLoader();

    loader.load(
      import.meta.env.BASE_URL + "models/spaceship.glb",

      (gltf) => {
        model = gltf.scene;
        model.scale.set(1.5, 1.5, 1.5);
        scene.add(model);
      },
    );

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    function animate() {
      requestAnimationFrame(animate);

      if (model) {
        model.rotation.y += 0.003;
        model.rotation.x += (mouseY * 0.3 - model.rotation.x) * 0.05;
        model.rotation.y += (mouseX * 0.3 - model.rotation.y) * 0.01;
      }
      //controls.update();
      renderer.render(scene, camera);
    }

    animate();

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      if (renderer.domElement && container) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={mountRef}
      style={{
        position: "absolute",
        inset: 0,
        width: "100%",
        height: "100%",
      }}
    />
  );
}

export default ProjectsBackground;
