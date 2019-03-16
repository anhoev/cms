const path = require('path');
const fs = require('fs');
const axios = require('axios').default;
const Plugin = require('./CmsPlugin');
const { compileContent } = require('./compiles');

module.exports = (cms) => {
  const allPlugins = Plugin.initAllPlugin();

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

  cms.io.on('connection', function (socket) {
    socket.on('loadPlugin', function (fn) {
      fn(Object.keys(allPlugins).map(item => getPlugin(item).loadDirTree()));
    });
    socket.on('save', function (pluginName, _path, content, fn) {
      try {
        getPlugin(pluginName).addNewFile(_path, content);
        fn();
      } catch (e) {
        fn(e.stack);
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
