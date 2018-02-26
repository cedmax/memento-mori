var cssModules = require('@horacehylee/react-app-rewire-css-modules')

module.exports = function override (config, env) {
  return cssModules(config)
}
