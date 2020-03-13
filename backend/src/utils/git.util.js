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
      await Promise.all(pluginsClone.map(async pluginClone => {
        const pluginPath = `${basePathStore}/${pluginClone.name}`
        console.log('Clone plugin', pluginClone.url, 'to', pluginPath)
        await git().clone(pluginClone.url, pluginPath);
        try {
          console.log('Checkout', pluginPath, 'to branch', pluginClone.branch)
          await git(pluginPath).checkout(pluginClone.branch);
        } catch (e) {
          console.log('Checkout exception', e, 'Please verify your plugin configuration.')
          throw e
        }
      }));

      await Promise.all(pluginsClone
      .map(plugin => {
        if (fs.existsSync(`${basePathStore}/${plugin.name}/package.json`)) {
          return shellExec(`cd ${basePathStore}/${plugin.name} && npm install`);
        }
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
