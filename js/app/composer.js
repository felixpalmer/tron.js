define( ["three", "camera", "renderer", "scene"], function ( THREE, camera, renderer, scene ) {
  var composer = new THREE.EffectComposer( renderer );

  var renderPass = new THREE.RenderPass( scene, camera );
  composer.addPass( renderPass );

  var copyPass = new THREE.ShaderPass( THREE.CopyShader );
  copyPass.renderToScreen = true;
  composer.addPass( copyPass );

  return composer;
} );
