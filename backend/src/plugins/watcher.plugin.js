const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const LibConfig = require('../lib.config');
const Plugin = require('./cms.plugin');
const FileHelper = require('../utils/files.util');

const getRollUpConfig = require('../utils/rollup.util')
const rollup = require('rollup')
const terser = require('terser')

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
          const destPath = path.join(pluginsFolder, 'dist', `${fileName.slice(0, -3)}vue`);
          const rollUpConfig = getRollUpConfig(fileName, destPath, _path);
          rollup.rollup(rollUpConfig).then(async (buildBundle) => {
            const generated = await buildBundle.generate(rollUpConfig.output);
            let code = generated.output[0].code;
            const added = FileHelper.addNew(destPath, code)
            if (added) console.log(`Compiled to ${destPath}`)
              const componentName = path.parse(fileName).name;
              const staticPath = Plugin.convertFilePathToInternalPathStatic(destPath, '');
              cms.socket.to(`pluginSubscription${componentName}`).emit(`changePlugin${componentName}`, {
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
        if (!_path.includes('dialogNewPayment')) return;
        // not in dist, do the compile
        const ext = path.extname(_path);
        if (ext === '.vue') {
          const fileName = path.basename(_path);
          const pluginsFolder = getPluginFolder(_path);
          const destPath = path.join(pluginsFolder, 'dist', `${fileName.slice(0, -3)}vue`);
          const rollUpConfig = getRollUpConfig(fileName, destPath, _path);
          rollup.rollup(rollUpConfig).then(async (buildBundle) => {
            const generated = await buildBundle.generate(rollUpConfig.output);
            let code = generated.output[0].code;
            const added = FileHelper.addNew(destPath, code)
            if (added) console.log(`Compiled to ${destPath}`)
          }).catch(e => {
            console.log(e)
            // console.log('Error bundling file', fileName);
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
