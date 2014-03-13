define( ["three", "camera", "Controls", "geometry", "light", "Lightcycle", "material", "renderer", "scene"],
function ( THREE, camera, Controls, geometry, light, Lightcycle, material, renderer, scene ) {
  var app = {
    clock: new THREE.Clock( true ),
    init: function () {
      app.lightcycle = new Lightcycle();
      scene.add( app.lightcycle );

      app.gameGrid = new THREE.Mesh( geometry.grid, material.grid );
      scene.add( app.gameGrid );

      app.controls = new Controls();
    },
    animate: function () {
      window.requestAnimationFrame( app.animate );
      app.controls.update();

      material.grid.uniforms.uTime.value = app.clock.getElapsedTime();

      renderer.render( scene, camera );
    }
  };
  return app;
} );
