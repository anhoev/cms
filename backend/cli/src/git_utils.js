const { spawnSync } = require('child_process');

module.exports.addSubmodule = function (url) {
  const result = spawnSync('git', ['submodule', 'add', url], {
    cwd: process.cwd(),
    env: process.env,
    stdio: 'pipe',
    encoding: 'utf-8',
    silient: true
  });
  return result.stdout;
};

module.exports.checkoutBranch = function (path, branchName) {
  const result = spawnSync('git', ['checkout', branchName], {
    cwd: path,
    env: process.env,
    stdio: 'pipe',
    encoding: 'utf-8',
    silient: true
  });
  return result.stdout;
};
