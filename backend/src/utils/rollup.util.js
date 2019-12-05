const resolve = require('rollup-plugin-node-resolve');
const vuePlugin = require('rollup-plugin-vue');
const json = require('rollup-plugin-json');
const babel = require('rollup-plugin-babel');
const scss = require('rollup-plugin-scss');
const commonjs = require('rollup-plugin-commonjs');
const plugin = require('./plugins');

module.exports = function (fileName, destPath, filePath) {
  return {
    input: `${filePath}`,
    output: {
      name: `${fileName.slice(0, -4)}`,
      file: destPath,
      format: 'cjs'
    },
    plugins: [
      resolve({
        extensions: ['.mjs', '.js', '.vue', '.json']
      }),
      scss(),
      commonjs(),
      babel({
        babelrc: false,
        include: 'node_modules/**',
        presets: ["vca-jsx", "@vue/app"],
        runtimeHelpers: true
      }),
      plugin(),
      json(),
      vuePlugin({
        needMap: false
      }),
    ],
    external: [ 'json-fn', 'cms', 'MonacoEditor', 'lodash', 'dayjs', 'dayjs/plugin/relativeTime', 'pos-vue-framework', 'vue', 'vue-the-mask' ]
  }
};