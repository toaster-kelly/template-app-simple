#Simple frameworkless ES6 visual development template

_Setup adapted from [wbkd](https://github.com/wbkd/yet-another-webpack-es6-starterkit)'s great setup._

## Features
- Frameworkless but with `zepto` and `lodash` as required library dependencies
- Simple webpack build setup for development and production
- ES6 transpiling with Babel
- Simple prototypal inheritance
- Base object for common variables, trickling, and hierarchy management
- Basic SCSS scaffold, including normalize and critical CSS
- Example modules for new children, matrix transforms, THREE.js, full-page shaders (THREE.js), and 2D canvas.

## Install and usage

Ensure you've got [node/npm](https://nodejs.org/en/) installed.

####1.
```
npm install
```

####2. 
```
npm run dev
```

####3.
When ready for production
```
npm run build
```
Then you can put the `/dist` directory where you need it