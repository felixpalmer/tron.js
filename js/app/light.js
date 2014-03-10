define( ["three", "scene"], function ( THREE, scene ) {
  var light = new THREE.DirectionalLight( 0xefefff );
  light.position.set( 0, 0, 300 );
  var light2 = new THREE.AmbientLight( 0x404040 );
  light.position.set( 0, 0, 300 );
  scene.add( light );
  scene.add( light2 );
  return light;
} );
