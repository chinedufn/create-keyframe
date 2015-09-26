var test = require('tape')

var createKF = require('../')

var fadeInCSS = '' +
  '@keyframes fade-in {' +
  '0% {color:rgba(0, 0, 0, 0)}' +
  '100% {color:rgba(0, 0, 0, 1)}' +
  '}'

test('create keyframe', function (t) {
  var keyframe = {
    0: {
      color: 'rgba(0, 0, 0, 0)'
    },
    100: {
      color: 'rgba(0, 0, 0, 1)'
    }
  }

  var keyframeName = 'fade-in'
  var fadeIn = createKF(keyframeName, keyframe)

  t.equal(fadeIn.name, keyframeName)
  t.equal(fadeIn.css, fadeInCSS)
  t.end()
})
