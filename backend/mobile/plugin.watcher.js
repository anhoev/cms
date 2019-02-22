const FileHelper = require('./files.helper');

const fs = require('fs');
const path = require('path');
const chokidar = require('chokidar');
const compileVue = require('./compiles');
const Plugin = require('./CmsPlugin');

const { compile } = compileVue;

module.exports = cms => {
  chokidar.watch(path.join(__dirname, 'plugins'), { ignored: /(^|[\/\\])\../, ignoreInitial: true })
    .on('change', (_path) => {
      if (!/\/dist\//.test(_path)) {
        // not in dist, do the compile
        const ext = path.extname(_path);
        if (ext === '.vue') {
          compile(_path).then((content) => {
            const fileName = path.basename(_path);
            const destPath = path.join(_path, '../dist', fileName);
            FileHelper.addNew(destPath, content);
            const componentName = path.parse(fileName).name;
            const staticPath = Plugin.convertFilePathToInternalPathStatic(destPath, '');
            cms.io.to(`pluginSubscription${componentName}`).emit(`changePlugin${componentName}`, {
              type: 'change',
              path: path.join('plugins', staticPath),
              component: componentName
            });
          });
        }
      }
    })
    .on('add', (_path) => {
      if (!/\/dist\//.test(_path)) {
        // not in dist, do the compile
        const ext = path.extname(_path);
        if (ext === '.vue') {
          const fileName = path.basename(_path);
          const destPath = path.join(_path, '../dist', fileName);
          compile(_path).then((content) => {
            FileHelper.addNew(destPath, content);
          });
        }
      }
    });
};
