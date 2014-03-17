define( ["three", "camera", "container", "renderer", "scene"], function ( THREE, camera, container, renderer, scene ) {
  var composer = new THREE.EffectComposer( renderer );

  // Render actual scene
  var renderPass = new THREE.RenderPass( scene, camera );
  composer.addPass( renderPass );

  // Start postprocessing
  // Edge detection
  var edgePass = new THREE.ShaderPass( THREE.EdgeShader );
  edgePass.uniforms.aspect.value.x = container.offsetWidth;
  edgePass.uniforms.aspect.value.y = container.offsetWidth;
  composer.addPass( edgePass );

  // Copy final result to screen
  var copyPass = new THREE.ShaderPass( THREE.CopyShader );
  copyPass.renderToScreen = true;
  composer.addPass( copyPass );

  return composer;
} );
