// Configure Require.js
var require = {
  // Default load path for js files
  baseUrl: 'js/app',
  shim: {
    // --- Use shim to mix together all THREE.js subcomponents
    'threeCore': { exports: 'THREE' },
    'TrackballControls': { deps: ['threeCore'], exports: 'THREE' },
    'CopyShader': { deps: ['threeCore'], exports: 'THREE' },
    'EdgeShader': { deps: ['threeCore'], exports: 'THREE' },
    'TriangleBlurShader': { deps: ['threeCore'], exports: 'THREE' },
    'EffectComposer': { deps: ['threeCore'], exports: 'THREE' },
    'MaskPass': { deps: ['threeCore'], exports: 'THREE' },
    'RenderPass': { deps: ['threeCore'], exports: 'THREE' },
    'SavePass': { deps: ['threeCore'], exports: 'THREE' },
    'ShaderPass': { deps: ['threeCore'], exports: 'THREE' },
    // --- end THREE sub-components
    'detector': { exports: 'Detector' },
    'stats': { exports: 'Stats' }
  },
  // Third party code lives in js/lib
  paths: {
    // --- start THREE sub-components
    three: '../lib/three',
    threeCore: '../lib/three.min',
    TrackballControls: '../lib/controls/TrackballControls',
    CopyShader: '../lib/shaders/CopyShader',
    EdgeShader: '../lib/shaders/EdgeShader',
    TriangleBlurShader: '../lib/shaders/TriangleBlurShader',
    EffectComposer: '../lib/postprocessing/EffectComposer',
    MaskPass: '../lib/postprocessing/MaskPass',
    RenderPass: '../lib/postprocessing/RenderPass',
    SavePass: '../lib/postprocessing/SavePass',
    ShaderPass: '../lib/postprocessing/ShaderPass',
    // --- end THREE sub-components
    detector: '../lib/Detector',
    stats: '../lib/stats.min',
    // Require.js plugins
    text: '../lib/text',
    shader: '../lib/shader',
    // Where to look for shader files
    shaders: '../shaders'
  }
};
