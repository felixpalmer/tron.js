define( ["three", "camera", "controls", "geometry", "light", "material", "renderer", "scene"],
function ( THREE, camera, controls, geometry, light, material, renderer, scene ) {
  var app = {
    clock: new THREE.Clock( true ),
    init: function () {
      app.bike = new THREE.Mesh( geometry.bike, material.bike );
      scene.add( app.bike );

      app.frontWheel = new THREE.Mesh( geometry.wheel, material.wheel );
      app.frontWheel.position = new THREE.Vector3( -1.42, 0.5, -0.05 );
      scene.add( app.frontWheel );

      app.backWheel = new THREE.Mesh( geometry.wheel, material.wheel );
      app.backWheel.position = new THREE.Vector3( 1.32, 0.5, -0.05 );
      scene.add( app.backWheel );

      app.gameGrid = new THREE.Mesh( geometry.grid, material.grid );
      scene.add( app.gameGrid );
    },
    animate: function () {
      window.requestAnimationFrame( app.animate );
      controls.update();

      material.grid.uniforms.uTime.value = app.clock.getElapsedTime();

      renderer.render( scene, camera );
    }
  };
  return app;
} );
