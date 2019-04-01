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
  async createCommit(commit, listFiles) {
    await git().diff().then((res) => {
      if (res) {
        //if there is a change in local then create a new commit
        if (!listFiles) {
          git().add('./*');
        } else {
          git().add(arrFile);
        }
        this.pullRepository();
        git().commit(commit);
        this.pushCommit();
      }
    }).catch((err) => {
      console.log(err);
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
  }
};
//gitUtils.getListPluginInConfig();
module.exports = gitUtils;