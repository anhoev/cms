const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');

const LibConfig = require('../lib.config');
const Plugin = require('./cms.plugin');
const FileHelper = require('../utils/files.util');

const getRollUpConfig = require('../utils/rollup.util');
const rollup = require('rollup');
const terser = require('terser');
const md5 = require('md5');

function getPluginName(_path) {
  return path.relative(LibConfig.BASE_PLUGIN, _path).split(path.sep).shift();
}

function getPluginFolder(_path) {
  const pluginName = getPluginName(_path);
  return path.join(LibConfig.BASE_PLUGIN, pluginName);
}

function checkMD5(_path) {
  _path = `${getPluginFolder(_path)}/dist/${path.basename(_path)}`;
  if (!fs.existsSync(_path)) return true;
  const data = fs.readFileSync(_path, 'utf-8');
  let lines = data.split('\n');
  const hash = lines[0];
  lines.splice(0, 1);
  const newData = lines.join('\n');
  if (md5(newData) === hash.slice(5)) return false;
  return true;
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

(function deleteUnusedFile() {
  const listFiles = [];
  function walkSync(dir) {
    if (fs.lstatSync(dir).isFile()) {
      if (!distRegex.test(dir) && path.extname(dir) === '.vue') {
        listFiles.push(path.basename(dir));
      }
    }
    if (!fs.lstatSync(dir).isDirectory()) return;
    fs.readdirSync(dir).map(f => walkSync(path.join(dir, f))); // `join("\n")`
  }
  walkSync(LibConfig.BASE_PLUGIN);
  const plugins = fs.readdirSync(LibConfig.BASE_PLUGIN);
  plugins.forEach(function (plugin) {
    if (fs.existsSync(`${LibConfig.BASE_PLUGIN}/${plugin}/dist`)) {
      const files = fs.readdirSync(`${LibConfig.BASE_PLUGIN}/${plugin}/dist`);
      for (let i = 0; i < files.length; i++) {
        if (!listFiles.includes(files[i])) {
          FileHelper.delete(`${LibConfig.BASE_PLUGIN}/${plugin}/dist/${files[i]}`);
        }
      }
    }
  })
})();

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
              /*cms.socket.to(`pluginSubscription${componentName}`).emit(`changePlugin${componentName}`, {
                type: 'change',
                path: path.join('plugins', staticPath),
                component: componentName
              });*/
            }).catch(err => console.log(err));
        }
      }
    })
    .on('add', (_path) => {
      if (!distRegex.test(_path)) {
        // if (!_path.includes('PosLoginView')) return;
        // not in dist, do the compile
        const ext = path.extname(_path);
        if (ext === '.vue' && checkMD5(_path)) {
          const fileName = path.basename(_path);
          const pluginsFolder = getPluginFolder(_path);
          const destPath = path.join(pluginsFolder, 'dist', `${fileName.slice(0, -3)}vue`);
          const rollUpConfig = getRollUpConfig(fileName, destPath, _path);
          rollup.rollup(rollUpConfig).then(async (buildBundle) => {
            const generated = await buildBundle.generate(rollUpConfig.output);
            let code = generated.output[0].code;
            const hash = md5(code);
            code = `//md5${hash}\n${code}`
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
