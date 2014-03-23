define( ["three", "shader!engine.vert", "shader!grid.vert", "shader!grid.frag", "shader!simple.frag"], function ( THREE, engineVert, gridVert, gridFrag, simpleFrag ) {
  var sharedUniforms = {
    uTime: { type: "f", value: 0 }
  };

  return {
    bike: new THREE.MeshPhongMaterial( {
      color: new THREE.Color( 0x00f191 ),
      metal: true
    } ),
    engine: new THREE.ShaderMaterial( {
      uniforms: {
        uTime: sharedUniforms.uTime
      },
      vertexShader: engineVert.value,
      fragmentShader: simpleFrag.value,
      blending: THREE.AdditiveBlending,
      transparent: true
    }),
    grid: new THREE.ShaderMaterial( {
      uniforms: {
        uTime: sharedUniforms.uTime
      },
      vertexShader: gridVert.value,
      fragmentShader: gridFrag.value
    }),
    wall: new THREE.MeshBasicMaterial( {
      color: new THREE.Color( 0x00fc99 ),
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      opacity: 0.5,
      transparent: true
    } ),
    wheel: new THREE.MeshLambertMaterial( { color: new THREE.Color( 0x000000 ) } ),

    sharedUniforms: sharedUniforms
  };
} );
