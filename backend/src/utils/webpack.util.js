const LibConfig = require('../lib.config');
const { VueLoaderPlugin } = require('vue-loader')
const path = require('path')

const externals = {
  'cms': 'cms',
  'MonacoEditor': 'MonacoEditor',
  'json-fn': 'jsonFn'
}
function getWebpackConfig(pluginsName, pluginsFile, _path) {
  const entry = {}
  entry[pluginsFile.slice(0, -4)] = _path
  return {
    entry: entry,
    output: {
      filename: `./plugins/${pluginsName}/dist/${pluginsFile.slice(0, -4)}`
    },
    module: {
      rules: [
        { test: /\.vue$/, loader: "vue-loader" }
      ]
    },
    plugins: [
      new VueLoaderPlugin()
    ],
    externals: externals
  }
}

module.exports.getWebpackConfig = getWebpackConfig;