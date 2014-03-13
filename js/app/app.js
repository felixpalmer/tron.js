define( ["three", "camera", "controls", "geometry", "light", "Lightcycle", "material", "renderer", "scene"],
function ( THREE, camera, controls, geometry, light, Lightcycle, material, renderer, scene ) {
  var app = {
    clock: new THREE.Clock( true ),
    init: function () {
      app.lightcycle = new Lightcycle();
      scene.add( app.lightcycle );

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
