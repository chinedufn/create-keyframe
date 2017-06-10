var cuid = require('cuid')
var decamelize = require('decamelize')

module.exports = CreateKeyframe

function CreateKeyframe (frames, name) {
  name = name || cuid()

  var css = '@keyframes ' + name + ' {'

  Object.keys(frames).map(function (keyframeKey) {
    css += keyframeKey + '% {'
    Object.keys(frames[keyframeKey]).map(function (propertyKey) {
      css += decamelize(propertyKey, '-') + ':' + frames[keyframeKey][propertyKey] + ';'
    })
    css += '}'
  })

  css += '}'

  var Keyframe = {}
  Keyframe.name = name
  Keyframe.css = css

  return Keyframe
}
