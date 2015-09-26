module.exports = CreateKeyframe

function CreateKeyframe (name, frames) {
  var css = '@keyframes ' + name + ' {'

  Object.keys(frames).map(function (key) {
    css += key + '% ' + JSON.stringify(frames[key])
  })

  css += '}'

  var Keyframe = {}
  Keyframe.name = name
  Keyframe.css = css.replace(/["]+/g, '')

  return Keyframe
}
