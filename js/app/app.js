define( ["three", "camera", "Controls", "geometry", "light", "Lightcycle", "material", "renderer", "scene"],
function ( THREE, camera, Controls, geometry, light, Lightcycle, material, renderer, scene ) {
  var app = {
    clock: new THREE.Clock( true ),
    init: function () {
      app.lightcycle = new Lightcycle();
      scene.add( app.lightcycle );

      app.gameGrid = new THREE.Mesh( geometry.grid, material.grid );
      scene.add( app.gameGrid );

      app.controls = new Controls( app.lightcycle );
    },
    animate: function () {
      window.requestAnimationFrame( app.animate );
      app.controls.update();
      material.grid.uniforms.uTime.value = app.clock.getElapsedTime();
      app.gameStep();

      renderer.render( scene, camera );
    },
    gameStep: function() {
      var lightcycleDirection = new THREE.Vector3( 1, 0, 0 );
      lightcycleDirection.applyMatrix3( app.lightcycle.matrix );
      app.lightcycle.position.add( lightcycleDirection );
    }
  };
  return app;
} );
