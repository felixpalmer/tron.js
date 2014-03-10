define( ["three"], function ( THREE ) {
  var bikePath = new THREE.Path();
  bikePath.moveTo( -3, 1 );
  bikePath.lineTo( -3, 5 );
  bikePath.lineTo( 3, 5 );
  bikePath.lineTo( 2, 1 );

  var bikeGeometry = new THREE.ExtrudeGeometry( bikePath.toShapes(),
                                                { "amount": 2,
                                                  "bevelEnabled": false } );
  return {
    cube: new THREE.CubeGeometry( 200, 200, 200 ),
    bike: bikeGeometry
  };
} );
