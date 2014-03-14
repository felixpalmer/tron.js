define( ["three", "geometry", "material"],
function ( THREE, geometry, material ) {
  var Lightcycle = function() {
    THREE.Object3D.call( this );

    // Bring together elements of light cycle
    this.bike = new THREE.Mesh( geometry.bike, material.bike );
    this.add( this.bike );

    this.frontWheel = new THREE.Mesh( geometry.wheel, material.wheel );
    this.frontWheel.position = new THREE.Vector3( -1.42, 0, 0.5 );
    this.add( this.frontWheel );

    this.backWheel = new THREE.Mesh( geometry.wheel, material.wheel );
    this.backWheel.position = new THREE.Vector3( 1.32, 0, 0.5 );
    this.add( this.backWheel );

  };

  Lightcycle.prototype = Object.create( THREE.Object3D.prototype );

  return Lightcycle;
} );
