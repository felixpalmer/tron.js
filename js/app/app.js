define( ["three", "camera", "controls", "geometry", "light", "material", "renderer", "scene"],
function ( THREE, camera, controls, geometry, light, material, renderer, scene ) {
  var app = {
    init: function () {
      app.bike = new THREE.Mesh( geometry.bike, material.bike );
      scene.add( app.bike );
    },
    animate: function () {
      window.requestAnimationFrame( app.animate );
      controls.update();
      renderer.render( scene, camera );
    }
  };
  return app;
} );
