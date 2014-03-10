define( ["three", "shader!grid.vert", "shader!grid.frag", "texture"], function ( THREE, gridVert, gridFrag, texture ) {
  return {
    bike: new THREE.MeshPhongMaterial( { metal: true } ),
    grid: new THREE.ShaderMaterial( {
      uniforms: {
        uTime: { type: "f", value: 0 }
      },
      vertexShader: gridVert.value,
      fragmentShader: gridFrag.value
    }),
    wheel: new THREE.MeshLambertMaterial( { color: new THREE.Color( 0x000000 ) } )
  };
} );
