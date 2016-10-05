'use strict';

var AnimationFrame = require('animation-frame');
AnimationFrame.shim();

if ( module.hot ) { module.hot.accept(); }

if ( !global._babelPolyfill ) { require('babel-polyfill'); }

import '../styles/index.scss';

// Entry point
// require('./main.js');