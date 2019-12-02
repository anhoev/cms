const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const webpack = require('webpack')

const LibConfig = require('../lib.config');
const Plugin = require('./cms.plugin');
const FileHelper = require('../utils/files.util');
const compileVue = require('../utils/compiles.util');
const { getWebpackConfig } = require('../utils/webpack.util')

function getPluginName(_path) {
  return path.relative(LibConfig.BASE_PLUGIN, _path).split(path.sep).shift();
}

function getPluginFolder(_path) {
  const pluginName = getPluginName(_path);
  return path.join(LibConfig.BASE_PLUGIN, pluginName);
}

const distRegex = new RegExp(`${path.sep}dist${path.sep}`);

function ignored(_path, stats) {
  if (/(^|[\/\\])\../.test(_path) || _path.includes('node_modules')) {
    return true;
  }
  if (!stats && fs.existsSync(_path)) {
    stats = fs.statSync(_path);
  }
  if (stats && stats.isDirectory() && _path.includes('dist')) {
    return true;
  }
  if (!stats) {
    return true;
  }
  if (stats && stats.isFile() && path.extname(_path) !== '.vue') {
    return true;
  }
}

const watcher =  cms => {
  chokidar.watch(LibConfig.BASE_PLUGIN, {
    ignored,
    //ignoreInitial: true
  })
    .on('change', (_path) => {
      if (!distRegex.test(_path)) {
        // not in dist, do the compile
        const ext = path.extname(_path);
        if (ext === '.vue') {
          const fileName = path.basename(_path);
          const pluginsFolder = getPluginFolder(_path);
          const pluginsName = getPluginName(_path);
          const destPath = path.join(pluginsFolder, 'dist', fileName);
          const webpackConfig = getWebpackConfig(pluginsName, fileName, _path);
          webpack(webpackConfig, function (err, stats) {
            if (err || stats.hasErrors()) {
              console.log('Error on bundling file ' + fileName)
              return
            }
            console.log(`Compiled to : ${destPath}`);
            const componentName = path.parse(fileName).name;
            const staticPath = Plugin.convertFilePathToInternalPathStatic(destPath, '');
            cms.socket.to(`pluginSubscription${componentName}`).emit(`changePlugin${componentName}`, {
              type: 'change',
              path: path.join('plugins', staticPath),
              component: componentName
            });
          })
        }
      }
    })
    .on('add', (_path) => {
      if (!distRegex.test(_path)) {
        // not in dist, do the compile
        const ext = path.extname(_path);
        if (ext === '.vue') {
          const fileName = path.basename(_path);
          const pluginsFolder = getPluginFolder(_path);
          const pluginsName = getPluginName(_path);
          const destPath = path.join(pluginsFolder, 'dist', fileName);
          const webpackConfig = getWebpackConfig(pluginsName, fileName, _path)
          webpack(webpackConfig, function (err, stats) {
            if (err || stats.hasErrors()) {
              console.log('Error on bundling file ' + fileName)
              return
            }
            console.log(`Compiled to : ${destPath}`);
          })
        }
      }
    })
    .on('unlink', async _path => {
      if (!distRegex.test(_path)) {
        const ext = path.extname(_path);
        if (ext === '.vue') {
          const fileName = path.basename(_path);
          const pluginsFolder = getPluginFolder(_path);
          const destPath = path.join(pluginsFolder, 'dist', fileName);
          FileHelper.delete(destPath);
          if (cms.getModel('PluginFile')) {
            const pluginName = getPluginName(_path);
            const internalPathInPlugin = path.relative(pluginsFolder, _path);
            await cms.getModel('PluginFile').findOneAndRemove({ path: internalPathInPlugin, plugin: pluginName });
          }
          console.log(`delete compiled file: ${destPath}`);
        }
      }
    });
};

module.exports = watcher;
