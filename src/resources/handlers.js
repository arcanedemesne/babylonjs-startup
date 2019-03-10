const loadHandlers = (engine) => {
  // handle BabylonJS Enginge resize if the window changes size
  window.addEventListener('resize', () => {
      engine.resize();
  });
};

export {
  loadHandlers as default
}
