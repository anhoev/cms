const path = require('path');
const dirTree = require('directory-tree');
const fileHelper = require('./files.helper');
const axios = require('axios').default;
const cms = require('../src/cms');
const fs = require('fs');
const _ = require('lodash');

class CmsPlugin {

  static initAllPlugin(paths) {
    const dirPath = path.join(__dirname, paths);
    const dirContent = fs.readdirSync(dirPath, { withFileTypes: true })
                         .filter(item => fs.statSync(path.join(dirPath, item)).isDirectory());
    return dirContent.reduce((acc, item) => Object.assign(acc, { [item]: new CmsPlugin(item) }), {});
    // return {
    //   testPlugin: new ClassPluginTest('test-plugin'),
    //   corePlugin: new ClassPluginTest('core-plugin')
    // };
  }

  constructor(name) {
    this.pluginPath = path.join(name);
    this.name = name;
    this.basePath = path.join(__dirname, './plugins');
    this.onEachRead = this.onEachRead.bind(this);
  }

  onEachRead(item) {
    item.url = this.pluginPathToUrl(item.path);
    item.path = this.filePathToPluginPath(item.path);
    item.pluginName = this.name;
  }

  pluginPathToUrl(_path) {
    return path.relative(this.basePath, _path);
  }

  filePathToPluginPath(_filePath) {
    return path.relative(path.join(this.basePath, this.pluginPath), _filePath);
  }

  resolvePluginPathToFilePath(_path) {
    return path.join(this.basePath, this.pluginPath, _path);
  }

  loadDirTree(_path = '') {
    _path = this.resolvePluginPathToFilePath(_path);
    const tree = dirTree(_path, {
      exclude: [{ test: (filePath) => /^\./.test(path.basename(filePath)) }]
    }, this.onEachRead, this.onEachRead);
    return tree;
  }

  loadModules(_path) {
    const pathToModules = this.resolvePluginPathToFilePath(_path);
    if (!fileHelper.existsSync(pathToModules)) {
      return [];
    }
    const dir = fileHelper.readDir(pathToModules);
    const pathToMap = dir
      .filter(item => {
        // remove all item which is not file
        const itemPluginPath = path.join(_path, item);
        return fs.statSync(this.resolvePluginPathToFilePath(itemPluginPath)).isFile();
      })
      .map(item => {
        const name = item.split('.');
        name.pop();
        const modulePath = path.join(this.pluginPath, _path, item);
        return {
          name: item,
          module: path.basename(item),
          url: this.pluginPathToUrl(modulePath)
        };
      });
    return pathToMap;
  }

  addUnpkgModules(name, type = 'modules') {
    return new Promise((resolve, reject) => {
      axios.get(`https://unpkg.com/${name}`)
           .then(response => {
             let moduleDirectory = this.resolvePluginPathToFilePath(type);
             fileHelper.addNew(path.join(moduleDirectory, `${name}.js`), response.data);
             resolve();
           })
           .catch(err => {
             reject(err);
           });
    });
  }

  removeFile(_path) {
    fileHelper.delete(this.resolvePluginPathToFilePath(_path));
  }

  renameFile(oldPath, newName) {
    fileHelper.rename(this.resolvePluginPathToFilePath(oldPath), newName);
  }

  copyFile(oldPath, newPath, options = { type: 'copy' }) {
    fileHelper.copyFile(this.resolvePluginPathToFilePath(oldPath), this.resolvePluginPathToFilePath(newPath), options);
  }

  exportModel(name, content, collection, filePath) {
    const writePath = path.join(filePath, `/${name}.${collection}.json`);
    fileHelper.addNew(this.resolvePluginPathToFilePath(writePath), JSON.stringify(content));
  }

  importModel(collection, filePath) {
    return new Promise((resolve, reject) => {
      const content = fileHelper.readFile(this.resolvePluginPathToFilePath(filePath), 'utf-8');
      cms.getModel(collection).create(JSON.parse(content))
         .then(res => {
           resolve(res);
         })
         .catch(err => {
           reject(err);
         });
    });
  }

  addNewFile(_path, content, type) {
    fileHelper.addNew(this.resolvePluginPathToFilePath(_path), content, type);
  }
}

module.exports = CmsPlugin;
