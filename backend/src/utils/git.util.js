const fs = require('fs');
const path = require('path');
const shellExec = require('shell-exec');
const git = require('simple-git/promise');

let currentBranch = '';
const gitUtils = {
  async pullRepository(_path, branch = 'master') {
    return await git(_path).pull('origin', branch);
  },
  async gitDiff() {
    return await git().diff();
  },
  createACommit(commit, listFiles, branchName) {
    this.createNewBranch(branchName).then(() => {
      if (!listFiles) {
        git().add('./*');
      } else {
        git().add(arrFile);
      }
      git().commit(commit, this.pushCommit(branchName));
    }).catch((e) => {
    });
  },
  pushCommit(branch = 'master') {
    git().push(['-u', 'origin', branch], () => console.log('done'));
  },
  getListPluginInConfig() {
    let configPath = path.join(__dirname, '../..', 'mobile/configs/other/remote-config.json');
    const listConfig = fs.readFileSync(configPath, 'utf8');
    this.cloneListPlugins(JSON.parse(listConfig).plugins, {});
  },
  /**
   * @method getListPluginInConfig
   * @param {object} plugins
   * @param {string} basePathStore
   * @param {string} plugins[].name
   * @param {string} plugins[].url
   * @param {string} plugins[].branch
   * @param {string} plugins[].package
   */
  async cloneListPlugins(plugins, basePathStore) {
    const pluginsClone = plugins.filter(plugin => {
      return !fs.existsSync(`${basePathStore}/${plugin.name}`)
    });
    await Promise.all(pluginsClone.map(pluginClone => {
      return git().clone(pluginClone.url, `${basePathStore}/${pluginClone.name}`);
    }));
    await Promise.all(pluginsClone
      .filter(plugin => plugin.package)
      .map(plugin => {
        return shellExec(`cd ${basePathStore}/${plugin.name}&& yarn install`);
      })
    );
  },
  createNewBranch(branchName) {
    return new Promise((resolve, reject) => {
      git().checkoutLocalBranch(branchName, (err, result) => {
        if (err) {
          reject(err);
        } else {
          resolve(result);
        }
      });
    });
  },
  getCurrentBranch() {
    return new Promise((resolve, reject) => {
      git().branchLocal((err, list) => {
        if (!err) {
          resolve(list.current);
        } else {
          reject(err);
        }
      });
    })
  },
  checkOutBranch(branch) {
    git().checkoutBranch(branch);
  }
};
//gitUtils.createACommit('test-branch', null,'push-plugin');

module.exports = gitUtils;