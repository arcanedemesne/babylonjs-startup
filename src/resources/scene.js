import mountains from './textures/mountains.jpg';
import mountainsMap from './textures/mountains-map.jpg';

const createScene = ({ canvas, engine }) => {
  // Create the scene space
  const scene = new BABYLON.Scene(engine);

  // Add a camera to the scene and attach it to the canvas
  const camera = new BABYLON.ArcRotateCamera("Camera", 3 * Math.PI / 4, Math.PI / 2.17, 320, BABYLON.Vector3.Zero(), scene);
  camera.attachControl(canvas, true);

  // Add lights to the scene
  const light1 = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(1, 1, 0), scene);
  const light2 = new BABYLON.PointLight("light2", new BABYLON.Vector3(0, 1, -1), scene);

  // Ground
  const groundMaterial = new BABYLON.StandardMaterial("ground", scene);
  groundMaterial.diffuseTexture = new BABYLON.Texture(mountains, scene);

  const ground = BABYLON.Mesh.CreateGroundFromHeightMap("ground", mountainsMap, 500, 500, 350, -5, 15, scene, false);
  ground.material = groundMaterial;

  // Water
  const waterMaterial = new BABYLON.StandardMaterial("waterMaterial", scene);
  waterMaterial.diffuseColor = new BABYLON.Color3(0, 0, .2);
  waterMaterial.specularColor = new BABYLON.Color3(0, 0, 0);
  waterMaterial.emissiveColor = new BABYLON.Color3(0, 0.1, 0.25);
  waterMaterial.ambientColor = new BABYLON.Color3(0.1, 0.45, 0.5);

  const water = BABYLON.MeshBuilder.CreateGround("water", { height: 500, width: 500 }, scene);
  water.material = waterMaterial;
  water.position.y = -2.15;

  // Set BG color
  scene.clearColor = new BABYLON.Color3(0.25, 0.45, 0.6);

  return scene;
};

export {
  createScene,
};
