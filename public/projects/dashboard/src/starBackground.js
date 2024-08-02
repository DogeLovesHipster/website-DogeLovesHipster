document.addEventListener("DOMContentLoaded", function () {
  // Setting up the renderer
  const canvas = document.getElementById("space-background");
  const renderer = new THREE.WebGLRenderer({ canvas });
  renderer.setClearColor(new THREE.Color("#1c1624")); // Set the background color

  // Creating the scene
  const scene = new THREE.Scene();

  // Adding a light source to the scene
  const color = 0xffffff,
    intensity = 1;
  const light = new THREE.DirectionalLight(color, intensity);
  light.position.set(-1, 2, 4);
  scene.add(light);

  // Setting up the camera with perspective
  const fov = 75,
    aspect = 2,
    near = 1.5,
    far = 5;
  const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
  camera.position.z = 2;

  // Generate random positions for particles to simulate stars
  const getRandomParticelPos = (particleCount) => {
    const arr = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i++) {
      arr[i] = (Math.random() - 0.5) * 10;
    }
    return arr;
  };

  // Creating geometries for two sets of stars
  const geometries = [new THREE.BufferGeometry(), new THREE.BufferGeometry()];

  geometries[0].setAttribute(
    "position",
    new THREE.BufferAttribute(getRandomParticelPos(350), 3)
  );
  geometries[1].setAttribute(
    "position",
    new THREE.BufferAttribute(getRandomParticelPos(1500), 3)
  );

  // Loading textures for the stars
  const loader = new THREE.TextureLoader();

  // Creating materials with the loaded textures
  const materials = [
    new THREE.PointsMaterial({
      size: 0.09,
      map: loader.load(
        "https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp1.png"
      ),
      transparent: true,
    }),
    new THREE.PointsMaterial({
      size: 0.09,
      map: loader.load(
        "https://raw.githubusercontent.com/Kuntal-Das/textures/main/sp2.png"
      ),
      transparent: true,
    }),
  ];

  // Creating points (stars) using the geometries and materials
  const starsT1 = new THREE.Points(geometries[0], materials[0]);
  const starsT2 = new THREE.Points(geometries[1], materials[1]);
  scene.add(starsT1);
  scene.add(starsT2);

  // Function to resize the renderer based on the display size
  const resizeRendererToDisplaySize = (renderer) => {
    const canvas = renderer.domElement;
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    const needResize = canvas.width !== width || canvas.height !== height;
    if (needResize) {
      renderer.setSize(width, height, false);
    }
    return needResize;
  };

  // Handling mouse movement to simulate star movement
  let mouseX = 0;
  let mouseY = 0;
  const handleMouseMove = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };
  document.addEventListener("mousemove", handleMouseMove);

  // Rendering loop
  const render = (time) => {
    // Adjust the renderer and camera if the display size changes
    if (resizeRendererToDisplaySize(renderer)) {
      const canvas = renderer.domElement;
      camera.aspect = canvas.clientWidth / canvas.clientHeight;
      camera.updateProjectionMatrix();
    }

    // Update star positions based on mouse movement
    starsT1.position.x = mouseX * 0.0001;
    starsT1.position.y = mouseY * -0.0001;

    starsT2.position.x = mouseX * 0.0001;
    starsT2.position.y = mouseY * -0.0001;

    // Re-render the scene
    renderer.render(scene, camera);

    // Loop the render function
    requestAnimationFrame(render);
  };
  requestAnimationFrame(render);

  // Cleanup function to remove the event listener
  return () => {
    document.removeEventListener("mousemove", handleMouseMove);
  };
});
