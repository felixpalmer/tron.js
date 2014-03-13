define( ["three", "shader!grid.vert", "shader!grid.frag"], function ( THREE, gridVert, gridFrag ) {
  return {
    bike: new THREE.MeshPhongMaterial( {
      color: new THREE.Color( 0x00f191 ),
      metal: true
    } ),
    grid: new THREE.ShaderMaterial( {
      uniforms: {
        uTime: { type: "f", value: 0 }
      },
      vertexShader: gridVert.value,
      fragmentShader: gridFrag.value
    }),
    wall: new THREE.MeshLambertMaterial( {
      color: new THREE.Color( 0x00fc99 ),
      side: THREE.DoubleSide
    } ),
    wheel: new THREE.MeshLambertMaterial( { color: new THREE.Color( 0x000000 ) } )
  };
} );
