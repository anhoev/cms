const fs = require('fs');
const _ = require('lodash');

const axios = require('axios').default;
const Plugin = require('./cms.plugin');
const compileContent = require('../utils/compiles.util').compileContent;
const gitUtils = require('../utils/git.util');
module.exports = (cms) => {
  const allPlugins = Plugin.initAllPlugin('plugins', cms.config.plugins);
  cms.allPlugins = allPlugins;

  function compareContentWithDb(pluginName, path, name) {
    return new Promise((resolve => {
      const filePath = Plugin.convertInternalPathToFilePathStatic(path, pluginName);
      fs.readFile(filePath, 'utf8', (err, fileData) => {
        const collectionName = name.split('.')[1];
        fileData = JSON.parse(fileData);
        const { _id } = fileData;
        const Model = cms.getModel(collectionName);
        if (_.isEmpty(Model)) {
          return resolve(false);
        }
        const fileModelData = new Model(fileData);
        Model.findById(_id)
          .then(dbData => {
            if (!dbData) {
              return resolve(false);
            }
            const dbModelData = new Model(dbData);
            resolve(_.isEqual(dbModelData.toObject(), fileModelData.toObject()) || JSON.stringify(fileData) === JSON.stringify(dbData.toObject()));
          });
      });
    }));
  }

  async function compareAll(data, parent) {
    if (data.type === 'directory') {
      if (data.children.length === 0 && parent) {
        // remove blank folder
        parent.children = parent.children.filter(item => item !== data);
      }
      return await Promise.all(data.children.map(item => compareAll(item, data)));
    }
    if (data.type === 'file') {
      const isEqual = await compareContentWithDb(data.pluginName, data.path, data.name);
      if (!isEqual) {
        data.isDiffWithDb = true;
      }
    }
  }

  function findFileItem(directoryTree, plugin) {
    return directoryTree &&
      directoryTree
        .filter(item => fs.statSync(plugin.convertInternalPathToFilePath(item.path)).isFile())
        .map(item => {
          return {
            name: item.name.replace(item.extension, ''),
            content: fs.readFileSync(plugin.convertInternalPathToFilePath(item.path), 'utf-8')
          };
        });
  }

  function getPlugin(name) {
    return allPlugins[name];
  }

  cms.socket.on('connection', function (socket) {
    socket.on('loadPlugin', function (fn) {
      fn(Object.keys(allPlugins).map(item => getPlugin(item).loadDirTree()));
    });
    socket.on('loadImportableFile', function (name, fn) {
      const plugin = getPlugin(name);
      if (plugin) {
        const result = plugin.loadDirTree('json', { extensions: /\.json/ });
        compareAll(result).then(() => {
          fn(result);
        });
      }
    });
    socket.on('savePlugin', function (pluginName, _path, content, fn) {
      try {
        getPlugin(pluginName).addNewFile(_path, content);
        fn();
      } catch (e) {
        fn(e);
      }
    });
    // socket.on('compile', function (pluginName, _path, content, fn) {
    //   try {
    //     const writePath = path.join(path.dirname(_path), 'dist', path.basename(_path));
    //     getPlugin(pluginName).addNewFile(writePath, content);
    //     fn();
    //   } catch (e) {
    //     fn(e);
    //   }
    // });
    socket.on('loadDistPlugin', function (fn) {
      const result = Object
        .keys(allPlugins)
        .reduce((acc, item) => {
          const currentPlugin = allPlugins[item];
          const modules = currentPlugin.loadModules('modules');
          const components = currentPlugin.loadModules('components');
          const dist = currentPlugin.loadDirTree('dist');
          const plugins = findFileItem(dist ? dist.children : [], currentPlugin);
          return {
            plugins: [...acc.plugins, ...plugins],
            components: [...acc.components, ...components],
            modules: [...acc.modules, ...modules]
          };
        }, { plugins: [], modules: [], components: [] });
      fn(result);
    });
    socket.on('delete', function (pluginName, _path, fn) {
      try {
        getPlugin(pluginName).removeFile(_path);
        fn();
      } catch (e) {
        fn(Object.assign({}, e, { message: 'Cannot delete folder with files' }));
      }
    });
    socket.on('rename', function (pluginName, _path, newName, fn) {
      try {
        getPlugin(pluginName).renameFile(_path, newName);
        fn();
      } catch (e) {
        fn(e);
      }
    });
    socket.on('addNew', function (pluginName, fileName, type, fn) {
      try {
        getPlugin(pluginName).addNewFile(fileName, '', { type });
        fn();
      } catch (e) {
        fn(e);
      }
    });
    socket.on('loadModules', function (fn) {
      // TODO check if same module name then return with a message
      const pathToModules = 'modules';
      const modules = Object.keys(allPlugins).reduce((acc, key) => {
        const plugin = allPlugins[key];
        return [].concat(acc, plugin.loadModules(pathToModules));
      }, []);
      fn(modules);
    });
    socket.on('addModules', function (pluginName, name, fn) {
      getPlugin(pluginName)
        .addUnpkgModules(name, 'modules')
        .then(() => fn())
        .catch(fn);
    });
    socket.on('loadComponents', function (fn) {
      // TODO check if same component name then return with a message
      const pathToModules = 'components';
      const components = Object.keys(allPlugins).reduce((acc, key) => {
        const plugin = allPlugins[key];
        return [].concat(acc, plugin.loadModules(pathToModules));
      }, []);
      fn(components);
    });
    socket.on('addComponents', function (pluginName, name, fn) {
      getPlugin(pluginName)
        .addUnpkgModules(name, 'components')
        .then(() => fn())
        .catch(err => fn(err));
    });
    socket.on('copyFile', (pluginName, { path: _path, name, toPlugin }, fn) => {
      try {
        getPlugin(pluginName).copyFile(_path, name, { type: 'copy', toPlugin });
        fn();
      } catch (e) {
        fn(e);
      }
    });
    socket.on('moveFile', (pluginName, { path: _path, name, toPlugin }, fn) => {
      try {
        getPlugin(pluginName).copyFile(_path, name, { type: 'move', toPlugin });
        fn();
      } catch (e) {
        fn(e);
      }
    });
    socket.on('reexportModel', (item, fn) => {
      getPlugin(item.pluginName).reexportModel(item.path, item.name)
        .then(() => {
          fn();
        })
        .catch((e) => {
          fn(e);
        });
    });
    socket.on('exportModel', (name, content, collection, plugins, filePath, fn) => {
      try {
        getPlugin(plugins).exportModel(name, content, collection, filePath);
        fn();
      } catch (e) {
        fn(e);
      }
    });
    socket.on('importModel', (pluginName, collection, filePath, replace, fn) => {
      getPlugin(pluginName)
        .importModel(collection, filePath, replace)
        .then(res => fn(null, res))
        .catch(err => fn(err));
    });
    socket.on('compileContent', (contentIn, fn) => {
      compileContent(contentIn)
        .then((contentOut) => fn(null, contentOut))
        .catch(() => fn({ err: 'Compile error' }));
    });
    socket.on('getListPlugin', (fn) => {
      fn(null, Plugin.getAllPlugin());
    });
    socket.on('subscribeCollection', function (room) {
      socket.join(`collectionSubscription${room}`);
    });
    socket.on('subscribePluginChange', function (room) {
      socket.join(`pluginSubscription${room}`);
    });
    socket.on('unsubscribePluginChange', function (room) {
      socket.leave(`pluginSubscription${room}`);
    });
    socket.on('gitStatus', (pluginName, fn) => {
      const plugin = getPlugin(pluginName);
      gitUtils.gitStatus(plugin.pluginPath).then(fn, fn);
    });
    socket.on('resetLocalHard', (pluginName, fn) => {
      const plugin = getPlugin(pluginName);
      gitUtils.gitResetHard(plugin.pluginPath).then(fn, fn);
    });
    socket.on('pullPlugin', (pluginName, fn) => {
      const plugin = getPlugin(pluginName);
      gitUtils.pullRepository(plugin.pluginPath, plugin.config.branch).then(fn, fn);
    });
    socket.on('createCommitAndPush', (commitContent, pluginName, newBranch, fn) => {
      const plugin = getPlugin(pluginName);
      gitUtils.createACommit(commitContent, plugin.pluginPath, newBranch).then(fn).catch(e => fn(e.message));
    });
    socket.on('checkOutBranch', (pluginName, fn) => {
      const plugin = getPlugin(pluginName);
      gitUtils.checkOutBranch(plugin.pluginPath, plugin.branch).then(res => fn(null, res)).catch(fn);
    });
  });
  cms.app.get('/package', function (req, res) {
    axios.get(`https://www.npmjs.com/search/suggestions?q=${req.query.q}`)
      .then(response => {
        res.status(200).json(response.data);
      })
      .catch(err => {
        res.status(400).json(err.response.data);
      });
  });
};
