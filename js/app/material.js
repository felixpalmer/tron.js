define( ["three", "shader!engine.vert", "shader!engine.frag", "shader!grid.vert", "shader!grid.frag", "shader!simple.vert", "shader!simple.frag" ], function ( THREE, engineVert, engineFrag, gridVert, gridFrag, simpleVert, simpleFrag ) {
  var sharedUniforms = {
    uTime: { type: "f", value: 0 }
  };

  return {
    bike: new THREE.MeshPhongMaterial( {
      color: new THREE.Color( 0x00f191 ),
      metal: true
    } ),
    black: new THREE.MeshBasicMaterial( {
      color: new THREE.Color( 0x000000 )
    } ),
    engine: new THREE.ShaderMaterial( {
      uniforms: {
        uTime: sharedUniforms.uTime
      },
      vertexShader: engineVert.value,
      fragmentShader: engineFrag.value,
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
    simple: new THREE.ShaderMaterial( {
      vertexShader: simpleVert.value,
      fragmentShader: simpleFrag.value
    } ),
    wall: new THREE.MeshBasicMaterial( {
      color: new THREE.Color( 0x00fc99 ),
      side: THREE.DoubleSide,
      blending: THREE.AdditiveBlending,
      opacity: 0.5,
      transparent: true
    } ),
    wheel: new THREE.MeshLambertMaterial( {
       color: new THREE.Color( 0x000000 )
    } ),

    sharedUniforms: sharedUniforms
  };
} );
