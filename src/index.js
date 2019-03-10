import * as BABYLON from 'babylonjs/es6';
import { createScene } from './resources/scene.js';
import loadHandlers from './resources/handlers.js';

const init = () => {
  // access canvas
  const canvas = document.getElementById('renderCanvas');

  // load the Babylon 3D Engine
  const engine = new BABYLON.Engine(canvas, true);

  // create scene
  const scene = createScene({ canvas, engine });

  // start game loop
  engine.runRenderLoop(() => {
    scene.render();
  });

  loadHandlers(engine);
};

init();
