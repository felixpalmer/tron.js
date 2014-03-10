define( ["three"], function ( THREE ) {
  // Construct bike body from a series of curves
  var bikePath = new THREE.Path();
  bikePath.moveTo( -1, 0.1 );
  bikePath.absarc( -0.4, 0.4, 0.5, 2, -0.92, false ); // Note center coordinates are relative to current location!
  bikePath.absarc( 1, -2.2, 3.5, 2.1, 0.8, true );
  bikePath.absarc( -1, 0.1, 0.5, 4, -0.8, false );
  bikePath.lineTo( 1.05, 0.1 );

  var bikeGeometry = new THREE.ExtrudeGeometry( bikePath.toShapes(),
                                                { "amount": 0.5,
                                                  "bevelEnabled": false } );

  var wheelPath = new THREE.Path();
  wheelPath.moveTo( 0, 0 );
  wheelPath.absarc( 0, 0, 0.48, 0, 6.5, true );
  var wheelGeometry = new THREE.ExtrudeGeometry( wheelPath.toShapes(),
                                                { "amount": 0.7,
                                                  "bevelEnabled": false,
                                                  "curveSegments": 64 } );

  return {
    bike: bikeGeometry,
    wheel: wheelGeometry
  };
} );
