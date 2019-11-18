const fs = require('fs');
const path = require('path');
const fsExtra = require('fs-extra');

const FileHelper = {
  copyFile(currentPath, destPath, options = {type: 'copy'}) {
    const relative = path.relative('', destPath);
    if (!!relative && !relative.startsWith('..') && !path.isAbsolute(relative)) {
      // Check if destPath is in plugins folder or not
      if (options.type === 'move') {
        return fsExtra.moveSync(currentPath, destPath);
      }
      return fsExtra.copySync(currentPath, destPath);
    }
    // Not in plugin folder
    throw {message: 'Cannot copy file here'};
  },

  addNew(destPath, content, options = {type: 'file'}) {
    if (options.type === 'file') {
      if (fs.existsSync(destPath)) {
        if (fs.readFileSync(destPath, 'utf-8') === content) return false;
      }
      fsExtra.outputFileSync(destPath, content, 'utf-8');
      return true;
    }
    fsExtra.mkdirsSync(destPath);
    return true;
  },

  readDir(readPath) {
    return fs.readdirSync(readPath);
  },

  readFile(readPath, options) {
    return fs.readFileSync(readPath, options);
  },

  delete(deletePath) {
    return fsExtra.removeSync(deletePath);
  },

  rename(filePath, newName) {
    const newUrl = path.join(path.dirname(filePath), `${newName}`);
    return fs.renameSync(filePath, newUrl);
  },

  existsSync(_path) {
    return fs.existsSync(_path);
  }
};

module.exports = FileHelper;
