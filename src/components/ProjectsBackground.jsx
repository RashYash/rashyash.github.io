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
    let mixer;

    const clock = new THREE.Clock();
    const loader = new GLTFLoader();

    loader.load(
      import.meta.env.BASE_URL + "models/spaceship.glb",

      (gltf) => {
        model = gltf.scene;
        let scale = 1.5;

        if (window.innerWidth <= 480) {
          scale = 0.8;
        } else if (window.innerWidth <= 768) {
          scale = 1.1;
        } else if (window.innerWidth <= 1024) {
          scale = 1.3;
        }

        model.scale.set(scale, scale, scale);
        scene.add(model);

        console.log("Animations:", gltf.animations);

        if (gltf.animations.length > 0) {
          mixer = new THREE.AnimationMixer(model);
          const action = mixer.clipAction(gltf.animations[0]);
          action.play();
          console.log("Animation Started:", gltf.animations[0].name);
        }
      },

      undefined,

      (error) => {
        console.error("GLB Loading Error:", error);
      },
    );

    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (event) => {
      mouseX = (event.clientX / window.innerWidth - 0.5) * 2;
      mouseY = (event.clientY / window.innerHeight - 0.5) * 2;
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animate = () => {
      requestAnimationFrame(animate);
      const delta = clock.getDelta();

      if (mixer) {
        mixer.update(delta);
      }

      if (model) {
        model.rotation.y += 0.002;
        model.rotation.x += (mouseY * 0.25 - model.rotation.x) * 0.05;
        model.rotation.y += (mouseX * 0.2 - model.rotation.y) * 0.01;
      }

      renderer.render(scene, camera);
    };

    animate();

    const handleResize = () => {
      const width = container.clientWidth;
      const height = container.clientHeight;

      camera.aspect = width / height;
      camera.updateProjectionMatrix();

      renderer.setSize(width, height);

      if (model) {
        let scale = 1.5;

        if (window.innerWidth <= 480) {
          scale = 0.8;
        } else if (window.innerWidth <= 768) {
          scale = 1.1;
        } else if (window.innerWidth <= 1024) {
          scale = 1.3;
        }

        model.scale.set(scale, scale, scale);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      renderer.dispose();

      if (container && renderer.domElement.parentNode) {
        container.removeChild(renderer.domElement);
      }
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
