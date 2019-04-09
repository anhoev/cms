const fs = require('fs');
const shellExec = require('shell-exec');
const git = require('simple-git/promise');
const gitUtils = {
  async pullRepository(_path, branch = 'master') {
    return await git(_path).pull('origin', branch);
  },
  async createACommit(commit, pluginPath, newBranch) {
    const listFile = await git(pluginPath).diffSummary();
    let hasError = null;
    if(listFile.files.length > 0){
      await git(pluginPath).checkoutLocalBranch(newBranch).catch((e)=>{
        hasError = e;
      });
      if(hasError){
        return hasError.message;
      }
      await git(pluginPath).add('./*');
      await git(pluginPath).commit(commit);
      return await git(pluginPath).push('origin', newBranch);
    }else{
      return 'nothing has changed';
    }
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
  async getCurrentBranch(pluginPath) {
    return await git(pluginPath).branchLocal();
  },
  async checkOutBranch(pluginPath, branch='master') {
    return await git(pluginPath).checkout(branch);
  }
};
module.exports = gitUtils;