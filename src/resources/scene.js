const createScene = ({ canvas, engine }) => {
  // Create the scene space
  const scene = new BABYLON.Scene(engine);

  // Add a camera to the scene and attach it to the canvas
  const camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 4, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);

  // Add lights to the scene
  const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
  const light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

  // Add and manipulate meshes in the scene
  const ground = BABYLON.MeshBuilder.CreateGround("ground", { width: 1, height: 1, subdivsions: 1 }, scene);

  return scene;
};

export {
  createScene,
};
