const git = require('simple-git');
const path = require('path');
let localPath = path.join(__dirname, '../..', 'mobile/plugins');
const fs = require('fs');
const shell = require('child_process');
const linkGitHub = "https://github.com/anhoev/";
const gitUtils = {
  pullRepository(branch = 'master') {
    git().pull('origin', branch, (err)=>{
      if(err){
        return err;
      }
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
      if(!fs.existsSync(pluginPath)){
        this.cloneRepository(item.url, pluginPath);
      }
    });
  },
  cloneRepository(url, path) {
    return new Promise((resolve, reject) => {
      git().clone(url, path, (err, data) => {
        if (err) {
          reject(err);
        } else {
          resolve(data);
        }
      });
    });
  }
};
//gitUtils.pullRepository('core-plugin');
gitUtils.getListPluginInConfig();
//module.exports = gitUtils;