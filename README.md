#Simple frameworkless ES6 visual development template

__The goal__: To have a dead simple app template to use for visual development prototypes. Pull a copy, start webpack, and start writing code. Not necessarily intended for production use. 

---

## Features
- Frameworkless but with `zepto` and `lodash` as required library dependencies
- ES6 transpiling with Babel
- Simple webpack build setup ( _adapted from [wbkd](https://github.com/wbkd/yet-another-webpack-es6-starterkit)'s great setup._ )
- Simple prototypal inheritance
- Base object for common variables, trickling, and hierarchy management
- Basic SCSS scaffold, including normalize and critical CSS
- Example modules for new children, matrix transforms, THREE.js, full-page shaders (THREE.js), and 2D canvas.

---

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

---

## Notes
- When using sylvester to do matrix math webpack throws some warning messages: `the request of a dependency is an expression`. This appears to caused by the module structure `node-sylvester` is written in. It doesn't prevent things from working, but it's likely leading to bigger bundle sizes. To be investigated...
