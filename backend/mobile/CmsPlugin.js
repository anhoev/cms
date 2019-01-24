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

  static getAllPlugin() {
    const dirPath = path.join(__dirname, paths);
    const dirContent = fs.readdirSync(dirPath, { withFileTypes: true })
                         .filter(item => fs.statSync(path.join(dirPath, item)).isDirectory());
    return dirContent;
  }

  constructor(pluginPath, pluginName, resolveUrlPath) {
    //this.pluginPath = path.join(name);
    this.pluginPath = pluginPath;
    this.pluginName = pluginName ? pluginName : path.basename(pluginPath);
    if (resolveUrlPath) {
      this.resolveUrlPath = resolveUrlPath;
    }
    this.onEachRead = this.onEachRead.bind(this);
  }

  resolveUrlPath(internalPath) {
    const pluginsFolderPath = path.join(path.dirname(this.pluginPath), '../');
    return path.relative(pluginsFolderPath, internalPath);
  };

  onEachRead(item) {
    item.url = this.resolveUrlPath(item.path);
    item.path = this.convertFilePathToInternalPath(item.path);
    item.pluginName = this.pluginName;
  }

  convertFilePathToInternalPath(_filePath) {
    return path.relative(this.pluginPath, _filePath);
  }

  convertInternalPathToFilePath(internalPath) {
    return path.join(this.pluginPath, internalPath);
  }

  loadDirTree(internalPath = '') {
    const dirPath = this.convertInternalPathToFilePath(internalPath);
    const tree = dirTree(dirPath, {
      exclude: [{ test: (filePath) => /^\./.test(path.basename(filePath)) }]
    }, this.onEachRead, this.onEachRead);
    return tree;
  }

  loadModules(internalPath) {
    const pathToModules = this.convertInternalPathToFilePath(internalPath);
    if (!fileHelper.existsSync(pathToModules)) {
      return [];
    }
    const dir = fileHelper.readDir(pathToModules);
    const pathToMap = dir
      .filter(item => {
        // remove all item which is not file
        const itemPluginPath = path.join(internalPath, item);
        return fs.statSync(this.convertInternalPathToFilePath(itemPluginPath)).isFile();
      })
      .map(item => {
        const name = item.split('.');
        name.pop();
        const modulePath = path.join(this.pluginPath, internalPath, item);
        return {
          name: item,
          module: path.basename(item),
          url: this.resolveUrlPath(modulePath)
        };
      });
    return pathToMap;
  }

  addUnpkgModules(name, type = 'modules') {
    return new Promise((resolve, reject) => {
      axios.get(`https://unpkg.com/${name}`)
           .then(response => {
             let moduleDirectory = this.convertInternalPathToFilePath(type);
             fileHelper.addNew(path.join(moduleDirectory, `${name}.js`), response.data);
             resolve();
           })
           .catch(err => {
             reject(err);
           });
    });
  }

  removeFile(_path) {
    fileHelper.delete(this.convertInternalPathToFilePath(_path));
  }

  renameFile(oldPath, newName) {
    fileHelper.rename(this.convertInternalPathToFilePath(oldPath), newName);
  }

  copyFile(oldPath, newPath, options = { type: 'copy' }) {
    fileHelper.copyFile(this.convertInternalPathToFilePath(oldPath), this.convertInternalPathToFilePath(newPath), options);
  }

  exportModel(name, content, collection, internalFilePath) {
    const writePath = path.join(internalFilePath, `/${name}.${collection}.json`);
    fileHelper.addNew(this.convertInternalPathToFilePath(writePath), JSON.stringify(content));
  }

  async importModel(collection, filePath, replace = false) {
    const content = fileHelper.readFile(this.convertInternalPathToFilePath(filePath), 'utf-8');
    if (replace) {
      const document = JSON.parse(content);
      const { _id, ...other } = document;
      return await cms.getModel(collection).findOneAndUpdate({ _id: _id }, other);
    }
    return await cms.getModel(collection).create(JSON.parse(content));
  }

  addNewFile(internalPath, content, type) {
    fileHelper.addNew(this.convertInternalPathToFilePath(internalPath), content, type);
  }
}

module.exports = CmsPlugin;
