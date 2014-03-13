define( ["three", "camera", "container"], function( THREE, camera, container ) {
	function bind( scope, fn ) {
		return function () {
			fn.apply( scope, arguments );
		};
	}

  var Controls = function () {
    if ( container !== document ) {
      container.setAttribute( 'tabindex', -1 );
      container.focus();
    }
    this.target = new THREE.Vector3( 0, 0, 0 );

    this.moveLeft = false;
    this.moveRight = false;

    container.addEventListener( 'keydown', bind( this, this.onKeyDown ), false );
    container.addEventListener( 'keyup', bind( this, this.onKeyUp ), false );
  };

	Controls.prototype.onKeyDown = function ( event ) {
		//event.preventDefault();
		switch ( event.keyCode ) {
			case 37: /*left*/
			case 65: /*A*/ this.moveLeft = true; break;

			case 39: /*right*/
			case 68: /*D*/ this.moveRight = true; break;
		}
	};

	Controls.prototype.onKeyUp = function ( event ) {
		switch( event.keyCode ) {
			case 37: /*left*/
			case 65: /*A*/ this.moveLeft = false; break;

			case 39: /*right*/
			case 68: /*D*/ this.moveRight = false; break;
		}
	};

	Controls.prototype.update = function() {
		if ( this.moveLeft ) {
      console.log( "left" );
      //this.object.translateX( - actualMoveSpeed );
    }
		if ( this.moveRight ) {
      console.log( "right" );
      //this.object.translateX( actualMoveSpeed );
    }
  };


  return Controls;
} );
