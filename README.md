create-keyframe [![npm version](https://badge.fury.io/js/create-keyframe.svg)](http://badge.fury.io/js/create-keyframe) [![Build Status](https://travis-ci.org/chinedufn/create-keyframe.svg?branch=master)](https://travis-ci.org/chinedufn/create-keyframe)
===============

> Create css keyframes

Inspired by this [gist](https://gist.github.com/bendrucker/c8c6ab6158370b316902#keyframes)

## To Install

```
$ npm install --save create-keyframe
```

## Usage

```js
var createKeyframe = require('create-keyframe')

var fadeOutColor = createKeyframe({
  0: {
    color: 'rgba(0, 0, 0, 1)'
  },
  50: {
    color: 'rgba(0, 0, 0, .25)',
    fontSize: '24px',
    'background-color': 'black'
  },
  100: {
    color: 'rgba(0, 0, 0, 0)'
  }
})

console.log(fadeOutColor)
// {name: 'cih3lymsf0000wly8uizhbo6d', css: '@keyframes cih3lymsf0000wly8uizhbo6d {...}'}
```

JavaScript animations with CSS performance using `insert-css`

```js
var createKeyframe = require('create-keyframe')
var insertCSS = require('insert-css')
var h = require('virtual-dom/h')

var fadeOutColor = createKeyframe({/* keyframe object */})
insertCSS(fadeOutColor.css)

h('label', {
  style: {
    animation: fadeOutColor.name + ' 1s'
  }
}, 'Black to invisible text')
```

## API

#### `createKeyframe(keyframeObject[, identifier])` -> `object`

##### keyframeObject

*Required*  
Type: `object`

An object representation of a keyframe list

##### identifier

Type: `string`

A keyframe identifier. `create-keyframe` will generate a [cuid](https://github.com/ericelliott/cuid) if no `identifier` is specified

## See Also

- [@keyframes on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)
- [insert-css](https://github.com/substack/insert-css)
- [insert-styles](https://github.com/bendrucker/insert-styles)

## License

MIT
