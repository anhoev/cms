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
  createCommit(commit = 'client A', arrFile) {
    if (!arrFile) {
      git().add('./*');
    } else {
      git().add(arrFile);
    }
    this.pullRepository();
    git().commit(commit);
    this.pushCommit();
  },
  pushCommit() {
    git().push(['-u', 'origin', 'master'], () => console.log('done'));
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
  }
};
//gitUtils.pullRepository('core-plugin');
gitUtils.getListPluginInConfig();
//module.exports = gitUtils;