const git = require('simple-git/promise');
const path = require('path');
let localPath = path.join(__dirname, '../..', 'mobile/plugins');
const fs = require('fs');
const gitUtils = {
  pullRepository(branch = 'master') {
    git().pull('origin', branch)
      .then((update) => {
        console.log(update);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  async gitDiff(fn){
    await git().diff()
      .then((res) => {
        fn(null, res);
      }).catch((e) => {
        fn(e);
      });
  },
  createACommit(commit, listFiles, branchName) {
    this.createNewBranch(branchName).then(() => {
      if (!listFiles) {
        git().add('./*');
      } else {
        git().add(arrFile);
      }
      this.pushCommit(branchName);
    }).catch((e) => {
    });
  },
  pushCommit(branch='master') {
    git().push(['-u', 'origin', branch], () => console.log('done'));
  },
  getListPluginInConfig() {
    let configPath = path.join(__dirname, '../..', 'mobile/configs/other/remote-config.json');
    const listConfig = fs.readFileSync(configPath, 'utf8');
    this.cloneListPlugins(JSON.parse(listConfig).plugins);
  },
  cloneListPlugins(list) {
    list.forEach(item => {
      let pluginPath = `${localPath}/${item.name}`;
      if (!fs.existsSync(pluginPath)) {
        git().clone(item.url, pluginPath)
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });
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
  }
};
//gitUtils.createACommit('test-branch', null,'push-plugin');

module.exports = gitUtils;