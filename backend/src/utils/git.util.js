const fs = require('fs');
const shellExec = require('shell-exec');
const git = require('simple-git/promise');
const gitUtils = {
  async pullRepository(_path, branch = 'master') {
    return await git(_path).pull('origin', branch);
  },
  async createACommit(commit, pluginPath, newBranch) {
    await git(pluginPath).checkoutLocalBranch(newBranch);
    await git(pluginPath).add('./*');
    await git(pluginPath).commit(commit);
    return await git(pluginPath).push('origin', newBranch);
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
      return !fs.existsSync(`${basePathStore}/${plugin.name}`) && plugin.url;
    });
    try {
      await Promise.all(pluginsClone.map(pluginClone => {
        return git().clone(pluginClone.url, `${basePathStore}/${pluginClone.name}`);
      }));

      await Promise.all(pluginsClone
      .filter(plugin => plugin.package)
      .map(plugin => {
        return shellExec(`cd ${basePathStore}/${plugin.name}&& npm install`);
      }));
    } catch (e) {
      console.error(e);
    }
  },
  async checkOutBranch(pluginPath, branch = 'master') {
    return await git(pluginPath).checkout(branch);
  },
  async gitStatus(pluginPath) {
    return await git(pluginPath).status();
  },
  async gitResetHard(pluginPath) {
    return await git(pluginPath).reset('hard');
  }
};
module.exports = gitUtils;
