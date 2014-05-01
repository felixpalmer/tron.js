define( ["three", "camera", "container"], function( THREE, camera, container ) {
  function bind( scope, fn ) {
    return function () {
      fn.apply( scope, arguments );
    };
  }

  var Controls = function ( object ) {
    if ( !( object instanceof THREE.Object3D ) ) {
      console.log( "Object passed to controls if not a valid Object3D object" );
    }
    if ( container !== document ) {
      container.setAttribute( 'tabindex', -1 );
      container.focus();
    }
    this.object = object;
    this.up = new THREE.Vector3( 0, 0, 1 );
    camera.up = this.up;

    this.spinLeft = false;
    this.spinRight = false;

    // Distance from camera to object
    this.distance = 20;

    container.addEventListener( 'keydown', bind( this, this.onKeyDown ), false );
  };

  Controls.prototype.onKeyDown = function ( event ) {
    switch ( event.keyCode ) {
      case 37: /*left*/
      case 65: /*A*/ this.spinLeft = true; break;

      case 39: /*right*/
      case 68: /*D*/ this.spinRight = true; break;
    }
  };

  Controls.prototype.update = function() {
    // Update object
    if ( this.spinLeft ) {
      this.object.rotateOnAxis( this.up, Math.PI / 2 );
      this.spinLeft = false;
    }
    if ( this.spinRight ) {
      this.object.rotateOnAxis( this.up, -Math.PI / 2 );
      this.spinRight = false;
    }

    // Update camera to "chase" object. First get offset from object, then scale this to a set length
    var offset = camera.position.clone();
    offset.sub( this.object.position );
    offset.setLength( this.distance );
    camera.position.addVectors( offset, this.object.position );

    // Lock camera height and move slighlty to the side, so we can always see the wall behind us
    camera.position.z = 3;
    camera.position.x += 0.1;
    camera.position.y += 0.1;
    camera.lookAt( this.object.position );
  };

  return Controls;
} );
