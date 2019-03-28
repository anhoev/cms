const path = require('path');
const chokidar = require('chokidar');

const Plugin = require('./cms.plugin');
const FileHelper = require('../libs/utils/files.util');
const compileVue = require('../libs/utils/compiles.util');

const { compile } = compileVue;

function getPluginName(_path) {
  return path.relative(path.join(__dirname, '../../mobile', 'plugins'), _path).split(path.sep).shift();
}

function getPluginFolder(_path) {
  const pluginName = getPluginName(_path);
  return path.join(__dirname, '../../mobile', 'plugins', pluginName);
}

const distRegex = new RegExp(`${path.sep}dist${path.sep}`);

module.exports = cms => {
  chokidar.watch(path.join(__dirname, '../../mobile', 'plugins'), { ignored: [/node_modules/, /(^|[\/\\])\../], ignoreInitial: true })
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
