const git = require('simple-git');
const path = require('path');
let localPath = path.join(__dirname, 'plugins');
const fs = require("fs");
const shell = require('child_process');
const gitUtils = {
  pullRepository(repoUrl) {
    this.configGit(repoUrl);
    return new Promise((resolve, reject) => {
      git().pull('origin', repo, (err, update) => {
          if (err) {
            reject(err);
          } else {
            resolve(update);
          }
        }
      );
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
  getConfig() {
    fs.readFile(path.join(__dirname,'configs/other/remote-config.json'), 'utf8', (err, data) => {
      if (data) {
        this.getListPlugins(JSON.parse(data).plugins);
      }
    });
  },
  getListPlugins(list){
    list.forEach(item=>{
      let path = `${localPath}/${item.name}`;
      let strComman = 'rm -rf ' + path;
      shell.exec(strComman);
      this.cloneRepository(item.url, path).then(()=>{

      }).catch(()=>{

      });
    })
  },
  cloneRepository(url, path) {
    return new Promise((resolve, reject) => {
      this.configGit(url);
      git().clone(url, path, (err, data) => {
        if(err){
          reject(err);
        }else{
          resolve(data);
        }
      });
    });
  },
  configGit(repoUrl) {
    git()
      .addConfig('user.name', 'giangbv')
      .addConfig('user.email', 'to25251325@gmail.com')
      .listRemote([repoUrl], (err, data) => {
        if (!err) {
          console.log('Remote url for repository at ' + __dirname + ':');
          console.log(data);
        }
      });
  }
};
gitUtils.getConfig();
//module.exports = gitUtils;