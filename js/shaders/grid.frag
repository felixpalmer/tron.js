#define groundColor vec3(0.0, 0.0, 0.07)
#define lineColor vec3(0.18, 0.18, 0.25)

varying vec3 vPosition;

void addGrid( inout vec3 color, const float spacing, const float sharpness) {
  float grid = max( cos( spacing * vPosition.x  ), cos( spacing * vPosition.y ) );
  grid = clamp( grid, 0.0, 1.0 );
  grid = pow( grid, sharpness );
  if ( grid < 0.8 ) {
    return;
  }
  color = mix( color, lineColor, grid );
}

void main() {
  vec3 color = groundColor;
  addGrid( color, 1.0, 50.0 );
  addGrid( color, 10.0, 100.0 );

  gl_FragColor = vec4( color, 1.0 );
}
