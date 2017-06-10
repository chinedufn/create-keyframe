var test = require('tape')

var createKF = require('../')

var fadeInCSS = '' +
  '@keyframes fade-in {' +
  '0% {color:rgba(0, 0, 0, 0);}' +
  '50% {color:rgba(0, 0, 0, .5);font-size:15px;}' +
  '100% {color:rgba(0, 0, 0, 1);}' +
  '}'

test('create keyframe', function (t) {
  var keyframe = {
    0: {
      color: 'rgba(0, 0, 0, 0)'
    },
    50: {
      color: 'rgba(0, 0, 0, .5)',
      'font-size': '15px'
    },
    100: {
      color: 'rgba(0, 0, 0, 1)'
    }
  }

  var keyframeName = 'fade-in'
  var fadeIn = createKF(keyframe, keyframeName)
  // Auto generated keyframe name
  var fadeInCUID = createKF(keyframe)

  t.equal(fadeIn.name, keyframeName)
  t.equal(fadeIn.css, fadeInCSS)
  t.ok(fadeInCUID.name)
  t.end()
})

test('Camelcase properties', function (t) {
  var keyframe = {
    0: {
      color: 'rgba(0, 0, 0, 0)'
    },
    50: {
      color: 'rgba(0, 0, 0, .5)',
      fontSize: '15px'
    },
    100: {
      color: 'rgba(0, 0, 0, 1)'
    }
  }

  var keyframeName = 'fade-in'
  var fadeIn = createKF(keyframe, keyframeName)
  // Auto generated keyframe name
  var fadeInCUID = createKF(keyframe)

  t.equal(fadeIn.name, keyframeName)
  t.equal(fadeIn.css, fadeInCSS)
  t.ok(fadeInCUID.name)
  t.end()
})
