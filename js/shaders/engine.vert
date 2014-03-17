uniform float uTime;

void main() {
  // Move engine side to sid
  vec3 morphedPosition = position + vec3( 0.0, 0.2 * sin( 10.0 * uTime ), 0.0 );

  // Morph engine further away from the bike
  float scale = max( abs( morphedPosition.y ) - 0.1, 0.0 ); // Linear morph at distances greater than 0.1
  scale = 50.0 * pow( scale, 3.0 ); // Transform linear morph into cubic morph
  morphedPosition -= vec3( scale, 0.0, 0.0 );

  gl_Position = projectionMatrix * modelViewMatrix * vec4( morphedPosition, 1.0 );
}
