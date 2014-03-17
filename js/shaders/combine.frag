uniform sampler2D tDiffuse;
uniform sampler2D tOriginal;

varying vec2 vUv;

void main() {
  vec4 effectColor = texture2D( tDiffuse, vUv );
  vec4 originalColor = texture2D( tOriginal, vUv );
  gl_FragColor = originalColor + 0.3 * effectColor;
}
