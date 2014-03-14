define( ["three"], function ( THREE ) {
  // Construct bike body from a series of curves
  var bikePath = new THREE.Path();
  bikePath.moveTo( -1, 0.1 );
  bikePath.absarc( -0.4, 0.4, 0.5, 2, -0.92, false ); // Note center coordinates are relative to current location!
  bikePath.absarc( 1, -2.2, 3.5, 2.1, 0.8, true );
  bikePath.absarc( -1, 0.1, 0.5, 4, -0.8, false );
  bikePath.lineTo( 1.05, 0.1 );

  var bikeGeometry = new THREE.ExtrudeGeometry( bikePath.toShapes(),
                                                { "amount": 0.4,
                                                  "bevelEnabled": false,
                                                  "curveSegments": 64 } );

  var wheelPath = new THREE.Path();
  wheelPath.moveTo( 0.18, 0 );
  wheelPath.absarc( -0.18, 0, 0.18, 0, 2 * Math.PI, true );
  var wheelGeometry = new THREE.ExtrudeGeometry( wheelPath.toShapes(),
                                                { "amount": 0.5,
                                                  "bevelEnabled": true,
                                                  "bevelThickness": 0.1,
                                                  "bevelSize": 0.3,
                                                  "bevelSegments": 24,
                                                  "curveSegments": 64 } );


  var wallGeometry = new THREE.PlaneGeometry( 1, 2 );

  // Rotate bike parts upright
  var m = new THREE.Matrix4();
  m.makeRotationX( Math.PI / 2 );
  bikeGeometry.applyMatrix( m );
  wallGeometry.applyMatrix( m );
  wheelGeometry.applyMatrix( m );

  // Center bike parts around vertical axis
  m.makeTranslation( 0, 0.2, 0 );
  bikeGeometry.applyMatrix( m );
  m.makeTranslation( 0, 0.25, 0 );
  wheelGeometry.applyMatrix( m );

  // Re-center wall, so that it grows correctly (i.e. place one corner at the origin)
  m.makeTranslation( 0.5, 0, 0 );
  wallGeometry.applyMatrix( m );


  var gameGrid = new THREE.PlaneGeometry( 1024, 1024 );

  return {
    bike: bikeGeometry,
    grid: gameGrid,
    wall: wallGeometry,
    wheel: wheelGeometry
  };
} );
