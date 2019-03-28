const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const LibConfig = require('../lib.config');
const Plugin = require('./cms.plugin');
const FileHelper = require('../utils/files.util');
const compileVue = require('../utils/compiles.util');

const { compile } = compileVue;

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

module.exports = cms => {
  chokidar.watch(LibConfig.BASE_PLUGIN, {
    ignored,
    ignoreInitial: true
  })
    .on('change', (_path) => {
      if (!distRegex.test(_path)) {
        // not in dist, do the compile
        const ext = path.extname(_path);
        if (ext === '.vue') {
          compile(_path)
            .then((content) => {
              const fileName = path.basename(_path);
              const pluginsFolder = getPluginFolder(_path);
              const destPath = path.join(pluginsFolder, 'dist', fileName);
              FileHelper.addNew(destPath, content);
              console.log(`compiled to: ${destPath}`);
              const componentName = path.parse(fileName).name;
              const staticPath = Plugin.convertFilePathToInternalPathStatic(destPath, '');
              cms.io.to(`pluginSubscription${componentName}`).emit(`changePlugin${componentName}`, {
                type: 'change',
                path: path.join('plugins', staticPath),
                component: componentName
              });
            }).catch(err => console.log(err));
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
          const destPath = path.join(pluginsFolder, 'dist', fileName);
          compile(_path)
            .then((content) => {
              console.log(`compiled to: ${destPath}`);
              FileHelper.addNew(destPath, content);
            })
            .catch((err) => {
              console.log(err);
            });
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
