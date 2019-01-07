const dirTree = require('directory-tree');
const path = require('path');
const fs = require('fs');

function findFileItem(directoryTree) {
  return directoryTree.children.map(item => {
    return {
      name: item.name.replace(item.extension, ''),
      content: fs.readFileSync(item.path, 'utf-8')
    };
  });
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
      const tree = dirTree(path.join(__dirname, './public/plugins/dist'), {});
      const array = findFileItem(tree);
      fn(array);
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
  });
};
