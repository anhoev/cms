const resolve = require('rollup-plugin-node-resolve');
const vuePlugin = require('rollup-plugin-vue');

module.exports = function (pluginFolder, fileName, destPath) {
  return {
    input: `${pluginFolder}/${fileName}`,
    output: {
      name: `${fileName.slice(0, -4)}`,
      file: destPath,
      format: 'amd'
    },
    plugins: [
      resolve(),
      vuePlugin()
    ],
    external: [ 'json-fn', 'cms', 'MonacoEditor' ]
  }
};