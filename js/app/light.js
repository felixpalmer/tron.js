define( ["three", "scene"], function ( THREE, scene ) {
  var light = new THREE.DirectionalLight( 0xefefff );
  light.position.set( 2, 1, 3 );
  var light2 = new THREE.AmbientLight( 0x404040 );
  light.position.set( 20, 15, 10 );
  scene.add( light );
  scene.add( light2 );
  return light;
} );
