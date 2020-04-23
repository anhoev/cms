const fs = require('fs');
const _ = require('lodash');
const path = require('path');
const axios = require('axios').default;
const dirTree = require('directory-tree');
const fileHelper = require('../utils/files.util');
const cms = require('../cms');
const chalk = require('chalk');

class CmsPlugin {
  constructor(pluginPath, pluginName, resolveUrlPath, config) {
    //this.pluginPath = path.join(name);
    this.config = config;
    this.pluginPath = pluginPath;
    this.pluginName = pluginName ? pluginName : path.basename(pluginPath);
    if (resolveUrlPath) {
      this.resolveUrlPath = resolveUrlPath;
    }
    this.onEachRead = this.onEachRead.bind(this);
  }

  static async initAllPlugin(paths, plugins) {
    const dirPath = global.APP_CONFIG.pluginPath;
    const dirContent = fs.readdirSync(dirPath)
    .filter(item => fs.statSync(path.join(dirPath, item)).isDirectory());
    const result = dirContent.reduce((acc, item) => {
      if (!Array.isArray(plugins) || !plugins.length > 0 || plugins.find(i => i.name === item)) {
        return Object.assign(acc, { [item]: new CmsPlugin(path.join(dirPath, item), item, null, plugins.find(i => i.name === item)) });
      }
      return acc;
    }, {});

    if (global.APP_CONFIG.initData) {
      //todo error handling
      await this.initData(result).catch(e => e)
    }
    if (global.APP_CONFIG['force-init-data']) {
      await this.initData(result, true).catch(e => e)
    }

    return result;
    // return {
    //   testPlugin: new ClassPluginTest('test-plugin'),
    //   corePlugin: new ClassPluginTest('core-plugin')
    // };
  }

  static getAllPlugin() {
    const dirPath = path.join(global.APP_CONFIG.pluginPath);
    const dirContent = fs.readdirSync(dirPath)
      .filter(item => fs.statSync(path.join(dirPath, item)).isDirectory());
    return dirContent;
  }

  static convertInternalPathToFilePathStatic(internalPath, pluginName) {
    const pluginPath = path.join(global.APP_CONFIG.pluginPath, pluginName);
    return path.join(pluginPath, internalPath);
  }

  static convertFilePathToInternalPathStatic(_filePath, pluginName) {
    const pluginPath = path.join(global.APP_CONFIG.pluginPath, pluginName);
    return path.relative(pluginPath, _filePath);
  }

  static async initData(plugins, forceInit = false) {
    const buildFormCount = await cms.getModel('BuildForm').countDocuments({});

    console.log('Initialize database...')
    const data = { buildForms: [], collections: [] }
    const pluginNames = _.map(global.APP_CONFIG.plugins, plugin => plugin.name)
    // NOTE: load data collection name base on order of plugins in config files
    await Promise.all(pluginNames.map(async pluginName => {
      if (_.has(plugins, pluginName)) {
        const plugin = plugins[pluginName]

        const shouldUpdate = require('./cms-plugins-versioning');
        const _shouldUpdate = await shouldUpdate(plugin)
        forceInit = buildFormCount ? _shouldUpdate : forceInit
        if (buildFormCount && !forceInit) return;

        const jsonPath = path.join(plugin.pluginPath, 'json')
        if (fs.statSync(jsonPath).isDirectory()) {
          const directories = fs.readdirSync(jsonPath).filter(item => fs.statSync(path.join(jsonPath, item)).isDirectory());

          if (directories.includes('BuildForm')) {
            const fileNames = fs.readdirSync(path.join(jsonPath, 'BuildForm')).filter(item => item.endsWith('.json'))
            _.each(fileNames, file => {
              const filePath = path.join(jsonPath, 'BuildForm', file)
              const indexOfFile = _.findIndex(data.buildForms, bf => bf.endsWith(file))
              if (indexOfFile !== -1) {
                console.log(`Using ${chalk.yellow(filePath)} instead of ${chalk.yellow(data.buildForms[indexOfFile])}`)
                data.buildForms.splice(indexOfFile, 1)
              }
              data.buildForms.push(filePath)
            })
          }

          for (const collection of _.pull(directories, 'BuildForm')) {
            const fileNames = fs.readdirSync(path.join(jsonPath, collection));
            _.each(fileNames, file => {
              const filePath = path.join(jsonPath, collection, file)
              const indexOfFile = _.findIndex(data.collections, bf => bf.endsWith(file))
              if (indexOfFile !== -1) {
                console.log(`Using ${chalk.yellow(filePath)} instead of ${ chalk.yellow(data.collections[indexOfFile])}`)
                data.collections.splice(indexOfFile, 1)
              }
              data.collections.push(filePath)
            })
          }
        }
      }
    }))

    await Promise.all(data.buildForms.map(async path => {
      try {
        let buildform = JSON.parse(fs.readFileSync(path, 'utf8'));
        await new Promise(resolve => {
          cms.on(`model-created:${buildform.name}`, resolve);

          if (forceInit && buildform._id) {
            cms.getModel('BuildForm').remove({ _id: buildform._id }).then()
          }
          cms.getModel('BuildForm').create(buildform).then();
        });
      } catch (e) {
        console.log(e)
      }
    }));
    await Promise.all(data.collections.map(async _path => {
      const collection = path.basename(path.dirname(_path));
      try {
        const document = JSON.parse(fs.readFileSync(_path, 'utf8'));

        if (forceInit && document._id) {
          await cms.getModel(collection).updateOne({ _id: document._id },
            { $set: {..._.omit(document, '_id')}, $setOnInsert: { _id: document._id }},
            { upsert: true })
        } else {
          await cms.getModel(collection).create(document)
        }
      } catch (e) {
        console.warn(e, collection);
      }
    }));
    if (buildFormCount) {
      if (forceInit) {
        console.log('force init data')
      } else console.log('Init database cancelled, data exists')
    } else {
      cms.on('all-plugins-loaded', () => {
        cms.emit('initData-complete')
      })
      console.log('Init database completed.')
    }
  }

