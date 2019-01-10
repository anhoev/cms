const dirTree = require('directory-tree');
const path = require('path');
const fs = require('fs');
const axios = require('axios').default;

function findFileItem(directoryTree) {
  return directoryTree.children.map(item => {
    return {
      name: item.name.replace(item.extension, ''),
      content: fs.readFileSync(item.path, 'utf-8')
    };
  });
}

function isFileWithExtension(name, extensions) {
  if (name.length < extensions.length) {
    return false;
  }
  return name.indexOf(`.${extensions}`) === name.length - extensions.length - 1;
}

function onEachRead(item) {
  item.path = path.relative(path.join(__dirname, './public'), item.path);
}

module.exports = (cms) => {
  cms.io.on('connection', function (socket) {
    socket.on('loadPlugin', function (fn) {
      const tree = dirTree(path.join(__dirname, './public/plugins'), {}, onEachRead, onEachRead);
      fn(tree);
    });
    socket.on('save', function (url, content, fn) {
      try {
        const relativeUrl = path.join(__dirname, './public', url);
        fs.writeFileSync(relativeUrl, content, 'utf-8');
        fn();
      } catch (e) {
        fn(e.stack);
      }
    });
    socket.on('compile', function (url, content, fn) {
      try {
        const relativeUrl = path.join(__dirname, './public', url);
        const writeUrl = path.join(path.dirname(relativeUrl), 'dist', path.basename(relativeUrl));
        const distDirectory = path.join(path.dirname(relativeUrl), 'dist');
        if (!fs.existsSync(distDirectory)) {
          fs.mkdirSync(distDirectory);
        }
        fs.writeFileSync(writeUrl, content, 'utf-8');
        fn();
      } catch (e) {
        fn(e);
      }
    });
    socket.on('loadDistPlugin', function (fn) {
      const pathToModules = path.join(__dirname, './public/plugins/modules');
      let modules = [];
      if (fs.existsSync(pathToModules)) {
        const dir = fs.readdirSync(pathToModules);
        modules = dir.map(item => {
          const name = item.split('.');
          name.pop();
          return {
            name: item,
            module: name.join('.'),
            url: 'plugins/modules/' + item
          };
        });
      }
      const pathToComponent = path.join(__dirname, './public/plugins/components');
      let components = [];
      if (fs.existsSync(pathToComponent)) {
        const dir = fs.readdirSync(pathToComponent);
        components = dir.map(item => {
          const name = item.split('.');
          name.pop();
          return {
            name: item,
            module: name.join('.'),
            url: 'plugins/components/' + item
          };
        });
      }
      const tree = dirTree(path.join(__dirname, './public/plugins/dist'), {});
      const plugins = findFileItem(tree);
      fn({ plugins: plugins, modules: modules, components: components });
    });
    socket.on('delete', function (url, fn) {
      try {
        const relativeUrl = path.join(__dirname, './public', url);
        const isDir = fs.statSync(relativeUrl).isDirectory();
        if (!isDir) {
          fs.unlinkSync(relativeUrl);
          fn();
        } else {
          fs.rmdirSync(relativeUrl);
          fn();
        }
      } catch (e) {
        fn(Object.assign({}, e, { message: 'Cannot delete folder with files' }));
      }
    });
    socket.on('rename', function (url, newName, fn) {
      try {
        const oldUrl = path.join(__dirname, './public', url);
        const newUrl = path.join(__dirname, './public', url, '../', `/${newName}`);
        fs.renameSync(oldUrl, newUrl);
        fn();
      } catch (e) {
        fn(e);
      }
    });
    socket.on('addNewFile', function (fileName, fn) {
      try {
        const newUrl = path.join(__dirname, './public', fileName);
        fs.writeFileSync(newUrl, '', 'utf-8');
        fn();
      } catch (e) {
        fn(e);
      }
    });
    socket.on('loadModules', function (fn) {

      const pathToModules = path.join(__dirname, './public/plugins/modules');
      if (!fs.existsSync(pathToModules)) {
        return fn([]);
      }
      const dir = fs.readdirSync(pathToModules);
      const pathToMap = dir.map(item => {
        const name = item.split('.');
        name.pop();
        return {
          name: item,
          module: name.join('.'),
          url: 'plugins/modules/' + item
        };
      });
      fn(pathToMap);
    });
    socket.on('addModules', function (name, fn) {
      axios.get(`https://unpkg.com/${name}`)
           .then(response => {
             const moduleDirectory = path.join(__dirname, './public/plugins', 'modules');
             if (!fs.existsSync(moduleDirectory)) {
               fs.mkdirSync(moduleDirectory);
             }
             fs.writeFileSync(path.join(moduleDirectory, `${name}.js`), response.data, 'utf-8');
             fn();
           })
           .catch(err => {
             fn(err);
           });
    });
    socket.on('loadComponents', function (fn) {
      const pathToComponent = path.join(__dirname, './public/plugins/components');
      if (!fs.existsSync(pathToComponent)) {
        return fn([]);
      }
      const dir = fs.readdirSync(pathToComponent);
      const pathToMap = dir.map(item => {
        const name = item.split('.');
        name.pop();
        return {
          name: item,
          module: name.join('.'),
          url: 'plugins/components/' + item
        };
      });
      fn(pathToMap);
    });
    socket.on('addComponents', function (name, fn) {
      axios.get(`https://unpkg.com/${name}`)
           .then(response => {
             const moduleDirectory = path.join(__dirname, './public/plugins', 'components');
             if (!fs.existsSync(moduleDirectory)) {
               fs.mkdirSync(moduleDirectory);
             }
             fs.writeFileSync(path.join(moduleDirectory, `${name}.js`), response.data, 'utf-8');
             fn();
           })
           .catch(err => {
             fn(err);
           });
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
