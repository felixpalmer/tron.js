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
      var speed = 2;

      // Move light cycle
      var lightcycleDirection = new THREE.Vector3( speed, 0, 0 );
      lightcycleDirection.applyMatrix3( app.lightcycle.matrix );
      app.lightcycle.position.add( lightcycleDirection );

      // Build wall segment
      var wallGeom = new THREE.PlaneGeometry( speed, 2 );
      var m = new THREE.Matrix4();
      m.makeRotationX( Math.PI / 2 );
      wallGeom.applyMatrix( m );
      var wall = new THREE.Mesh( wallGeom, material.wall );
      wall.quaternion.copy( app.lightcycle.quaternion );
      wall.position = app.lightcycle.position.clone();
      scene.add( wall );
    }
  };
  return app;
} );