  getI18n() {
    const manifestPath = path.join(this.pluginPath, 'manifest.js');

    if (fs.existsSync(manifestPath) && fs.statSync(manifestPath).isFile()) {
      const {files} = require(manifestPath);
      const localeFile = files.filter(file => {
        return file.loader && file.loader.type === 'i18n';
      });
      let result = {};
      localeFile.forEach(file => {
        result = _.merge(result, require(path.resolve(this.pluginPath, file.path)));
      });
      return result;
    }
    return {};
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
    return CmsPlugin.convertFilePathToInternalPathStatic(_filePath, this.pluginName);
  }

  convertInternalPathToFilePath(internalPath) {
    return CmsPlugin.convertInternalPathToFilePathStatic(internalPath, this.pluginName);
  }

  loadDirTree(internalPath = '', options, onEachFile = this.onEachRead) {
    const dirPath = this.convertInternalPathToFilePath(internalPath);
    const tree = dirTree(dirPath, {
      exclude: [{test: (filePath) => /^\.|node_modules/.test(path.basename(filePath))}],
      ...options
    }, onEachFile, onEachFile);
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

  copyFile(oldPath, newPath, options = {type: 'copy', toPlugin: ''}) {
    fileHelper.copyFile(this.convertInternalPathToFilePath(oldPath), CmsPlugin.convertInternalPathToFilePathStatic(newPath, options.toPlugin), options);
  }

  exportModel(name, content, collection, internalFilePath) {
    const writePath = path.join(internalFilePath, `/${name}.${collection}.json`);
    fileHelper.addNew(this.convertInternalPathToFilePath(writePath), JSON.stringify(content, null, 2));
  }

  async importModel(collection, filePath, replace = false) {
    const content = fileHelper.readFile(this.convertInternalPathToFilePath(filePath), 'utf-8');
    if (replace) {
      const document = JSON.parse(content);
      const {_id, ...other} = document;
      return await cms.getModel(collection).findOneAndUpdate({_id: _id}, document, {upsert: true, new: true});
    }
    return await cms.getModel(collection).create(JSON.parse(content));
  }

  addNewFile(internalPath, content, type) {
    fileHelper.addNew(this.convertInternalPathToFilePath(internalPath), content, type);
  }

  reexportModel(_path, fileName) {
    const filePath = this.convertInternalPathToFilePath(_path);
    const directoryPath = path.dirname(_path);
    const content = fileHelper.readFile(filePath);
    const {_id} = JSON.parse(content);
    const [documentName, collectionName] = fileName.split('.');
    const Model = cms.getModel(collectionName);
    return new Promise((resolve, reject) => {
      Model.findById(_id)
        .then(item => {
          if (item) {
            this.exportModel(documentName, item.toObject(), collectionName, directoryPath);
            resolve();
          } else {
            reject('non exist in db');
          }
        })
        .catch(err => {
          reject(err);
        });
    });

  }

}

module.exports = CmsPlugin;
