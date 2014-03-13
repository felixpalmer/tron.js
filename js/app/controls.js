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

    this.spinLeft = false;
    this.spinRight = false;

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
		if ( this.spinLeft ) {
      this.object.rotateOnAxis( this.up, Math.PI / 2 );
      this.spinLeft = false;
    }
		if ( this.spinRight ) {
      this.object.rotateOnAxis( this.up, -Math.PI / 2 );
      this.spinRight = false;
    }
  };

  return Controls;
} );
