var cuid = require('cuid')

module.exports = CreateKeyframe

function CreateKeyframe (frames, name) {
  name = name || cuid()

  var css = '@keyframes ' + name + ' {'

  Object.keys(frames).map(function (keyframeKey) {
    css += keyframeKey + '% {'
    Object.keys(frames[keyframeKey]).map(function (propertyKey) {
      css += propertyKey + ':' + frames[keyframeKey][propertyKey] + ';'
    })
    css += '}'
  })

  css += '}'

  var Keyframe = {}
  Keyframe.name = name
  Keyframe.css = css

  return Keyframe
}
