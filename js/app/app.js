define( ["three", "camera", "controls", "composer", "geometry", "light", "Lightcycle", "material", "renderer", "scene"],
function ( THREE, camera, Controls, composer, geometry, light, Lightcycle, material, renderer, scene ) {
  var app = {
    clock: new THREE.Clock( true ),
    init: function () {
      app.lightcycle = new Lightcycle();
      scene.add( app.lightcycle );

      app.gameGrid = new THREE.Mesh( geometry.grid, material.black );
      scene.add( app.gameGrid );

      app.controls = new Controls( app.lightcycle );

      // Uncomment to bring bike closer to camera
      //app.controls.distance = 5;

      app.lastDirection = new THREE.Vector3( 0, 0, 0 );
    },
    animate: function () {
      window.requestAnimationFrame( app.animate );
      app.controls.update();
      material.sharedUniforms.uTime.value = app.clock.getElapsedTime();

      // Comment out to keep cycle static
      app.gameStep();

      // Render scene
      composer.render();
    },
    gameStep: function() {
      var speed = 2;

      // Detect if we have just turned
      var lightcycleDirection = new THREE.Vector3( speed, 0, 0 );
      lightcycleDirection.applyMatrix3( app.lightcycle.matrix );
      var turned = !lightcycleDirection.equals( app.lastDirection );

      if ( turned ) {
        // Have just turned add new wall segment
        app.lastDirection = lightcycleDirection.clone();
        app.wall = new THREE.Mesh( geometry.wall, material.wall );
        app.wall.quaternion.copy( app.lightcycle.quaternion );
        app.wall.position = app.lightcycle.position.clone();
        app.wall.scale.x = 0;
        scene.add( app.wall );
      }

      // Move light cycle
      app.lightcycle.position.add( lightcycleDirection );

      // Grow wall by distance moved
      app.wall.scale.x += speed;
    }
  };
  return app;
} );
