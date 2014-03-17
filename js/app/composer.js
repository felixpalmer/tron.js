define( ["three", "camera", "container", "renderer", "scene", "shader!combine.vert", "shader!combine.frag"], function ( THREE, camera, container, renderer, scene, combineVertex, combineFragment ) {
  var composer = new THREE.EffectComposer( renderer );

  // Render actual scene
  var renderPass = new THREE.RenderPass( scene, camera );
  composer.addPass( renderPass );

  // Start postprocessing
  // Save pass (we'll want to use the base render to use later)
  var renderTargetParams = {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBFormat,
    stencilBuffer: false
  };
  var saveRenderTarget = new THREE.WebGLRenderTarget( container.offsetWidth, container.offsetHeight, renderTargetParams );
  var savePass = new THREE.SavePass( saveRenderTarget );
  composer.addPass( savePass );

  // Edge detection
  var edgePass = new THREE.ShaderPass( THREE.EdgeShader );
  edgePass.uniforms.aspect.value.x = container.offsetWidth;
  edgePass.uniforms.aspect.value.y = container.offsetHeight;
  composer.addPass( edgePass );

  // Combine edges and original render
  var combineShader = {
    uniforms: {
      "tDiffuse": { type: "t", value: null },
      "tOriginal": { type: "t", value: saveRenderTarget }
    },
    vertexShader: combineVertex.value,
    fragmentShader: combineFragment.value
  };
  var combinePass = new THREE.ShaderPass( combineShader );
  composer.addPass( combinePass );

  // Copy final result to screen
  var copyPass = new THREE.ShaderPass( THREE.CopyShader );
  copyPass.renderToScreen = true;
  composer.addPass( copyPass );

  return composer;
} );
