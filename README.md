create-keyframe [![npm version](https://badge.fury.io/js/create-keyframe.svg)](http://badge.fury.io/js/create-keyframe) [![Build Status](https://travis-ci.org/chinedufn/create-keyframe.svg?branch=master)](https://travis-ci.org/chinedufn/create-keyframe)
===============

> Create css keyframes

## To Install

```
$ npm install --save create-keyframe
```

## Usage

```js
var createKeyframe = require('create-keyframe')

var fadeOutColor = createKeyframe('fade-out-black-text', {
  0: {
    color: 'rgba(0, 0, 0, 1)'
  },
  50: {
    color: 'rgba(0, 0, 0, .25)'
  },
  100: {
    color: 'rgba(0, 0, 0, 0)'
  }
})

console.log(fadeOutColor)
// {name: 'fade-out-black-color', css: '@keyframes fade-out-black-text {...}'}
```

JavaScript animations with CSS performance using `insert-css`

```js
var createKeyframe = require('create-keyframe')
var insertCSS = require('insert-css')
var h = require('virtual-dom/h')

var fadeOutColor = createKeyframe({/* keyframe object */})
insertCSS(fadeOutColor.css)

h('label', {
  animation: fadeOutColor.name + ' 1s'
}, 'Black to invisible text')
```

## License

MIT
