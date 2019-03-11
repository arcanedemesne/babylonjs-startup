const createScene = ({ canvas, engine }) => {
  // Create the scene space
  const scene = new BABYLON.Scene(engine);

  // Add a camera to the scene and attach it to the canvas
  const camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 4, Math.PI / 4, 4, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);

  // Add lights to the scene
  const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
  const light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

  // Create source plane
  const sourcePlane = new BABYLON.Plane(0, .5, 0, 0);
      sourcePlane.normalize();

  // Add and manipulate meshes in the scene
  const sideOrientation = BABYLON.Mesh.DOUBLESIDE;
  const plane = BABYLON.MeshBuilder.CreatePlane("plane",
    {
      sourcePlane,
      sideOrientation,
      width: 1,
      height: .75,
    }, scene);

  return scene;
};

export {
  createScene,
};
