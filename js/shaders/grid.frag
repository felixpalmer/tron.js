#define groundColor vec3(0.0, 0.0, 0.02)
#define lineColor vec3(0.02, 0.02, 0.02)
#define glowColor vec3(0.33, 1.41, 10.0)

uniform float uTime;

varying vec3 vPosition;

void addGrid( inout vec3 color, const float spacing, const float sharpness, const bool addGlow) {
  float grid = max( cos( spacing * vPosition.x ), cos( spacing * vPosition.y ) );
  grid = clamp( grid, 0.0, 1.0 );
  grid = pow( grid, sharpness );
  if ( grid < 0.8 ) {
    return;
  }
  color = mix( color, lineColor, grid );

  if ( addGlow ) {
    // Add glow, moving over time
    float glow = cos( 0.03 * spacing * vPosition.x + 0.6 * spacing * vPosition.y + 6.0 * uTime );
    glow = clamp( glow, 0.0, 1.0 );
    grid = pow( grid, 10.0 * sharpness );
    if ( glow < 0.99 ) {
      return;
    }
    color = mix( color, glowColor, 0.1 * glow );
  }
}

void main() {
  vec3 color = groundColor;
  addGrid( color, 1.0, 50.0, true );
  addGrid( color, 10.0, 100.0, true );

  gl_FragColor = vec4( pow(color, vec3( 0.6 ) ), 1.0 );
}
