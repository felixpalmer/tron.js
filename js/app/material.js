define( ["three", "shader!simple.vert", "shader!simple.frag", "texture"], function ( THREE, simpleVert, simpleFrag, texture ) {
  // Shader objects support redefining of #defines.
  // See `simple.frag` file, where `faceColor` is already defined to be white, and we are overriding it to red here
  simpleFrag.define( "faceColor", "vec3(1.0, 0, 0)" );
  return {
    bike: new THREE.MeshPhongMaterial( { metal: true } ),
    wheel: new THREE.MeshPhongMaterial( { color: new THREE.Color( 0x000000 ) } )
  };
} );
