const { spawnSync } = require('child_process');
const gitUtils = require('../../src/utils/git.util');
const path = require('path');
const fs = require('fs');
const request = (require('request'));
const axios = require('axios').default;

const repoName = 'gigasource/giga-pkg-assets';

function updateSubmodule() {
  const result = spawnSync('git', ['submodule', 'update', '--init', '--recursive'], {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit',
    encoding: 'utf-8',
    silient: true
  });
  return result.stdout;
}

module.exports.initGit = function (path) {
  const result = spawnSync('git', ['init'], {
    cwd: path,
    env: process.env,
    stdio: 'inherit',
    encoding: 'utf-8',
    silient: true
  })
};

module.exports.addSubmodule = function (url) {
  const result = spawnSync('git', ['submodule', 'add', url], {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'inherit',
    encoding: 'utf-8',
    silient: true
  });
  if (result.status === 1) {
    return updateSubmodule();
  }
  return result.stdout;
};

module.exports.checkoutBranch = function (path, branchName) {
  const result = spawnSync('git', ['checkout', branchName], {
    cwd: path,
    env: process.env,
    stdio: 'inherit',
    encoding: 'utf-8',
    silient: true
  });
  return result.stdout;
};

module.exports.clonePlugins = async function(plugins) {
  await gitUtils.cloneListPlugins(plugins, path.resolve(__dirname, '../../../../plugins'));
};

module.exports.downloadFile = async function(file) {
  const dirname = path.dirname(path.resolve(process.cwd(), file));
  if (!fs.existsSync(dirname)) {
    fs.mkdirSync(dirname, { recursive: true });
  }
  return new Promise((resolve, reject) => {
    const headers = { Accept: 'application/octet-stream'};
    const ws = fs.createWriteStream(path.resolve(process.cwd(), file));
    let result;
    request(`https://raw.githubusercontent.com/${repoName}/master/${file}`).pipe(ws);
    ws.on('close', () => {
      console.log(`Finish downloading ${file}`);
      resolve(result);
    }).on('error', (err) => {
      reject(err.message);
    })
  })
};

module.exports.getAssetsList = async function() {
  try {
    return await axios.get(`https://raw.githubusercontent.com/${repoName}/master/assets.json`);
  } catch (err) {
    console.error(err.message)
  }
};
